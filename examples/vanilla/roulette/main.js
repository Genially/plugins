export default function myPlugin(script, view) {
  const { finishText, options, iframe, isFinished, spinButton, isStarted } =
    script.config;

  script.slide.on("entered", () => {
    // it's good practice send message when slide has entered
    iframe.postMessage({
      type: "options",
      data: options.map((o) => o.option),
    });

    iframe.postMessage({ type: "draw" });
  });

  spinButton.on("click", () => {
    iframe.postMessage({
      type: "spin",
    });

    if (isStarted) {
      isStarted.run();
    }
  });

  iframe.on("message", (event) => {
    const { type, data } = event;

    switch (type) {
      case "finish": {
        finishText.text = data;
        if (isFinished) {
          isFinished.run();
        }
      }
      default:
        return null;
    }
  });
}
