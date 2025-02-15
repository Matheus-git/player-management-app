import React, {
  createContext,
  useContext,
  useReducer,
  Reducer,
  Dispatch,
} from "react";
import { player } from "@/features/players/commom/types/players";
import { getPlayers } from "@/features/players/commom/api/get-players";

const PlayersContext = createContext<player[]>(
  getPlayers()
);

const PlayersDispatchContext =
  createContext<Dispatch<PlayersAction> | null>(
    null
  );

export const usePlayers = () => {
  return useContext(PlayersContext);
};

export const usePlayersDispatch = () => {
  return useContext(PlayersDispatchContext);
};

type PlayersAction = {
  type: "SET_PLAYER";
  player: player;
};

const playersReducer: Reducer<
  player[],
  PlayersAction
> = (state = [], action) => {
  switch (action.type) {
    case "SET_PLAYER":
      return [...state, action.player];
    default:
      return state;
  }
};

interface PlayersProviderProps {
  children: React.ReactNode;
}

export const PlayersProvider: React.FC<
  PlayersProviderProps
> = ({ children }) => {
  const [players, dispatch] = useReducer(
    playersReducer,
    getPlayers()
  );

  return (
    <PlayersContext.Provider value={players}>
      <PlayersDispatchContext.Provider
        value={dispatch}
      >
        {children}
      </PlayersDispatchContext.Provider>
    </PlayersContext.Provider>
  );
};
