import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../appHeader/appHeader";
import Content from "../content/content";

function App() {
  return (
    <div className={`${styles.app} pt-10 pl-10 pr-10`}>
      	<AppHeader />
        <Content />
    </div>
  );
}

export default App;
