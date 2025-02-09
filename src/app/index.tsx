import { PlayersProvider } from "./provider";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <PlayersProvider>
      <AppRouter />
    </PlayersProvider>
  );
};
