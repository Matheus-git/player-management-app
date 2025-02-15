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

type PlayersAction = {
  type: "SET_PLAYER";
  player: player;
};

const noop = () => {};
const PlayersDispatchContext =
  createContext<Dispatch<PlayersAction>>(noop);

export const usePlayers = () => {
  return useContext(PlayersContext);
};

export const usePlayersDispatch = () => {
  return useContext(PlayersDispatchContext);
};

const playersReducer: Reducer<
  player[],
  PlayersAction
> = (state = [], action) => {
  switch (action.type) {
    case "SET_PLAYER":
      const updatedPlayers = state.some(
        (p) => p.id === action.player.id
      )
        ? state.map((p) =>
            p.id === action.player.id
              ? action.player
              : p
          )
        : [...state, action.player];

      localStorage.setItem(
        "players",
        JSON.stringify(updatedPlayers)
      );
      return updatedPlayers;
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
