'use strict';
var canvas,
    ctx,
    locationBounds,
    locations,
    student,
    tickTime;

function main() {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var bounds = locationBounds = {
    width: canvas.width / 3,
    height: canvas.height / 3,
    top: 10,
    left: 10,
    bottom: canvas.height * 0.66 - 10,
    right: canvas.width * 0.66 - 10
  };


  locations = {
    dorm: {x: bounds.left, y: bounds.top, height: bounds.height, width: bounds.width, entry: {x: bounds.left + bounds.width /2, y: bounds.top + bounds.height}},
    home: {x: bounds.right, y: bounds.top, height: bounds.height, width: bounds.width, entry: {x: bounds.right + bounds.width / 2 , y: bounds.top + bounds.height}},
    bar: {x: bounds.right, y: bounds.bottom, height: bounds.height, width: bounds.width, entry: {x: bounds.right + bounds.width /2, y: bounds.bottom} },
    library: {x: bounds.left, y: bounds.bottom, height: bounds.height, width: bounds.width, entry: {x: bounds.left + bounds.width /2, y: bounds.bottom } }
  };
  student = new Student();
  student.describe();
}


function update(dt) {
  student.update(dt);
  draw();
}

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawLocations();
  student.draw(ctx);
  drawUI();
}

function drawLocations() {
  for(var l in locations) {
    var loc = locations[l];
    ctx.save();
    ctx.translate(loc.x, loc.y);
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.rect(0, 0, loc.width, loc.height);
    ctx.stroke();
    ctx.closePath();




    ctx.font = '24px sans-serif';
    ctx.textBaseline = 'middle';
    var t = ctx.measureText(l);
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillText(l, (loc.width - t.width) / 2, loc.height  / 2 );
    ctx.restore();
    ctx.fillStyle = '#000000';
    ctx.save();
    ctx.translate(loc.entry.x - 5, loc.entry.y - 5);
    ctx.fillRect(0,0,10,10);
    ctx.restore();
  }
}

function drawUI() {
  ctx.save();
  ctx.translate(canvas.width / 2 - 115, canvas.height * 0.4 );
  ctx.fillStyle = '#3a9662';
  ctx.fillRect(0,0, student.energy / student.maxEnergy * 100, 10);
  ctx.fillStyle = '#ad5757';
  ctx.fillRect(110,0, student.burnout /student.maxBurnout * 100, 10);
  ctx.fillStyle = '#e98b5a';
  ctx.font = '12px sans-serif';
  ctx.textBaseline = 'top';
  ctx.fillText('$'+student.money.toFixed(2), 220, -2);

  ctx.fillStyle = '#000000';
  ctx.font = '12px sans-serif';
  ctx.fillText('ENERGY', 0,10);
  ctx.fillText('BURNOUT', 110,10);
  ctx.fillText('CASH', 220,10);
  ctx.font = '18px sans-serif';
  ctx.fillText(student.msg, 0, 30);
  ctx.restore();

}

function loop() {
  var t = Date.now();
  if(!tickTime) {
    tickTime = t;
  }
  var dt = (t - tickTime) / 1000 ;
  if(dt) {
    update(dt)
  }
  tickTime = t;
  requestAnimationFrame(loop);
}

(function() {
  main();
  loop();
})();
