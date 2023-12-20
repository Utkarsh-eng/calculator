let input = document.getElementById('inputBox');
let buttons=  document.querySelectorAll('button');
let answer = "";
arr = Array.from(buttons);
arr.forEach(i =>{
    i.addEventListener('click',(element)=>
    {
        if(element.target.innerHTML == '=')
        {
            answer = eval(answer);
            input.value = answer;
        }
           else if(element.target.innerHTML == 'AC'){
            answer = "";
            input.value = answer;
           }
           else if(element.target.innerHTML == 'DEL')
           {
            answer = answer.substring(0,answer.length-1);
            input.value = answer;
           }
         else{
           answer+=element.target.innerHTML;
           input.value=answer;
        }
    })   
})
