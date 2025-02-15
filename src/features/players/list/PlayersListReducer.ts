import { player } from "../commom/types/players";
import { usePlayers } from "@/app/provider";

type PlayersAction =
  | {
      type: "SET_FILTER_TEXT";
      filter: {
        text: string;
      };
    }
  | {
      type: "SET_FILTER_ORDER";
      filter: {
        orderBy: string;
      };
    };

export default function playersListReducer(
  state: player[],
  action: PlayersAction
) {
  const playersContext = usePlayers();

  switch (action.type) {
    case "SET_FILTER_TEXT":
      let filteredPlayers = playersContext;

      if (action.filter.text !== "") {
        filteredPlayers = filteredPlayers.filter(
          (player) =>
            [
              player.name,
              player.position.primary,
              player.status.currentStatus,
            ].some((field) =>
              field
                .toLowerCase()
                .includes(
                  action.filter.text.toLowerCase()
                )
            )
        );
      }

      return filteredPlayers;
    case "SET_FILTER_ORDER":
      return [...state].sort((a, b) =>
        action.filter.orderBy === "name"
          ? a.name.localeCompare(b.name)
          : action.filter.orderBy === "position"
          ? a.position.primary.localeCompare(
              b.position.primary
            )
          : a.status.currentStatus.localeCompare(
              b.status.currentStatus
            )
      );
    default:
      return state;
  }
}
