export default function myPlugin(script, view) {
  const { inputCode, code, validateButton, isKO, isOK } = script.config;

  let actualInputCode = "";

  const initialStyles = inputCode.styles;

  inputCode.on("change", (e) => (actualInputCode = e));

  inputCode.on("focus", () => {
    inputCode.setStyles({
      borderColor: "blue",
    });
  });

  inputCode.on("blur", () => {
    inputCode.setStyles(initialStyles);
    validate();
  });

  isOK.shown = false;
  isKO.shown = false;

  const validate = () => {
    let itemToShow;
    let itemToHide;
    if (actualInputCode === "") {
      return;
    }

    if (actualInputCode === code) {
      itemToShow = isOK;
      itemToHide = isKO;
      inputCode.setStyles({
        borderColor: "green",
      });
    } else {
      itemToShow = isKO;
      itemToHide = isOK;
      inputCode.setStyles({
        borderColor: "red",
      });
    }

    if (itemToShow) {
      itemToShow.shown = true;
    }

    if (itemToHide) {
      itemToHide.shown = false;
    }
  };

  validateButton.on("click", () => {
    validate();
  });
}
