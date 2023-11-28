export default function myPlugin(script, view) {
  const { slide, config } = script;
  const { iframe, inputName, pokemonImage, searchButton } = config;

  let pokemonName = "";
  const loadingImage =
    "https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=a267dfa3n0bhl84btmkpsygikwgnr8owxn4m4lwdr21ezzbe&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  function printImage(data) {
    const image =
      data.sprites.other?.dream_world?.front_default ||
      data.sprites.front_default;

    pokemonImage.source = image;
  }

  script.slide.on("entering", () => {
    pokemonImage.shown = false;

    inputName.on("change", (value) => {
      pokemonName = value ?? "";
    });

    searchButton.on("click", () => {
      pokemonImage.shown = true;
      pokemonImage.source = loadingImage;
      iframe.postMessage({
        type: "pokemon",
        data: { name: pokemonName.toLocaleLowerCase() },
      });
    });

    iframe.on("message", (event) => {
      const { type, data } = event;

      switch (type) {
        case "pokemonResult": {
          printImage(data);
          break;
        }
        case "notFound": {
          pokemonImage.source =
            "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg";
          break;
        }
        default: {
          console.error(`Invalid message type: ${type}`);
        }
      }
    });
  });
}
