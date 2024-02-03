// import Habit from "./components/Habit";
import Header from "./components/Header";
import "./styles/global.css";

export function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-full max-w-5xl gap-16 px-6">
        <Header />
      </div>
    </div>
  );
}
