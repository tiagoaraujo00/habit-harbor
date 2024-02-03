// import Habit from "./components/Habit";
import "./styles/global.css";
import logoImage from "./assets/logo.svg";
import { Plus } from 'phosphor-react';

export function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-full max-w-5xl gap-16 px-6">
        <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
          <img src={logoImage} alt="logo" />
          <button
            type="button"
            className="flex items-center gap-3 px-6 py-4 font-semibold border rounded-lg border-violet-500 hover:border-violet-300"
          >
            <Plus size={20} className="text-violet-500" />
            Novo hábito
          </button>
        </div>
      </div>
    </div>
  );
}
