var header = document.getElementsByClassName("header")[0];
var body = document.getElementsByTagName("body")[0];
var point = document.getElementById("point");

function nav() {

}
var inputs = document.getElementsByTagName("input")[0];
inputs.onfocus = function() {
    if (inputs.value === "      输入城市或职位进行搜索") {
        inputs.value = "      ";
        inputs.style.color = '#000';
    }
}
inputs.onblur = function() {
    inputs.value = "      输入城市或职位进行搜索";
    inputs.style.color = 'grey';
}

function button(obj) {
    obj.onmouseover = function() {
        obj.style.opacity = '0.6'
    }
    obj.onmouseout = function() {
        obj.style.opacity = '1'
    }
}

var search = document.getElementById("search");
var enrichlive_p2 = document.getElementById("enrichlive_p2")
button(search);
button(enrichlive_p2);


var navArrow = document.getElementById("nav_arrow");
var X = 35;
var j = 55;
navArrow.onclick = function() {
    down(767);
}

function down(downTarget) {
    var timer = setInterval(function() {
        var speed = Math.ceil((downTarget - window.pageYOffset) * 0.2);
        if (window.pageYOffset >= downTarget) {
            clearInterval(timer);
        } else {
            window.scroll(0, window.pageYOffset + speed)
        }
    }, 20)
}


function arrow() {

    if (X < 55) {
        navArrow.style.lineHeight = X + 'px';
    }
    if (X == 55) {


        j = 55;
        arrow1()
    }
    X++;
}

function arrow1() {

    if (j > 35) {
        navArrow.style.lineHeight = j + 'px';
    }
    if (j == 35) {
        X = 35;
        arrow();
    }
    j--;
}

var timer = setInterval(arrow, 50);
var timer1 = setInterval(arrow1, 50);


var items = document.getElementsByClassName("item");
var itemSpans = document.getElementsByClassName("itemSpan");
for (var i = 0; i < items.length; i++) {
    items[i].timer = null;
    items[i].setAttribute('index', i)
    items[i].onmouseover = function() {
        animate(this, 100);
        var onitems = this.getAttribute('index')
        items[onitems].className = 'item active';
        itemSpans[onitems].style.color = 'blue';

    }
    items[i].onmouseout = function() {
        animate(this, 80);
        var onitems = this.getAttribute('index')
        items[onitems].className = 'item';
        itemSpans[onitems].style.color = '#000';

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
    }, 50)
}


var hFouths = document.getElementsByClassName("hFouth");
var text_ps = document.getElementsByClassName("text_p");
var byteStyleImges = document.getElementsByClassName("byteStyleImges");
var imgeSpan = document.getElementById("imgeSpan");
var imge_span = document.getElementById("imge_span");
var imgeCovers = document.getElementsByClassName("imgeCover");
var imge_covers = document.getElementsByClassName("imge_cover");
var imgeCover1s = document.getElementsByClassName("imgeCover1");
var imge_cover1s = document.getElementsByClassName("imge_cover1");


function animateSpan(obj) {
    var time = setInterval(function() {
        if (obj.offsetWidth == 0) {
            clearInterval(time);
        } else {
            obj.style.width = obj.offsetWidth - 5 + 'px'
        }
    }, 2)
}

function animate_span(obj) {
    setTimeout(function() {
        var time = setInterval(function() {
            if (obj.offsetWidth == 0) {
                clearInterval(time);
            } else {
                obj.style.width = obj.offsetWidth - 6 + 'px'
            }
        }, 3)
    }, 200)
}


function clearActive() {
    for (var i = 0; i < hFouths.length; i++) {
        hFouths[i].className = "hFouth";
    }
    for (var j = 0; j < text_ps.length; j++) {
        text_ps[j].className = "text_p";
    }
    for (var m = 0; m < byteStyleImges.length; m++) {
        byteStyleImges[m].className = 'byteStyleImges';
    }
}
for (var i = 0; i < hFouths.length; i++) {
    hFouths[i].setAttribute('index', i);
    hFouths[i].onclick = function() {
        var clickMouse = this.getAttribute('index');
        clearActive();
        hFouths[clickMouse].className = 'hFouth active';
        text_ps[clickMouse].className = 'text_p active';
        byteStyleImges[clickMouse].className = 'byteStyleImges active';
        animateSpan(imgeSpan);
        imgeSpan.style.width = '900px';
        animate_span(imge_span);
        imge_span.style.width = '900px';

    }
}

