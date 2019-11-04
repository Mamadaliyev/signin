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
    for (var i = 0; i < n; ++i) {
        console.log(users[i].username + " " + users[i].password);
        if (users[i].username === user && users[i].password === pass) {
            window.location.href = "cabinet.html";
        }

    }
}
function save_content_to_file(content, filename)
{
    var dlg = false;
    with(document){
        ir=createElement('iframe');
        ir.id='ifr';
        ir.location='about.blank';
        ir.style.display='none';
        body.appendChild(ir);
        with(getElementById('ifr').contentWindow.document){
            open("text/plain", "replace");
            charset = "utf-8";
            write(content);
            close();
            document.charset = "utf-8";
            dlg = execCommand('SaveAs', false, filename+'.txt');
        }
        body.removeChild(ir);
    }
    return dlg;
}
function signup() {
    var file = "data.txt";
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    var t=false;
    if (user === "" || email === "" || pass1 === "" || pass2 === "") {
        document.getElementById("xatoparol").innerHTML = "*Formani to'ldiring";
    } else if (pass1 !== pass2) {
        document.getElementById("xatoparol").innerHTML = "*Parol mutanosib emas";
    } else {
        var n = users.length;
        for(var i = 0; i < n; ++ i)
        {
            if(users[i].username === user)
            {
                t=true;
                document.getElementById("xatoparol").innerHTML = "*Bunday foydalanuvchi bor";
            }
        }

        if(!t)
        {
           save_content_to_file("Monkey","data");
        }
    }

}