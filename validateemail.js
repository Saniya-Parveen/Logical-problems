function validateEmail(emailId){
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailId);
}
const emailId = 'saniya@gmail.com';
if(validateEmail(emailId)){
    console.log('its is email address');
}else{
    console.log('it is not email address');
}
