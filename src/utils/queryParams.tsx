import { useLocation } from "react-router-dom";

export const queryParam = (param: string) => {
  return new URLSearchParams(useLocation().search).get(param);
};
