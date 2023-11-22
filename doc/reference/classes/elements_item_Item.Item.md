[@genially/plugin-api-view](../README.md) / [Modules](../modules.md) / [elements/item/Item](../modules/elements_item_Item.md) / Item

# Class: Item\<IT, EP\>

[elements/item/Item](../modules/elements_item_Item.md).Item

This is the base item, if no custom class exists for the item this is returned
All other elements inherit from it.

## Type parameters

| Name | Type |
| :------ | :------ |
| `IT` | extends `ItemType` = `ItemType` |
| `EP` | extends `EventParams` = `ItemEventParams` |

## Hierarchy

- `EventHandler`\<`EP`\>

  ↳ **`Item`**

  ↳↳ [`ChartTableItem`](elements_item_ChartTableItem.ChartTableItem.md)

  ↳↳ [`GroupItem`](elements_item_GroupItem.GroupItem.md)

  ↳↳ [`Iframe`](elements_item_IframeItem.Iframe.md)

  ↳↳ [`ImageItem`](elements_item_ImageItem.ImageItem.md)

  ↳↳ [`InputItem`](elements_item_InputItem.InputItem.md)

  ↳↳ [`SvgItem`](elements_item_SvgItem.SvgItem.md)

  ↳↳ [`TextItem`](elements_item_TextItem.TextItem.md)

## Table of contents

### Constructors

- [constructor](elements_item_Item.Item.md#constructor)

### Properties

- [id](elements_item_Item.Item.md#id)

### Accessors

- [height](elements_item_Item.Item.md#height)
- [opacity](elements_item_Item.Item.md#opacity)
- [parentItem](elements_item_Item.Item.md#parentitem)
- [parentSlide](elements_item_Item.Item.md#parentslide)
- [rotation](elements_item_Item.Item.md#rotation)
- [shown](elements_item_Item.Item.md#shown)
- [visible](elements_item_Item.Item.md#visible)
- [width](elements_item_Item.Item.md#width)
- [x](elements_item_Item.Item.md#x)
- [y](elements_item_Item.Item.md#y)

### Methods

- [move](elements_item_Item.Item.md#move)
- [on](elements_item_Item.Item.md#on)
- [once](elements_item_Item.Item.md#once)
- [playAnimation](elements_item_Item.Item.md#playanimation)
- [rotate](elements_item_Item.Item.md#rotate)
- [setPosition](elements_item_Item.Item.md#setposition)
- [setSize](elements_item_Item.Item.md#setsize)

## Constructors

### constructor

• **new Item**\<`IT`, `EP`\>(`id`, `geniallyEngine`): [`Item`](elements_item_Item.Item.md)\<`IT`, `EP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `IT` | extends `ItemType` = `ItemType` |
| `EP` | extends `EventParams` = `ItemEventParams` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `geniallyEngine` | [`GeniallyEngine`](GeniallyEngine.GeniallyEngine.md) |

#### Returns

[`Item`](elements_item_Item.Item.md)\<`IT`, `EP`\>

New reference for the item

#### Overrides

EventHandler\&lt;EP\&gt;.constructor

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:49](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L49)

## Properties

### id

• **id**: `string`

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:49](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L49)

## Accessors

### height

• `get` **height**(): `number`

Get the height of item

#### Returns

`number`

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:210](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L210)

___

### opacity

• `get` **opacity**(): `number`

#### Returns

`number`

opacity of item

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:76](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L76)

___

### parentItem

• `get` **parentItem**(): `undefined` \| [`Item`](elements_item_Item.Item.md)\<`ItemType`, `ItemEventParams`\>

Returns the group where the item is included or undefined if it is not in a group

#### Returns

`undefined` \| [`Item`](elements_item_Item.Item.md)\<`ItemType`, `ItemEventParams`\>

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:281](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L281)

___

### parentSlide

• `get` **parentSlide**(): `Slide`

The parent slide of item

#### Returns

`Slide`

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:269](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L269)

___

### rotation

• `get` **rotation**(): `number`

Get rotation of element

#### Returns

`number`

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:119](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L119)

___

### shown

• `get` **shown**(): `boolean`

Return if the item has shown

#### Returns

`boolean`

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:93](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L93)

___

### visible

• `get` **visible**(): `boolean`

Get the visible property of the item, this is setted only in the design mode of the genially

#### Returns

`boolean`

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:100](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L100)

___

### width

• `get` **width**(): `number`

Return the width of item

#### Returns

`number`

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:196](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L196)

___

### x

• `get` **x**(): `number`

Get the x position of item

#### Returns

`number`

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:143](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L143)

___

### y

• `get` **y**(): `number`

Get y position of item

#### Returns

`number`

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:182](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L182)

___

### on

▸ **on**\<`EN`\>(`eventName`, `callback`): () => `void`

Add an event listener to the item

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EN` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EN` | Name of event |
| `callback` | `EventCallback`\<`EP`, `EN`\> | Function that will be called when the event is fired |

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

EventHandler.on

#### Defined in

[plugin-api-view/src/EventHandler.ts:51](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/EventHandler.ts#L51)

___

### once

▸ **once**\<`EN`\>(`eventName`, `callback`): `void`

Add an event, but it will only be called once and the event will be removed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EN` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EN` | Name of event |
| `callback` | `EventCallback`\<`EP`, `EN`\> | Function that will be called when the event is fired |

#### Returns

`void`

#### Inherited from

EventHandler.once

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:127](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L127)

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

#### Defined in

[plugin-api-view/src/elements/item/Item.ts:219](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/elements/item/Item.ts#L219)
