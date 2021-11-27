import throttle from "lodash.throttle";

// const form = document.querySelector(".feedback-form");
// const textarea = document.querySelector(".feedback-form textarea");
// const input = document.querySelector(".feedback-form input");

// const STORAGE_KEY_JSON = localStorage.getItem('feedback-form-state');
// const STORAGE_KEY = JSON.parse(STORAGE_KEY_JSON);

// const formData = {};

// if (STORAGE_KEY !== null) {
//     input.value = STORAGE_KEY.email;
//     textarea.value = STORAGE_KEY.message;
// };

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     updateFormDataFull();
//     evt.target.reset();

//     console.log(STORAGE_KEY, JSON.parse(localStorage.getItem(STORAGE_KEY)));
//     localStorage.removeItem(STORAGE_KEY);
// };


// const formInputListener = e => {
//     formData[e.target.name] = e.target.value;
    
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };



// const populateTextarea = () => {
//     const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     if (savedMessage && savedMessage.email) {
//         input.value = savedMessage.email;
//     };

//     if (savedMessage && savedMessage.message) {
//         textarea.value = savedMessage.message;
//     };
// };

// populateTextarea();

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(formInputListener, 1000));


const feedbackForm = document.querySelector(".feedback-form");

const savedFormDataJSON = localStorage.getItem('feedback-form-state');
const savedFormData = JSON.parse(savedFormDataJSON);

if (savedFormData !== null) {
    feedbackForm["email"].value = savedFormData.email;
    feedbackForm["message"].value = savedFormData.message;
};

feedbackForm.addEventListener('input', throttle(event => {
    const formData = { email: `${feedbackForm["email"].value}`, message: `${feedbackForm["message"].value}` };
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem("feedback-form-state", formDataJSON);
}, 500));

feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const formData = { email: `${feedbackForm["email"].value}`, message: `${feedbackForm["message"].value}` };
    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    feedbackForm["email"].value = "";
    feedbackForm["message"].value = "";
});