import React, {useState} from "react";
import css from "react-native-web/dist/exports/StyleSheet/css";



export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newTime, setNewTime] = useState('');
    function handleChange(e) {
        setNewName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName, newTime);
        setNewName("");
        setNewTime("");
        setEditing(false);
    }
    const editingTemplate = (
        //TODO: ALSO SOME WORK ON ACCESSIBILITY COULD GO HERE
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id} className="todo-text" type="text" />
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn todo-cancel"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate = (//TODO: THIS COULD USE SOME WORK. MAKE IT LOOK ALL BIG AND NICE
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    <span>{props.name} </span>

                    <span style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>{props.time} </span>

                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
