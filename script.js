
function save(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
    
  let formFields = JSON.stringify(Object.fromEntries(formData));
  console.log(formFields);
}
