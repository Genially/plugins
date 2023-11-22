---
layout: default
title: Elements item ChartTableItem.ChartTableItem
parent: Classes
grand_parent: Reference
permalink: docs/reference/classes/elements_item_ChartTableItem.ChartTableItem.html
---

[@genially/plugin-api-view](../README.html) / [Modules](../modules.html) / [elements/item/ChartTableItem](../modules/elements_item_ChartTableItem.html) / ChartTableItem

# Class: ChartTableItem

[elements/item/ChartTableItem](../modules/elements_item_ChartTableItem.html).ChartTableItem

Chart or table item

## Hierarchy

- [`Item`](elements_item_Item.Item.html)\<`ItemType.Chart`\>

  ↳ **`ChartTableItem`**

## Table of contents

### Constructors

- [constructor](elements_item_ChartTableItem.ChartTableItem.html#constructor)

### Properties

- [id](elements_item_ChartTableItem.ChartTableItem.html#id)

### Accessors

- [data](elements_item_ChartTableItem.ChartTableItem.html#data)
- [height](elements_item_ChartTableItem.ChartTableItem.html#height)
- [opacity](elements_item_ChartTableItem.ChartTableItem.html#opacity)
- [parentItem](elements_item_ChartTableItem.ChartTableItem.html#parentitem)
- [parentSlide](elements_item_ChartTableItem.ChartTableItem.html#parentslide)
- [rotation](elements_item_ChartTableItem.ChartTableItem.html#rotation)
- [shown](elements_item_ChartTableItem.ChartTableItem.html#shown)
- [visible](elements_item_ChartTableItem.ChartTableItem.html#visible)
- [width](elements_item_ChartTableItem.ChartTableItem.html#width)
- [x](elements_item_ChartTableItem.ChartTableItem.html#x)
- [y](elements_item_ChartTableItem.ChartTableItem.html#y)

### Methods

- [move](elements_item_ChartTableItem.ChartTableItem.html#move)
- [on](elements_item_ChartTableItem.ChartTableItem.html#on)
- [once](elements_item_ChartTableItem.ChartTableItem.html#once)
- [playAnimation](elements_item_ChartTableItem.ChartTableItem.html#playanimation)
- [rotate](elements_item_ChartTableItem.ChartTableItem.html#rotate)
- [setDataValue](elements_item_ChartTableItem.ChartTableItem.html#setdatavalue)
- [setPosition](elements_item_ChartTableItem.ChartTableItem.html#setposition)
- [setSize](elements_item_ChartTableItem.ChartTableItem.html#setsize)

## Constructors

### constructor

• **new ChartTableItem**(`id`, `geniallyEngine`): [`ChartTableItem`](elements_item_ChartTableItem.ChartTableItem.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `geniallyEngine` | [`GeniallyEngine`](GeniallyEngine.GeniallyEngine.html) |

#### Returns

[`ChartTableItem`](elements_item_ChartTableItem.ChartTableItem.html)

New reference for the item

#### Inherited from

[Item](elements_item_Item.Item.html).[constructor](elements_item_Item.Item.html#constructor)

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:49](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L49)

## Properties

### id

• **id**: `string`

#### Inherited from

[Item](elements_item_Item.Item.html).[id](elements_item_Item.Item.html#id)

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:49](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L49)

## Accessors

### data

• `get` **data**(): `ChartCell`[][]

Get all data of table or chart

#### Returns

`ChartCell`[][]

**`Example`**

```ts
console.table(table.data);
// print the next
// [Array(3), Array(3), Array(3)]
```

#### Defined in

[plugin-api-view/src/elements/item/ChartTableItem.ts:17](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/ChartTableItem.ts#L17)

___

### height

• `get` **height**(): `number`

Get the height of item

#### Returns

`number`

#### Inherited from

Item.height

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:203](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L203)

• `set` **height**(`newValue`): `void`

Set the height of item

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `number` |

#### Returns

`void`

#### Inherited from

Item.height

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:210](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L210)

___

### opacity

• `get` **opacity**(): `number`

#### Returns

`number`

opacity of item

#### Inherited from

Item.opacity

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:67](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L67)

• `set` **opacity**(`newValue`): `void`

Set opacity of item

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `number` |

#### Returns

`void`

#### Inherited from

Item.opacity

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:76](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L76)

___

### parentItem

• `get` **parentItem**(): `undefined` \| [`Item`](elements_item_Item.Item.html)\<`ItemType`, `ItemEventParams`\>

Returns the group where the item is included or undefined if it is not in a group

#### Returns

`undefined` \| [`Item`](elements_item_Item.Item.html)\<`ItemType`, `ItemEventParams`\>

#### Inherited from

Item.parentItem

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:281](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L281)

___

### parentSlide

• `get` **parentSlide**(): `Slide`

The parent slide of item

#### Returns

`Slide`

#### Inherited from

Item.parentSlide

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:269](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L269)

___

### rotation

• `get` **rotation**(): `number`

Get rotation of element

#### Returns

`number`

#### Inherited from

Item.rotation

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:107](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L107)

• `set` **rotation**(`degrees`): `void`

Set rotation of element

#### Parameters

| Name | Type |
| :------ | :------ |
| `degrees` | `number` |

#### Returns

`void`

#### Inherited from

Item.rotation

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:119](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L119)

___

### shown

• `get` **shown**(): `boolean`

Return if the item has shown

#### Returns

`boolean`

#### Inherited from

Item.shown

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:84](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L84)

• `set` **shown**(`newValue`): `void`

Hide or shown the item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValue` | `boolean` | boolean with new value for hide or shown the item |

#### Returns

`void`

#### Inherited from

Item.shown

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:93](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L93)

___

### visible

• `get` **visible**(): `boolean`

Get the visible property of the item, this is setted only in the design mode of the genially

#### Returns

`boolean`

#### Inherited from

Item.visible

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:100](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L100)

___

### width

• `get` **width**(): `number`

Return the width of item

#### Returns

`number`

#### Inherited from

Item.width

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:189](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L189)

• `set` **width**(`newValue`): `void`

Set the width of item

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `number` |

#### Returns

`void`

#### Inherited from

Item.width

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:196](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L196)

___

### x

• `get` **x**(): `number`

Get the x position of item

#### Returns

`number`

#### Inherited from

Item.x

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:134](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L134)

• `set` **x**(`newValue`): `void`

Set x positon of item

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `number` |

#### Returns

`void`

#### Inherited from

Item.x

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:143](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L143)

___

### y

• `get` **y**(): `number`

Get y position of item

#### Returns

`number`

#### Inherited from

Item.y

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:150](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L150)

• `set` **y**(`newValue`): `void`

Set y position of item

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `number` |

#### Returns

`void`

#### Inherited from

Item.y

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:159](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L159)

## Methods

### move

▸ **move**(`dx`, `dy`): `void`

Move the item over the current position

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[Item](elements_item_Item.Item.html).[move](elements_item_Item.Item.html#move)

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:182](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L182)

___

### on

▸ **on**\<`EN`\>(`eventName`, `callback`): () => `void`

Add an event listener to the item

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EN` | extends keyof `ItemEventParams` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EN` | Name of event |
| `callback` | `EventCallback`\<`ItemEventParams`, `EN`\> | Function that will be called when the event is fired |

#### Returns

`fn`

Function for remove the event

▸ (): `void`

##### Returns

`void`

**`Example`**

```ts
const dispose = item.on('click', () => {
 console.log('I clicked in the item');

});

// We can call to dispose function when we need

dispose(); // this remove the event
```

#### Inherited from

[Item](elements_item_Item.Item.html).[on](elements_item_Item.Item.html#on)

#### Defined in

[plugin-api-view/src/EventHandler.ts:51](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/EventHandler.ts#L51)

___

### once

▸ **once**\<`EN`\>(`eventName`, `callback`): `void`

Add an event, but it will only be called once and the event will be removed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EN` | extends keyof `ItemEventParams` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EN` | Name of event |
| `callback` | `EventCallback`\<`ItemEventParams`, `EN`\> | Function that will be called when the event is fired |

#### Returns

`void`

#### Inherited from

[Item](elements_item_Item.Item.html).[once](elements_item_Item.Item.html#once)

#### Defined in

[plugin-api-view/src/EventHandler.ts:85](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/EventHandler.ts#L85)

___

### playAnimation

▸ **playAnimation**\<`PA`\>(`animationParams`): `AnimationActionInstance`

Play animation animation over the item

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PA` | extends `ClickAnimation` \| `HoverAnimation` \| `EntranceFreezeAnimation` \| `EntranceLeftAnimation` \| `EntranceRightAnimation` \| `EntranceUpAnimation` \| `EntranceDownAnimation` \| `ExitFreezeAnimation` \| `ExitLeftAnimation` \| `ExitRightAnimation` \| `ExitUpAnimation` \| `ExitDownAnimation` \| `ContinuousAnimation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationParams` | `Object` |
| `animationParams.parameters` | `PredefinedAnimationParametersFor`\<`PA`\> |
| `animationParams.type` | `PA` |

#### Returns

`AnimationActionInstance`

An AnimationActionInstance with which you can stop the animation

**`Example`**

```ts
const animationInstance = item.playAnimation({
    type: ClickAnimation.Wobble,
    parameters: {
      delayMs: 0,
      durationMs: animationDuration,
    },
});

// We can stop the animation with the instance
animationInstance.stop();
```

#### Inherited from

[Item](elements_item_Item.Item.html).[playAnimation](elements_item_Item.Item.html#playanimation)

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:251](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L251)

___

### rotate

▸ **rotate**(`degrees`): `void`

Rotate the item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | Number of +- degrees for rotate |

#### Returns

`void`

#### Inherited from

[Item](elements_item_Item.Item.html).[rotate](elements_item_Item.Item.html#rotate)

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:127](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L127)

___

### setDataValue

▸ **setDataValue**(`row`, `col`, `value`): `void`

Set the value of one cell of table

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` |  |
| `col` | `number` |  |
| `value` | `ChartCell` | New value for x and y position |

#### Returns

`void`

**`Throw`**

If the row/col position not exists throw an error

#### Defined in

[plugin-api-view/src/elements/item/ChartTableItem.ts:28](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/ChartTableItem.ts#L28)

___

### setPosition

▸ **setPosition**(`x`, `y`): `void`

Change the position of item inside of slide

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[Item](elements_item_Item.Item.html).[setPosition](elements_item_Item.Item.html#setposition)

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:169](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L169)

___

### setSize

▸ **setSize**(`width`, `height`): `void`

Set size of element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | New width |
| `height` | `number` | New height |

#### Returns

`void`

#### Inherited from

[Item](elements_item_Item.Item.html).[setSize](elements_item_Item.Item.html#setsize)

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:219](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L219)