document.onscroll = function() {

}

var staffs = document.getElementsByClassName("byteStory_staff")

for (var i = 0; i < staffs.length; i++) {
    staffs[i].setAttribute('index', i)

    staffs[i].onmouseover = function() {
        var moveMouse = this.getAttribute('index')
        staffs[moveMouse].className = "byteStory_staff active"
    }
    staffs[i].onmouseout = function() {
        var moveMouse = this.getAttribute('index')
        staffs[moveMouse].className = "byteStory_staff"

    }
}


var points = document.getElementsByClassName("point");

for (var i = 0; i < points.length; i++) {
    points[i].setAttribute('index', i);
    points[i].onmouseover = function() {
        var clickPoints = this.getAttribute('index');
        points[clickPoints].style.color = '#7b7e81';
    }
    points[i].onmouseout = function() {
        var clickPoints = this.getAttribute('index')
        points[clickPoints].style.color = '#d2d3d4';
    }
}


var shows = document.getElementsByClassName("show");
var hiddens = document.getElementsByClassName("hidden");
var posts = document.getElementsByClassName("post");
var imges = document.getElementsByClassName("imge");
var postPs = document.getElementsByClassName("post_p");
var postes = document.getElementsByClassName("postes")
var names = ["imge active", "imge", "hidden active", "hidden", "post_p active", "post_p", ]

function pointer(obj, name, activity, inactivity) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].setAttribute('index', i);
        obj[i].onmouseover = function() {
            var moveMouse = this.getAttribute('index');
            name[moveMouse].className = activity
        }
        obj[i].onmouseout = function() {
            var moveMouse = this.getAttribute('index');
            name[moveMouse].className = inactivity
        }

    }
}
pointer(posts, imges, names[0], names[1]);
pointer(shows, hiddens, names[2], names[3]);
pointer(postes, postPs, names[4], names[5]);
var backTop = document.getElementById("backTop");
document.onscroll = function() {


    if (window.pageYOffset >= 767) {
        console.log(window.pageYOffset)
        body.onmousewheel = function(event) {
            if (event.wheelDelta < 0) {
                header.className = 'header active';
                point.style.color = 'blue';
                point.style.borderBottom = '3px solid rgb(48, 101, 199)';
            } else {
                header.className = 'header';
                point.style.color = '#fff';
                point.style.borderBottom = '3px solid #fff'
            }
        }
    }

    if (window.pageYOffset >= 2271 && window.pageYOffset <= 6443) {
        backTop.style.position = 'fixed';
        backTop.style.bottom = '100px';
        backTop.style.display = 'block';
        if (window.pageYOffset >= 2436) {
            animateSpan(imgeSpan);
            animate_span(imge_span);

        }
        if (window.pageYOffset >= 3005) {
            animateSpan(imgeCovers[0]);
            animate_span(imgeCover1s[0]);

        }
        if (window.pageYOffset >= 3504) {
            animateSpan(imgeCovers[1]);
            animate_span(imgeCover1s[1]);
        }
        if (window.pageYOffset >= 3989) {
            animateSpan(imgeCovers[2]);
            animate_span(imgeCover1s[2]);
        }
        if (window.pageYOffset >= 4565) {
            animateSpan(imgeCovers[3]);
            animate_span(imgeCover1s[3]);
        }
        if (window.pageYOffset >= 5085) {
            animateSpan(imgeCovers[4]);
            animate_span(imgeCover1s[4]);
        }
        if (window.pageYOffset >= 5285) {
            for (var i = 0; i < 2; i++) {
                animateSpan(imge_covers[i]);
                animate_span(imge_cover1s[i]);
            }
        }
    } else if (window.pageYOffset <= 2471) {

        backTop.style.display = 'none';
    } else if (window.pageYOffset >= 6443) {
        backTop.style.position = 'fixed';
        backTop.style.bottom = '300px';
        backTop.style.display = 'block';
    }
}
backTop.onclick = function() {
    var time = setInterval(function() {
        var speed = Math.ceil((0 - window.pageYOffset) * 0.2);
        if (window.pageYOffset <= 5) {
            clearInterval(time);
        } else {
            window.scroll(0, window.pageYOffset + speed)
        }
    }, 35)
}