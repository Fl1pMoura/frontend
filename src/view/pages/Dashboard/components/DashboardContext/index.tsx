import { createContext, useCallback, useEffect, useState } from "react";

export interface DashboardContextValue {
  areValuesVisible: boolean,
  toggleValuesVisibility(): void,
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  // Carregar o valor do localStorage ou definir o padrão como `true`
  const [areValuesVisible, setAreValuesVisible] = useState(() => {
    const savedValue = localStorage.getItem("areValuesVisible");
    return savedValue ? JSON.parse(savedValue) : true;
  });

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState: boolean) => !prevState);
  }, []);

  // Salvar o valor no localStorage sempre que `areValuesVisible` mudar
  useEffect(() => {
    localStorage.setItem("areValuesVisible", JSON.stringify(areValuesVisible));
  }, [areValuesVisible]);

  return (
    <DashboardContext.Provider value={{ areValuesVisible, toggleValuesVisibility }}>
      {children}
    </DashboardContext.Provider>
  );
}
