function login(){
    const uname = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(uname == "kashan" && pass == "123"){
       location.assign("https://raja-kashan-ali.github.io/Weather_App/")
    }else{
        alert("You have enterd wrong user name or password correct user name is 'kashan' and correct password is '123' ")
    }
}