// <button>Post Alfonso</button>


/*
const buttons = document.getElementsByTagName('button')

buttons[0].onclick = () => {

    const characterInfo = {
        name: 'WALL-E',
        occupation: 'Waste Allocation Robot',
        weapon: 'Head laser'
    }

    axios.post(`https://ih-crud-api.herokuapp.com/characters`, characterInfo)
        .then(response => {
            const { name, occupation } = response.data
            const html = `<li>${name} (${occupation})</li>`
            document.getElementById('characters-list').innerHTML += html
        })
        .catch(error => console.log('error:', err))
}
*/





const inputs = document.querySelectorAll('input')
const forms = document.querySelectorAll('form')

forms[0].onsubmit = e => {
    e.preventDefault()

    const characterInfo = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    axios.post(`https://ih-crud-api.herokuapp.com/characters`, characterInfo)
        .then(response => {
            const { name, occupation } = response.data
            const html = `<li>${name} (${occupation})</li>`
            document.getElementById('characters-list').innerHTML += html

            forms[0].reset()
        })
        .catch(error => console.log('error:', error))
}



forms[1].onsubmit = e => {
    e.preventDefault()

    const id = inputs[3].value

    axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
        .then(response => {
            const { name, occupation, weapon } = response.data
            inputs[4].value = name
            inputs[5].value = occupation
            inputs[6].value = weapon

            forms[1].reset()
        })
        .catch(error => console.log('error:', error))
}


forms[2].onsubmit = e => {
    e.preventDefault()

    const characterInfo = {
        name: inputs[4].value,
        occupation: inputs[5].value,
        weapon: inputs[6].value
    }

    const id = inputs[3].value

    axios.put(`https://ih-crud-api.herokuapp.com/characters/${id}`, characterInfo)
        .then(response => {
            const { name, occupation } = response.data
            const html = `<li>${name} (${occupation})</li>`
            document.getElementById('characters-list').innerHTML += html

            forms[2].reset()
        })
        .catch(error => console.log('error:', error))
}