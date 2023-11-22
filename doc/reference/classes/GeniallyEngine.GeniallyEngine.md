[@genially/plugin-api-view](../README.md) / [Modules](../modules.md) / [GeniallyEngine](../modules/GeniallyEngine.md) / GeniallyEngine

# Class: GeniallyEngine

[GeniallyEngine](../modules/GeniallyEngine.md).GeniallyEngine

This class is in charge of communicating with Genially.

## Table of contents

### Properties

- [storage](GeniallyEngine.GeniallyEngine.md#storage)

### Accessors

- [currentPopupSlides](GeniallyEngine.GeniallyEngine.md#currentpopupslides)
- [currentSlide](GeniallyEngine.GeniallyEngine.md#currentslide)

### Methods

- [clearInterval](GeniallyEngine.GeniallyEngine.md#clearinterval)
- [clearTimeout](GeniallyEngine.GeniallyEngine.md#cleartimeout)
- [playAudio](GeniallyEngine.GeniallyEngine.md#playaudio)
- [runAction](GeniallyEngine.GeniallyEngine.md#runaction)
- [sendPostMessage](GeniallyEngine.GeniallyEngine.md#sendpostmessage)
- [setInterval](GeniallyEngine.GeniallyEngine.md#setinterval)
- [setTimeout](GeniallyEngine.GeniallyEngine.md#settimeout)

## Properties

### storage

• `Readonly` **storage**: `Storage`

Storage manager with this you can save variables on browser's storage

**`Example`**

```ts
// set the value of key
view.storage.setItem('mykey', 'newvalue');
// get the value of key
view.storage.getItem('mykey');
```

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:37](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L37)

## Accessors

### currentPopupSlides

• `get` **currentPopupSlides**(): `Slide`[]

Popup slides that are currently being visualised

#### Returns

`Slide`[]

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:254](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L254)

___

### currentSlide

• `get` **currentSlide**(): `Slide`

Slide that is currently being visualised

#### Returns

`Slide`

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:246](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L246)

## Methods

### clearInterval

▸ **clearInterval**(`intervalId`): `void`

Delete the interval

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `intervalId` | `number` | id of interval for delete |

#### Returns

`void`

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:64](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L64)

___

### clearTimeout

▸ **clearTimeout**(`timeoutId`): `void`

Clear timeout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeoutId` | `number` | The identifier of the timeout you want to cancel. |

#### Returns

`void`

**`Example`**

```ts
const timeoutId = view.setTimeout(() => {
  console.log('printed every second')
}, 1000);

// delete tiemout
view.clearTimeout(timeoutId);
```

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:107](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L107)

___

### playAudio

▸ **playAudio**(`audioParams`): `AudioActionInstance`

Play an audio

#### Parameters

| Name | Type |
| :------ | :------ |
| `audioParams` | `Object` |
| `audioParams.endTime?` | `number` |
| `audioParams.initialTime?` | `number` |
| `audioParams.loop?` | `boolean` |
| `audioParams.playMode?` | `PlayAudioModeValue` |
| `audioParams.refId?` | `string` |
| `audioParams.source` | `string` |

#### Returns

`AudioActionInstance`

An AudioActionInstance that allows us to stop the audio when necessary

**`Example`**

```ts
const audioInstance = view.playAudio({
  source: 'https://mp3.com/testaudio.mp3', // source of audio
  loop: true, // if we want to replay de audio when finish
  initialTime: 5, // second from which the audio begins to be played
  endTime: 60 // second when we want to finish the audio
});

// we can call stop when we need
audioInstance.stop();
```

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:203](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L203)

___

### runAction

▸ **runAction**(`interactivityAction`, `itemId?`): `ActionInstance`

Run an interactivity action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interactivityAction` | `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `targetRefId`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`Cancel`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `action`: `IOptionalIType`\<`ISimpleType`\<`Stop`\>, [`undefined`]\> ; `targetRefId`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`ControlAnimation`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `target`: `IOptionalIType`\<`ITypeUnion`\<`ModelCreationType`\<`ExtractCFromProps`\<\{ `smartLink`: `ISimpleType`\<`GoToSlideSmartLinkValue`\>  }\>\> \| `ModelCreationType`\<`ExtractCFromProps`\<\{ `slideId`: `ISimpleType`\<`string`\>  }\>\>, `ModelSnapshotType`\<\{ `smartLink`: `ISimpleType`\<`GoToSlideSmartLinkValue`\>  }\> \| `ModelSnapshotType`\<\{ `slideId`: `ISimpleType`\<`string`\>  }\>, `ModelInstanceType`\<\{ `smartLink`: `ISimpleType`\<`GoToSlideSmartLinkValue`\>  }, {}\> \| `ModelInstanceType`\<\{ `slideId`: `ISimpleType`\<`string`\>  }, {}\>\>, [`undefined`]\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`GoToSlide`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animations`: `IArrayType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> ; `timeBetweenAnimationsMs`: `IType`\<`undefined` \| `number`, `number`, `number`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayStagedAnimations`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `html`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `padding`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `size`: `IOptionalIType`\<`ISimpleType`\<`HtmlPopupSizeValue`\>, [`undefined`]\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`HtmlPopup`\>, [`undefined`]\> ; `version`: `IType`\<`undefined` \| `number`, `number`, `number`\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `html`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `padding`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`HtmlTooltip`\>, [`undefined`]\> ; `version`: `IType`\<`undefined` \| `number`, `number`, `number`\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `link`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `linkTarget`: `IOptionalIType`\<`ISimpleType`\<`OpenLinkTargetValue`\>, [`undefined`]\> ; `linkText`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`OpenLink`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `type`: `IOptionalIType`\<`ISimpleType`\<`Zoom`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `audioId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\> ; `endTime`: `IMaybe`\<`ISimpleType`\<`number`\>\> ; `initialTime`: `IType`\<`undefined` \| `number`, `number`, `number`\> ; `loop`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `name`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAudioModeValue`\>, [`undefined`]\> ; `source`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAudio`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `stagedAnimations`: `IMaybe`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animations`: `IArrayType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> ; `timeBetweenAnimationsMs`: `IType`\<`undefined` \| `number`, `number`, `number`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayStagedAnimations`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setAnimations`: (`animations`: `SnapshotOrInstance`\<`IMSTArray`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`\<`IArrayType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>\>) => `void` ; `setTimeBetweenAnimationsMs`: (`msecs`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> ; `stagedAnimationsIfVisible`: `IMaybe`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animations`: `IArrayType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> ; `timeBetweenAnimationsMs`: `IType`\<`undefined` \| `number`, `number`, `number`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayStagedAnimations`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setAnimations`: (`animations`: `SnapshotOrInstance`\<`IMSTArray`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`\<`IArrayType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>\>) => `void` ; `setTimeBetweenAnimationsMs`: (`msecs`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`ShowElements`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `stagedAnimations`: `IOptionalIType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animations`: `IArrayType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> ; `timeBetweenAnimationsMs`: `IType`\<`undefined` \| `number`, `number`, `number`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayStagedAnimations`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setAnimations`: (`animations`: `SnapshotOrInstance`\<`IMSTArray`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`\<`IArrayType`\<`IModelType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `animationType`: `IType`\<`undefined` \| `string`, `string`, `string`\> ; `disableUserEventsWhilePlaying`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `makeItemInteractiveWhileInvisible`: `IMaybe`\<`ISimpleType`\<`boolean`\>\> ; `parameters`: `IOptionalIType`\<`IType`\<`JsonValue`, `JsonValue`, `JsonValue`\>, [`undefined`]\> ; `playMode`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimationModeValue`\>, [`undefined`]\> ; `runnableWhenStyleIsNot`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `runtimeEngineData`: `IMaybe`\<`IType`\<`Animation`, `Animation`, `Animation`\>\> ; `runtimeInitialStyle`: `IMaybe`\<`IType`\<`Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>, `Partial`\<`AnimationState`\>\>\> ; `slot`: `IOptionalIType`\<`ITypeUnion`\<`string` \| `number`, `string` \| `number`, `string` \| `number`\>, [`undefined`]\> ; `targetItemId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`PlayAnimation`\>, [`undefined`]\>  }, \{ `setRefId`: (`refId`: `string`) => `void`  } & \{ `setCustomAnimation`: (`__namedParameters`: \{ `animationType`: `string` ; `makeItemInteractiveWhileInvisible`: `boolean` ; `parameters`: `JsonValue` ; `runnableWhenStyleIsNot`: `Partial`\<`AnimationState`\> ; `runtimeEngineData`: `Animation` ; `runtimeInitialStyle`: `Partial`\<`AnimationState`\>  }) => `void` ; `setDisableUserEventsWhilePlaying`: (`disabled`: `boolean`) => `void` ; `setPlayMode`: (`playMode`: `PlayAnimationModeValue`) => `void` ; `setPredefinedAnimation`: \<PA\>(`animationType`: `PA`, `parameters`: `PredefinedAnimationParametersFor`\<`PA`\>) => `void` ; `setSlot`: (`slot`: `string` \| `number`) => `void` ; `setTargetItemId`: (`targetItemId`: `undefined` \| `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>\>) => `void` ; `setTimeBetweenAnimationsMs`: (`msecs`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`HideElements`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `targetSlideId`: `IMaybe`\<`ISimpleType`\<`string`\>\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`SlidePopup`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `type`: `IOptionalIType`\<`ISimpleType`\<`CloseSlidePopup`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `timeMs`: `IType`\<`undefined` \| `number`, `number`, `number`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`Wait`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `interactivityAction`: `IMaybe`\<`any`\> ; `onlyUseTimeout`: `IType`\<`undefined` \| `boolean`, `boolean`, `boolean`\> ; `timeoutMs`: `IType`\<`undefined` \| `number`, `number`, `number`\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`WithTimeout`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `interactivityActions`: `IOptionalIType`\<`IArrayType`\<`any`\>, [`undefined`]\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`Sequence`\>, [`undefined`]\>  }\> \| `ModelSnapshotType`\<\{ `refId`: `IOptionalIType`\<`ISimpleType`\<`string`\>, [`undefined`]\>  } & \{ `interactivityActions`: `IOptionalIType`\<`IArrayType`\<`any`\>, [`undefined`]\> ; `type`: `IOptionalIType`\<`ISimpleType`\<`Parallel`\>, [`undefined`]\>  }\> | InteractivityActionSnapshotOut parameter |
| `itemId?` | `string` | Optional parameter to assign this action to an item. |

#### Returns

`ActionInstance`

An instance of the action that allows us to cancel it

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:156](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L156)

___

### sendPostMessage

▸ **sendPostMessage**(`itemId`, `message`): `void`

Send post message to an iframe

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `string` | id of item that containing the iframe |
| `message` | `unknown` | string or object that represent the message |

#### Returns

`void`

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:239](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L239)

___

### setInterval

▸ **setInterval**(`callback`, `time`): `number`

Add an interval that call to callback function sent as parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Function that will be called at each interval |
| `time` | `number` | time in milliseconds |

#### Returns

`number`

Interval identifier id

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:50](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L50)

___

### setTimeout

▸ **setTimeout**(`callback`, `time`): `number`

Create a new timeout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Function to call after time sent with parameter |
| `time` | `number` | Time in milliseconds to call a callback function |

#### Returns

`number`

Return tiemoutId for use with clearTimeout function to stop timeout

**`Example`**

```ts
const timeoutId = view.setTimeout(() => {
  console.log('printed every second')
}, 1000);
```

#### Defined in

[plugin-api-view/src/GeniallyEngine.ts:86](https://github.com/Genially/mono-genially/blob/97703588208/packages/plugin-api-view/src/GeniallyEngine.ts#L86)
