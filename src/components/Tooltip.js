import './css/Tooltip.css';

function Tooltip({ title, desc, children }) {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltip-content">
        <b>{title}</b>
        <p>{desc}</p>
        <a href="#">read more</a>
      </div>
    </div>
  );
};

export default Tooltip;
