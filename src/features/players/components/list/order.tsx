interface OrderListPlayersProps {
  orderBy: string;
  setOrderBy: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export const OrderListPlayers: React.FC<
  OrderListPlayersProps
> = ({ orderBy, setOrderBy }) => {
  return (
    <>
      <div className="grid grid-cols-1">
        <select
          id="sort"
          name="sort"
          autoComplete="off"
          value={orderBy}
          defaultValue="disabled"
          onChange={(e) =>
            setOrderBy(e.target.value)
          }
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          <option value="name">Nome</option>
          <option value="position">
            Posição
          </option>
          <option value="status">Status</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        >
          <path
            fill-rule="evenodd"
            d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};
