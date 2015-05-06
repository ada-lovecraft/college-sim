var StudentGlobalState = {
  enter: function(entity, dt) {

  },
  execute: function(entity, dt) {
    if(entity.currentState != StudentGoToDormAndRestState) {
      var m = entity.energyGain * 0.33 * dt;
      entity.energy -= m;
    }
    if(entity.energy <= 0) {
      entity.energy = 0;
      entity.stateMachine.changeState(StudentGoToDormAndRestState);
    } else if(entity.money <= 0) {
      entity.stateMachine.changeState(StudentGoHomeAndBegForMoneyState);
    }

    if(entity.burnout <=0) {
      entity.burnout = 0;
    }
  },
  exit: function(entity, dt) {

  }
}
