const value = document.querySelector('#value');
const btn1 = document.querySelector('#btn1');
const btn0 = document.getElementById('btn0');
const btn2 = document.getElementById('btn2');

const btns = document.querySelectorAll(".btn");

//Set initial count to 0 after reset
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const style = (e.currentTarget.classList);
        if(style.contains('decrease')){
            count--; 
        }
        else if(style.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        if(count<0){
            value.style.color="red";
        }else if(count>0){
            value.style.color='green';
        }else{
            value.style.color = '#102A42'
        }
        value.textContent = count;
    });
});

// btn1.addEventListener("click", function(e){
//     const styles = (e.currentTarget.classList);
//     if (styles.contains("decrease")){  //here contains means if styles contains decrease
//         count--;
//     }
//     if (count<0){
//         value.style.color='red';
//     }
//     value.textContent = count;
// })
// btn0.addEventListener("click", function(e){
//     const styles = e.currentTarget.classList;
//     if (styles.contains("reset")){
//         count = 0;
//     }
//     if(count=== 0){
//         value.style.color='#102A42';
//     }
//     value.textContent = count;
// })
// btn2.addEventListener("click", function(e){
//     const styles = e.currentTarget.classList;
//     if (styles.contains("increase")){
//         count++;
//     }if(count>0){
//         value.style.color='green';
//     }
//     value.textContent = count;
// })

