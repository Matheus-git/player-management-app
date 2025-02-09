import { Routes, Route } from "react-router";
import List from "./routes/player/list";
import Details from "./routes/player/details";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route
        path="/:playerId"
        element={<Details />}
      />
      <Route
        path="/:playerId/edit"
        element={<Details />}
      />
    </Routes>
  );
};
