import React from "react";
import { TaskProvider } from "./taskContext";

function AppProviders({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <TaskProvider>
      {children}
    </TaskProvider>
  );
}

export default AppProviders;
