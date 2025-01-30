import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootEl = createRoot(document.getElementById("root"))

rootEl.render(
    <StrictMode>
    <App/>

    </StrictMode>
)