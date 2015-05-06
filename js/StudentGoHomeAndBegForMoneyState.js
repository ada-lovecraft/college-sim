'use strict';
var StudentGoHomeAndBegForMoneyState = {
  enter: function(entity, dt) {
    entity.msg = 'time to beg for money';
    entity.setLocation(locations.home);
  },
  execute: function(entity, dt) {
    entity.money += entity.moneyGain * dt;
    if(entity.money >= entity.maxMoney) {
      entity.stateMachine.revertToPreviousState();
    }
  },
  exit: function(entity, dt) {
  }
}
