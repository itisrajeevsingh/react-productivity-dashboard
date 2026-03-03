import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Productivity</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/">Tasks</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;