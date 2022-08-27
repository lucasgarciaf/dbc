import nav_img from "../images/nav_img.jpg";

export default function Header() {
  return (
    <nav className="App-nav">
      <img src={nav_img} alt="nav_img" className="nav_img" />
    </nav>
  );
}
