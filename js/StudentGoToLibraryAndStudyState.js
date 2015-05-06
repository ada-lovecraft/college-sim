'use strict';
var StudentGoToLibraryAndStudyState = {
  enter: function(entity, dt) {
    entity.msg = 'study study study....';
    entity.setLocation(locations.library);
  },
  execute: function(entity, dt) {
    entity.burnout += entity.burnoutGain * dt;
    if(entity.burnout >= entity.maxBurnout) {
      ;
      entity.stateMachine.changeState(StudentGoToBarAndDrinkState);
    }
  },
  exit: function(entity, dt) {
  }
}
