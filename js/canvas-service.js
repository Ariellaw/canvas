var gUserShape ='square';
var gUserColor = '#ffffff';
var isDragged = false;

function getShape(){
    return gUserShape;
}

function getIsDragged(){
    return isDragged;
}

function setIsdragged(dragged){
    isDragged = dragged;
}

function setShape(shape){
    gUserShape = shape;
}

function setColor(color){
    gUserColor = color;
}
function getColor(){
    return gUserColor;
}


// function getMousePos(event) {
//     var elCanvas = document.getElementById("my_canvas")
//     var ctx = elCanvas.getContext("2d");
//     elCanvas.addEventListener("mousemove", (event) => {
  
//       var mouseX = event.clientX - ctx.canvas.offsetLeft;
//       var mouseY = event.clientY - ctx.canvas.offsetTop;
  
//       var status = document.getElementById("status");
//       status.innerHTML = mouseX + " | " + mouseY;
//       console.log(mouseX, mouseY);
//       ctx.beginPath();
//       ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2, false);
//       ctx.strokeStyle = "pink";
//       ctx.stroke();
//       return { x: mouseX, y: mouseY };
//     })
//   }
 



  