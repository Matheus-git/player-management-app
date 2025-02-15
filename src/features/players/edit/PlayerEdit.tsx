import { Fields } from "./PureComponents/fields";
import { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router";
import {
  usePlayers,
  usePlayersDispatch,
} from "@/app/provider";
import { status } from "../commom/types/players";

export const PlayerEdit = () => {
  const navigate = useNavigate();

  let { playerId } = useParams();
  const playersContext = usePlayers();
  const playersDispatchContext =
    usePlayersDispatch();

  const foundPlayer = playersContext.find(
    (player) =>
      playerId && player.id === parseInt(playerId)
  );

  if (!foundPlayer) {
    return "";
  }

  const [formData, setFormData] =
    useState<status>({
      currentStatus:
        foundPlayer.status.currentStatus,
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { value } = e.target;
    const formDataCopy = Object.assign(
      {},
      formData
    );

    formDataCopy.currentStatus = value as
      | "Active"
      | "Injured"
      | "Suspended";

    setFormData(formDataCopy);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!foundPlayer) {
      return "";
    }
    const foundPlayerCopy = Object.assign(
      {},
      foundPlayer
    );

    foundPlayerCopy.status.currentStatus =
      formData.currentStatus;

    playersDispatchContext({
      type: "SET_PLAYER",
      player: foundPlayerCopy,
    });

    navigate(`/${foundPlayer.id}`, {
      replace: true,
    });
  };

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <form
        onSubmit={handleSubmit}
        className="space-y-12"
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Fields
            formData={formData}
            handleChange={handleChange}
          />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
