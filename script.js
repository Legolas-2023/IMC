let p = document.getElementById('peso');
let a = document.getElementById('altura');
let result = document.getElementById('bodybuilder-resultado');
let grau = document.getElementById('bodybuilder-grau');

let magreza3 = document.getElementById('magreza_3');
let magreza2 = document.getElementById('magreza_2');
let magreza1 = document.getElementById('magreza_1');
let pesonormal = document.getElementById('peso_normal');
let sobrepeso = document.getElementById('sobrepeso');
let obesidade1 = document.getElementById('obesidade_1');
let obesidade2 = document.getElementById('obesidade_2');
let obesidade3 = document.getElementById('obesidade_3');


function calcular(){
    let peso = Number(p.value);
    let altura = Number(a.value);
    let imc = document.getElementById('bodybuilder-imc');
    let calculo = (peso/(altura**2)).toFixed(2);
        result.innerHTML = `Seu IMC: ${calculo}`;
    
        if(peso == '' || altura == ''){
            alert('Digite valores nos campos de peso e altura.')
            result.innerHTML = '';
            
        }else if(calculo >= 40.00){
            grau.innerHTML = "OBESIDADE GRAU III OU MÓRBIDA";
            grau.style.color = '#EB0000';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'block';
            obesidade2.style.display = 'none';
            obesidade1.style.display = 'none';
            sobrepeso.style.display = 'none';
            pesonormal.style.display = 'none';
            magreza1.style.display = 'none';
            magreza2.style.display = 'none';
            magreza3.style.display = 'none';


        }else if(calculo >= 35.00 && calculo <= 39.99){
            grau.innerHTML = "OBESIDADE GRAU II";
            grau.style.color = '#FFF500';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'none';
            obesidade2.style.display = 'block';
            obesidade1.style.display = 'none';
            sobrepeso.style.display = 'none';
            pesonormal.style.display = 'none';
            magreza1.style.display = 'none';
            magreza2.style.display = 'none';
            magreza3.style.display = 'none';
            
        }else if(calculo >= 30.00 && calculo <= 34.99){
            grau.innerHTML = "OBESIDADE GRAU I";
            grau.style.color = '#FF9A00';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'none';
            obesidade2.style.display = 'none';
            obesidade1.style.display = 'block';
            sobrepeso.style.display = 'none';
            pesonormal.style.display = 'none';
            magreza1.style.display = 'none';
            magreza2.style.display = 'none';
            magreza3.style.display = 'none';

        }else if(calculo >= 25.00 && calculo <= 29.99){
            grau.innerHTML = "SOBREPESO";
            grau.style.color = '#33FF00';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'none';
            obesidade2.style.display = 'none';
            obesidade1.style.display = 'none';
            sobrepeso.style.display = 'block';
            pesonormal.style.display = 'none';
            magreza1.style.display = 'none';
            magreza2.style.display = 'none';
            magreza3.style.display = 'none';

        }else if(calculo >= 18.50 && calculo <= 24.99){
            grau.innerHTML = "PESO NORMAL";
            grau.style.color = '#008B1F';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'none';
            obesidade2.style.display = 'none';
            obesidade1.style.display = 'none';
            sobrepeso.style.display = 'none';
            pesonormal.style.display = 'block';
            magreza1.style.display = 'none';
            magreza2.style.display = 'none';
            magreza3.style.display = 'none';

        }else if(calculo >= 17.00 && calculo <= 18.49){
            grau.innerHTML = "MAGREZA GRAU I";
            grau.style.color = '#FF9A00';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'none';
            obesidade2.style.display = 'none';
            obesidade1.style.display = 'none';
            sobrepeso.style.display = 'none';
            pesonormal.style.display = 'none';
            magreza1.style.display = 'block';
            magreza2.style.display = 'none';
            magreza3.style.display = 'none';

        }else if(calculo >= 16.00 && calculo <= 16.99){
            grau.innerHTML = "MAGREZA GRAU II";
            grau.style.color = '#FFF500';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'none';
            obesidade2.style.display = 'none';
            obesidade1.style.display = 'none';
            sobrepeso.style.display = 'none';
            pesonormal.style.display = 'none';
            magreza1.style.display = 'none';
            magreza2.style.display = 'block';
            magreza3.style.display = 'none';

        }else if(calculo < 16.00){
            grau.innerHTML = "MAGREZA GRAU III";
            grau.style.color = '#EB0000';
            imc.style.transform = 'translate3d(0px,-50px,0px)';

            obesidade3.style.display = 'none';
            obesidade2.style.display = 'none';
            obesidade1.style.display = 'none';
            sobrepeso.style.display = 'none';
            pesonormal.style.display = 'none';
            magreza1.style.display = 'none';
            magreza2.style.display = 'none';
            magreza3.style.display = 'block';
        }
    }

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


