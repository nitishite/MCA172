document.getElementById("fetchDogs").addEventListener('click', () => {
    fetch('./dog.json')
        .then(res => res.json())
        .then(fetch => {
            fetch.forEach(data => {
                // var nunu = console.log(data.author + ' by ' + data.title)
                var num = document.createElement("para")
                // nunu.textContent = data.author + ' by ' + data.title;
                num.innerHTML = `<hr><b>Breed</b> : ${data.breed} <br> <b>Color</b> : ${data.color} <br> <b>Country</b> : ${data.country}<br><hr><br>`
                document.getElementById("dog").appendChild(num)
            })
        })

})