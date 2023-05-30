import Link from "next/link";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <h1>Next.js</h1>
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/services">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
