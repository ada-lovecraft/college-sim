'use strict';
var StudentGoToDormAndRestState = {
  enter: function(entity, dt) {
    entity.msg = 'ZZZzzzz.....';
    entity.setLocation(locations.dorm);
  },
  execute: function(entity, dt) {
    entity.energy += entity.energyGain * dt;
    entity.burnout -= entity.burnoutGain * dt * 0.25;
    if(entity.energy >= entity.maxEnergy) {
      entity.energy = entity.maxEnergy;
      console.log(entity.id, entity.burnout, entity.maxBurnout);
      if(entity.burnout <= entity.maxBurnout) {
        entity.stateMachine.changeState(StudentGoToLibraryAndStudyState);
      } else {
        entity.stateMachine.changeState(StudentGoToBarAndDrinkState)
      }
    }
  },
  exit: function(entity, dt) {
  }
}
