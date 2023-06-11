const dataStore = [];

function getdata() {
var user = document.getElementById('username').value;
var password = document.getElementById('password').value;
var cpassword = document.getElementById('cpassword').value;
var age = document.getElementById('age').value;

if (password != cpassword){
    document.getElementById('password_msg').innerHTML = 'password mismatch;'
    document.getElementById('fields_msg').innerHTML = ''
}else if (password == cpassword){
    document.getElementById('password_msg').innerHTML = ''
    document.getElementById('fields_msg').innerHTML = ''
}
if (age < 5){
    document.getElementById('fields_msg').innerHTML = 'you are too young to fill this;'
}else if (age > 100){
    document.getElementById('fields_msg').innerHTML = 'you are too old to fill this;'
}




if (!user || !password || !cpassword ){
    document.getElementById('fields_msg').innerHTML = 'please fill all fields;'
}else if (user || password || cpassword){
    dataStore.push(`username: ${user}`);
    dataStore.push(`password: ${password}`);
    dataStore.push(`confirmed password: ${cpassword}`);
    // document.getElementById('fields_msg').innerHTML = 'success';



}



}
