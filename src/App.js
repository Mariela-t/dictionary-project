import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Space" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Mariela-t/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source
            </a>{" "}
            code by Mariela Tinoco Rojas
          </small>
        </footer>
      </div>
    </div>
  );
}
