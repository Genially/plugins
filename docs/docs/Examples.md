---
layout: default
title: Examples
nav_order: 3
---

# Example of projects

- [Input element example](https://github.com/Genially/plugins/tree/main/examples/vanilla/code){:target="\_blank"}
- [Iframe element example](https://github.com/Genially/plugins/tree/main/examples/vanilla/roulette){:target="\_blank"}
- [Drag&Drop example](https://github.com/Genially/plugins/tree/main/examples/vanilla/drag-drop){:target="\_blank"}
- [Cruz extension](https://github.com/Genially/plugins/tree/main/examples/vanilla/cruz){:target="\_blank"}
- [Pokemon Api](https://github.com/Genially/plugins/tree/main/examples/vanilla/pokemon-api){:target="\_blank"}

# Lifecycle methods

## main.js

```javascript
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
```

# Changing the opacity from an item

## configSchema

```json
{
  "configSchema": {
    "fields": [
      {
        "type": "itemRef",
        "name": "opacityItem",
        "label": {
          "en": "Item to reduce opacity"
        },
        "accept": ["image"],
        "canBeNull": true
      }
    ]
  }
}
```

## main.js

```javascript

script.slide.on("entering", () => {
  const { opacityItem } = script.config;
  element.opacity = 0.1;
}
```

# Changing a item property on click

## configSchema

```json
{
  "configSchema": {
    "fields": [
      {
        "type": "itemRef",
        "name": "opacityItem",
        "label": {
          "en": "Item to reduce opacity"
        },
        "accept": ["image"],
        "canBeNull": true
      }
    ]
  }
}
```

## main.js

```javascript

script.slide.on("entering", () => {
  const { opacityItem } = script.config;

  opacityItem.on('click', () => {
    element.opacity = 0.5;
  });
}
```
