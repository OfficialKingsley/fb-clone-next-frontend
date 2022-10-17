import { useSelector } from "../../redux/hooks";
import { Nav, NavCenter, NavLeft, NavRight } from "./styles";

const Navbar = () => {
  const user = useSelector((state) => {
    return state.user.data;
  });
  return (
    <>
      {user && (
        <Nav>
          <NavLeft className={""} />
          <NavCenter className={""} />
          <NavRight className={""} />
        </Nav>
      )}
    </>
  );
};

export default Navbar;
