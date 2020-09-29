window.onload = function(){
    let num;
        document.getElementById("decrease").onclick = function(){

          num = document.getElementById("count_num").innerText;
           num = parseInt(num) -1;

            if(num < 0){
                document.getElementById("count_num").style.color = "red";

            }
            if(num == 0){
                
                document.getElementById("count_num").style.color = "#102A42";  

            }
           document.getElementById("count_num").innerHTML = num;
          
           
        }
        document.getElementById("increase").onclick = function(){

        num = document.getElementById("count_num").innerText;
        num = parseInt(num) +1;

        if(num > 0){
            document.getElementById("count_num").style.color = "green";

        }
        if(num == 0){
                
                document.getElementById("count_num").style.color = "#102A42";  

            }

        document.getElementById("count_num").innerHTML = num;


        }

        document.getElementById("reset").onclick = function(){
            document.getElementById("count_num").style.color = "#102A42";
            document.getElementById("count_num").innerHTML =0;
            
            }




}

