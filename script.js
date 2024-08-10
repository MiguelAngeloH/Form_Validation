document.addEventListener('DOMContentLoaded',function() {

    const form = document.getElementById('mainForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if(checkInputs()){
            showModal();
        }
    });

    name.addEventListener('input', () => {
            validateField(name, name.value.trim() !== '', 'Name cannot be blank');
        });
     email.addEventListener('input', () => {
                validateField(email, isEmail(email.value.trim()),'Invalid email address');
        });
    phone.addEventListener('input', () => {
                validateField(phone, isPhone(phone.value.trim()),'Not a valid phone number');
        });
    password.addEventListener('input', ()=> {
                validateField(password, password.value.trim().length >= 8,'Password must be at least 8 characters long');
        });
    message.addEventListener('input', ()=> {
                validateField(message, message.value.trim() !== '','Message cannot be blank or empty');
        });
            function checkInputs(){
                let isValid = true;
                validateField(name, name.value.trim() !== '','Name cannot be blanks');
                validateField(email, isEmail(email.value.trim()),'Invalid email address');
                validateField(phone, isPhone(phone.value.trim()),'Not a valid phone number');
                validateField(password, password.value.trim().length >= 8,'Password must be at least 8 characters long');
                validateField(message, message.value.trim() !== '','Message cannot be blank or empty');
         
                document.querySelectorAll('.form-control').forEach((control) => {
                    if(control.classList.contains('error')){
                        isValid = false;
                    }
                });
                return isValid;

            }

            function validateField(input, condition, errorMessage){
                if(condition){
                    setSuccess(input);
                }else{
                    setError(input, errorMessage);
                }
            }

            function setError(input,message){
                const formControl = input.parentElement;
                const icon = formControl.querySelector('.icon');
                formControl.className = 'form-control error';
                icon.className = 'icon fas fa-times-circle';
                input.placeholder=message;
            }
            function setSuccess(input){
                const formControl = input.parentElement;
                const icon = formControl.querySelector('.icon');
                formControl.className = 'form-control success';
                icon.className = 'icon fas fa-check-circle';
            }
            function isEmail(email){
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
            }
            function isPhone(phone){
                return /^\+?(\d.*){3,}$/.test(phone);
                // return /^\+\d{1,3}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
            }
            function showModal(){
                const modal = document.getElementById('successModal');
                modal.style.display = 'block';

                const closeBtn = document.querySelector('.close-button');
                closeBtn.onclick = function(){
                  modal.style.display = 'none';
                };

                window.onclick = function(event){
                    if(event.target === modal){
                        modal.style.display = 'none';
                    }
                };
            }
});