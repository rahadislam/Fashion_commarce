import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';
import Update from './components/Todo/Update';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompleteTask from './components/Todo/CompleteTask';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/todo' element={<Todo></Todo>}></Route>
          <Route path='/complete' element={<CompleteTask></CompleteTask>}></Route>
          <Route path='/update/:id' element={<Update></Update>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
