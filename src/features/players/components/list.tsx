import { getPlayers } from "../api/get-players";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

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
  return (
    <>
      <div className="flex mt-2 gap-2">
        <div className="flex-3 rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Filtre por posição ou nome"
            className="w-full block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1">
            <select
              id="sort"
              name="sort"
              autoComplete="off"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option value="" disabled selected>
                Ordenar por
              </option>
              <option value="name">Nome</option>
              <option value="position">
                Posição
              </option>
              <option value="status">
                Status
              </option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="divide-y divide-gray-100"
      >
        {getPlayers().map((player) => (
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
