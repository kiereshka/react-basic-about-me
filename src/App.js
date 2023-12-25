import Avatar from "./components/Avatar.js";
import General from "./components/General.js";
import MySkills from "./components/MySkills.js";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <General />
        <MySkills />
      </div>
    </div>
  );
}
