
function Binary() {
  let $numbere = document.getElementById("Number").value;
  let Conver = Number($numbere);
  console.log(Conver);
  let $Binary = Conver.toString(2);
  document.getElementById("Binary").innerHTML = $Binary;
  let $Octal = Conver.toString(8);
  document.getElementById("Octal").innerHTML = $Octal;
  let $hexa = Conver.toString(16);
  document.getElementById("Hexa").innerHTML = $hexa;
}

function Clear() {
  document.getElementById("Number").value = "";
}


function AllClear(){
  document.getElementById("Binary").innerHTML = '';
  document.getElementById("Octal").innerHTML = '';
  document.getElementById("Hexa").innerHTML = '';
}