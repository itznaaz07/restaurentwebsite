
     let btn=document.querySelector('button');
     let ul=document.querySelector('ul');
     let inp=document.querySelector('input');
     let li=document.querySelectorAll('li');
     btn.addEventListener('click',()=>{
        let item=document.createElement('li');
        item.innerText=inp.value
        ul.append(item)
        inp.value="";
        let delb=document.createElement('button');
        delb.innerText='Delete'
        item.append(delb);
        delb.addEventListener('click',()=>{
            item.remove();
        
        })//if needed lst code is on entire btns
     })
     ul.addEventListener('click',(event)=>{
      if(event.target.nodeName=='BUTTON'){
         let lstitem=event.target.parentElement;
         lstitem.remove();
         console.log(lstitem)
        
     }});
    