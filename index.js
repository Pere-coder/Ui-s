const dataStore = [];

function getdata() {
var user = document.getElementById('username').value;
var password = document.getElementById('password').value;
var cpassword = document.getElementById('cpassword').value;

if (password != cpassword){
    document.getElementById('password_msg').innerHTML = 'password mismatch'
    document.getElementById('fields_msg').innerHTML = 'null'
}else if (password == cpassword){
    document.getElementById('password_msg').innerHTML = null
    document.getElementById('fields_msg').innerHTML = 'null'
}


if (!user || !password || !cpassword ){
    document.getElementById('fields_msg').innerHTML = 'please fill all fields '
}else if (user || password || cpassword){
    dataStore.push(`username: ${user}`);
    dataStore.push(`password: ${password}`);
    dataStore.push(`confirmed password: ${cpassword}`);
    document.getElementById('fields_msg').innerHTML = 'success';



}



}
