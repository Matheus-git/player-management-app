import players from "@/stores/players.json";

import { player } from "../types/players";

export const getPlayers = (): player[] => {
  return players.sort((playerA, playerB) => {
    return playerA.name.localeCompare(
      playerB.name
    );
  });
};
