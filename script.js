

"use strict";

function calc(val)
            {
                var n1 = parseInt(document.getElementById('n1').value);
                var n2 = parseInt(document.getElementById('n2').value);
                
    
            
                if(val === '+')
                {
                    document.getElementById('resultado').value = n1+n2;
                }
                
                if(val === '-')
                {
                    document.getElementById('resultado').value = n1-n2;
                }
                
                if(val === '/')
                {
                    document.getElementById('resultado').value = n1/n2;
                }
                
                if(val === '*')
                {
                    document.getElementById('resultado').value = n1*n2;
                }
            }





/*
function Sumar() {
	var x, y, txtResult;
	x = document.getElementById("valor_1").value;
	y = document.getElementById("valor_2").value;
	if (x == " " || y == "") {
		alert("Please enter FirstValue and SecondValue");
	}
   else{
	var txtResult = +x + +y;
	document.getElementById("resultado").innerHTML = "Result: " + txtResult;
	}
}

function Restar() {
	var x, y, txtResult;
	x = document.getElementById("valor_1").value;
	y = document.getElementById("valor_2").value;
	if (x == " " || y == "") {
		alert("Please enter FirstValue and SecondValue");
	} else {
		var txtResult = +x - +y;
		document.getElementById("resultado").innerHTML = "Result: " + txtResult;
	}
}

function Multiplicar() {
	var x, y, txtResult;
	x = document.getElementById("valor_1").value;
	y = document.getElementById("valor_2").value;
	if (x == " " || y == "") {
		alert("Please enter FirstValue and SecondValue");
	} else {
		var txtResult = +x * +y;
		document.getElementById("resultado").innerHTML = "Result: " + txtResult;
	}
}

function Dividir() {
	var x, y, txtResult;
	x = document.getElementById("valor_1").value;
	y = document.getElementById("valor_2").value;
	 if (x == " " || y == "") {
		alert("Please enter FirstValue and SecondValue");
		 } 
	else if (y != 0) {
		var txtResult = +x / +y;
		  } 
	else {
		alert("Second Number Should not be Zero");
			}
	document.getElementById("resultado").innerHTML = "Result: " + txtResult;
  }

  */