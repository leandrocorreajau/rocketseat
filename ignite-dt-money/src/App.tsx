import { ThemeProvider } from "styled-components";
import { GlobalSTyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSTyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
