import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../appHeader/appHeader";
import Content from "../content/content";
import React from "react";

function App() {
  const URL = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = React.useState({
    ingredientData: null,
    loading: true
  });

  React.useEffect(() => {
    const getIngredientData = async () => {
      setState( {...state, loading: true} );
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
      const data = await res.json();
      console.log(data);
      setState( {ingredientData: data, loading: false} );
    }

    getIngredientData();
  }, [])

  return (
    <div className={`${styles.app} pt-10 pl-10 pr-10`}>
      	<AppHeader />
        <Content data={data}/>
    </div>
  );
}

export default App;
