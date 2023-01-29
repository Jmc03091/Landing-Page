const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const button = document.querySelector('button');
const errorMsg = document.querySelector('#errorMsg');
const error = document.querySelectorAll('.error');

button.addEventListener('click', (e) => {
    if(password.value != confirmPassword.value){
    e.preventDefault();
    error[0].style = "border:0px solid #EE0000;outline: 1px solid #EE0000;"
    error[1].style = "border:0px solid #EE0000;outline: 1px solid #EE0000;"
    errorMsg.style.display = "block";
    errorMsg.textContent = "*Passwords do not match";
  }
  else if(!password.value || !confirmPassword.value){
    e.preventDefault();
    error[0].style = "border:0px solid #EE0000;outline: 1px solid #EE0000;"
    error[1].style = "border:0px solid #EE0000;outline: 1px solid #EE0000;"
    errorMsg.style.display = "block";
    errorMsg.textContent = "*Need a valid entry";
  }
  else return true;
     
  
});


  
  

