//buat variabel
let URL = 'https://api.github.com/repos/galihap76/text-to-speech-python'
let data_repository = document.getElementsByClassName('data-repository')


//ambil variabel URL
//di mana ini akan menangkap endpoint nya
fetch(URL)

//parsing data JSON
.then(res => res.json())

//tampilkan data ke dokumen HTML
.then(data => {
    for (let i = 0; i < data_repository.length; i++) {
        data_repository[0].innerHTML = `<h1>${data.description}</h1>`
        data_repository[1].innerHTML = `<h1>${data.stargazers_count}</h1>`
        data_repository[2].innerHTML = `<h1>${data.topics}</h1>`
        data_repository[3].innerHTML = `<h1>${data.forks}</h1>`
    }
})
