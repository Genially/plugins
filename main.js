export default class MyPlugin {
  constructor(script, engine) {
    this.script = script;
    this.geniallyEngine = engine;
  }

  onEnteringSlide() {
    console.log('onEnteringSlide');
  }

  onEnteredSlide() {
    console.log('onEnteredSlide');
  }

  onExitingSlide() {
    console.log('onExitingSlide');
  }

  onLoad() {
    console.log('onLoad');
  }
}
