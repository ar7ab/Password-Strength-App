let pass = document.getElementById("password");
let msg = document.getElementById("msg");
let strength = document.getElementById("strength");
let submitBtn = document.getElementById("submit-btn");

msg.style.display = "none";

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if(pass.value.length < 4) {
        strength.innerHTML = `weak`;
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if(pass.value.length >= 4 && pass.value.length < 8) {
        strength.innerHTML = `medium`;
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if(pass.value.length >= 8) {
        strength.innerHTML = `strong`;
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});


submitBtn.addEventListener('click', function(){
    msg.style.display = "none";
    pass.style.borderColor = "#ccc";
    pass.value = ``;

})