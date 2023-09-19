import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import { TodoWrapper } from './components/TodoWrapper';
import { EditTodoForm } from './components/EditTodoForm'


function App() {
  const {id} = useParams()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/update/:id" element={<EditTodoForm />} />
      </Routes>
    </div >
  );
}

export default App;
