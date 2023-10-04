export default function myPlugin(script, view) {
  const {
    dropZones: dropsZoneConfig,
    okImage,
    koImage,
    allIsOk,
  } = script.config;

  function showImage(imageItem) {
    const { timeoutImageMessage } = script.config;

    imageItem.opacity = 1;

    view.setTimeout(() => {
      imageItem.opacity = 0;
    }, timeoutImageMessage.milliseconds);
  }

  script.slide?.on("entering", () => {
    okImage.opacity = 0;
    koImage.opacity = 0;

    dropsZoneConfig.forEach(({ dropZone, dragItems }) => {
      dropZone.on("drop", ({ relatedTarget }) => {
        let imageToShow = koImage;

        console.log({ relatedTarget: relatedTarget.elementId, dragItems });
        if (
          relatedTarget &&
          relatedTarget.elementId &&
          dragItems
            .map((item) => item.dragItem.elementId)
            .includes(relatedTarget.elementId)
        ) {
          imageToShow = okImage;
          if (allIsOk.action) {
            view.runAction(allIsOk.action);
          }
        }

        showImage(imageToShow);
      });
    });
  });
}
