import { FilterListPlayers } from "./filter";
import { OrderListPlayers } from "./order";
import { usePlayers } from "@/app/provider";
import { useEffect, useState } from "react";

type statusClassType = {
  Active: string;
  Injured: string;
  Suspended: string;
};

const statusClass: statusClassType = {
  Active: "bg-emerald-500",
  Injured: "bg-red-500",
  Suspended: "bg-yellow-500",
};

export const ListPlayers = () => {
  const { players: playersContext } =
    usePlayers();
  const [players, setPlayers] = useState(
    playersContext
  );
  const [filter, setFilter] =
    useState<string>("");
  const [orderBy, setOrderBy] = useState("name");

  useEffect(() => {
    setPlayers(playersContext);
  }, [playersContext]);

  useEffect(() => {
    let filteredPlayers = players;

    if (filter !== "") {
      filteredPlayers = filteredPlayers.filter(
        (player) =>
          [
            player.name,
            player.position.primary,
            player.status.currentStatus,
          ].some((field) =>
            field
              .toLowerCase()
              .includes(filter.toLowerCase())
          )
      );
    }

    if (orderBy === "name") {
      filteredPlayers.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (orderBy === "position") {
      filteredPlayers.sort((a, b) =>
        a.position.primary.localeCompare(
          b.position.primary
        )
      );
    } else if (orderBy === "status") {
      filteredPlayers.sort((a, b) =>
        a.status.currentStatus.localeCompare(
          b.status.currentStatus
        )
      );
    }

    setPlayers(filteredPlayers);
  }, [filter, orderBy, players]);

  return (
    <>
      <div className="flex mt-2 gap-2">
        <div className="flex-3 rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <FilterListPlayers
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div className="flex-1">
          <OrderListPlayers
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        </div>
      </div>
      <ul
        role="list"
        className="divide-y divide-gray-100"
      >
        {players.map((player) => (
          <li
            key={player.id}
            className="flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={player.photo}
                className="size-12 flex-none rounded-full bg-gray-500"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {player.name}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {player.position.primary}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">
                Nº {player.jerseyNumber.number}
              </p>

              <div className="mt-1 flex items-center gap-x-1.5">
                <div
                  className={`flex-none rounded-full ${
                    statusClass[
                      player.status.currentStatus
                    ]
                  }/30 p-1`}
                >
                  <div
                    className={`size-1.5 rounded-full ${
                      statusClass[
                        player.status
                          .currentStatus
                      ]
                    }`}
                  />
                </div>
                <p className="text-xs/5 text-gray-500">
                  {player.status.currentStatus}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
