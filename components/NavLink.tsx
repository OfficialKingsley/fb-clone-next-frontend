import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ children, href, exact, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname === href;

  if (isActive) {
    props.className += " active";
  } else {
    props.className += " hover-shade";
  }
  return (
    <div>
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    </div>
  );
};
NavLink.defaultProps = {
  exact: false,
};

export default NavLink;
