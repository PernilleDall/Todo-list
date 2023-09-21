import Button from "./button.mjs";



export default function inputItem (task) {
    const container = document.createElement("div");
    const textfield = document.createElement("input");
    textfield.value = task;
    textfield.type = "text";
    container.appendChild(textfield);
    container.appendChild(Button("Add", () => {
        //her skal det være et eller annet sdom gjør at det er en adde funksjon
    }));
return container;
}
