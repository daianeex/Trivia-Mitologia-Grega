export default () => {
    const containerResult = document.createElement("div");

    const templateResult = `
    <div class="containerResult">
    <h1 class="titleResult">PARABENS</h1>
    <h2>Você ganhou !</h2>
    <h3>Você acertou:
    5/5</h3>
    <button id="btnPrincipal">Jogar novamente </button></div>

    `;

    containerResult.innerHTML = templateResult;

    return containerResult;
}