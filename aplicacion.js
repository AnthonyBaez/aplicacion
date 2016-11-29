window.onload=click;

	var img1;
	img1="<img src='";
	var tama="' height='100%' width='100%'/>";
	var imag;
	imag="<img src='";
	var vamas="<img src='https://ruthcastellote.files.wordpress.com/2013/04/genuardisnet.jpg'  height='100%' width='100%'/>";
	

	function click(){

	var ima1=document.getElementById("Nike");
	ima1.addEventListener("click",function(){
					clickEn("./aplicacion/ima1.jpg");
				});
	ima1.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima1.jpg");
									});
		ima1.addEventListener("mouseout",fin);

	var ima2=document.getElementById("Adidas");
	ima2.addEventListener("click",function(){
					clickEn("./aplicacion/ima2.png");
				});
	ima2.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima2.png");
									});
	ima2.addEventListener("mouseout",fin);
			
	var ima3=document.getElementById("Gucci");
	ima3.addEventListener("click",function(){
					clickEn("./aplicacion/ima3.jpg");
									});
	ima3.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima3.jpg");
										});
	ima3.addEventListener("mouseout",fin);
							
	var ima4=document.getElementById("Puma");
	ima4.addEventListener("click",function(){
					clickEn("./aplicacion/ima4.jpg");
				});
	ima4.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima4.jpg");
										});
	ima4.addEventListener("mouseout",fin);
								
	var ima5=document.getElementById("Diesel");
	ima5.addEventListener("click",function(){
					clickEn("./aplicacion/ima5.png");
				});
	ima5.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima5.png");
										});
	ima5.addEventListener("mouseout",fin);
									
	var ima6=document.getElementById("Lacoste");
	ima6.addEventListener("click",function(){
					clickEn("./aplicacion/ima6.jpg");
				});
	ima6.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima6.jpg");
										});
	ima6.addEventListener("mouseout",fin);
									
	var ima7=document.getElementById("Hugo");
	ima7.addEventListener("click",function(){
					clickEn("./aplicacion/ima7.png");
				});
	ima7.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima7.png");
										});
	ima7.addEventListener("mouseout",fin);
									

	var ima8=document.getElementById("Tommy");
	ima8.addEventListener("click",function(){
					clickEn("./aplicacion/ima8.png");
				});
	ima8.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima8.png");
										});
	ima8.addEventListener("mouseout",fin);
									
	var ima9=document.getElementById("Quest");
	ima9.addEventListener("click",function(){
					clickEn("./aplicacion/ima9.jpg");
				});
	ima9.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima9.jpg");
										});
	ima9.addEventListener("mouseout",fin);
									
	var ima10=document.getElementById("Polo");
	ima10.addEventListener("click",function(){
					clickEn("./aplicacion/ima10.png");
				});
	ima10.addEventListener("mouseover",function(){
										mostrar("./aplicacion/ima10.png");
									});

	ima10.addEventListener("mouseout",fin);
}

function clickEn(imagen){
	imag +=imagen;
	imag +=tama;
	var T=document.getElementById('principal').innerHTML = imag;
	vamas=imag;
	imag="<img src='";
}

function mostrar(imagen1){
	img1 +=imagen1;
	img1 +=tama;
	var h=document.getElementById('principal').innerHTML= img1;
	img1="<img src='";
}
function fin(){
	var fondo=document.getElementById('principal').innerHTML= vamas;
}