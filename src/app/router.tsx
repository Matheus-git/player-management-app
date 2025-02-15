import { Routes, Route } from "react-router";
import List from "./routes/player/list";
import Details from "./routes/player/details";
import Edit from "./routes/player/edit";

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
        element={<Edit />}
      />
    </Routes>
  );
};
