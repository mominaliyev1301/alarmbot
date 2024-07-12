function yarat(){
    var div = document.createElement('div');
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var p = document.createElement('p');

    var i1 = document.createElement('i');

    i1.classList.add('fa-solid');
    i1.classList.add('fa-trash');
    console.log(i1);

    var listdiv = document.getElementById('listdiv');
    var inp1 = document.getElementById('inp1');
    var inp2 = document.getElementById('inp2');

    div.style.width = "100%";
    div.style.height = "7vh";
    div.style.backgroundColor = "blue";
    div.style.marginTop = "5px";
    div.style.display = "inline-flex";
    div.style.justifyContent = "space-between"

    div1.style.width = "30%"
    div1.style.height = "7vh";
    div1.style.display = "inline-flex";
    div1.style.alignItems = "center";
    div1.style.backgroundColor = "purple"
    div1.style.borderBottom = "1px solid grey";

    div2.style.width = "40%"
    div2.style.height = "7vh";
    div2.style.backgroundColor = "red" 

    p.innerText = inp1.value + ":" + inp2.value 
    p.style.color = "grey";
    p.style.fontSize = "20pt"
    div2.appendChild(i1);
    div1.appendChild(p);
    div.appendChild(div1);
    div.appendChild(div2);
    
    listdiv.appendChild(div);

}