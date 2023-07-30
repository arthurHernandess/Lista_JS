/* EX01 */
function antecessor_sucessor() 
{	
	valor = 0;
	antescessor = 0;
	sucessor = 0;

valor = document.getElementById("ex01").value;

if(ex01.value == "")
{
	alert("Preencha os campos");	
	location.reload();
}

antecessor = parseInt(valor) - parseInt(1);
document.getElementById("antecessor").innerHTML = "O antecessor é " + antecessor;

sucessor = parseInt(valor) + parseInt(1);
document.getElementById("sucessor").innerHTML = "O sucessor é " + sucessor;
}

/* EX02 */
function desconto()
{
	preço = 0;
	desc = 0;

preço = document.getElementById("ex02").value;

if(ex02.value == "")
{
	alert("Preencha o campo");	
	location.reload();
}

desc = parseInt(preço) * parseInt(9) / parseInt(100);

r = parseInt(preço) - parseInt(desc);

document.getElementById("desconto").innerHTML = "O preço com desconto é RS " + r.toFixed(2);
}

/* EX04 */
function carro()
{
	preço = 0;
	percentualI = 0;
	percentualL = 0;
	imposto = 0;
	lucro = 0;
	preçoF = 0;


	preço = document.getElementById("ex03-1").value;
	percentualI = document.getElementById("ex03-2").value;
	percentualL = document.getElementById("ex03-3").value;


	imposto = parseInt(preço) * parseInt(percentualI) / parseInt(100);

	lucro = parseInt(preço) * parseInt(percentualL) / parseInt(100);

	preçoF = parseInt(preço) + parseInt(imposto) + parseFloat(lucro);


	if(preço == "")
	{
		alert("Preencha os campos");
		location.reload();
	}
	else if(percentualI == "") 
	{
		alert("Preencha os campos");
		location.reload();
	}	
	else if(percentualL == "")
	{
		alert("Preencha os campos");
		location.reload();
	}


	document.getElementById("lucro").innerHTML = "Lucro do distribuidor: RS " + lucro.toFixed(2);
	document.getElementById("imposto").innerHTML = "Impostos do carro: RS " + imposto.toFixed(2);
	document.getElementById("preço").innerHTML = "Preço final do carro: RS " + preçoF.toFixed(2);
}


/* EX03 */
function divisão()
{
	valor1 = 0;
	valor2 = 0;
	resultado = 0;


	valor1 = document.getElementById("ex04-1").value;

	valor2 = document.getElementById("ex04-2").value;

	resultado = parseInt(valor2) / parseInt(valor1);

	if(valor1 == "")
	{
		alert("Preencha os campos");
		location.reload();
	}
	else if(valor2 == "")
	{
		alert("Preencha os campos");
		location.reload();
	}

	document.getElementById("resultado").innerHTML = "O resultado da divisão é " + resultado.toFixed(2);	
}

/* EX05*/
function indma()
{
	peso = 0;
	altura = 0;
	imc = 0;

	peso = document.getElementById("ex05-1").value;

	altura = document.getElementById("ex05-2").value;


	imc =  parseInt(peso) / (parseFloat(altura) * parseFloat(altura));

	if(imc < 20)
	{
		document.getElementById("resposta").innerHTML = "Abaixo do peso ideal."
	}
	else if(imc < 25)
	{
		document.getElementById("resposta").innerHTML = "Peso ideal"
	}
	else if(imc > 25)
	{
		document.getElementById("resposta").innerHTML = "Acima do peso"
	}

	if(peso == "")
	{
		alert("Preencha os campos");
		location.reload();
	}
	else if(altura == "") 
	{
		alert("Preencha os campos");
		location.reload();
	}	
}

/* EX06*/
function aluno()
{
	p1 = 0;
	p2 = 0;
	r = 0;
	media = 0;

	p1 = document.getElementById("ex06").value;

	p2 = document.getElementById("ex061").value;

	r = parseFloat(p2) * 2;

	media = (parseFloat(p1) + parseFloat(r)) / 3;

document.getElementById("media").innerHTML = "A média final foi: " + media.toFixed(2);


if(media >= 5)
{
	document.getElementById("estado").innerHTML = "Aluno aprovado! :)"
}
else
{
	document.getElementById("estado").innerHTML = "Aluno reprovado :("
}

	if(p1 == "")
	{
		alert("Preencha os campos");
		location.reload();
	}
	else if(p2 == "") 
	{
		alert("Preencha os campos");
		location.reload();
	}	
}


/*EX07*/
function nota()
{
	p1 = 0;
	r = 0;
	r2 = 0;

	p1 = document.getElementById("ex07").value;

	r = 15 - parseInt(p1);

	r2 = parseFloat(r) / 2;

document.getElementById("nes").innerHTML = "O aluno deve tirar " + r2.toFixed(2);

if(p1 == "")
		{
			alert("Preencha os campos");
			location.reload();
		}
}