document.getElementsByTagName("h1")[0].innerText = 'DOM Manipulation';
document.getElementById('container').style.backgroundColor = 'lightblue';
let ul = document.getElementsByTagName('ul')[0];
let li = document.createElement('li');
li.textContent = 'Item 7';
ul.appendChild(li);

document.getElementsByTagName('li')[0].style.color = 'crimson';
document.getElementsByTagName('li')[2].style.backgroundColor = 'pink';
document.getElementsByTagName('li')[4].style.backgroundColor = 'yellow';
document.getElementsByTagName('li')[6].style.backgroundColor = 'lightGray';
document.getElementsByTagName('li')[6].style.color = 'royalBlue';

li = document.createElement('li');
li.textContent = 'Anant Batgali';
ul.appendChild(li);

let itemToRemove = document.getElementsByTagName('li')[3];
ul.removeChild(itemToRemove);

let btn = document.getElementById('btn');
btn.innerHTML = '<i>' + btn.textContent + '</i>';
btn.style.backgroundColor = 'rebeccapurple';
btn.style.color = 'white';
btn.style.border = '1px solid white';

