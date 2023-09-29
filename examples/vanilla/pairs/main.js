const animationDuration = 1000;

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

export default function myPlugin(script, geniallyEngine) {
  const { pairs, overlay, randomize, allIsOk } = script.config;

  let lastIdClicked = undefined;
  const successPairs = [];
  const pairsRelations = new Map();
  const allItems = pairs.flatMap(({ item1Pair, item2Pair }) => [
    item1Pair,
    item2Pair,
  ]);
  const randomizedPairs = getRandomizedPairs(
    allItems.map((v) => ({
      ...v,
      source: v.source,
    }))
  );

  const wrongAnimation = (item) => {
    const animation = item.playAnimation({
      type: "continuous_heartbeat",
      parameters: { delayMs: 0, durationMs: animationDuration },
    });

    geniallyEngine.setTimeout(() => {
      animation.stop();
    }, animationDuration);
  };

  const successAnimation = (item) => {
    const animation = item.playAnimation({
      type: "exit_freeze_zoomOut",
      parameters: { delayMs: 0, durationMs: animationDuration },
    });

    geniallyEngine.setTimeout(() => {
      animation.stop();
    }, animationDuration);
  };

  const resetItem = (item) => {
    lastIdClicked = undefined;
    wrongAnimation(item);

    geniallyEngine.setTimeout(() => {
      item.source = overlay.source;
    }, animationDuration);
  };

  const showItem = (item) => {
    item.source = item.itemSource;
  };

  const selectItem = (item) => {
    showItem(item);
    lastIdClicked = item.refferenceId;
  };

  const failPair = (item) => {
    const lastItemClicked = allItems.find(
      (item) => item.refferenceId === lastIdClicked
    );

    [item, lastItemClicked].forEach((item) => {
      showItem(item);
      resetItem(item);
    });
  };

  const successPair = (item) => {
    const pairItem = allItems.find(
      (i) => i.refferenceId === pairsRelations.get(item.refferenceId)
    );

    const items = [item, pairItem];

    lastIdClicked = undefined;
    successPairs.push(items);

    items.forEach((item) => {
      showItem(item);
    });

    geniallyEngine.setTimeout(() => {
      items.forEach((item) => {
        successAnimation(item);
      });

      geniallyEngine.setTimeout(() => {
        items.forEach((item) => {
          item.shown = false;
        });
      }, animationDuration);
    }, animationDuration);
  };

  const checkPair = (currentItem) => {
    if (!currentItem.shown) {
      return;
    }

    if (!lastIdClicked) {
      selectItem(currentItem);
    } else if (lastIdClicked === currentItem.refferenceId) {
      resetItem(currentItem);
    } else if (lastIdClicked === pairsRelations.get(currentItem.refferenceId)) {
      successPair(currentItem);
    } else {
      failPair(currentItem);
    }

    if (successPairs.length === pairs.length && allIsOk.action) {
      geniallyEngine.setTimeout(() => {
        geniallyEngine.runAction(allIsOk.action);
      }, animationDuration * 2);
    }
  };

  const init = (allItems) => {
    overlay.shown = false;

    allItems.forEach((item) => {
      const randomPair = randomizedPairs.get(item.id);
      item.itemSource = randomize ? randomPair?.source : item.source;
      item.refferenceId = randomize ? randomPair?.id : item.id;
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
