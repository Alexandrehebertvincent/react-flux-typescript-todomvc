/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Typescript port by Bernd Paradies, May 2015
 */
 
declare module 'react-tools' {

  interface TransformOptions
  {
    harmony?: boolean;
  }

  function transform(jsx: string, options: TransformOptions): string;
}
