var box = document.getElementById("box");

box.addEventListener("mouseover", function() {
    var boxAttr = box.getBoundingClientRect();
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});

function getNewPosition(boxWidth, boxHeight) {
    
    
    var newX = Math.floor((Math.random() * 800) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * 800) + 1 - boxHeight);

    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
}
  
