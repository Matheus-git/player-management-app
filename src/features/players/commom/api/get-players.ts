import players from "@/stores/players.json";

import { player } from "../types/players";

export const getPlayers = (): player[] => {
  const playersStorage =
    localStorage.getItem("players");

  let playersArray = players;

  if (playersStorage) {
    playersArray = JSON.parse(playersStorage);
  }

  return [...playersArray].sort(
    (playerA, playerB) => {
      return playerA.name.localeCompare(
        playerB.name
      );
    }
  );
};
