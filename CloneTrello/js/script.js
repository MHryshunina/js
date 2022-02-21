let boardBlock = document.querySelector('.trello-board')
let newBoard = document.querySelector('.new-board-item')
let colorInner = document.querySelector('.input--color')

// виклик функції закриття модального вікна (...), коли натиснуто кнопку btn-close

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-close')) {
        removeModal()
    }
} )

//  функція відкриття модального вікна (...)

function changeBoard(el) {
    let board = el.parentElement.parentElement
    console.log(board)

    let modalBoard = document.createElement('div')
    modalBoard.className = 'modal-wrapper'
    modalBoard.innerHTML = `<div class="modal-wrapper">
    <div class="modal">
            <div class="modal-header">
                <h2>Редактирование борды</h2>
                <span class="btn btn-close">&times;</span>
            </div>
            <div class="modal-body">
                <span>Цвет борды <input type="color" class="input--color"></span> <span class="btn btn-confirm">Confirm</span>                  
            </div>
            <div class="modal-footer">
                <span class="btn btn-delete">Delete Board</span>
            </div>
    </div>
</div>`
    document.body.append(modalBoard)
    
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-delete')) {
            
            deleteBoard(board)
        }
    } )
    
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-confirm')) {
            changeColorBoard(board)
        }
    } ) 
}

// функція закриття модального вікна (...)

function removeModal() {
    if(document.querySelector('.modal-wrapper')) {
        document.querySelector('.modal-wrapper').remove()
    }    
}

// функція зміни кротору борди

function changeColorBoard(el) {
    let colorInner = document.querySelector('.input--color')
    el.style.background = colorInner.value
}

// функція видалення борди

function deleteBoard(el) {
    el.remove()
    removeModal()
}

//  функція додавання нового завдання

function addTask(el) {
    let test = el.parentElement.querySelector('.new-task-item').value
    if (test == '') {
        alert('Вы не ввели название задания!')
    } else {
        let newTask = el.parentElement.querySelector('.new-task-item')
        task = document.createElement('li')
        task.className = 'task'
        task.draggable = true
        let nameTask = newTask.value
        task.innerHTML = `<span>${nameTask}</span><button onclick="deleteTask(this)" class="delete-task-button">&times;</button>`
        el.parentElement.previousElementSibling.querySelector('.tasks__list').append(task)
        el.parentElement.querySelector('.new-task-item').value = ''
    }
}

//  функція додавання нової борди

function addBoard(el) {
    // let test = document.querySelector('.new-board-item').value
    // if (test == '') {
    //     alert('Вы не ввели название борды!')
    // } else {
        let board = document.createElement('div')
        board.className = 'trello-block'
        // let title = newBoard.value
        board.innerHTML = `
        <div class="trello-block-heading">
            <strong class="trello-block-heading-text" contenteditable="true">My Board</strong>
            <button class="trello-block-heading-btn" onclick="changeBoard(this)">...</button>
        </div>
        <div class="trello-block-body">
            <ul class="tasks__list">
            </ul>
        </div>
        <div class="task-button-block">
                <input type="text" class="new-task-item" placeholder="Another task...">
                <button class="task-button" onclick="addTask(this)">Add</button>
        </div>
        `
        boardBlock.append(board)
    //     document.querySelector('.new-board-item').value = ''
    // }
}

//  функція видалення завдання

function deleteTask(element) { 
    element.parentElement.remove()
}

// переміщення карточок в середині борди (працює тільки у першій), не виходить обновляти змінну tasksListElement

let tasksListElement = document.querySelector(`.tasks__list`)
let taskElements = tasksListElement.querySelectorAll(`.task`)

window.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`)
})

window.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`)
})

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
  const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
  
  return nextElement;
}

tasksListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault()
  
  const activeElement = tasksListElement.querySelector(`.selected`)
  const currentElement = evt.target
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`task`)
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = getNextElement(evt.clientY, currentElement);
  
  if (
    nextElement && 
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return
  }
		
	tasksListElement.insertBefore(activeElement, nextElement)
})
                
    