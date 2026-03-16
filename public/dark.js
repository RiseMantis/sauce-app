const darkButton = document.getElementById("dark");


function handleDark() {
  document.body.classList.toggle("dark-mode");
  darkButton?.classList.toggle("dark-mode");
}


if(darkButton){
  darkButton.addEventListener('click', handleDark);
}
else{
  console.log("Button not found");
}