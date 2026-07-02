import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import WorkflowPage from "../pages/WorkflowPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WorkflowPage/>
    </ThemeProvider>
  )
}

export default App
