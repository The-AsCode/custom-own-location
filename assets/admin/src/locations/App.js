import { HashRouter, Route, Switch } from "react-router-dom";
import routes from './routes';

export default () => {
  return (
    <HashRouter>
      <div className="col-base-wrapper">
        <Switch>
          { routes.map( ( route, i ) => (
            <Route key={ i } { ...route } />
          ) ) }
        </Switch>
      </div>
    </HashRouter>
  );
}
