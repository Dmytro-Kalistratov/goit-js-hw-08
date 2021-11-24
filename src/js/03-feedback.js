import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input"),
};

const STORAGE_KEY = "feedback-form-state";
const formData = {};

const formInputListener = e => {
    if (e.target === refs.textarea) {
        formData["password"] = e.target.value;
    } else {
        formData[e.target.name] = e.target.value;
    };

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, formDataJSON)
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(formInputListener, 1000));

populateTextarea();

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage["email"]) {
        refs.input.value = savedMessage["email"];
    };

    if (savedMessage['password']) {
        refs.textarea.value = savedMessage["password"];
    };
};
// function onTextareaInput(evt) {
//     const message = evt.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
// };

//  if (formData[e.target.name] === refs.textarea.value) {
//         formData[e.target.name] = e.target.value;

//         localStorage.setItem(STORAGE_KEY, formData[e.target.name])
//     } else { formData[e.target.name] = e.target.value; };
    
// const formElem = document.querySelector(".feedback-form");
// const formInputs = [...formElem.getElementsByTagName("input"), ...formElem.getElementsByTagName("textarea")];

// let formDataObject = {};

// function updateFormDataFull() {
//     formInputs.forEach(input => {
//         if (input.name === "message") {
//             formDataObject["password"] = input.value;
//         }
//         else {
//             formDataObject[input.name] = input.value;
//         }
//     });
// }

// if (localStorage.getItem("feedback-form-state") !== null) {
//     formDataObject = JSON.parse(localStorage.getItem("feedback-form-state"));

//     /*console.log("restoring from storage");
//     console.log(formDataObject);*/

//     for (input in formDataObject) {
//         if (input === "password") {
//             formElem.querySelector(`[name="message"]`).value = formDataObject[input];
//         }
//         else {
//             formElem.querySelector(`[name=${input}]`).value = formDataObject[input];
//         }
//     } //restore values from storage
// }
// else { //create attributes for each form element if the storage is empty
//     updateFormDataFull();
// }
    
// function updateFormData(event) {
//     switch (event.target.name) {
//         case "message": {
//             formDataObject["password"] = event.target.value;
//             break;
//         };
//         default: {
//             formDataObject[event.target.name] = event.target.value;
//         };
//     }

//     localStorage.setItem("feedback-form-state", JSON.stringify(formDataObject));
//     /*console.log("writing to storage");
//     console.log(formDataObject);*/
// }

// function submitForm(event) {
//     event.preventDefault();

//     updateFormDataFull(); //force update data from the form (can a user be quick enough to submit before update passes the throttle? No idea but let's avoid it anyway)
//     console.log(formDataObject); //show me the data

//     formInputs.forEach(input => {
//         input.value = "";
//     }); //reset all form fields

//     localStorage.removeItem("feedback-form-state");
// }

// const throttle = require('lodash.throttle');

// formElem.addEventListener("input", throttle(updateFormData, 500));

// formElem.addEventListener("submit", submitForm);