export default class MyPlugin {
  constructor(script, engine) {
    this.script = script;
    this.geniallyEngine = engine;
  }

  showImage(imageItem) {
    const { timeoutImageMessage } = this.script.config;

    imageItem.opacity = "1";

    this.geniallyEngine.setTimeout(() => {
      imageItem.opacity = "0";
    }, timeoutImageMessage.milliseconds);
  }

  onEnteringSlide() {
    const {
      dropZones: dropsZoneConfig,
      okImage,
      koImage,
      allIsOk,
    } = this.script.config;

    const okImageItem = this.geniallyEngine.resolveItemRef(okImage);
    const koImageItem = this.geniallyEngine.resolveItemRef(koImage);

    okImageItem.opacity = "0";
    koImageItem.opacity = "0";

    dropsZoneConfig.forEach(({ dropZone, dragItems }) => {
      if (!dropZone.itemId) {
        return;
      }
      this.geniallyEngine.addEventListener(
        dropZone.itemId,
        "onDrop",
        (target) => {
          let imageToShow = koImageItem;
          if (
            target &&
            dragItems
              .map((item) => item.dragItem.itemId)
              .includes(target.relatedTargetId)
          ) {
            imageToShow = okImageItem;
            if (allIsOk.action) {
              this.geniallyEngine.addInteractivity(allIsOk.action);
            }
          }

          this.showImage(imageToShow);
        }
      );
    });
  }
}
