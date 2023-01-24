import './style.css';
import './assets/images/reload.png';
import './assets/images/enter.png';
import './assets/images/more.png';

const toDoListArray = [
  {
    description: 'Wash the Dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'Get Approved by Code Reviewer',
    completed: false,
    index: 3,
  },
];

const loadList = () => {
  const ul = document.querySelector('#ulList');
  let aux = '';
  toDoListArray.forEach((task) => {
    if (!task.completed) {
      aux += `<li>
              <input type="checkbox" id="${task.index}" name="checkbox${task.index}"></input>
              <p>${task.description}</p>
              <a class="more" href="...">
                <img class="more" src="./assets/images/more.png" alt="more" />
              </a>
            </li>`;
    }
  });
  ul.innerHTML = aux;
};

loadList();
