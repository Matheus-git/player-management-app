import { useParams } from "react-router";
import { usePlayers } from "@/app/provider";
import { ListDetails } from "./PureComponents/listDetails";

export const PlayerDetails = () => {
  let { playerId } = useParams();
  const { players: playersContext } =
    usePlayers();
  const foundPlayer = playersContext.find(
    (player) =>
      playerId && player.id === parseInt(playerId)
  );
  if (!foundPlayer) {
    return "";
  }
  return (
    <>
      <div className="mt-4 border-t border-gray-100">
        <ListDetails player={foundPlayer} />
      </div>
    </>
  );
};
