document.onkeydown = function (e) {
    var kapik0 = document.getElementById("s6").offsetLeft
    var kapik = document.getElementById("s6").offsetTop

    var Valod1 = document.getElementById("s").offsetLeft
    var Valodt1 = document.getElementById("s").offsetTop

    var Valod2 = document.getElementById("s1").offsetLeft
    var Valodt2 = document.getElementById("s1").offsetTop

    var Valod3 = document.getElementById("s2").offsetLeft
    var Valodt3 = document.getElementById("s2").offsetTop

    var Valod4 = document.getElementById("s3").offsetLeft
    var Valodt4 = document.getElementById("s3").offsetTop

    var Valod5 = document.getElementById("s4").offsetLeft
    var Valodt5 = document.getElementById("s4").offsetTop

    var Valod6 = document.getElementById("s5").offsetLeft
    var Valodt6 = document.getElementById("s5").offsetTop

    if (e.keyCode == 38) {
        kapik -=  10
        document.getElementById("s6").style.top = kapik + "px"
    }

    if (e.keyCode == 40) {
        kapik = kapik + 10
        document.getElementById("s6").style.top = kapik + "px"
    }

    if (e.keyCode == 37) {
        kapik0 = kapik0 - 10
        document.getElementById("s6").style.left = kapik0 + "px"
    }

    if (e.keyCode == 39) {
        kapik0 = kapik0 + 10
        document.getElementById("s6").style.left = kapik0 + "px"
    }

    if (kapik0 + 100>Valod1 && kapik0 < Valod1+ 100 && kapik + 100 > Valodt1 && kapik < Valodt1 +100) {
        document.getElementById("s").classList.add("rr")
    }

    
    if (kapik0 + 100>Valod2 && kapik0 < Valod2 + 100 && kapik + 100 > Valodt2 && kapik < Valodt2 +100) {
        document.getElementById("s1").classList.add("rr")
    }

    if (kapik0 + 100>Valod3 && kapik0 < Valod3 + 100 && kapik + 100 > Valodt3 && kapik < Valodt3 +100) {
        document.getElementById("s2").classList.add("rr")
    }

    if (kapik0 + 100>Valod4 && kapik0 < Valod4 + 100 && kapik + 100 > Valodt4 && kapik < Valodt4 +100) {
        document.getElementById("s3").classList.add("rr")
    }

    if (kapik0 + 100>Valod5 && kapik0 < Valod5 + 100 && kapik + 100 > Valodt5 && kapik < Valodt5 +100) {
        document.getElementById("s4").classList.add("rr")
    }

    if (kapik0 + 100>Valod6 && kapik0 < Valod6 + 100 && kapik + 100 > Valodt6 && kapik < Valodt6 +100) {
        document.getElementById("s5").classList.add("rr")
    }

    var cl = document.getElementsByClassName("rr").length * 5
    document.getElementById("b1").innerHTML = cl
    if (cl == 30) {
        document.getElementById("s8").style.opacity = 1;
        document.getElementById("ss").style.opacity = 1;
        clearInterval(stop);
    }
    document.getElementsById("ss").style.opacity = 1;
}

var u = 60
var stop = setInterval(function F() {
    u--
    document.getElementById("b2").innerHTML = u
    if ( u == 0) {
        document.getElementById("s7").style.opacity = 1;
        clearInterval(stop);

    }
}, 1000)
