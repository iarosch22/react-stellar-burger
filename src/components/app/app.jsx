import styles from "./app.module.css";
import AppHeader from "../appHeader/appHeader";
import Content from "../content/content";
import { useEffect, useState } from "react";
import { checkReponse, getIngredientData } from "../../utils/burger-api";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

function App() {
  const [state, setState] = useState({
    ingredientData: null,
    loading: false,
    hasError: false
  });

  useEffect(() => {
      getIngredientData()
      .then(data => setState( {ingredientData: data.data, loading: false} ))
      .catch(e => setState( {...state, hasError: true, loading: false} ))
  }, [])

  const { ingredientData, loading, hasError } = state;

  // const dispatch = useDispatch();

  // const { ingredients } = useSelector(store => store.ingredients);

  // useEffect(() => {
  //   dispatch(getIngredients());
  // }, [dispatch])

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
