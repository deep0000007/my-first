let btn= document.querySelector('button');
let ul= document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click',function(){
    console.log(inp.value);

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add('delete');


    item.appendChild(delBtn);
    inp.value="";
    ul.appendChild(item);
});

ul.addEventListener('click', function(event){
    if (event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('del');
    }
});

