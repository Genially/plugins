const OpacityFactor = 0.1;

export default function myPlugin(script, view) {
  const {
    clickItems,
    allIsOk,
    enableClickSounds
  } = script.config;

  script.slide?.on("entering", () => {
    const initialOpacity = {};
    // By initializing this here, we support "resetting" the game each time the user
    // enters a slide.
    let succeeded = false;

    clickItems.forEach((item) => {
      const { clickItem } = item;

      // Users might have left this blank, always good to check.
      if (clickItem === null || clickItem === undefined) {
        return;
      }

      // By storing the initial opacity we can support an item that had 50% opacity at the
      // moment the script loaded. Otherwise, it would go from OpacityFactor (0.1) to 1.
      initialOpacity[clickItem.id] = clickItem.opacity;
      clickItem.opacity = initialOpacity[clickItem.id] * OpacityFactor;

      clickItem?.on('click', () => {
        if (succeeded) {
          return;
        }

        if (enableClickSounds === true) {
          view.playAudio({ source: 'https://audios.genial.ly/5dc04cbb52a6780fada022dc/be4f8c9a-8c65-4787-890c-3bee493469fa.wav' });
        }

        const opacity = clickItem.opacity;

        if (opacity === initialOpacity[clickItem.id] * OpacityFactor) {
          clickItem.opacity = initialOpacity[clickItem.id] || 1;
        } else {
          clickItem.opacity = initialOpacity[clickItem.id] * OpacityFactor;
        }

        const success = clickItems.every(({ clickItem, shouldBeChecked }) => {
          if (clickItem === null) {
            return true;
          }

          const opacity = clickItem.opacity;
          const offOpacity = initialOpacity[clickItem.id] * OpacityFactor;

          if (!shouldBeChecked && opacity === offOpacity) {
            return true;
          }

          if (shouldBeChecked && opacity !== offOpacity) {
            return true;
          }

          return false;
        });

        if (success && allIsOk) {
          allIsOk.run();
          succeeded = true;
        }
      })
    })
  })
}
