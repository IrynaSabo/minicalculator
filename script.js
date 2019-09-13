var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var resultat = document.getElementById("resultat");
var i;
var text="";
var utskrift =[];
var countBtn = document.getElementById("count");

countBtn.addEventListener("click",function()
{
  var arOperators=document.getElementById("arOperators").value;
  switch(arOperators)
  {
    case "addition":
     var summa = Number(number1.value) + Number(number2.value);
     utskrift.push(summa);
     number1.value="";
     number2.value="";
     console.log(summa);    
     break;

    case "subtraction":
     var skilnad = Number(number1.value) - Number(number2.value);
     utskrift.push(skilnad);
     number1.value="";
     number2.value="";
     console.log(skilnad);
     break;

    case "multiplication":
     var multip = Number(number1.value) * Number(number2.value);
     utskrift.push(multip);
     number1.value="";
     number2.value="";
     console.log(multip);   
     break;

    case "division":  
    if(Number(number2.value)===0)
    {document.getElementById("fel").innerHTML="Fel!Division med 0!";
    number1.value="";
     number2.value="";}
     else{document.getElementById("fel").innerHTML=""; }
    var divis = Number(number1.value)/ Number(number2.value);      
      utskrift.push(divis);
       number1.value="";
       number2.value="";       
     
    console.log(divis);
    console.log(Number(number2.value));
     break;
  }
  for(i=0; i<utskrift.length; i++)
  { 
  var listElem =document.createElement("li");
  var textNode=document.createTextNode(utskrift[i]);
  listElem.appendChild(textNode);
   }
  document.getElementById("resultat").appendChild(listElem);
   console.log(utskrift);
})

