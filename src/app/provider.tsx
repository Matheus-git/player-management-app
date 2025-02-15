import React, {
  createContext,
  useContext,
  useState,
} from "react";
import { player } from "@/features/players/commom/types/players";
import { getPlayers } from "@/features/players/commom/api/get-players";

interface PlayersContextType {
  players: player[];
  setPlayers: React.Dispatch<
    React.SetStateAction<player[]>
  >;
  updatePlayer: (
    id: string,
    newPlayerData: Partial<player>
  ) => void;
}

const PlayersContext = createContext<
  PlayersContextType | undefined
>(undefined);

export const usePlayers = () => {
  const context = useContext(PlayersContext);
  if (!context) {
    throw new Error(
      "usePlayers deve ser usado dentro de um PlayersProvider"
    );
  }
  return context;
};

interface PlayersProviderProps {
  children: React.ReactNode;
}

export const PlayersProvider: React.FC<
  PlayersProviderProps
> = ({ children }) => {
  const [players, setPlayers] = useState<
    player[]
  >(getPlayers());

  const updatePlayer = (
    id: string,
    newPlayerData: Partial<player>
  ) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === id
          ? { ...player, ...newPlayerData }
          : player
      )
    );
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        setPlayers,
        updatePlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
