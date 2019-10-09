let h1 = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let ul = document.querySelector('ul.likes');
let submit = document.getElementById('submit');
let i = 0;
let likes = [];
let divComments = document.getElementById('list');
let ulComments = document.createElement('ul');
divComments.appendChild(ulComments);

// document.addEventListener('DOMContentLoaded', setInterval(increase, 1000));
let counter = setInterval(increase, 1000);

function increase(){
    i++;
    h1.innerHTML = i;
}

minus.addEventListener('click', function(){
    // let j = parseInt(h1.innerHTML);
    i--;
    h1.innerHTML = i;
});

plus.addEventListener('click', function(){
    i++;
    h1.innerHTML = i;
})

heart.addEventListener('click', function(){
    if (likes[i] === undefined){
        let li = document.createElement('li');
        li.innerHTML = `${i} has been liked 1 times`;
        likes[i] = 1;
        li.id = `${i}likes`;
        ul.appendChild(li);
    } else {
        let li = document.getElementById(`${i}likes`);
        li.innerHTML = `${i} has been liked ${++likes[i]} times`;
    }
})

pause.addEventListener('click', function(){
    if (!counter){
        counter = setInterval(increase, 1000);
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;       
    } else {
        clearInterval(counter);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        counter = null;
    }
})

submit.addEventListener('click', function(event){
    event.preventDefault();
    let commentLi = document.createElement('li');
    commentLi.innerHTML = document.getElementById('comment-input').value;
    console.log(commentLi);
    ulComments.appendChild(commentLi);
    document.getElementById('comment-input').value = '';
})