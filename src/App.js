import './App.css';
import {useState} from 'react';

function App() {
    const initialList = [
        {id:0, value: "Do homework", isCompleted: true},
        {id:1, value: "Do poop", isCompleted: false}
    ];
    const [tasks, setTasks] = useState(initialList);

    return (
        <div>
            <h1>ToDoList</h1>
            <List tasks = {tasks} setTasks = {setTasks} />
        </div>
    );
}

function List({tasks, setTasks}) {
    function handleChange(taskId, nextIsCompleted) {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {...task, isCompleted: nextIsCompleted};
            }

            return task;
        }));
    }

    function handleNameChange(taskId, nextValue) {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {...task, value: nextValue};
            }

            return task;
        }));
    }

    return (
        <ul>
            {tasks.map(task => (
                <li>
                    <input
                        type = "checkbox"
                        checked = {task.isCompleted}
                        onChange = {e => {
                            handleChange(task.id, e.target.checked);
                        }}
                    />
                    <input
                        className = {task.isCompleted ? "strike input" : "input"}
                        value = {task.value}
                        onChange = { e => {
                            handleNameChange(task.id, e.target.value);
                        }}
                        disabled = {task.isCompleted}
                    />
                </li>
            ))}
        </ul>
    );
}

export default App;
