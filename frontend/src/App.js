import { Outlet,Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary"

function App() {
  return (
     <div>
      <h1>Bookkeeper!</h1>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <ErrorBoundary>
            <Link to="/invoices">Invoices</Link> |{" "}
        </ErrorBoundary>

        <ErrorBoundary>
           <Link to="/expenses">Expenses</Link>
        </ErrorBoundary>

      </nav>
        <Outlet />
    </div>
  );
}

export default App;
