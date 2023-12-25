
export default function Skill({ skillTitle, skillColor, skillEmoji, ...props}) {
  return (
    <li className='skill' style={{ backgroundColor: skillColor}}>
      <span>{skillTitle}</span>
      <span>{skillEmoji}</span>
    </li>
  );
}