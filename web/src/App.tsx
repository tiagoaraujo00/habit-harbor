// import Habit from "./components/Habit";
import "./styles/global.css";
import logoImage from './assets/logo.svg';

export function App() {
  return( 
  <div className="flex items-center justify-center w-screen h-screen">
    <div className="flex flex-col w-full max-w-5xl gap-16 px-6">
    <img src={logoImage} alt="logo" />
    </div>
  </div>
  )
}