/* eslint-disable no-unreachable */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Show from "./components/Show";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/show" component={Show} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
