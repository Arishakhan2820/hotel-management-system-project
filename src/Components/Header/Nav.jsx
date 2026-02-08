import DropDown from './DropDown';
import { Link } from "react-router";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/home" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      <li>
        <Link to="/home/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="/home/destination" onClick={() => setMobileToggle(false)}>
          Destination
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/home/destination" onClick={() => setMobileToggle(false)}>
                Destination
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link to="/home/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
