'use strict';

var StateMachine = function(entity) {
  this.entity = entity;
  this._currentState = null;
  this._previousState = null;
  this._globalState = null;
};

StateMachine.prototype = {
  setCurrentState: function(s) {
    this._currentState = s;
  },
  setGlobalState: function(s) {
    this._globalState = s;
  },
  setPreviousState: function(s) {
    this._previousState = s;
  },
  update: function(dt) {
    //  if a global state exists, call it's execute method
    if(this._globalState) {
      this._globalState.execute(this.entity, dt);
    }
    // same for current State
    if(this._currentState) {
      this._currentState.execute(this.entity, dt);
    }
  },
  changeState: function(newState) {
    console.assert(!!newState, '[StateMachine.changeState]: trying to change to a null state.')
    this._previousState = this._currentState;
    this._previousState.exit(this.entity);
    this._currentState = newState;
    this._currentState.enter(this.entity)
  },
  // change back to previous State
  revertToPreviousState: function() {
    this.changeState(this._previousState);
  }
};

//accessors
Object.defineProperty(StateMachine.prototype, 'currentState', {
  get: function() {
    return this._currentState;
  }
});

Object.defineProperty(StateMachine.prototype, 'globalState', {
  get: function() {
    return this._globalState;
  }
});

Object.defineProperty(StateMachine.prototype, 'previousState', {
  get: function() {
    return this._previousState;
  }
});
