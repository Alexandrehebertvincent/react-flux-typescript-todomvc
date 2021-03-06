/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * Typescript port by Bernd Paradies, May 2015
 * @see https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/Header.react.js
 *
 */

import React = require('react/addons');
import TodoActions = require('../flux/actions/TodoActions');
import TodoTextInput = require('./TodoTextInput.jsx');
import ReactComponent = require('../react/ReactComponent');
import ReactJSX = require('../react/ReactJSX');

interface HeaderProps {
}

interface HeaderElement {
  id: string;
}

class Header extends ReactComponent<HeaderProps,any> {

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  private _onSave: (text: string) => void =
    (text: string): void => {
      if (text.trim()){
	       TodoActions.create(text);
      }
    };

  /**
   * @return {object}
   */
  public render(): React.ReactElement<HeaderElement> {
    return ReactJSX<HeaderElement>(`
      <header id='header'>
		    <h1>todos</h1>
		    <TodoTextInput
		      id='new-todo'
		      placeholder='What needs to be done?'
		      onSave={this._onSave}
		    />
		  </header>`,
      this,
      {
	       'TodoTextInput': TodoTextInput
      });
  }
};

export = Header;
