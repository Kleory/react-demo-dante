import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/index'
import ContactsPage from './pages/ContactsPage/index'
import GalleryPage from './pages/GalleryPage/index'
import CommonLayout from './layouts/CommonLayout/index'

function App() {
  return (
    <Router>
      <CommonLayout>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/contacts'} component={ContactsPage}/>
          <Route exact path={'/gallery'} component={GalleryPage}/>
          <Redirect from="" to='/' />
        </Switch>
      </CommonLayout>
    </Router>
    // <div>Hi</div>
  );
}

export default App;
