import React, { Component } from 'react';
import './app.scss';

import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Switch } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import LandingPage from './content/LandingPage';
import TeamPage from './content/TeamPage';
import ArchivePage from './content/ArchivePage';
import SoftwarePage from './content/SoftwarePage';
import OverviewPage from './content/OverviewPage';
import Page2020 from './content/Page2020';
import Page2021 from './content/Page2021';
import Page2022 from './content/Page2022';
import Page2023 from './content/Page2023';

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/archive" component={ArchivePage} />
            <Route exact path="/overview" component={OverviewPage} />
            <Route exact path="/software" component={SoftwarePage} />
            <Route exact path="/2020" component={Page2020} />
            <Route exact path="/2021" component={Page2021} />
            <Route exact path="/2022" component={Page2022} />
            <Route exact path="/2023" component={Page2023} />
            <Route component={LandingPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
