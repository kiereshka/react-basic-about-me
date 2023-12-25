import Skill from "./Skill.js";

export default function MySkills() {
  return (
    <ul className="skill-list">
      <Skill skillTitle="Html" skillColor="lightBlue" skillEmoji="💪" />
      <Skill skillTitle="CSS" skillColor="lightBlue" skillEmoji="👍" />
      <Skill skillTitle="React" skillColor="aqua" skillEmoji="📚" />
      <Skill skillTitle="JavaScript" skillColor="aqua" skillEmoji="📚" />
      <Skill skillTitle="Git & GitHub" skillColor="aqua" skillEmoji="📚" />
      <Skill skillTitle="English B2" skillColor="lightGreen" skillEmoji="👍" />
    </ul>
  );
}