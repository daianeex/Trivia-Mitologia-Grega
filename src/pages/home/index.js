
export default () => {
    const containerHome = document.createElement("div");

    const templateHome = `
    <div class="containerHome"><img src="../../imgs/imglogo.png" alt="Logo" />
    <p class="paragraphWel">Seja bem-vindo ao
    Trivia sobre mitogia grega
    Daiane, está preparada?</p>
    <button id="btnPrincipal">Começar</button></div>
    `;

    containerHome.innerHTML = templateHome;

    return containerHome;
}