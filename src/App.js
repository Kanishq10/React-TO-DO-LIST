import './App.css';
import Header from "./MyComponents/Header";
import {ToDos} from "./MyComponents/ToDos";
import {AddTodo} from './MyComponents/AddTodo';
import {Footer} from "./MyComponents/Footer";
import {useState,useEffect} from 'react';
import {About} from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initodo;
  if(localStorage.getItem("todos")===null){
    initodo=[];
  }
  else{
    initodo=JSON.parse(localStorage.getItem("todos"));
  }


  const addtodo=(title,desc)=>{
    console.log("I am adding element");
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]); //... operator is a javascript operator which pass all elements of an array settodos is adding old array plus some new array
    console.log(...todos);
    localStorage.setItem("todos",JSON.stringify(todos));
  };


  const onDelete=(todo)=>{
    // Deleting this way will not do anything in react we need to use useState hook
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);  
    setTodos(todos.filter((e)=>{ //array.filter(function) returns a array which have passed some condition
      return e!==todo; //returning elements which are not same as todo or return elements other than todo
    }));    
  };

  const [todos,setTodos]=useState(initodo);//this is usestate method setTodos will update the todos usestate has value for todos 
   
  useEffect(() => { //UseEffect hook it will execute or update the following condition when todos is changed
     localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);

  
  return (
    <Router>
     <Header title="My to do list" searchbar={false} />
     <Switch>
          <Route exact path="/">
            <>
            <AddTodo addtodo={addtodo}/>
            <ToDos todos={todos} onDelete={onDelete}/>
            <Footer/>
            </>
          </Route>
          <Route exact path="/about" render={()=>{ return <About />}}>            
          </Route>
          {/* render is optional we can use both method simple or by render */}
        </Switch> 
    </Router>
  );
}

export default App;
