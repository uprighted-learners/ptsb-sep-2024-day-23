const btn = document.getElementById('btn')

const clickFunction = () => {
    console.log('Hello world')
    // add an element to the DOM
    const div = document.createElement('div')
    div.textContent = 'our team is the best'
    document.body.appendChild(div)
}

btn.addEventListener("click", clickFunction)

