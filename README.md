# Number-to-binary-Octal-Hexadecimal

Here we will try to learn how to convert the Number to Binary, Octal, Hexadecimal

### here we are going to add some html, Css, And simple codes of javascript which together makes a Number to binary Converter

## here's the code which we have used to make the logic of the converter

```javascript
let Boolena = 12;
console.log(Boolena.toString(16));

function Binary() {
  let $numbere = document.getElementById("NUmber").value;
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
  document.getElementById("NUmber").value = "";
}
```

#### first the number is converted to string because to do this thing in few lines we must convert the Number to string of take a direct string input but using a <code>input-type="text"</code> in html

<br>

## The function which is used to convert the Number to binary. Here we have used tostring() and filled number "2" in the brackets, because the binary number has a of base 2

```javascript
Variable - to - convert.toString(2);
```

<br>

## snippet to convert to decimal. Base of Octal is 8

```javascript
variable - name.toString(8);
```

<br>

## snippet to convert to Hexadecimal. Base of HexaDecimal is 16

```javascript
variable - name.toString(16);
```

## Added a prompt to fetch visiters name to make it two way

```javascript{
  function Copy{
// Prompt Which takes Name and displays on screen
let visitors = prompt("Enter your name" + "\n" + "so that there is a two way Communication");
document.getElementById("VisiterName").innerHTML = visitors;
}
}
```
