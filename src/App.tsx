import Home from "./Pages/Home";
import styles from "./App.module.sass";
import Main from "./Components/Sections/Main/Main";

function App() {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
