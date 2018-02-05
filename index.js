function ale (){
	var x= "",y="",z="";
	x= document.getElementsByClassName('name-input')[0];
	y=document.getElementsByClassName('email-input')[0];
	z=document.getElementsByClassName('mesaj-input')[0];
	if (x.value==""){
		x.style.borderColor="red";
	}
	if (y.value==""){
		y.style.borderColor="red";
	}
	if (z.value==""){
		z.style.borderColor="red";
	}
}

