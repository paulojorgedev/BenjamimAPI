var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

const port = process.env.port || process.env.PORT || 8000;

app.listen(port, function() {
    console.log('Servidor rodando na porta 8000..');
});



app.get('/joke', function(req, res) {  
 res.send("hi");
});

Date.prototype.getWeekNumber = function(){
 var d = new Date();
 var dayNum = d.getUTCDay() || 7;
 
 d.setUTCDate(d.getUTCDate() + 4 - dayNum);
 var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
 return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};


var x =   new Date().getWeekNumber() % 4 ;

 var tarefas = [
              "Lavar a louça do almoço/jantar",
              "Passar pano na casa & Aspirar tapete",
              "Secar a louça do almoço/jantar & Fazer gelo",
              "Pendurar roupas no varal & Tirar o lixo",
              "Limpeza geral da sala",
              "Limpeza geral do banheiro",
              "Nenhuma"
            ];
var JSON0 = "{
    Paulo:tarefas[0],
    Ana:tarefas[1],
    Mãe:tarefas[2],
    Pai:tarefas[3]
}";
var JSON1 = "{
    Paulo:tarefas[3],
    Ana:tarefas[0],
    Mãe:tarefas[1],
    Pai:tarefas[2]
}";
var JSON2 = "{
    Paulo:tarefas[2],
    Ana:tarefas[3],
    Mãe:tarefas[0],
    Pai:tarefas[1]
}";
var JSON3 = "{
    Paulo:tarefas[1],
    Ana:tarefas[2],
    Mãe:tarefas[3],
    Pai:tarefas[0]
}";


switch(x){
 case 1:
    app.get('/', function(req,res){
   res.send(JSON1); 
});
                                        
 break;
 case 2:
        app.get('/', function(req,res){
   res.send(JSON2); 
});
                 
 break;
 case 3:
        app.get('/', function(req,res){
   res.send(JSON3); 
});
                    
 break;
 case 0:
        app.get('/', function(req,res){
   res.send(JSON0); 
});
        
 break;
                    
};

  
