import { BsFacebook } from "react-icons/bs";
const FacebookLogo = () => {
  return (
    <div>
      <BsFacebook
        fill={"linearGradient(#19afff, #0062e0)"}
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          width: "40px",
          height: "40px",
        }}
      />
      <style jsx>
        {`
          div {
            margin-right: 8px;
          }
          svg {
            background: white;
          }
        `}
      </style>
    </div>
  );
};

export default FacebookLogo;
