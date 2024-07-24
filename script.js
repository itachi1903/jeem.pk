let input = document.querySelector(".name");
let btn = document.querySelector(".btn");
let  output = document.querySelector(".warn");
btn.addEventListener('click', ()=>{
    if(input.value == "") {
        output.innerHTML = "*Pls  enter your name";
    }else {
        input = input.value;
        document.querySelector(".card").style.width="80%";
        document.querySelector(".card").innerHTML =`<h2>dear ${input},</h2>
        <h3>On this joyous occasion of Eid, may the blessings of peace, love, and happiness fill your life. Wishing you and your loved ones a blessed Eid filled with laughter, prosperity, and cherished moments of togetherness. Eid Mubarak!</h3>
    `
    }
});  