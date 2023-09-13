export default function myPlugin(script, geniallyEngine) {
  script.slide.on("entering", () => {
    console.log("entering slide");
  });
  script.slide.on("entered", () => {
    console.log("entering slide");
  });
  script.slide.on("exiting", () => {
    console.log("exiting slide");
  });
  script.slide.on("exited", () => {
    console.log("exited slide");
  });
}
