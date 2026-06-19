function redirecionar(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const captcha = document.getElementById("captcha").checked;

    if (!captcha) {
        alert("Por favor, confirme que você é humano.");
        return;
    }

    if (email.includes("@pais")) {
        window.location.href = "../PAIS/inicioPA.html";
    } else if (email.includes("@professor")) {
        window.location.href = "../PROFESSOR/inicioPR.html";
    } else {
        alert("E-mail inválido. Use um e-mail @pais ou @professor.");
    }
}