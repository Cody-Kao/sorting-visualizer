import { ChangeEvent } from "react";
import { AlgorithmOptions } from "../Lib/types";

export default function SelectAlgorithm({
  options,
  defaultOption,
  isDisabled,
  handleChange,
}: {
  options: AlgorithmOptions[];
  defaultOption: string;
  isDisabled: boolean;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="relative inline-block w-48">
      <select
        disabled={isDisabled}
        onChange={handleChange}
        defaultValue={defaultOption}
        className="bg-system-purple10 border-system-purple20 focus:shadow-outline block h-8 w-full appearance-none rounded-lg border px-4 py-1 pr-8 leading-tight text-gray-300 shadow focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="h-4 w-4 fill-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
