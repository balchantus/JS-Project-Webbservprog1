function txt() {
  document.getElementById("txt").innerHTML = "Changed Text!";
}

// Denna funktion har jag ej gjort själv.
function getRandomColor() {
  var letters = "0123456789ABCDEF".split('');
  var color = "#";
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function backColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function newSite() {
  window.location.href = 'HTML/other.html';
}

(function() {
  let person = prompt("Please enter your name", "John Doe");
  if (person === null || person === "") {
    alert("User cancelled the prompt.");
  } else {
    alert("Hello " + person + "! Welcome!");
  }

})();