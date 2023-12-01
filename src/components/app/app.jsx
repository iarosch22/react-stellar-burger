import styles from "./app.module.css";
import AppHeader from "../appHeader/appHeader";
import Content from "../content/content";
import React from "react";
import { checkReponse, getIngredientData } from "../../utils/burger-api";

function App() {
  const URL = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = React.useState({
    ingredientData: null,
    loading: false,
    hasError: false
  });

  React.useEffect(() => {
    // const getIngredientData = async () => {
    //   setState( {...state, loading: true} );
    //   fetch(URL)
    //   .then(checkReponse)
    //   .then(data => setState( {ingredientData: data.data, loading: false} ))
    //   .catch(e => setState( {...state, hasError: true, loading: false} ))
    // }

    // getIngredientData();
      getIngredientData(URL)
      .then(data => setState( {ingredientData: data.data, loading: false} ))
      .catch(e => setState( {...state, hasError: true, loading: false} ))
  }, [])

  const { ingredientData, loading, hasError } = state;

  return (
    <>
      <div className={`${styles.app} pt-10 pl-10 pr-10`}>
          <AppHeader />
          { loading && 'Загрузка...' }
          {
            !loading &&
            !hasError &&
            ingredientData &&
            <Content data={ingredientData} />
          }
          { hasError && 'Произошла ошибка. Обновите страницу'}
      </div>
    </>

  );
}

export default App;
