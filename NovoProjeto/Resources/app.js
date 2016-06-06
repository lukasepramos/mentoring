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
   Titanium.UI.createView({


   })
});

//Entrada do JSON
var url = "https://raw.githubusercontent.com/lukasepramos/mentoring/master/jsonCel.txt";




vPrimeira.add(lBemVindo);
wMain.add(vPrimeira);
vPrimeira.add(bEntrar);
wMain.open();
