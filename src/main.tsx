import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <Helmet>
            <title>Password Generator</title>
            <meta name="description" content="Made by Zubair Khalid" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Helmet>
        <App />
    </>
);
