"use client";

import { createContext, useState } from "react";

interface PopupState {
  privacy: boolean;
  [key: string]: boolean;
}

interface PopupContextType {
  open: PopupState;
  setOpen: React.Dispatch<React.SetStateAction<PopupState>>;
}

export const PopupContext = createContext<PopupContextType | null>(null);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<PopupState>({ privacy: false });

  return (
    <PopupContext.Provider value={{ open, setOpen }}>
      {children}
    </PopupContext.Provider>
  );
}
