import "./App.css";
import underMaintenanceImage from "./assets/under-maintenance.jpg";

function App() {
  return (
    <div>
      <div className="coming-soon-image">
        <img
          height={400}
          width={600}
          src={underMaintenanceImage}
          alt="Under Maintenance"
        />
      </div>
    </div>
  );
}

export default App;
