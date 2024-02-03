import HabitDay from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const SummaryTable = () => {
  return (
    <div className="flex w-full">
      <div className="grid grid-flow-row gap-3 grid-rows-7">
        {weekDays.map((day, index) => {
          return (
            <div key={index} className="flex items-center justify-center w-10 h-10 text-xl font-bold text-zinc-400">
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-flow-col gap-3 grid-rows-7">
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
      </div>
    </div>
  );
};

export default SummaryTable;
