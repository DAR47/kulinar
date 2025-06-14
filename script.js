//Slider//
rightBtn = document.querySelector("#rightBtn");
leftBtn = document.querySelector("#leftBtn");
submit = document.querySelector(".submit");
searchText = document.querySelector(".search").textContent;
val = "";
let r1 =[];

let v = 0;



submit.onclick = subEvent;
leftBtn.onclick = leftEvent;
rightBtn.onclick = leftEvent;
a = 0;
b = 400;
c = 100;
count = 0;
r = 0;
function subEvent(){
    for (let i = 0; i < 5; i++){
        let symb = document.getElementsByClassName("recipesTitle")[i].title;
        
        for (let j = 0; j < symb.length; j++){
            if (symb[j] == " "){
                r1[v] = val;
                v ++;
                
            }
            val += symb[j]
            if (symb[j] == " "){
                val = "";
            }
        } 
        v = 0;
        
        for (let l = 0; l < r1.length; l++){   
           
                console.log(r1);
                
                if (r1[l] != document.querySelector(".search").value){
                    document.getElementsByClassName("recipesBlock")[i].style.display = "none";
                    
                    
                }
                else{
                    document.getElementsByClassName("recipesBlock")[i].style.display = "flex";
                    console.log(r1[l]);
                    break;
                }
                
            
            
        }
        
        
     r1 = [];   
    }
}

function leftEvent(){
    
    a = a + 45;
    if (count == 0){
        document.querySelector(".introImgs").style.transform = "translateX("+ a + "%)";
        document.querySelector("#introImg3").style.transform = "translateX("+ -(b)+ "%)";
        document.querySelector("#recipe1").style.opacity = 0;
        document.querySelector("#recipe2").style.opacity = 1;
        document.querySelector("#recipe1").style.transform = "translateX(50%)";
        document.querySelector("#recipe3").style.transform = "translateX(0%)";

        
    }
    if (count == 1){
        document.querySelector(".introImgs").style.transform = "translateX("+ a + "%)";
        document.querySelector("#introImg2").style.transform = "translateX("+ -(b) + "%)";
        document.querySelector("#recipe2").style.opacity = 0;
        document.querySelector("#recipe3").style.opacity = 1;
        document.querySelector("#recipe1").style.transform = "translateX(0%)";
        document.querySelector("#recipe2").style.transform = "translateX(50%)";

        
        


    }
    if (count == 2){
        document.querySelector(".introImgs").style.transform = "translateX("+ a + "%)";
        document.querySelector("#introImg1").style.transform = "translateX("+ -(b) + "%)";
        document.querySelector("#recipe1").style.opacity = 1;
        document.querySelector("#recipe2").style.opacity = 0;
        document.querySelector("#recipe3").style.opacity = 0;
        document.querySelector("#recipe2").style.transform = "translateX(0%)";
        document.querySelector("#recipe3").style.transform = "translateX(50%)";

        console.log(count);
        
        count = -1;
        b += 300;
    }
    b = b + 50;
    count = count + 1
    
}
function rightEvent(){
    
    a = a - 45;
    if (count == 0){
        document.querySelector(".introImgs").style.transform = "translateX("+ a + "%)";
        count = 2;
    }
    else if (count == 1){
        document.querySelector(".introImgs").style.transform = "translateX("+ a + "%)";
        document.querySelector("#introImg3").style.transform = "translateX("+ b + "%)";
        count = 0;
    }
    else {
        document.querySelector(".introImgs").style.transform = "translateX("+ a + "%)";
        document.querySelector("#introImg2").style.transform = "translateX("+ b + "%)";
        count = 1;
        b += 300;
    }
    
}
