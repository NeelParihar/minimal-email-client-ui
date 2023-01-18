import "./Navbar.css"
import {ButtonGroup} from "./ButtonGroup";

export default function Navbar() {
    return (
        <header className="header">
        <span href="/" className="filter-text">
          Filter by:
        </span>
        <span
          className="header-menu">
          <ButtonGroup buttons={["Unread", "Read", "Favorites"]} />
        </span>
      </header>
      )
}