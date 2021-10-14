const list = document.querySelector('.list')
const addTaskButton = document.querySelector('.input__btn')
const input = document.querySelector('.input')

let tasks = ['Привет Мир!']

function render() {
    tasks.forEach((task) => {
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.innerHTML = '-'
        btn.className = 'button'
        li.innerHTML = task
        li.appendChild(btn)
        list.append(li)
        tasks.length = 0
        btn.addEventListener('click', () => {
            list.removeChild(li)
        })
    })
}


addTaskButton.addEventListener('click', () => {
    if (input.value) {
        tasks.push(input.value)
        input.value = ''
        render()
    }
    else {
        alert("Введите название!")
    }
})

render()