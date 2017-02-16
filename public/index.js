var app = function(){
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');
  var coords = {x:300, y:250};

  var changeColor = function(){
    context.strokeStyle = this.value;
  }

  var colorPicker = document.querySelector('#input-color');
  colorPicker.onchange = changeColor;

  var drawStart = function(){
    context.beginPath();
    context.moveTo(300, 250); 
    context.lineTo(301, 251); 
    context.stroke();
    coords.x = 301;
    coords.y = 251;
    return coords;
  }

  var draw = function(coords){
    context.beginPath();
    context.moveTo(coords.x, coords.y);
    context.lineTo(coords.x + 1, coords.y + 1); 
    context.stroke();
  }

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;
    console.log(e.keyCode);
    if (e.keyCode == '38') {
      if (coords.y > 0){
      coords.y -= 1;
      draw(coords)
      }
    }
    else if (e.keyCode == '40') {
      if (coords.y < 499){
      coords.y += 1;
      draw(coords)
      }
    }
    else if (e.keyCode == '37') {
      if (coords.x > 0){
      coords.x -= 1;
      draw(coords)
      }
    }
    else if (e.keyCode == '39') {
      if (coords.x < 599){
      coords.x += 1;
      draw(coords)
    }
  }
}

  drawStart();

}


window.onload = app;