import { AppRouter } from "./router";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-redux-loading-bar";

export function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <LoadingBar className="bg-blue-500 h-1 fixed top-0 left-0 w-full" />
      <AppRouter />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}
