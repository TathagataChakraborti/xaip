import React from 'react';
import { Member, shuffleArray } from '../../components/Info';
import { MemberListCache } from '../../components/Data/XAIP2021Data';
import { Button, Link } from 'carbon-components-react';

var MemberList = shuffleArray(MemberListCache);
// var PCList = shuffleArray(PCListCache);

const TeamPage = () => {
  return (
    <div
      className="bx--grid bx--grid--full-width landing-page landing-page__banner"
      style={{ minHeight: '100vh' }}>
      <div className="bx--col-lg-12 bx--offset-lg-2">
        <br />
        <br />
        <h1>Organizing Committee</h1>
        <hr />

        <div className="bx--row publications-page__tab-content">
          {MemberList.map((item, key) => (
            <React.Fragment key={key}>
              <Member props={item} />
            </React.Fragment>
          ))}
        </div>
        <hr />
        <Link href="mailto:xaip21team@gmail.com">
          <Button size="small" kind="secondary">
            Contact
          </Button>
        </Link>
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
