import React, { Component } from 'react';
import './app.scss';

import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Switch } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import LandingPage from './content/LandingPage';
import TeamPage from './content/TeamPage';
import ExplorePage from './content/ExplorePage';
import SoftwarePage from './content/SoftwarePage';
import LandscapePage from './content/LandscapePage';
import Page2020 from './content/Page2020';

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/explore" component={ExplorePage} />
            <Route exact path="/landscape" component={LandscapePage} />
            <Route exact path="/software" component={SoftwarePage} />
            <Route exact path="/2020" component={Page2020} />
            <Route component={LandingPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
