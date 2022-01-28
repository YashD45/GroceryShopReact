let add = document.querySelector('add');
let subtract = document.querySelector('subtract');
let input = document.querySelector('input');



add.addEventListener('click',() => {
   input.value = parseInt(input.value) + 1 ;
});



subtract.addEventListener('click',() => {
    input.value = parseInt(input.value) - 1 ;
});

