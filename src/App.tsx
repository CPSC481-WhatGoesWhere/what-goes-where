import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AppRouter from "./router/AppRouter";

// Set base path for GitHub Pages deployment
const basename = import.meta.env.MODE === "production" ? "/what-goes-where" : "/";

// Fix refresh issue by redirecting based on URL params
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");

    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>
        <RedirectHandler /> {/* Fix for GitHub Pages refresh issue */}
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
