import myPhoto from "../assets/Higgins.jpg";

export default function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src={myPhoto}
        alt="Edward John Higgins Christmas photo"
      />
    </div>
  );
}
