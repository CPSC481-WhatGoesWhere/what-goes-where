import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./router/AppRouter";
import { UserContextProvider } from "./context/UserContext";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
