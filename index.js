const btn = document.getElementById('btn');
const joke = document.getElementById('joke');


btn.addEventListener('click', ()=>{
    getdata(); 
})

function generateRandomColors(){
    const colors = ['#62CBE5', '#EA676D', '#7D8EE1', '#4BC076', '#FDB858', '#EC6F91', '#2295D7']
    return colors[Math.floor(Math.random() * colors.length)]
}


async function getdata(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
}

    
const res = await fetch('https://icanhazdadjoke.com', config);
const data = await res.json();
// console.log(data.joke);

const container = document.createElement('div');
    container.classList.add('container');
    joke.innerText = `${data.joke}`;
    btn.style.backgroundColor = generateRandomColors();
}

getdata();