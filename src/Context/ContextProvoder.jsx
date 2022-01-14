import React from "react";
export const context = React.createContext();

export function ContextProvoder({ children }) {
  const [editBox, setEditBox] = React.useState(false);

  const value = { editBox, setEditBox };
  return <context.Provider value={value}>{children}</context.Provider>;
}
