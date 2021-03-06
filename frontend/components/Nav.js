import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/bathrooms">
          <a>Bathrooms</a>
        </Link>
        <Link href="/map">
          <a>Map</a>
        </Link>
        {me && (
          <>
            <Link href="/add">
              <a>Add Bathroom</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
