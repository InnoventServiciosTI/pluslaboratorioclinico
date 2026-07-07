async function logout(){
    await fetch("../api/logout.php",{
        method:"POST",
        credentials:"include"
    });
    window.location.href="../login.html";
}
