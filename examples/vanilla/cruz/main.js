const TRANSPARENT = 'rgba(0, 0, 0, 0)';

export default function myPlugin(script, geniallyEngine) {
  const {
    clickItems,
    allIsOk
  } = script.config;

  script.slide?.on("entering", () => {
    const colors = {};

    clickItems.forEach((item) => {
      const { clickItem } = item;

      if (clickItem === null) {
        return;
      }

      colors[clickItem.id] = clickItem.colors;
      clickItem.colors = [TRANSPARENT];

      clickItem?.on('click', () => {
        const [color] = clickItem.colors;

        if (color === TRANSPARENT) {
          clickItem.colors = [colors[clickItem.id]];
        } else {
          clickItem.colors = [TRANSPARENT];
        }

        const success = clickItems.every(({ clickItem, shouldBeChecked }) => {
          if (clickItem === null) {
            return true;
          }

          const color = clickItem.colors[0];

          if (!shouldBeChecked && color === TRANSPARENT) {
            return true;
          }

          if (shouldBeChecked && color !== TRANSPARENT) {
            return true;
          }

          return false;
        });

        if (success && allIsOk.action) {
          geniallyEngine.runAction(allIsOk.action);
        }
      })
    })
  })
}
