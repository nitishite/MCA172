document.getElementById('btn').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            // console.log(data.message);
            var img = document.createElement('img')
            img.src = data.message;
            img.style.height = '500px';
            img.style.width = '500px';
            document.getElementById('demo').innerHTML = '';
            document.getElementById('demo').appendChild(img)
        })



})