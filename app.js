let onOff = document.getElementById("on-off");
let screenInput = document.getElementById("screen-input");

let currentStatus = "off";
let otherStatus = "on"

function swap(){
    let temp;
    temp = currentStatus;
    currentStatus = otherStatus;
    otherStatus = temp;
}

onOff.addEventListener("click", ()=>{
    if(currentStatus == "on"){
        screenInput.style.display = "none";
        swap();
    }
    else{
        screenInput.style.display = "block";
        swap();
    }
})