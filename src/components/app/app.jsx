import styles from "./app.module.css";
import AppHeader from "../appHeader/appHeader";
import Content from "../content/content";
import React from "react";
import Modal from "../modal/modal";
import { data } from "../../utils/data";

function App() {
  const URL = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = React.useState({
    ingredientData: null,
    loading: true
  });

  // React.useEffect(() => {
  //   const getIngredientData = async () => {
  //     setState( {...state, loading: true} );
  //     fetch(URL)
  //     .then(res => res.json())
  //     .then(data => setState( {ingredientData: data.data, loading: false} ))
  //     .catch(e => console.log(e))
  //   }

  //   getIngredientData();
  // }, [])

  const { ingredientData, loading } = state;

  return (
    <>
      <div className={`${styles.app} pt-10 pl-10 pr-10`}>
          <AppHeader />
          {/* {
            !loading &&
            <Content data={ingredientData} />
          } */}
          <Content data={data}/>
      </div>
    </>

  );
}

export default App;
