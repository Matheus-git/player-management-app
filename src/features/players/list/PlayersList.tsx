import { useReducer, ChangeEvent } from "react";
import { FilterListPlayers } from "./PureComponents/filter";
import { OrderListPlayers } from "./PureComponents/order";
import { usePlayers } from "@/app/provider";
import playersReducer from "./PlayersListReducer";
import { List } from "./PureComponents/list";

export const PlayersList = () => {
  const { players: playersContext } =
    usePlayers();

  const [players, dispatch] = useReducer(
    playersReducer,
    playersContext
  );

  function handleClickFilterText(
    e: ChangeEvent<HTMLInputElement>
  ) {
    dispatch({
      type: "SET_FILTER_TEXT",
      filter: {
        text: e.target.value,
      },
    });
  }

  function handleClickFilterOrder(
    e: ChangeEvent<HTMLSelectElement>
  ) {
    dispatch({
      type: "SET_FILTER_ORDER",
      filter: {
        orderBy: e.target.value,
      },
    });
  }

  return (
    <>
      <div className="flex mt-2 gap-2">
        <div className="flex-3 rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <FilterListPlayers
            onChange={handleClickFilterText}
          />
        </div>
        <div className="flex-1">
          <OrderListPlayers
            onChange={handleClickFilterOrder}
          />
        </div>
      </div>
      <List players={players} />
    </>
  );
};
