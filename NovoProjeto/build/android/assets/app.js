var main=Titanium.UI.createWindow({width:"100%",height:"auto",backgroundColor:"white",title:"Quizz",barColor:"red"}),view=Titanium.UI.createView({height:"auto",width:"auto",backgroundColor:"black",top:5,left:5,right:5,bottom:5}),label1=Titanium.UI.createLabel({font:{fontSize:14,fontFamily:"Helvetica",fontWeight:"bold"},top:5,text:"Bem vindo ao quiz:",verticalAlign:"center",color:"white"}),button=Titanium.UI.createButton({title:"Entrar",top:400,width:100,height:50,verticalAlign:"center"}),url="https://raw.githubusercontent.com/lukasepramos/mentoring/master/jsonCel.txt";view.add(label1),main.add(view),view.add(button),main.open();