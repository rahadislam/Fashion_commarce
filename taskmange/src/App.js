import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Complete from './components/Complete/Complete';
import Todo from './components/Todo/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/todo' element={<Todo></Todo>}></Route>
          <Route path='/complete' element={<Complete></Complete>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
