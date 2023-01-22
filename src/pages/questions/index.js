
export default () => {
    const containerQuestions = document.createElement("div");

    const templateQuestions = `
        <div>
        <p> Quais foram os três grandes
        deuses que derrotaram 
        Cronos?
        </p></div>
        <div>
        <h3>Do Sol, do vinho e da terra.
        </h3></div>        
    `;

    containerQuestions.innerHTML = templateQuestions;

    return containerQuestions;
}