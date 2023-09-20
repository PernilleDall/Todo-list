import Button from "./components/button.mjs"

function render () {
    const root = document.querySelector("#root");
    const button = Button ("Click me", () => {
        console.log("trykket på knappen");
    });
    root.appendChild(button);
    
}
render ();