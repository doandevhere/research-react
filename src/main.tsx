import App from "@/components/core/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  return <>{children}</>;
  return <StrictMode>{children}</StrictMode>;
};

createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Wrapper>
);
