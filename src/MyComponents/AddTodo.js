import React from 'react';
import { useState } from 'react';

export const AddTodo = ({ addtodo }) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (x) => {
        x.preventDefault();
        if (!title || !desc) {
            alert("Please fill all details");
        }
        else {
            addtodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-4">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-outline-primary">Submit</button>
            </form>
        </div>
    )
}
//1.59 youtube