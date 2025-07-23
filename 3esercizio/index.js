// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permetterà di:
// Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
// Creare un checkbox per ogni task aggiunto.

/**
 * USA:
 * innerText
 * innerHtml
 * classList.add
 * classList.remove
 * classList.toggle
 * createElement
 * appenChild
 * remove
 * setAttribute
 */

const input = document.querySelector("input");
input.setAttribute("placeholder", "aggiungi un task");

function addProduct() {
  const task = input.value.trim();
  if (task === "") {
    input.setAttribute("placeholder", "per favore inserisci un task");
    return;
  } else {
    input.setAttribute("placeholder", "aggiungi un task");
  }
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  li.innerText = task;
  li.appendChild(checkbox);
  ul.appendChild(li);
  input.value = ""; // pulisce l'input dopo l'aggiunta del task
}
