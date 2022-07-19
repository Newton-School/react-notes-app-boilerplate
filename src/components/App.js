import React, { useState } from "react";
import "../styles/App.css";

const Note = () => {
    return (
        <div className="note">
            <div className="tools">
                <button className="edit">
                    <i className="fas fa-edit"></i>
                </button>
                <button className="delete">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
            <textarea />
        </div>
    );
};

const App = () => {
    const [notes, setNotes] = useState([]);
    return (
        <div id="main">
            <button className="add" id="add">
                <i className="fas fa-plus"></i> Add note
            </button>
            {notes.map(() => {
                return <Note />;
            })}
        </div>
    );
};

export default App;
