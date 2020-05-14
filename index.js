var x=document.getElementById(i1);

var y=document.getElementById(i2);
var z=document.getElementById(i3);
var e=document.getElementById(i4);

var a=document.forms['form']['first'];



document.getElementById("btn").addEventListener("click",function(){
	var b=document.forms['form']['last'];
	var c=document.forms['form']['email'];
	var d=document.forms['form']['password'];
	


	if(a.value===""){
		a.classList.add("one");
		document.getElementById("alerts").style.display="block";

	}

	if(b.value===""){
		b.classList.add("one");
		document.getElementById("alerts1").style.display="block";
		
	}
	if(c.value===""){
		c.classList.add("one");
		document.getElementById("alerts2").style.display="block";
		
	}
	if(d.value===""){
		d.classList.add("one");
		document.getElementById("alerts3").style.display="block";
		
	}
	document.getElementById("hide").style.display="none";

});


