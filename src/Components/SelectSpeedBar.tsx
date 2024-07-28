import { ChangeEvent } from "react";
import { MAXANIMATIONSPEED, MINANIMATIONSPEED, STEP } from "../Lib/const";

export default function SelectSpeedBar({
  min = MINANIMATIONSPEED,
  max = MAXANIMATIONSPEED,
  step = STEP,
  value,
  isDisabled,
  handleChange,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  isDisabled: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-center text-gray-300">Slow</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
      />
      <span className="text-center text-gray-300">Fast</span>
    </div>
  );
}
