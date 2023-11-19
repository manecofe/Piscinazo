import "./App.css";
import Mainroute from "./routes/mainroute";
import i18n from "../src/lib/i18n.js";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Mainroute />
      </div>
    </I18nextProvider>
  );
}

export default App;
