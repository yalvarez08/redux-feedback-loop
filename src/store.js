import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

    const feedback = (state = [], action) => {
    if (action.type === "SET_FEEDBACK") {
      console.log(`all stored feedback: ${action.payload}`);
      return action.payload;
    }
    if (action.type === "ADD_TO_FEEDBACK") {
        console.log(`feedback submitted to database: ${action.payload}`);
        return [...state, action.payload];
    }
    return state;  
    };

    const feeling = (state = 0, action) => {
    if (action.type === "SET_FEELING") {
      return action.payload;
    }
    return state;
  };

  const understanding = (state = 0, action) => {
    if (action.type === "SET_UNDERSTANDING") {
      return action.payload;
    }
    return state;
  };

  const support = (state = 0, action) => {
    if (action.type === "SET_SUPPORT") {
      return action.payload;
    }
    return state;
  };

  const comments = (state = '', action) => {
    if (action.type === "SET_COMMENTS") {
      return action.payload;
    }
    return state;
  };    

  const store = createStore(
    combineReducers({
    feedback,
    feeling,
    understanding,
    support,
    comments,
    }),
    applyMiddleware(logger)
  );

export default store