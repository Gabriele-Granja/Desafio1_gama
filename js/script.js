
        function salvarForm(){
           if (localStorage.cont) {
              localStorage.cont = Number(localStorage.cont)+1;
           } else {
              localStorage.cont = 1;
           }
           
           cad = document.getElementById('nome').value + ';' + document.getElementById('email').value;
           localStorage.setItem("cad_"+localStorage.cont,cad);
           
           let rightContainer = document.getElementById('rightContainer')
           
           
        }
        
       