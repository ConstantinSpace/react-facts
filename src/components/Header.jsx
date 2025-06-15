import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <>
      <header className="sheader">
        <nav className="snav">
          <img alt="logo" src={logo} />
          <h1>React Facts</h1>
        </nav>
      </header>
    </>
  );
}
