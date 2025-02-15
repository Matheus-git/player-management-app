import {
  useParams,
  useNavigate,
} from "react-router";
import { usePlayers } from "@/app/provider";
import { ListDetails } from "./PureComponents/listDetails";

export const PlayerDetails = () => {
  const navigate = useNavigate();

  let { playerId } = useParams();
  const playersContext = usePlayers();
  const foundPlayer = playersContext.find(
    (player) =>
      playerId && player.id === parseInt(playerId)
  );
  if (!foundPlayer) {
    return "";
  }

  const handleEdit = () => {
    navigate(`/${foundPlayer.id}/edit`);
  };

  return (
    <>
      <div className="flex justify-end gap-4">
        <button
          onClick={handleEdit}
          className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Editar status
        </button>
      </div>
      <div className="mt-4 border-t border-gray-100">
        <ListDetails player={foundPlayer} />
      </div>
    </>
  );
};
