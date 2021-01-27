var boxes = document.getElementsByClassName("box");
var items = document.getElementsByClassName("item");
var product = document.getElementById("product")
var index = 0;

function clearactive() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].className = "box";
        animate(items[i], 45);

    }
}

function goindex() {
    clearactive();
    boxes[index].className = "box active";
    animate(items[index], 60);
}

function gonext() {
    if (index < 10) {
        index++;
    } else {
        index = 0;
    }
    goindex();
}

function gopre() {
    if (index == 0) {
        index = 10;
    } else {
        index--;
    }
    goindex();
}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].onmousewheel = function(event) {
        if (event.wheelDelta > 0) {
            gopre();
            opacity();
        } else {
            gonext();
            opacity();
        }
    }

}

function opacity() {
    var timer1 = setInterval(colorLiner, 100);
    var vall = 0;

    function colorLiner() {

        for (var i = 0; i < boxes.length; i++) {

            if (vall <= 100) {
                boxes[index].style.opacity = vall / 100;
            }
            if (vall > 100) {
                clearInterval(timer1);

            }
            vall++;
        }
    }
}


for (var i = 0; i < items.length; i++) {
    items[i].timer = null;
    items[i].onmouseover = function() {
        animate(this, 60)

    }
    items[i].onmouseout = function() {
        animate(this, 45)

    }
    items[i].onclick = function() {
        var points = this.getAttribute('date-index');
        index = points;
        console.log(index);
        goindex();
        opacity();
    }
}

function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = Math.ceil((target - obj.offsetWidth)) * 0.2;

        if (target == obj.offsetWidth) {
            clearInterval(obj.timer);
        } else {
            obj.style.width = obj.offsetWidth + step + 'px';
            obj.style.height = obj.offsetHeight + step + 'px';

        }
    }, 40)
}