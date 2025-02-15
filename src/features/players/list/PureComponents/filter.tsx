import { ChangeEventHandler } from "react";

interface FilterListPlayersProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FilterListPlayers: React.FC<
  FilterListPlayersProps
> = ({ onChange }) => {
  return (
    <>
      <input
        id="username"
        name="username"
        type="text"
        onChange={onChange}
        placeholder="Filtre por posição ou nome"
        className="w-full block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
      />
    </>
  );
};
