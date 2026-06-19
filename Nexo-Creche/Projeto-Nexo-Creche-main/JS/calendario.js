const calendario =
    document.getElementById("calendarioPais");

const textoData =
    document.getElementById("textoData");

calendario.addEventListener("change", () => {

    const [ano, mes, dia] =
        calendario.value.split("-");

    textoData.innerText =
        `${dia}/${mes}/${ano}`;
});