import bracktes from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {bracktes("left")}
      <div className="mx-3 text-n-3"> {children}</div>
      {bracktes("right")}
    </div>
  );
};

export default Tagline;
