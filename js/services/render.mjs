import inputItem from "../components/input.mjs";
import List from "../components/list.mjs";


export default function render() {
const root = document.querySelector('#root');
root.innerHTML = "";


root.appendChild(inputItem());
root.appendChild(List());
}