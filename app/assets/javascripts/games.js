document.addEventListener("DOMContentLoaded", function (event) {

  const word = document.getElementById("inputWord");
  const letters = document.querySelectorAll(".letter-button");
  console.log(letters);

  const toggled = (event) => {
    console.log(event);
    newLetter = event.currentTarget.innerText;
    event.currentTarget.classList.add("active");
    event.currentTarget.setAttribute("disabled" , true);
    console.log(word);
    word.value = word.value + newLetter;
  };

  letters.forEach((letter) => {
    letter.addEventListener("click", toggled);
  });

});

