import Link from "next/link";
import {
  KmvFriends,
  KmvGames,
  KmvGroup,
  KmvHome,
  KmvWatch,
} from "../public/images/ImageComponents";
import NavLink from "./NavLink";
const CenterNav = ({ className }) => {
  return (
    <div className={className}>
      <ul>
        <li>
          <NavLink href={"/"} exact>
            <KmvHome />
          </NavLink>
        </li>
        <li>
          <NavLink href="/friends" exact>
            <KmvFriends />
          </NavLink>
        </li>
        <li>
          <NavLink href="/watch" exact>
            <KmvWatch />
          </NavLink>
        </li>
        <li>
          <NavLink href={"/groups"} exact>
            <KmvGroup />
          </NavLink>
        </li>
        <li>
          <NavLink href="/games" exact>
            <KmvGames />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CenterNav;
