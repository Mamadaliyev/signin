var users = [
    {
        username: 'Ali',
        password: '123'
    },
    {
        username: 'Bobur',
        password: '256'
    },
    {
        username: 'Navruz',
        password: '0066'
    }
];

function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var n = users.length;
    var t = false;
    for (var i = 0; i < n; ++i) {
        console.log(users[i].username + " " + users[i].password);
        if (users[i].username === user && users[i].password === pass) {
            t = true;
            window.location.href = "cabinet.html";
        }
    }
    if (!t)
        alert("Parol yoki login xato!");
}

function signup() {

    document.getElementById("xatoparol").innerHTML = "";
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    var check = document.getElementById("check").checked;
    var t = false;
    if (user === "" || email === "" || pass1 === "" || pass2 === "") {
        document.getElementById("xatoparol").innerHTML = "*Formani to'ldiring";
    } else if (pass1 !== pass2) {
        document.getElementById("xatoparol").innerHTML = "*Parol o'xshash emas";
    } else if (!check)
        document.getElementById("xatoparol").innerHTML = "*Shartlarga rozi bo'ling";
    else {
        var n = users.length;
        for (var i = 0; i < n; ++i) {
            if (users[i].username === user) {
                t = true;
                document.getElementById("xatoparol").innerHTML = "*Bunday foydalanuvchi bor";
            }
        }
        if (!t) {
            users.push({username: user, password: pass1});
            alert("Foydalanuvchi muvaffaqyatli ro'yhatdan o'tdi!");
        }
    }


}