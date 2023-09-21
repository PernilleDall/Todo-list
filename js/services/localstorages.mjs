import List from "../components/list.mjs";

export function saveData () {
    localStorage.setItem("task", List.innerHTML);
}
export function getData () {
List.innerHTML = localStorage.getItem("task");
}
getData();