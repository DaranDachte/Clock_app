import { createContext } from "react";

type CtxValue = {
  upDateAdvice: () => Promise<void>;
  getAdviceData: () => Promise<void>;
  getLocation: () => Promise<void>;
  getWorldtime: () => Promise<void>;
};

export const ApplicationContext = createContext<CtxValue>({
  upDateAdvice: function (): void {
    throw new Error("Function not implemented.");
  },
  getAdviceData: function (): void {
    throw new Error("Function not implemented.");
  },

  getLocation: function (): void {
    throw new Error("Function not implemented.");
  },
  getWorldtime: function (): void {
    throw new Error("Function not implemented.");
  },
});
