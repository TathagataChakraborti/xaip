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
          <HeaderName element={Link} to="/" prefix="HAXP">
            Workshop Series
          </HeaderName>
          <HeaderNavigation aria-label="">
            {/*
            <HeaderMenuItem element={Link} to="/team">
              Team
            </HeaderMenuItem>
             */}
             <HeaderMenuItem element={Link} to="/2023">
              2023
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/2022">
              2022
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/2021">
              2021
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/2020">
              2020
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/archive">
              Archive
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/overview">
              Overview
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/software">
              Software
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
                {/*
                <HeaderMenuItem element={Link} to="/team">
                  Team
                </HeaderMenuItem>
                 */}
                  <HeaderMenuItem element={Link} to="/2023">
                  2023
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/2022">
                  2022
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/2021">
                  2021
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
                <HeaderMenuItem element={Link} to="/software">
                  Software
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
