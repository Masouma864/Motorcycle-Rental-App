import './App.css';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-row">
        <SideBar />
        <div className="bg-primary">Hello</div>
      </div>
    </div>
  );
}

export default App;
