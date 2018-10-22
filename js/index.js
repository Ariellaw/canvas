var elCanvas = document.getElementById("canvas");
var ctx = elCanvas.getContext("2d");

function init() {

}
function handleMouseUp() {

    setIsdragged(false);
    console.log('handle mouse up', isDragged)
}
function handleMouseDown() {
    console.log('handle mouse down', isDragged)

    setIsdragged(true);
    getMousePos();
}
function getMousePos(event) {
    // var dimension =  getRandomNumber();
    elCanvas.addEventListener("mousemove", (event) => {
        if (!getIsDragged()) return;
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        drawShape({ x: mouseX, y: mouseY })
        return;
    })
}
function drawShape(coor) {   
    var dimension = 50;
    var color = getColor();
    var x = coor.x;
    var y = coor.y;
    var shape = getShape();
    if (shape === 'circle') {
        drawCircle(x, y, color, dimension)
    }
    if (shape === 'square') {
        drawSquare(x, y, color,dimension )
    }
    if (shape === 'line') {
        drawLine(x, y, color, dimension)
    }
}
function drawCircle(x, y, color, dimension) {
    ctx.beginPath();
    ctx.arc(x, y, dimension, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.stroke();
}
function drawSquare(x, y, color, dimension) {
    ctx.beginPath();
    ctx.rect(x, y, dimension, dimension);
    ctx.strokeStyle = color;
    ctx.stroke();
}
function drawLine(x, y, color, dimension) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, dimension);
    ctx.strokeStyle = color;

    ctx.stroke();
}
function getRandomNumber() {
    var num = Math.floor((Math.random() * 50) + 10);
    return num;
}
function onChangeColor(el) {
    userColor = el.value;
    console.log('the new color is', userColor);
    setColor(userColor);
}

function onClearClicked() {
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function onChangeShape() {
    var shape = document.querySelector('.select-shape').value;
    setShape(shape);
}



//set canvas
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');



