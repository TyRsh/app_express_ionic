import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import List from './pages/List';
import LoginForm from './pages/form/LoginForm';
import RegistrationForm from './pages/form/RegistrationForm';
import EditClientForm from './pages/form/EditClientForm';
import ShowOrder from './pages/show/ShowOrder';
import ShowDish from './pages/show/ShowDish';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id='main'>
          <Route path="/" exact={true}>
            <Redirect to="/pages/LoginForm" />
          </Route>
          <Route path="/pages/LoginForm" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/pages/RegistrationForm" exact={true}>
            <RegistrationForm />
          </Route>
          <Route path="/pages/List/:clientId" exact={true}>
            <List />
          </Route>
          <Route path="/pages/EditClientForm/:clientId" exact={true}>
            <EditClientForm />
          </Route>
          <Route path="/pages/ShowOrder/:clientId" exact={true}>
            <ShowOrder />
          </Route>
          <Route path="/pages/ShowDish/:clientId/:dishId" exact={true}>
            <ShowDish />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
