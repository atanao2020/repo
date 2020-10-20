console.log("index.js is running")

const something = axios.get('https://api.github.com/users/mapbox')
    .then(function(response) {
        console.log("first axios back")
        console.log(response.data)
		console.log(response.data.starred_url)
    })
    .catch(function(err){
        console.log(err)
    })

console.log(something)

// axios.get('http://localhost:3000/book')
//     .then(function(response){
//         console.log("Our API!")
//         console.log(response.data)

//         const apiDataPlace = document.querySelector('#our-api-data')
//         const bballPlayerArray = response.data

//         bballPlayerArray.forEach(function(bballPlayer){
//             const newDivElement = document.createElement('div')
//             newDivElement.innerHTML = bballPlayer.title
//             apiDataPlace.appendChild(newDivElement)
//         })
//     })
//     .catch(function(err){
//         console.log(err)
//     })

//=================================================================================

function handleSubmitAlbum(event) {
    event.preventDefault()
    console.log(event.target)
    console.log("Submitting the ALBUM form")
    
    console.log(this)
    var formData = new FormData(albumForm);
    console.log("form data")
    console.log(formData)
    
    axios.post('http://localhost:3000/albums', formData)
}
  
const albumForm = document.querySelector('#new-album-form')

albumForm.addEventListener('submit', function(event) {
    event.preventDefault()
    
    console.log(event)
    console.log("Submitting the ALBUM form")
    
    var formData = new FormData(albumForm);
    console.log("form data")
    console.log(formData)
    
    axios.post('http://localhost:3000/albums', formData)
})

// albumForm.addEventListener('submit', handleSubmitAlbum)

axios.get('http://localhost:3000/')
    .then(function(response) {
        console.log("OUR API!")
        console.log(response.data)
    })
    .catch(function(err) {
        console.log(err)
    })
    
    axios.get('http://localhost:3000/albums')
    .then(function(response) {
        console.log("OUR API!")
        console.log(response.data)
        
        const recordsSection = document.querySelector('#all-records-section')
        
        const allRecords = response.data
        
        allRecords.forEach(function(record) {
            const newDivElement = document.createElement('div')
            newDivElement.innerHTML = record.title + ' ,' + record.author + ' ,' + record.yearPublished + ' ,' + record.edition
            recordsSection.appendChild(newDivElement)
        })
    })
    .catch(function(err) {
        console.log(err)
    })

console.log("END OF FILE?")