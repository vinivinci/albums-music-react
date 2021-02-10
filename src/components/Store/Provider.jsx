import React from "react";
import Context from "./Context";
import useStorege from "../../utils/useStorage";

const StoreProvider = ({ children}) => {
  const [token, setToken] = useStorege("token");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
        {children}
    </Context.Provider>
  );
};

export default StoreProvider;
