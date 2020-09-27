import React from 'react';
import Recoil from 'recoil';
import { Router } from '@reach/router';
import { Home, About, NotFound } from './routes';
import { SiteMenu } from './components';
import './App.css';

interface AppProps {}

const routes = [
  { label: 'Home', to: '/', Route: Home },
  { label: 'About', to: '/about', Route: About },
];

function App(_props: AppProps) {
  return (
    <Recoil.RecoilRoot>
      <div className="nc">
        <header className="nc-header">
          NerveClasp Arts
          <SiteMenu links={routes} />
        </header>
        <div className="nc-content">
          <Router>
            {routes.map(({ label, to, Route }) => (
              <Route key={label} path={to} />
            ))}
            <NotFound default />
          </Router>
        </div>
      </div>
    </Recoil.RecoilRoot>
  );
}

export default App;
