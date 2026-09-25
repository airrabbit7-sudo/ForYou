const countdown = document.getElementById("countdown");
const tickSound = new Audio("tick.mp3");
tickSound.loop();
tickSound.play();
const targetDate = new Date("2026-10-22T00:00:00");
setInterval(() => {
    const now = new Date();
    const difference = targetDate - now;
    const days = Math.floor(difference / (1000*60*60*24));
    const hours = Math.floor(difference/ (1000*60*60) % 24);
    const minutes = Math.floor(difference/ (1000*60) % 60);
    const seconds = Math.floor(difference/ (1000) % 60);
    countdown.innerHTML = `${String(days).padStart(2, "0")} : ${String(hours).padStart(2,"0")} : ${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2,"0")}`;
}, 1000);
for (let i = 0; i < 100; i++){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random()* 100 + "vw";
    heart.style.animationDuration = (3 + Math.random()*4) + "s";
    heart.style.animationDelay = Math.random()*5 + "s";
    document.body.appendChild(heart);

}
