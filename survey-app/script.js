// capturing the surveyForm and summary divs
const surveyForm = document.getElementById('surveyForm');
const summary = document.getElementById('summary');

// event listener for the form submission
surveyForm.addEventListener("submit", (event) => {
    // prevent the form from reloading the page
    event.preventDefault();

    // get the values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const satisfaction = document.querySelector(`input[name="satisfaction"]:checked`).value;

    // get selected contact methods
    const contactMethods = Array.from(document.querySelectorAll(`input[name="contact"]:checked`)).map(checkbox => checkbox.value);

    // validate that at least one contact method was selected
    if (contactMethods.length === 0) {
        alert('Please select at least one contact method');
        return;
    }

    // display a summary of the survey response
    summary.innerHTML = `
    <h3>Survey Summary</h3>
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
    <p>Satisfaction: ${satisfaction}</p>
    <p>Preferred Contact Methods: ${contactMethods.join(', ')}</p>
    `

    // clear the form
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.querySelectorAll('input[name="satisfaction"]').forEach(radio => radio.checked = false);
    document.querySelectorAll('input[name="contact"]').forEach(checkbox => checkbox.checked = false);
})