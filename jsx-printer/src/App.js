import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Logout = lazy(() => import('./Logout'));

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Page is Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/protected" component={Home} />
        <Route path="" render={()=><div>page not found</div>}/>
      </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
