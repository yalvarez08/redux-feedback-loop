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

    const feeling = (state = '', action) => {
    if (action.type === "SET_FEELING") {
      return action.payload;
    }
    if (action.type === "RESET_FEELING") {
        console.log(`resetting feeling: ${action.payload}`);
        return '';
    }
    return state;
  };

  const understanding = (state = '', action) => {
    if (action.type === "SET_UNDERSTANDING") {
      return action.payload;
    }
    if (action.type === "RESET_UNDERSTANDING") {
        console.log(`resetting understanding: ${action.payload}`);
        return '';
    }
    return state;
  };

  const support = (state = '', action) => {
    if (action.type === "SET_SUPPORT") {
      return action.payload;
    }
    if (action.type === "RESET_SUPPORT") {
        console.log(`resetting support: ${action.payload}`);
        return '';
    }
    return state;
  };

  const comments = (state = '', action) => {
    if (action.type === "SET_COMMENTS") {
      return action.payload;
    }
    if (action.type === "RESET_COMMENTS") {
        console.log(`resetting comments: ${action.payload}`);
        return '';
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