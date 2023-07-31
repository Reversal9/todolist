import './App.css';
import {useState} from 'react';

function App() {
    const initialList = [
        {id:-1, value: "Do homework", isCompleted: true},
        {id:-2, value: "Do poop", isCompleted: false}
    ];
    const [id, setId] = useState(0);
    const [tasks, setTasks] = useState(initialList);

    return (
        <div>
            <div
                className = "inline">
                    <h1>ToDoList</h1>
                    <button
                        className = "add-button"
                        onClick={() => {
                            setTasks([...tasks,
                                {id: id, value: "", isCompleted: false}])
                            setId(id + 1);
                    }}>+</button>
            </div>

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
