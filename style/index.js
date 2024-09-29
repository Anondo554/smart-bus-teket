// const sit = document.getElementById("available-sit").innerText
// const convartSit = parseInt(sit);
// console.log(convartSit)





const allBtn = document.getElementsByClassName('btn');
console.log(allBtn)

for(const btn of allBtn){ 
        btn.addEventListener('click',function(event){ 
                const sitNo = event.target.parentNode.childNodes[1].innerText;  


                const selecteadId = document.getElementById('Seat'); 

                const div = document.createElement('div');
                div.classList.add("flex gap-10");

                 const p1 = document.createElement('p'); 
                 const p2 = document.createElement('p'); 
                 const p3 = document.createElement('p');

                 p1.innerText = sitNo;  
                 p2.innerText = 550;

                 div.appendChild(p1);
                 div.appendChild(p2);
                 div.appendChild(p3);

                 selecteadId.appendChild(div)
        })
        
}





 function getConvateadValue(id){
        const SetValue = document.getElementById(id).innerText;
        const convartSit= parseInt(SetValue);
        return convartSit;
 }
const result = getConvateadValue("selected-sit");
console.log(result)