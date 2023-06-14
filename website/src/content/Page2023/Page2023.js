import React from 'react';
import { DATA } from '../../components/Data/PaperData';
import {
  OrganizingTeamList,
  SteeringCommitteeList,
  PCListCache,
  InvitedList,
  ProjectList,
} from '../../components/Data/HAXP2023Data';
import {
  Member,
  Talk,
  PCReduced,
  shuffleArray,
  Speaker,
} from '../../components/Info';
import {
  Accordion,
  AccordionItem,
  Link,
  Button,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';

var MemberList = shuffleArray(OrganizingTeamList);
var PCList = shuffleArray(PCListCache);

var items = [];
var shuffledData = DATA.filter(item => item.year === '2023');
shuffledData.sort(
  (item1, item2) =>
    item1.session * 10 + item1.position - (item2.session * 10 + item2.position)
);

shuffledData.forEach(function(item, key) {
  if (item.year === '2023') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'HAXP 2023 Accepted Paper | ' + item.title,
      });
    }
  }
});

class Page2023 extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        className="bx--grid bx--grid--full-width landing-page"
        style={{ minHeight: '100vh' }}>
        <div id="program" className="bx--col-lg-12 bx--offset-lg-2">
          <br />
          <br />
          <br />
          <br />
          <h4>XAIP 2023 Program</h4>
          <hr />

          <br />
          <br />

          <div className="bx--row">
            <Link
              href="https://openreview.net/group?id=icaps-conference.org/ICAPS/2023/Workshop/HAXP"
              style={{ marginLeft: '1rem', textDecoration: 'none' }}
              target="_blank">
              <Button kind="primary" size="sm">
                Open Review
              </Button>
            </Link>
            <Link
              href="https://join.slack.com/t/xaip2021/shared_invite/zt-svdiylde-EwqOBkguynR6jKbi_UKDXA"
              target="_blank"
              style={{ marginLeft: '0.5rem', textDecoration: 'none' }}>
              <Button kind="danger" size="sm">
                Slack
              </Button>
            </Link>
          </div>

          <br />
          <br />
          <h4>Schedule (10 July 9:00 - 17:15 in Room T2)</h4>
          <hr />

          <div>
            <StructuredListWrapper>
              <StructuredListBody>
                <StructuredListRow>
                  <StructuredListCell>9:00 - 9:15</StructuredListCell>
                  <StructuredListCell>
                    Welcome & Opening Remarks
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>9:15 - 10:00</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[0]} />
                      </div>
                      <div className="bx--col-lg-12">
                        <br />
                        <br />
                        <strong>Invited Talk I: David Smith</strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Details</span>}>
                            TBD
                          </AccordionItem>
                          <AccordionItem
                            className="according-crush"
                            title={<span>Bio</span>}>
                            <p>TBD</p>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>10:00 - 11:15</StructuredListCell>
                  <StructuredListCell>Paper Session I</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 1 && <Talk props={item} />}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    11:15 - 11:45
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Coffee Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>11:45 - 12:30</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[1]} />
                      </div>
                      <div className="bx--col-lg-12">
                        <br />
                        <br />
                        <strong>Invited Talk II: Ron Petrick</strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Details</span>}>
                            TBD
                          </AccordionItem>
                          <AccordionItem
                            className="according-crush"
                            title={<span>Bio</span>}>
                            <p>TBD</p>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    12:30 - 14:00
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Lunch Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>14:00 - 15:15</StructuredListCell>
                  <StructuredListCell>Paper Session II</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 2 && <Talk props={item} />}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    15:15 - 15:45
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Coffee Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>15:45 - 16:30</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[2]} />
                      </div>
                      <div className="bx--col-lg-12">
                        <br />
                        <br />
                        <strong>Invited Talk III: Daniel Höller</strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Details</span>}>
                            TBD
                          </AccordionItem>
                          <AccordionItem
                            className="according-crush"
                            title={<span>Bio</span>}>
                            <p>TBD</p>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>16:30 - 17:15</StructuredListCell>
                  <StructuredListCell>Paper Session III</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 3 && <Talk props={item} />}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>
          </div>

          <br />
          <br />

          <br />
          <h4>Accepted Papers</h4>
          <hr />
          <Accordion align="start">
            {shuffledData.map((item, key) => (
              <React.Fragment key={key}>
                <Talk props={item} />
              </React.Fragment>
            ))}
          </Accordion>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div
          id="team"
          className="bx--col-lg-12 bx--offset-lg-2 landing-page__banner">
          <h4>HAXP 2023 Organizing Team</h4>
          <hr />
          <Link href="mailto:haxp.workshop@gmail.com">
            <Button size="small" kind="secondary">
              Contact
            </Button>
          </Link>

          <div className="bx--row publications-page__tab-content">
            {MemberList.map((item, key) => (
              <React.Fragment key={key}>
                <Member props={item} />
              </React.Fragment>
            ))}
          </div>

          <br />
          <br />
          <br />

          <h4>HAXP 2023 Steering Committee</h4>
          <hr />

          <div className="bx--row publications-page__tab-content">
            {SteeringCommitteeList.map((item, key) => (
              <React.Fragment key={key}>
                <Member props={item} />
              </React.Fragment>
            ))}
          </div>

          <br />
          <br />
          <br />

          <Accordion align="start">
            <AccordionItem open title="Extended Program Committee">
              <div className="bx--row">
                {PCList.map((item, key) => (
                  <React.Fragment key={key}>
                    <PCReduced props={item} />
                  </React.Fragment>
                ))}
              </div>
            </AccordionItem>
          </Accordion>

          <h4>Affiliated Projects</h4>
          <hr />

          <div className="bx--row publications-page__tab-content">
            {ProjectList.map((item, key) => (
              <React.Fragment key={key}>
                <Member props={item} />
              </React.Fragment>
            ))}
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Page2023;
