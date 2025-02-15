import { ChangeEventHandler } from "react";

interface FieldsProps {
  formData: {
    currentStatus: string;
  };
  handleChange: ChangeEventHandler<
    HTMLSelectElement | HTMLInputElement
  >;
}

export const Fields: React.FC<FieldsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <div className="sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Status
        </label>
        <select
          id="sort"
          name="sort"
          autoComplete="off"
          value={formData.currentStatus}
          onChange={handleChange}
          defaultValue={formData.currentStatus}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          <option value="Active">Active</option>
          <option value="Injured">Injured</option>
          <option value="Suspended">
            Suspended
          </option>
        </select>
      </div>
    </>
  );
};
