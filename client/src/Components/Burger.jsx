import "../CSS/Burger.css";
// import Nav from "./Nav";

export default function Burger({ open, setOpen }) {
  return (
    <div
      className={open ? "burger-icon open" : "burger-icon"}
      onClick={() => setOpen(!open)}
    >
      <div className="bar-1" />
      <div className="bar-2" />
      <div className="bar-3" />
    </div>
  );
}
