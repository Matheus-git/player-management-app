import { ChangeEventHandler } from "react";

interface OrderListPlayersProps {
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const OrderListPlayers: React.FC<
  OrderListPlayersProps
> = ({ onChange }) => {
  return (
    <>
      <div className="grid grid-cols-1">
        <select
          id="sort"
          name="sort"
          autoComplete="off"
          defaultValue="disabled"
          onChange={onChange}
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
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pointer-events-none col-start-1
          row-start-1 mr-2 size-5 self-center
          justify-self-end text-black-500 sm:size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </div>
    </>
  );
};
