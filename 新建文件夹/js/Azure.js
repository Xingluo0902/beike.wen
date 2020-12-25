window.onload = function() {
    var icons = document.getElementById("icon");
    var outing = document.getElementsByClassName("out")[0];
    icons.onclick = function() {
        outing.style.display = 'block'
    }
}

function change() {
    var click = document.getElementById("click")
    var hide = document.getElementById("hide")
    hide.style.display = 'block'
    hide.style.display = 'flex'
    click.style.display = 'none'

}
var boxes = document.getElementsByClassName("box");
var points = document.getElementsByClassName("point");
var index = 0;
var time = 0
var goindex = function() {
    clearActive();
    boxes[index].className = "box active";
    points[index].className = "point active"

}
var clearActive = function() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].className = "box"
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = "point"
    }
}
var gonext = function() {
    if (index < 4) {
        index++
    } else {
        index = 0
    }
    goindex()
}
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function() {
        var pointindex = this.getAttribute("date-index")
        index = pointindex
        goindex()
        time = 0
    })
}
setInterval(function() {
    time++
    if (time == 20) {
        gonext()
        time = 0
    }
}, 100)
var items = document.getElementsByClassName("item")
var rights = document.getElementsByClassName("right")
Index = 0
var goIndex = function() {
    clearactive()
    rights[Index].className = "right active"
    items[Index].className = "item active"

}
var clearactive = function() {
    for (var i = 0; i < rights.length; i++) {
        rights[i].className = "right"
    }
    for (var i = 0; i < items.length; i++) {
        items[i].className = "item"
    }
}
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {

        var itemsIndex = this.getAttribute("data-Index")
        console.log(itemsIndex)
        Index = itemsIndex
        goIndex()
    })

}
var languages = document.getElementById("language");
var decisions = document.getElementsByClassName("decision")[0];
var Play = false;
languages.addEventListener('click', function() {
    Play = !Play
    if (Play) {

        decisions.style.display = 'block'

    } else {
        decisions.style.display = 'none'
    }

})