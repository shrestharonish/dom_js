// const hexcolors = ["#4B0082", "#483D8B", "#008B8B", "#6B8E23", "#FF8C00", "#FF8C00"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexcolor = "#";
    for (let i=0; i<6; i++){
        hexcolor += hex[getrandomnumber()];
    }

    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
})

function getrandomnumber(){
    return Math.floor(Math.random() * hex.length);
}