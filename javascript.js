
// calculate  		

		function middle() {
			let a1 = parseInt(document.getElementById('a1').value);
			let a2 = parseInt(document.getElementById('a2').value);
			let a3 = parseInt(document.getElementById('a3').value);			
			let a4 = parseInt(document.getElementById('a4').value);	
			let a5 = parseInt(document.getElementById('a5').value);
			let a6 = parseInt(document.getElementById('a6').value);
			let a7 = parseInt(document.getElementById('a7').value);			
			let a8 = parseInt(document.getElementById('a8').value);
			let a9 = 10;
			let a10 = 2;
			
			if (isNaN(a1)==true) a1=0;
			if (isNaN(a2)==true) a2=0;
			if (isNaN(a3)==true) a3=0;
			if (isNaN(a4)==true) a4=0;
			if (isNaN(a5)==true) a5=0;
			if (isNaN(a6)==true) a6=0;
			if (isNaN(a7)==true) a7=0;
			if (isNaN(a8)==true) a8=0;
			
			let a = (((a1 * a9 + a3) - (a2 * a9 + a4)) + ((a5 * a9 + a7) - (a6 * a9 + a8))) / a10;
 
			document.getElementById('result1').innerHTML = a1 + " * " + a9 + " + " + a3 + " - " + a2 + " * " + a9 + " + " + a4 + " + " + a5 + " * " + a9 + " + " + a7 + " - " + a6 + " * " + a9 + " + " + a8 + " / " + a10 + " = " + a;
				 
		};
