/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActionID
 *
 * Typescript port by Bernd Paradies, May 2015
 * @see https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/constants/TodoConstants.js
 *
 */

enum TodoActionID {
    TODO_CREATE,
    TODO_COMPLETE,
    TODO_DESTROY,
    TODO_DESTROY_COMPLETED,
    TODO_TOGGLE_COMPLETE_ALL,
    TODO_UNDO_COMPLETE,
    TODO_UPDATE_TEXT
}

export = TodoActionID;
