import Home from "./Pages/Home";
import styles from "./App.module.sass";
import Main from "./Components/Sections/Main";

function App() {
  return (
    <div className={styles.app}>
      <Home />
      <Main />
    </div>
  );
}

export default App;
