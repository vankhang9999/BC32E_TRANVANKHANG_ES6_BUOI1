




const colorList=["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];


const getElement=(id)=> document.getElementById(id)

function buttoncolor(){
    let html='';
    for (const value of colorList){
       html+=`
            <button class="color-button ${value}"onclick="ChaneColor('${value}')"></button>
        `;
    }
    document.querySelector('#colorContainer').innerHTML=html;
}


function ChaneColor(color){

    let buttons=document.querySelectorAll('button');
    
    for(const value of buttons){ 

        for(let i=0;i<value.classList.length;i++){
            if(color===value.classList[i]){
                getElement('house').classList=`house ${color}`
            }
        }

        if(value.classList.contains(color)){
            value.classList.add("active")
        }else{
            value.classList.remove("active")
        }
    }
}


 window.onload=()=>{
    buttoncolor()
 }