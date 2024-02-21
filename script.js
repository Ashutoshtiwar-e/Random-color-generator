document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector("button");
  const displayElement = document.querySelector("p");
  const secondButton = document.getElementById("color");

  function generateColor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const colour =  `rgb(${red},${green},${blue})`;
    displayElement.innerHTML = colour;

    return colour;
  }

  buttonElement.addEventListener('click',()=>{
     generateColor();
    secondButton.style.backgroundColor = displayElement.innerHTML;
    secondButton.style.color = 'white';
  });
});
