import { Routes, Route } from "react-router";
import List from "./routes/player/list";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  );
};
