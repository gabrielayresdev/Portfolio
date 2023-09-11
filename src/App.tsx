import Home from "./Pages/Home";
import styles from "./App.module.sass";
import Main from "./Components/Sections/Main/Main";
import ProjectContextProvider from "./Contexts/ProjectContext";

function App() {
  return (
    <div className={styles.app}>
      <ProjectContextProvider>
        <Home />
      </ProjectContextProvider>
    </div>
  );
}

export default App;
