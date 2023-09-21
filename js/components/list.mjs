import Button from "./button.mjs";

export default function List(task) {
    const list = document.createElement("div");
    const text = document.createElement("p");
    text.innerText = task;

    list.appendChild(text);
    list.appendChild(Button("x",() => {

    }))
    return list;
}