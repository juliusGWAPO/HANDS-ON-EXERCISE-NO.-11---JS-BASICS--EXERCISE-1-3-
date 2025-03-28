const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const fullNameElement = document.getElementById('fullName');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNameValue = firstName.value.trim();
    const middleNameValue = middleName.value.trim();
    const lastNameValue = lastName.value.trim();

    const fullName = `${firstNameValue} ${middleNameValue} ${lastNameValue}`;

    fullNameElement.textContent = fullName;
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {

    fullNameElement.textContent = '';
});