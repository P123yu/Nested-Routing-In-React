

// manual press to navigate in nested routing ==================================

// import { Outlet } from "react-router-dom"; ==================================

// function Dashboard() {
//   return (
//     <div>
//       Dashboard
//       <Outlet />
//     </div>
//   );
// }

// export default Dashboard;


// use Link ====================================================================

// import { Link, Outlet } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div>
//       Dashboard
//       <Link to="">X</Link>
//       <Link to="b">Y</Link>
//       <Link to="c">Z</Link>
//       <Outlet />
//     </div>
//   );
// }

// export default Dashboard;



// using useNavigate() hook ====================================================

import { Outlet, useNavigate } from "react-router-dom"; // Import useNavigate

function Dashboard() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goToX = () => {
    navigate(""); // Navigates to the current route (e.g., /dashboard if that's the base)
  };

  const goToY = () => {
    navigate("b"); // Navigates to /dashboard/b (relative path)
  };

  const goToZ = () => {
    navigate("c"); // Navigates to /dashboard/c (relative path)
  };

  return (
    <div>
      Dashboard
      {/* Use buttons or other interactive elements with onClick handlers */}
      <button onClick={goToX}>X</button>
      <button onClick={goToY}>Y</button>
      <button onClick={goToZ}>Z</button>
      <Outlet />
    </div>
  );
}

export default Dashboard;
