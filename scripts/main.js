
 var input = document.querySelector(".superior__texto");
 var miLista = document.querySelector('.medio__lista');
 var faltan = document.querySelector('.faltan');
 var contadorTotal = 0; 
 var contador = 0 ;
 var all1 = document.querySelector('.all');
 var active = document.querySelector('.active');
 var comple = document.querySelector('.comple');
 var clear = document.querySelector('.clear');

    function crearLista(event){
   
        if(event.keyCode === 13){

            var item = document.createElement('div');
            var check = document.createElement('input');
            var info = document.createElement('p');
            var x = document.createElement('span');
            contadorTotal ++;
            console.log(contadorTotal);


            check.type = "checkbox";
            check.onclick = function () {
                if(check.checked == true){
                    item.classList.add("complete");
                    contador++;
                    faltan.innerHTML = contadorTotal - contador + " items left"
                    console.log( "contador "+contador);
                }
                else{
                    contador --; 
                    console.log(contador);
                    item.classList.remove("complete");
                    faltan.innerHTML = contadorTotal - contador + " items left"
                }   
            }

            
            info.innerHTML = input.value;
            info.ondblclick = function(){
                info.setAttribute('contenteditable', true);
            }


            x.innerHTML = "&times;";
            x.onclick = function(){
                item.remove();
                contadorTotal --;
                console.log(contadorTotal);
            }

            
            if(input.value === ''){
                console.log('No hay nada escrito');
            }else{
               
                item.appendChild(check);
                item.appendChild(info);
                item.appendChild(x);
                miLista.appendChild(item);
                
                //console.log("aloo");
            }
            input.value = '';


        }
        
        
    }
    input.addEventListener("keydown", crearLista);




    function filtroAll(){
        //item.style.display ="flex";
        var x = miLista.getElementsByTagName("div").length;
        console.log('Funciona....' + x);

        var filas = miLista.getElementsByTagName("div");
        for (i=0; i< filas.length; i++){
            console.log('Valor fila....' + filas[i].lastChild.previousSibling.innerHTML + ' ' + filas[i].className);
            filas[i].style.display = "flex" // aqui muestro todos los items

        }


    }
    all1.addEventListener('click',filtroAll);



    function filtroActive(){

        var filas = miLista.getElementsByTagName("div");

        for (i=0; i< filas.length; i++){
            if (filas[i].className === 'complete'){
                filas[i].style.display = "none" // aqui oculto los items con chulo
            }else {
                filas[i].style.display = "flex"// aqui muestro los items sin chulo 
            }
        }

    }
    active.addEventListener('click',filtroActive);



    function filtroComple(){

        var filas = miLista.getElementsByTagName("div");

        for (i=0; i< filas.length; i++){
            if (filas[i].className === 'complete'){
                filas[i].style.display = "flex" 
            }else {
                filas[i].style.display = "none"
            }
        }

    }
    comple.addEventListener('click',filtroComple);



    function filtroClear(){

        var filas = miLista.getElementsByTagName("div");

        for (i=0; i< filas.length; i++){
            if (filas[i].className === 'complete'){
                filas[i].remove()
            }else {
                console.log('nada')
            }
        }

    }
    clear.addEventListener('click',filtroClear);
