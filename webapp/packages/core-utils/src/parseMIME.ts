/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2024 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import MIMEType from 'whatwg-mimetype';

export function parseMIME(serialized: string): MIMEType {
  return new MIMEType(serialized);
}