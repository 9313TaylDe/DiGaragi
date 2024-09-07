import { useNavigate } from "react-router-dom";

export const Button = ({
  color = "#C92071",
  width = "40px",
  height = "100%",
  hover = "",
  onClick,
  children,
}) => {
  const buttonStyle = {
    height: `${height}`,
    width: `${width}`,
    backgroundColor: color,
    color: "#fff",
    borderRadius: "7px",
    cursor: "pointer",
  };

  const hoverStyle = {
    backgroundColor: hover,
  };

  return (
    <>
      <button
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseLeave={(e) => (e.target.style.backgroundColor = color)}
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
};
