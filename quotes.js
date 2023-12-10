
const quoteBtn=document.getElementById('quote-btn');

const quoteEl=document.getElementById('quote');


function generateQuote(){
    const xhr= new XMLHttpRequest();
   
    xhr.open('GET','https://type.fit/api/quotes/');
    
    xhr.onreadystatechange=function (){
        let quoteObject;
        if(this.readyState===4){
            if(this.status===200){
            const data= JSON.parse(this.responseText);
            const filterData=data.filter(quote=>{
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];
                // console.log(randomQuote.text)
                 quoteObject = {
                    text: randomQuote.text,
                    author: randomQuote.author
                  };
                console.log((quoteObject.text))
                quoteEl.innerHTML=`${quoteObject.text} ( ${quoteObject.author} )`;
            })
            
             
           
            }else{
                quoteEl.innerHTML='Something went wrong(Not funny)';

            }
            // getRandomquote();
        }
    };
xhr.send();
}
quoteBtn.addEventListener('click',generateQuote)
document.addEventListener('DOMContentLoaded', generateQuote);



// xhr.send();


