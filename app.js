const canvas = document.getElementById("jsCanvas");

function onMouseMove(event){
    // console.log(event)
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
}
let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    // console.log(event)
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
}

function onMouseDown(event){
    // console.log(event)
    painting = true;
}

function onMouseUp(event){
    // console.log(event)
    // painting = false;
    stopPainting();
}

function onMouseLeave(event){
    // console.log(event)
    painting = false;
}


if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}