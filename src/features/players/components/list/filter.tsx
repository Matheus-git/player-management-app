interface FilterListPlayersProps {
  filter: string;
  setFilter: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export const FilterListPlayers: React.FC<
  FilterListPlayersProps
> = ({ filter, setFilter }) => {
  return (
    <>
      <input
        id="username"
        name="username"
        type="text"
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        placeholder="Filtre por posição ou nome"
        className="w-full block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
      />
    </>
  );
};
