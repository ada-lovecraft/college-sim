'use strict';
var nextStudentId = 0;

var Student = function(location, color) {
  this.stateMachine = new StateMachine(this);
  this.id = nextStudentId++;
  this.name = 'John';
  this.color = color || '#007bff';
  this.msg = '';

  this.currentLocation = null;
  this.position = {x: 0, y: 0};


  this.maxEnergy = 100;
  this.maxStudy = 30;

  this.maxBurnout = 30;
  this.maxMoney = 25;

  this.gradeGain = 3;


  //gains are given in values per second
  this.energyGain = 10;
  this.moneyGain = 5;
  this.studyGain = 5;
  this.burnoutGain = 5;


  this.energy = 100;
  this.money = 5;
  this.study = 0;
  this.burnout = 0;
  this.grade = 70;

  this.stateMachine.setCurrentState(StudentGoToDormAndRestState);
  this.stateMachine.setGlobalState(StudentGlobalState);

  this.setLocation(location || locations.dorm);


};

Student.prototype = {
  update: function(dt) {
    this.stateMachine.update(dt);
  },

  draw: function(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.fillStyle = this.color;
    ctx.fillRect(0,0, 10,10);
    ctx.restore();
  },

  setLocation: function(location) {
    this.currentLocation = location;
    this.position.x = Math.random() * (location.width-20) + location.x + 10;
    this.position.y = Math.random() * (location.height-20) + location.y + 10;
  },
  describe: function() {
    var output = [];
    console.group('student:', this.id);
    console.log(this);
    console.groupEnd();
  }
};
