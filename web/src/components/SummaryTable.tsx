import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import HabitDay from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimunSummaryDatesSize = 18 *7
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length

const SummaryTable = () => {
  return (
    <div className="flex w-full">
      <div className="grid grid-flow-row gap-3 grid-rows-7">
        {weekDays.map((day, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center w-10 h-10 text-xl font-bold text-zinc-400"
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-flow-col gap-3 grid-rows-7">
        {summaryDates.map((date) => (
          <HabitDay key={date.toString()} />
        ))}
        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
          return (
            <div key={i} className="w-10 h-10 border-2 rounded-lg cursor-not-allowed bg-zinc-900 border-zinc-800 opacity-40" />
          )
        })}
      </div>
    </div>
  );
};

export default SummaryTable;
