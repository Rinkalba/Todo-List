
import React , {useState} from 'react';


export default function AddTodo({addTodo}) {
    const [title,setTitle]=useState("");
    const [desc, setDesc] = useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description REQUIRED!")
        }else{

            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
   
  return (
    <div className="container">
        <h4 className="text-center my-3">Add a Todo</h4>
      <form onSubmit={submit} id="create-course-form">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="exampleInputEmail1"
            
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
           
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
