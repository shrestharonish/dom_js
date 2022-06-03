const colors = ["lightblue", "Green", "rgba(133,122,200)", "#f15025", "#F08080", "rgb(255,165,0)", "peachpuff"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomnumber = getrandomnumber();
    console.log(randomnumber);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
    // console.log(document.body);
});

function getrandomnumber(){
    return Math.floor (Math.random() * colors.length);
};