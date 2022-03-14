import Callback from './Callback';
import UseMemo from './UseMemo';
import './App.css';
import Fetch from './Fetch';
import Tabs from './Tabs';




function App() {
  return (
    <div className="App">
      <Fetch/>
      <br/>
      <br/>
      <br/>
      <h2>Memo</h2>
      <UseMemo/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Callback</h2>
      <Callback/>
      <br/>
      <br/>
      <Tabs/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
