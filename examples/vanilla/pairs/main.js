const showTime = 500;

const getRandomItemFromList = (list) =>
  list[Math.floor(Math.random() * list.length)];

const getRestItems = (items, excludeIds) =>
  items.filter((item) => !excludeIds.includes(item.id));

const getRandomizedPairs = (allItems) => {
  const randomPairs = new Map();
  const excludedIds = [];

  allItems.forEach((item) => {
    const randomItem = getRandomItemFromList(
      getRestItems(allItems, [...excludedIds, item.id])
    );

    if (randomItem) {
      randomPairs.set(item.id, randomItem);
      excludedIds.push(randomItem.id);
    }
  });

  return randomPairs;
};

export default function myPlugin(script, view) {
  const { pairs, overlay, randomize, allIsOk } = script.config;

  let lastIdClicked = undefined;
  let animating = false;
  const successPairs = [];
  const pairsRelations = new Map();
  const allItems = pairs.flatMap(({ item1Pair, item2Pair }) => [
    item1Pair,
    item2Pair,
  ]);
  const randomizedPairs = randomize
    ? getRandomizedPairs(
        allItems.map((v) => ({
          ...v,
          source: v.source,
        }))
      )
    : undefined;

  const resetItem = (item) => {
    lastIdClicked = undefined;

    view.setTimeout(() => {
      item.source = overlay.source;
    }, showTime);
  };

  const showItem = (item) => {
    item.source = item.itemSource;
  };

  const selectItem = (item) => {
    showItem(item);
    lastIdClicked = item.referenceId;
  };

  const failPair = (item) => {
    const lastItemClicked = allItems.find(
      (item) => item.referenceId === lastIdClicked
    );

    [item, lastItemClicked].forEach((item) => {
      showItem(item);
      resetItem(item);
    });
  };

  const successPair = (item) => {
    if (animating) {
      return;
    }

    const pairItem = allItems.find(
      (i) => i.referenceId === pairsRelations.get(item.referenceId)
    );

    const items = [item, pairItem];

    lastIdClicked = undefined;
    successPairs.push(items);

    items.forEach((item) => {
      showItem(item);
    });

    animating = true;

    view.setTimeout(() => {
      items.forEach((item) => {
        item.shown = false;
      });
      animating = false;
    }, showTime);
  };

  const checkPair = (currentItem) => {
    if (!currentItem.shown) {
      return;
    }

    if (!lastIdClicked) {
      selectItem(currentItem);
    } else if (lastIdClicked === currentItem.referenceId) {
      resetItem(currentItem);
    } else if (lastIdClicked === pairsRelations.get(currentItem.referenceId)) {
      successPair(currentItem);
    } else {
      failPair(currentItem);
    }

    if (successPairs.length === pairs.length && allIsOk.action) {
      view.setTimeout(() => {
        allIsOk.run();
      }, showTime);
    }
  };

  const init = (allItems) => {
    overlay.shown = false;

    allItems.forEach((item) => {
      item.itemSource = randomize
        ? randomizedPairs?.get(item.id)?.source
        : item.source;
      item.referenceId = randomize
        ? randomizedPairs?.get(item.id)?.id
        : item.id;
      item.source = overlay.source;
    });
  };

  script.slide.on("entered", () => {
    init(allItems);

    pairs.forEach(({ item1Pair, item2Pair }) => {
      pairsRelations.set(item1Pair.id, item2Pair.id);
      pairsRelations.set(item2Pair.id, item1Pair.id);

      item1Pair.on("click", () => {
        checkPair(item1Pair);
      });

      item2Pair.on("click", () => {
        checkPair(item2Pair);
      });
    });
  });
}
