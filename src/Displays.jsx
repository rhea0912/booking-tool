
function Displays({src, label, className}) {
  return (
    <div className="display">
      <img src={src} alt="" />
      <div className={className}>{label}</div>
    </div>
  );
}

export default Displays;
