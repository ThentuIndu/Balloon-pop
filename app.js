let pop=0;
document.addEventListener('mouseover', function(e){
    if (e.target.className == "ball"){
        e.target.style.backgroundColor = "#ededed" ;
        e.target.textContent= "POP!!";
        pop++;
        removeEvent(e);
        checkAllPopped();
    }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover',function(){

    })
};

function checkAllPopped(){
    if(pop == 22){
        console.log('all popped!!');
        let gallery= document.querySelector('#b2');
        let message= document.querySelector('#b1');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};