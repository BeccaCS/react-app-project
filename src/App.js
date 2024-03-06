import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1> Weather App</h1>

        <footer>
          This project is created by{" "}
          <a href="https://rebeccaseepaul.netlify.app/" target="_blank">
            Rebecca Seepaul{" "}
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/BeccaCS/react-app-project"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
