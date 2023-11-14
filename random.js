pozycja=0;
pozycja2=12;
zmienna=1


window.onload=function(){


    button = document.getElementById('button2');
    pola = document.getElementById('polaa');


    button.onclick = function() {
        button.innerHTML="Losuje gracz 2";
        
        if(zmienna==1){
            x=Math.floor(3*Math.random());
            if(pozycja==10 && x==2){
                x=0
                pozycja=pozycja+x;
            }
            else{
                pozycja=pozycja+x;
            }
            pola.innerHTML="Gracz 1 pojechał o "+x+" Pola do przodu";    
            
            if(x!=0){
                document.images[pozycja].src="glowa.jpg";
                document.images[pozycja-x].src="bialy.jpg";
                    if(pozycja==11){
                        alert('Wygrał gracz 1');
                    }
            }


            zmienna++;
        }
        else{
            button.innerHTML="Losuje gracz 1";
            y=Math.floor(3*Math.random());
            if(pozycja==22 && y==2){
                y=0
                pozycja2=pozycja2+y;
            }
            else{
                pozycja2=pozycja2+y;
            }
            
            if(y!=0){
                document.images[pozycja2].src="glowa2.jpg";
                document.images[pozycja2-y].src="bialy.jpg";
                    if(pozycja2==23){
                        alert('Wygrał gracz 2');
                    }
            }

            pola.innerHTML="Gracz 2 pojechał o "+y+" Pola do przodu"; 
 

            zmienna--;
        }
    }
}

