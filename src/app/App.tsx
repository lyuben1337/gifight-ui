import { AppRouter } from "./router";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <AppRouter />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}
