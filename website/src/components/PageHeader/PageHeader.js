import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
} from 'carbon-components-react/lib/components/UIShell';

const PageHeader = (isSideNavExpanded, onClickSideNavExpand) => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="">
          <SkipToContent />
          <HeaderMenuButton
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            aria-label=""
          />
          <HeaderName element={Link} to="/" prefix="ICAPS 2020">
            XAIP
          </HeaderName>
          <HeaderNavigation aria-label="">
            <HeaderMenuItem element={Link} to="/team">
              Team
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/2020">
              2020
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/explore">
              Explore
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/landscape">
              Landscape
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label=""
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/">
                  Home
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/team">
                  Team
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/2020">
                  2020
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/explore">
                  Explore
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/landscape">
                  Landscape
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
      </>
    )}
  />
);

export default PageHeader;
