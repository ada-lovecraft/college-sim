'use strict';
var StudentGoToBarAndDrinkState = {
  enter: function(entity, dt) {
    entity.setLocation(locations.bar);
    entity.msg = 'LET\'S GET BOMBED!';
  },
  execute: function(entity, dt) {
    entity.burnout -= entity.burnoutGain * dt
    entity.money -= entity.moneyGain * dt * 0.1;
    if(entity.burnout <= 0) {
      entity.stateMachine.changeState(StudentGoToLibraryAndStudyState);
    }
  },
  exit: function(entity, dt) {
  }
}
