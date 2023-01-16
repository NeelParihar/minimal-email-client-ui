import "./Navbar.css"
import {ButtonGroup} from "./ButtonGroup";

export default function Navbar() {
    return (
        <header className="header">
        <span href="/" className="filter-text">
          Filter by:
        </span>
        <div
          className="header-menu">
          <ButtonGroup buttons={["Unread", "Read", "Favorites"]} />
        </div>
      </header>
      )
}