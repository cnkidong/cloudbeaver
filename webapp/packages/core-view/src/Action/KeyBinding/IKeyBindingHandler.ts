/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import type { IAction } from '../../Action/IAction';
import type { IViewContext } from '../../View/IViewContext';
import type { IKeyBinding } from './IKeyBinding';

export interface IKeyBindingHandler {
  id: string;
  binding: IKeyBinding;

  isBindingApplicable: (context: IViewContext, action: IAction) => boolean;
  handler: (context: IViewContext, action: IAction) => void;
}
