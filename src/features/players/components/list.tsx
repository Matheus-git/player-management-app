import { getPlayers } from "../api/get-players";

export const ListPlayers = () => {
  return <>{JSON.stringify(getPlayers())}</>;
};
