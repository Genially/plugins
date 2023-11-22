---
title: Manifest
layout: default
---

The manifest file (`manifest.json`) must be included on every plugin, and includes both metadata and the configuration you can present to the user.

## Metadata Fields

- `scriptId`: this field should be a combination of your developer id and the name of the plugin. For example, a drag and drop extension might be called: `@scape/dnd`.

- `main`: this should point at the main file of your extension. If you are using the starter plugin, you can leave it as it is.

- `version`: a version identifying the current version of the plugin. Currently, there is no real use of this, but it is required by the Plugin infrastructure.

> If you are an advanced user, you might find this useful in case you are using some extra tooling (like webpack or rollup) to bundle dependencies

## configSchema

In this field you can declare the configuration fields your plugin needs, they all go inside a `fields` array.

Every element is a JSON object, with a:

- `name (string)`: which you will use in your code to locate the configured value.

- `label (object)`: this is the text label that will be presented to the user. It must be an object with an entry on every language you want to support. Supported languages are: (`en | es | fr | de | it | pt-br`).

TODO: show only supported values

- `type ('action' | 'dropdown' | 'itemRef' | 'list' | 'numberInput' | 'switch' | 'textInput' | 'timeInput')`: indicates the type of field this is. See below for an explanation of each.

- `canBeNull (boolean)`: whether the field is mandatory or not.

- `defaultValue (object)`: the default value of the field. The allowed value depends on `type`

### `itemRef`

This will let the user select an item to be used in the plugin. It has an extra field `accept`

- `accept (ItemType[])`: This lets you limit the types of items the user will be able to select. Item types are: `"rich-content" | "widget-video" | "widget-audio" | "chart" | "area" | "group" | "image" | "pin" | "svg" | "text" | "activity"`

### `list`

This lets you create lists of fields, including other lists. It has some extra fields:

- `minItems (number)`
- `maxItems (number)`
- `itemFields (a list of items)`: this is a recursive type, you can put a list just like in the root `fields` array.
