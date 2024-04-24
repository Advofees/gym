import React, { createContext } from "react";
import { useSnackbar } from "notistack";

const AppContext = createContext();

function AppProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();

  const snackNotifier = (message, variant = "success", position = "bottom") => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3000,
      anchorOrigin: position
        ? (() => {
            const V_ANCHOR_ORIGINS = ["top", "bottom"];
            const H_ANCHOR_ORIGINS = ["left", "right", "center"];
            const positions = position.split("-").slice(0, 2);
            return {
              vertical: V_ANCHOR_ORIGINS.includes("" + positions[0])
                ? positions[0]
                : "bottom",
              horizontal: H_ANCHOR_ORIGINS.includes("" + positions[1])
                ? positions[1]
                : "left",
            };
          })()
        : { vertical: "bottom", horizontal: "left" },
    });
  };

  const contextData = {
    snackNotifier,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
