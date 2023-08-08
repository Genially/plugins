export default class MyPlugin {
  constructor(script, engine) {
    this.script = script;
    this.geniallyEngine = engine;

    this.events = {
      onLoad: this.onLoad.bind(this),
      onEnteringSlide: this.onEnteringSlide.bind(this),
      onEnteredSlide: this.onEnteredSlide.bind(this),
      onExitingSlide: this.onExitingSlide.bind(this),
    };
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
    
  }
}
