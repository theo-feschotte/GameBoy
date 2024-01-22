// IMPORTS ---------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// CONST AND VARS ---------------------------------------------------------------------------
const fxSounds = document.getElementById("fx_sounds");

const up = document.getElementsByClassName("btn-joysticks__item--up")[0];
const left = document.getElementsByClassName("btn-joysticks__item--left")[0];
const down = document.getElementsByClassName("btn-joysticks__item--down")[0];
const right = document.getElementsByClassName("btn-joysticks__item--right")[0];

const b = document.getElementsByClassName("btn-actions__item--b")[0];
const a = document.getElementsByClassName("btn-actions__item--a")[0];

const select = document.getElementsByClassName("btn-options__item--select")[0];
const start = document.getElementsByClassName("btn-options__item--start")[0];

const btnInfosZ = document.getElementsByClassName("btn-info--up")[0];
const btnInfosQ = document.getElementsByClassName("btn-info--left")[0];
const btnInfosS = document.getElementsByClassName("btn-info--down")[0];
const btnInfosD = document.getElementsByClassName("btn-info--right")[0];
const btnInfosSpace = document.getElementsByClassName("btn-info--b")[0];
const btnInfosF = document.getElementsByClassName("btn-info--a")[0];
const btnInfosShift = document.getElementsByClassName("btn-info--select")[0];
const btnInfosCmd = document.getElementsByClassName("btn-info--start")[0];
// ----------------------------------------------------------------------------------------------------

// GLOBAL FUNCTIONS ---------------------------------------------------------------------------
function fx_sounds() {
    fxSounds.play();
};
function btnUp() {
    console.log("UP");
    fx_sounds();
    btnInfosZ.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosZ.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosZ.classList.remove("hovered");
    });
}
function btnLeft() {
    console.log("LEFT");
    fx_sounds();
    btnInfosQ.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosQ.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosQ.classList.remove("hovered");
    });
}
function btnDown() {
    console.log("DOWN");
    fx_sounds();
    btnInfosS.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosS.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosS.classList.remove("hovered");
    });
}
function btnRight() {
    console.log("RIGHT");
    fx_sounds();
    btnInfosD.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosD.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosD.classList.remove("hovered");
    });
}
function btnB() {
    console.log("SPACE (B)");
    fx_sounds();
    btnInfosSpace.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosSpace.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosSpace.classList.remove("hovered");
    });
}
function btnA() {
    console.log("F (A)");
    fx_sounds();
    btnInfosF.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosF.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosF.classList.remove("hovered");
    });
}
function btnSelect() {
    console.log("SHIFT (select)");
    fx_sounds();
    btnInfosShift.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosShift.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosShift.classList.remove("hovered");
    });
}
function btnStart() {
    console.log("CMD (start)");
    fx_sounds();
    btnInfosCmd.classList.add("hovered");
    this.addEventListener("keyup", function() {
        btnInfosCmd.classList.remove("hovered");
    });
    this.addEventListener("mouseup", function() {
        btnInfosCmd.classList.remove("hovered");
    });
}
// ----------------------------------------------------------------------------------------------------

// KEYS DOWN ---------------------------------------------------------------------------
document.addEventListener("keydown", (event) => {
    var name = event.key;
    var code = event.code;
    
      (name === "z") ? btnUp()
    : (name === "q") ? btnLeft()
    : (name === "s") ? btnDown()
    : (name === "d") ? btnRight()

    : (name === "ArrowUp") ? btnUp()
    : (name === "ArrowLeft") ? btnLeft()
    : (name === "ArrowDown") ? btnDown()
    : (name === "ArrowRight") ? btnRight()

    : (code === "Space") ? btnB()
    : (name === "f") ? btnA()

    : (code === "ShiftLeft") ? btnSelect()
    : (code === "MetaLeft") ? btnStart()
    
    : false;
    
}, false);
// ----------------------------------------------------------------------------------------------------

// MOUSE DOWN ---------------------------------------------------------------------------
up.addEventListener("mousedown", btnUp);
left.addEventListener("mousedown", btnLeft);
down.addEventListener("mousedown", btnDown);
right.addEventListener("mousedown", btnRight);

b.addEventListener("mousedown", btnB);
a.addEventListener("mousedown", btnA);

select.addEventListener("mousedown", btnSelect);
start.addEventListener("mousedown", btnStart);
// ----------------------------------------------------------------------------------------------------