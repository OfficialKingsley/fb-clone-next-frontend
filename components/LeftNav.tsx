import { useState } from "react";
import FacebookLogo from "./FacebookLogo";
import { KmvSearch } from "../public/images/ImageComponents";

const LeftNav = ({ className }) => {
  const [openForm, setOpenForm] = useState(true);

  return (
    <div className={className}>
      <FacebookLogo />
      <div>
        <form action="" className={openForm === false ? "closed" : "open"}>
          <label
            htmlFor="search"
            onClick={() => {
              openForm === false && setOpenForm(true);
            }}
          >
            <KmvSearch />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search Facebook"
            onBlur={() => {
              setOpenForm(false);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default LeftNav;
