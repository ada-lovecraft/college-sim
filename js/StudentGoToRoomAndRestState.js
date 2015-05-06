'use strict';
var StudentGoToRoomAndRestState = {
  enter: function(entity, dt) {
    console.log(entity.id, 'ahhh... time for sleep.')
  },
  execute: function(entity, dt) {
    entity.changeState(StudentGoToDormAndRestState);
  },
  exit: function(entity, dt) {
    console.log(entity.id, 'Is it morning already?')
  }
}
