import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main><Dictionary defaultKeyword="lettuce"/></main>
        <footer className="App-footer">
          <small>
            This project was coded by Sonja and is{" "}
            <a href="https://github.com/code-kedi/dictionary-app-react" target="_blank" rel="noreferrer">open-sourced on Github</a>
            {" "}and{" "}<a href="https://playful-donut-fbc49a.netlify.app/" target="_blank" rel="noreferrer"> hosted on Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
