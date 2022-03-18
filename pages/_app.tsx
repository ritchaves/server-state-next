import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./api/redux";
import GoBack from "../components/go-back";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="grid grid-rows-[1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] h-screen text-independence">
          <GoBack />
          <Component {...pageProps} />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
