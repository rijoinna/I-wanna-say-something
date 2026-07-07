// ---------- Pages ----------
const pages = document.querySelectorAll(".page");

function showPage(id){
    pages.forEach(p=>p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ---------- Buttons ----------
document.getElementById("startBtn").onclick=()=>showPage("gallery");
document.getElementById("next1").onclick=()=>showPage("letter");
document.getElementById("next2").onclick=()=>showPage("love");
document.getElementById("next3").onclick=()=>showPage("question");

// ---------- Slideshow ----------
const slides=document.querySelectorAll(".slide");

let slideIndex=0;

setInterval(()=>{

slides[slideIndex].classList.remove("active");

slideIndex=(slideIndex+1)%slides.length;

slides[slideIndex].classList.add("active");

},2500);

// ---------- Typing ----------
const letter=`Dear Sunaira,

I don't know if today will change anything.

But I couldn't keep my feelings hidden anymore.

Every time I saw your smile,
my heart became a little happier.

You are one of the most beautiful people
I have ever known.

Today...

I just want to tell you something...

I Love You ❤️`;

let i=0;

function type(){

if(i<letter.length){

document.getElementById("typing").innerHTML+=letter.charAt(i);

i++;

setTimeout(type,45);

}

}

document.getElementById("next1").addEventListener("click",()=>{

setTimeout(type,600);

});

// ---------- No Button Escape ----------
const noBtn=document.getElementById("noBtn");

function moveButton(){

const w=window.innerWidth-noBtn.offsetWidth-20;
const h=window.innerHeight-noBtn.offsetHeight-20;

const x=Math.random()*w;
const y=Math.random()*h;

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseenter",moveButton);
noBtn.addEventListener("touchstart",moveButton);

// ---------- Yes ----------
document.getElementById("yesBtn").onclick=()=>{

showPage("success");

confetti();

};

// ---------- Hearts ----------
setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.transition="5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-110vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},5200);

},350);

// ---------- Confetti ----------
function confetti(){

for(let i=0;i<180;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.width="10px";

c.style.height="10px";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

c.style.pointerEvents="none";

c.style.transition=(2+Math.random()*3)+"s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform=`translateY(${window.innerHeight+80}px) rotate(${Math.random()*720}deg)`;

},50);

setTimeout(()=>{

c.remove();

},5000);

}

}