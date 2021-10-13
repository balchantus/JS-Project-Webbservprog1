//Function för att ändra texten på sidan
function txt() {
  document.getElementById("txt").innerHTML = "Changed Text!";
}

//Function för att få en random färg som sedan används i functionen backColor.
function getRandomColor() {
  var letters = "0123456789ABCDEF".split('');
  var color = "#";
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Här används random färgen och ändrar backgrunden till den färgen
function backColor() {
  document.body.style.backgroundColor = getRandomColor();
}

//Denna function tar användaren till en annan sida
function newSite() {
  window.location.href = 'HTML/other.html';
}

//Detta är en anonym function som körs när sidan laddas in och ber användaren mata in sitt namn och sedan välkommnar användaren till sidan
(function() {
  let person = prompt("Please enter your name", "John Doe");
  if (person === null || person === "") {
    alert("User cancelled the prompt.");
  } else {
    alert("Hello " + person + "! Welcome!");
  }

})();
