import Button from "./components/button.mjs"
import inputItem from "./components/input.mjs";

function render () {
    const root = document.querySelector("#root");
    const btn = Button ("Click me", () => {
        console.log("trykket på knappen");
    });
    const input = inputItem ("task");

    root.appendChild(btn);
    root.appendChild(input);
    
    
}
render ();