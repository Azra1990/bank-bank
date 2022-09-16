const logingButton = document.getElementById('login-submit');

logingButton.addEventListener('click' , function(){
    const userEmail = document.getElementById('user-email').value
    const userPassword = document.getElementById('user-password').value
    if (userEmail == 'alam@.com' && userPassword == 'azra' ){
        window.location.href = 'banking.html'
    }
    else{
        // alert = 'your entered email or password is not correct'
        const error = document.getElementById('error');
        error.style.display = 'block' ; 
    }
    
})