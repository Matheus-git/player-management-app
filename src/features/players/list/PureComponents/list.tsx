import { player } from "@/features/players/commom/types/players";
import { Link } from "react-router";

interface ListProps {
  players: player[];
}

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

export const List: React.FC<ListProps> = ({
  players,
}) => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100"
    >
      {players.map((player, index) => (
        <Link
          to={"/" + player.id}
          key={player.id}
        >
          <li
            className={`mt-1 rounded-2xl flex justify-between gap-x-6 gap-y-2 p-5 ${
              index % 2 === 0
                ? "bg-gray-50"
                : "bg-gray-100"
            }`}
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
        </Link>
      ))}
    </ul>
  );
};
