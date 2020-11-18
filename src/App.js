import logo from './logo.svg';
import './App.css';

function App() {

  let logo = 'nepp.png';
  const text = '언제 끝이 날까?';

  let number = Math.round(100 * 30 / 7).toFixed(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          {number}<br/>
          {number}
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          google search
        </a>
      </header>
    </div>
  );
}

export default App;
