const form = document.getElementById('input')
const taskList = document.getElementById('tarefas')

form.onsubmit = function (a) {
  a.preventDefault()
  const inputField = document.getElementById('input-tarefas')
  addTask(inputField.value)
  form.reset()
}

function addTask(description) {
  if (description == false) {
   
    alert("Favor não deixar o formulário em branco");
  } 

  else{
     const taskContainer = document.createElement('div')
    const newTask = document.createElement('input')
    const taskLabel = document.createElement('label')
    const taskDescriptionNode = document.createTextNode(description)

    newTask.setAttribute('type', 'checkbox')
    newTask.setAttribute('name', description)
    newTask.setAttribute('id', description)

    taskLabel.setAttribute('for', description)
    taskLabel.appendChild(taskDescriptionNode)

    taskContainer.classList.add('task-item')
    taskContainer.appendChild(newTask)
    taskContainer.appendChild(taskLabel)

    taskList.appendChild(taskContainer)
  }
 
}

/*form.addEventListener('submit', function (event) {
  for (let input of this.elements) {
    if (!input.value) {
      input.setAttribute('disabled', true)
    }
  }*/
