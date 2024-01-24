interface HabitProps {
  completed: number
}

const Habits = (props: HabitProps) => {
  return (
    <div className="text-white bg-zinc-900">{props.completed}</div>
  )
}

export default Habits