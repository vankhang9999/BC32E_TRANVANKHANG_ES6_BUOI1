const text1 = document.querySelector('.heading').innerHTML

const jumtext=[...text1]
console.log(jumtext)
function jumText(){
    let html='';
    for (const value of jumtext){
       html+=`
           <span>${value}</span>
        `;
    }
    document.querySelector('.heading').innerHTML=html;
}
window.onload=()=>{
    jumText()
}