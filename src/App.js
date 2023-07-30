import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <form className='TodoForm'>
      <input type='text' className='todo-input' placeholder='What is the tast today?' />
      <button type='submit' className='todo-btn'></button>
    </form>
  );
}

export default App;
