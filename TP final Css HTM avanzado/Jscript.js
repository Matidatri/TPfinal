let botonplay= document.getElementById("play");
let botonpausa= document.getElementById("pause");
let video= document.querySelector('video');


botonplay.addEventListener('click',()=>{
    video.play() });

botonpausa.addEventListener('click', ()=>{
    video.pause() });

    setTimeout(()=>{document.getElementById('duracion').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);



////drag and drop//////

let im = document.querySelectorAll(".foto");
let des = document.querySelectorAll(".tarjeta");


for (let i = 0; i<3; i++) {
    im[i].addEventListener("dragstart", (e)=>{
        if (i==0) {
            e.dataTransfer.setData("text","./imagenes/rompe2.png");

        } else if (i==1) {
            e.dataTransfer.setData("text","./Rompe1.png");

        } else if (i==2) {
            e.dataTransfer.setData("text","./imagenes/Rompe3.png");
        };
    });

    des[i].addEventListener("dragover", (e)=>{
        e.preventDefault();
    });

    des[i].addEventListener("drop", (e)=>{
        let info = e.dataTransfer.getData("text");

        if (des[i].innerText == "Arrastre y suelte la imágenes aquí") {
            des[i].innerHTML= `<img src='${info}' class="divdes" style="flex: 100%;"/>`;
        };
        
        if (info == "./imagenes/rompe2.png") {
            im[0].classList.add("desaparece");

        } else if (info == "./imagenes/Rompe1.png") {
            im[1].classList.add("desaparece");

        } else if (info == "./imagenes/rompe3.png") {
            im[2].classList.add("desaparece");
        };
    });
};