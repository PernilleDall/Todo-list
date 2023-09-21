export default function Button (text, onClick) {
    const button = document.createElement ("button");
    button.textContent = text;
    button.addEventListener("click", onClick, () => {

    } );
    return button;
}