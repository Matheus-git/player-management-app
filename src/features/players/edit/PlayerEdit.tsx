import { Fields } from "./PureComponents/fields";

export const PlayerEdit = () => {
  function handleSave() {
    return null;
  }
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <Fields />
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={handleSave}
          className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};
