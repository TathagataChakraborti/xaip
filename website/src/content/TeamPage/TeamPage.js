import React from 'react';
import { Member, PC, shuffleArray } from '../../components/Info';
import {
  MemberListCache,
  PCListCache,
} from '../../components/Data/XAIP2021Data';
import {
  Accordion,
  AccordionItem,
  Button,
  Tile,
  Link,
} from 'carbon-components-react';

var MemberList = shuffleArray(MemberListCache);
var PCList = shuffleArray(PCListCache);

const TeamPage = () => {
  return (
    <div
      className="bx--grid bx--grid--full-width landing-page landing-page__banner"
      style={{ minHeight: '100vh' }}>
      <div className="bx--col-lg-14 bx--offset-lg-2">
        <div className="bx--row publications-page__tab-content">
          <Tile
            className="bx--col-lg-4 landing-page__banner"
            style={{ margin: '10px' }}>
            <h1>Organizing Committee</h1>
            <br />
            <Link href="mailto:tchakra2@ibm.com">
              <Button size="small" kind="secondary">
                Contact
              </Button>
            </Link>
          </Tile>

          {MemberList.map((item, key) => (
            <React.Fragment key={key}>
              <Member props={item} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 
      <div className="bx--col-lg-11 bx--offset-lg-2">
        <Accordion align="start">
          <AccordionItem open title="Extended Program Committee">
            <div className="bx--row">
              {PCList.map((item, key) => (
                <React.Fragment key={key}>
                  <PC props={item} />
                </React.Fragment>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
*/}
    </div>
  );
};

export default TeamPage;
