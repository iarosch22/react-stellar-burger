import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../appHeader/appHeader";

function App() {
  return (
    <div className={`${styles.app} pt-10 pl-10 pr-10`}>
      	<AppHeader />
    </div>
  );
}

export default App;
