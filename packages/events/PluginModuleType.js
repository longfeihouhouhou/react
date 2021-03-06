/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import type {Fiber} from 'react-reconciler/src/ReactFiber';
import type {
  DispatchConfig,
  ReactSyntheticEvent,
} from './ReactSyntheticEventType';

export type EventTypes = {[key: string]: DispatchConfig};

export type AnyNativeEvent = Event | KeyboardEvent | MouseEvent | Touch;

export type PluginName = string;

export type PluginModule<NativeEvent> = {
  eventTypes: EventTypes,
  extractEvents: (
    topLevelType: string,
    targetInst: Fiber,
    nativeTarget: NativeEvent,
    nativeEventTarget: EventTarget,
  ) => null | ReactSyntheticEvent,
  tapMoveThreshold?: number,
};
