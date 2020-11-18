import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {

  var number = (100+30) * 7 / 7;

  try {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://raw.githubusercontent.com/zio4272/neppplus-2011-hello-react/main/public/2.gif' className='App-logo' alt="logo" />
          <Hello />
          <p>
            <span className='num'>{number}</span>
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
  } catch (err) {
    console.log(err)
    return
  }
}

export default App;
