export default function Button (text, onClick) {
    const button = document.createElement ("button");
    button.textContent = text;
    button.addEventListener("click", onClick, () => {
        const li = document.createElement("li");
        const text = document.createElement("p");
        li.appendChild(text);
    } );
    return button;
}