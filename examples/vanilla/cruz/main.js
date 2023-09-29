export default function myPlugin(script, geniallyEngine) {
  const {
    clickItems,
    allIsOk
  } = script.config;

  // This should not work under "non-sandboxed" scripts
  try {
    document.body.style.backgroundColor = '#fabada';
  } catch {
    console.error('Cannot access document');
  }

  script.slide?.on("entering", () => {
    const initialOpacity = {};

    clickItems.forEach((item) => {
      const { clickItem } = item;

      if (clickItem === null || clickItem === undefined) {
        return;
      }

      initialOpacity[clickItem.id] = clickItem.opacity;
      clickItem.opacity = initialOpacity[clickItem.id] * 0.1;

      clickItem?.on('click', () => {
        const opacity = clickItem.opacity;

        if (opacity === initialOpacity[clickItem.id] * 0.1) {
          console.log(initialOpacity[clickItem.id]);
          clickItem.opacity = initialOpacity[clickItem.id] || 1;
        } else {
          clickItem.opacity = initialOpacity[clickItem.id] * 0.1;
        }

        const success = clickItems.every(({ clickItem, shouldBeChecked }) => {
          if (clickItem === null) {
            return true;
          }

          const opacity = clickItem.opacity;
          const offOpacity = initialOpacity[clickItem.id] * 0.1;

          if (!shouldBeChecked && opacity === offOpacity) {
            return true;
          }

          if (shouldBeChecked && opacity !== offOpacity) {
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
