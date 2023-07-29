import "./App.css";
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import Footer from "./components/Footer";
import React , {useState,useEffect} from 'react';
import {About} from "./components/About";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
   initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  let onDelete= (todo)=>{
    console.log("I am ondelte of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("I'm adding This Todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=1;
    }else{

      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

  }
  

  const [todos,setTodos]=useState(initTodo)
  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
   
  }, [todos])

  return (
    <>
    <Router>
    {/* we can many number of props */}
      <Header title="ApnaGhar" searchBar={false} />
      {/* <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/> */}
          <Routes>
          <Route excat path="/" element={
            
              <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
              </>}>
          </Route>
          <Route excat path="/about" element={
            <>
              <About />
            </>
          }>
            
          </Route>
         
        </Routes> 


      <Footer />
    </Router>
    </>
  );
}

export default App;
