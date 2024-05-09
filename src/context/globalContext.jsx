import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "AUTH_READY":
      return { ...state, authReady: true };
    default:
      return state;
  }
};

export default function globalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
  });

  return (
    <GlobalContext.Provider value={{ ...state,dispatch }}>
      {children}{" "}
    </GlobalContext.Provider>
  );
}
