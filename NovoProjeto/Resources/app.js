var i=0,acertos=0;
var lNum, lEnum,lResutado;
var bResp1, bResp2, bResp3, bResp4;
var questao;
//funcao
var fUpdate;

//Cria a window main
var wMain = Titanium.UI.createWindow({
width: 'auto',
height: 'auto',
backgroundColor: 'white',
title: 'Quizz'
});

//Cria a primeira view
var vPrimeira = Titanium.UI.createView({
    height:'auto',
    width:'auto',
    backgroundColor:'black',
    top:5,
    left:5,
    right:5,
	bottom:5
});

//cria a label de entrada
var lBemVindo = Titanium.UI.createLabel({
font: {fontSize: 14, fontFamily: 'Helvetica',
fontWeight:'bold'},
top:5,
text: 'Bem vindo ao quiz:',
verticalAlign:'center',
color: 'white'
});

//Cria o botao de entrada que vai chamar outra view.
var bEntrar = Titanium.UI.createButton({
   title: 'Entrar',
   top: 400,
   width: 100,
   height: 50,
   verticalAlign: 'center'
});
bEntrar.addEventListener('click',function(e)
{
	fUpdate();
});

//View para entrada com JSon

var vPadrao = Titanium.UI.createView({
	height:'auto',
    width:'auto',
    layout: "horizontal",
    backgroundColor:'black',
    top:5,
    left:5,
    right:5,
	bottom:5,
	borderRadius: 15
});

var vFinal = Titanium.UI.createView({
	height:'auto',
    width:'auto',
    layout: "horizontal",
    backgroundColor:'black',
    top:5,
    left:5,
    right:5,
	bottom:5,
	borderRadius: 15
});

//definindo a função
fUpdate = function(){
	if(i<json.questao.length)
	{
		questao = json.questao[i];
		lNum = Titanium.UI.createLabel({
	   		font: {fontSize: 18},
			top:10,
			width: "100%",
			text: "Questão Numero: " + questao.num + "\n",
			color: 'white',
			verticalAlign: 'center'
		});
		lEnum = Titanium.UI.createLabel({
	   		font: {fontSize: 16},
			text: questao.enunciado,
			letf: 10,
			color: 'white'
		});
		bResp1 = Titanium.UI.createButton({
			title: questao.alternativas.a,
	   		top: 200,
	   		width: "100%",
	   		height: "auto",
	   		verticalAlign: 'center'
		});
		bResp1.addEventListener('click',function(e)
		{
			if(questao.alternativas.a==questao.resposta)
			{
				alert('Correto');
				acertos++;
			}
			else
			{
				alert('Errado');
			}
			i++;
			//setTimeout(function(){},30000);
			vPadrao.removeAllChildren();
			fUpdate();
		});
		bResp2 = Titanium.UI.createButton({
			title: questao.alternativas.b,
	   		width: "100%",
	   		height: "auto",
	   		verticalAlign: 'center'
		});
		bResp2.addEventListener('click',function(e)
		{
			if(questao.alternativas.b==questao.resposta)
			{
				alert('Correto');
				acertos++;
			}
			else
			{
				alert('Errado');
			}
			i++;
			//setTimeout(function(){},3000);
			vPadrao.removeAllChildren();
			fUpdate();
		});
		bResp3 = Titanium.UI.createButton({
			title: questao.alternativas.c,
	   		width: "100%",
	   		height: "auto",
	   		verticalAlign: 'center'
		});
		bResp3.addEventListener('click',function(e)
		{
			if(questao.alternativas.c==questao.resposta)
			{
				alert('Correto');
				acertos++;
			}
			else
			{
				alert('Errado');
			}
			i++;
			//setTimeout(function(){},3000);
			vPadrao.removeAllChildren();
			fUpdate();
		});
		bResp4 = Titanium.UI.createButton({
			title: questao.alternativas.d,
	   		width: "100%",
	   		height: "auto",
	   		verticalAlign: 'center'
		});
		bResp4.addEventListener('click',function(e)
		{
			if(questao.alternativas.d==questao.resposta)
			{
				alert('Correto');
				acertos++;
			}
			else
			{
				alert('Errado');
			}
			i++;
			//setTimeout(function(){},3000);
			vPadrao.removeAllChildren();
			fUpdate();
		});
		vPadrao.add(lNum);
	   	vPadrao.add(lEnum);
	   	vPadrao.add(bResp1);
	   	vPadrao.add(bResp2);
	   	vPadrao.add(bResp3);
	   	vPadrao.add(bResp4);
	   	wMain.add(vPadrao);
	}
	else
	{
		lResutado = Titanium.UI.createLabel({
	   		font: {fontSize: 18},
			width: "100%",
			text: "Acertou: " + acertos,
			color: 'white',
			verticalAlign: 'center'
		});
		vFinal.add(lResutado);
		wMain.add(vFinal);
	}
   	
};


//Entrada do JSON
var url = "https://raw.githubusercontent.com/lukasepramos/mentoring/master/jsonCel.txt"; //Criar url com json
var json;
var xhr = Ti.Network.createHTTPClient({
    onload: function() {
    json = JSON.parse(this.responseText);    
    },
    onerror: function(e) {
	Ti.API.debug("STATUS: " + this.status);
	Ti.API.debug("TEXT:   " + this.responseText);
	Ti.API.debug("ERROR:  " + e.error);
	alert('There was an error retrieving the remote data. Try again.');
    },
    timeout:5000
});

xhr.open("GET", url);
xhr.send();
vPrimeira.add(lBemVindo);
wMain.add(vPrimeira);
vPrimeira.add(bEntrar);
wMain.open();
