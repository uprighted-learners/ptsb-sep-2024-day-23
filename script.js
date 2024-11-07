const btn = document.getElementById('btn')

const clickFunction = () => {
    console.log('Hello world')
    // add an element to the DOM
    const div = document.createElement('div')
    div.textContent = 'our team is the best'
    document.body.appendChild(div)
}

btn.addEventListener("click", clickFunction)


// function handleSubmit() {
//     const username = document.getElementById('username').value
//     const email = document.getElementById('email').value

//     if (username && email) {
//         const app = document.getElementById('app')
//         app.innerHTML = `
//         <div>
//             <h1>Hello ${username}</h1>
//             <p>Your email is ${email}</p>
//         </div>
//         `

//         // clear the username and email fields
//         document.getElementById('username').value = ''
//         document.getElementById('email').value = ''
//     } else {
//         alert('Please enter your name and email')
//     }
// }

const form = document.getElementById('myForm')
const app = document.getElementById('app')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    // get the values from the form
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value

    if (username && email) {
        const app = document.getElementById('app')
        app.innerHTML = `
        <div>
            <h1 class="title">Hello ${username}</h1>
            <p>Your email is ${email}</p>
        </div>
        `

        // clear the username and email fields
        document.getElementById('username').value = ''
        document.getElementById('email').value = ''
    } else {
        alert('Please enter your name and email')
    }
})