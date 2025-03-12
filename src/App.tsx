import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const basename = import.meta.env.MODE === "production" ? "/what-goes-where" : "/";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>  {/* 👈 Pass basename here */}
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
