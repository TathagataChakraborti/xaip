import React from 'react';
import { DATA } from '../../components/Data/PaperData';
import {
  OrganizingTeamList,
  SteeringCommitteeList,
  ProjectList,
  PCList,
  InvitedList,
} from '../../components/Data/HAXP2024Data';
import {
  Member,
  shuffleArray,
  PCReduced,
  Talk,
  Speaker,
  VideoPresentation
} from '../../components/Info';
import {
  Link,
  Button,
  Accordion,
  AccordionItem,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';

var MemberList = shuffleArray(OrganizingTeamList);

var items = [];
var shuffledData = DATA.filter(item => item.year === '2024');
shuffledData.sort(
  (item1, item2) =>
    item1.session * 10 + item1.position - (item2.session * 10 + item2.position)
);

shuffledData.forEach(function(item, key) {
  if (item.year === '2024') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'HAXP 2024 Accepted Paper | ' + item.title,
      });
    }
  }
});

class Page2024 extends React.Component {
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
          <h4>HAXP 2024 Program</h4>
          <hr />

          <br />
          <br />

          <div className="bx--row">
            <Link
              href="https://openreview.net/group?id=icaps-conference.org/ICAPS/2024/Workshop/HAXP"
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
          <h4>Schedule (3 June 9:00 - 17:00)</h4>
          <hr />

          <div>
            <StructuredListWrapper>
              <StructuredListBody>
                <StructuredListRow>
                  <StructuredListCell>9:00 - 9:10</StructuredListCell>
                  <StructuredListCell>
                    Welcome & Opening Remarks
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>9:10 - 10:00</StructuredListCell>
                  <StructuredListCell>
                    Session I
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 1 && (
                            <Talk props={item} />
                          )}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>


                <StructuredListRow>
                  <StructuredListCell>
                    10:00 - 10:30
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Coffee Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>10:30 - 11:15</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[0]} />
                      </div>
                      <div className="bx--col-lg-12">
                        <br />
                        <br />
                        <strong>
                          Invited Talk: 
                          Human-Aware AI – A Foundational Framework for Human-AI Interaction
                        </strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Abstract</span>}>
                            In this talk, I wish to discuss the framework of human-aware AI (HAAI) that aims to provide a unified formal framework to understand and evaluate human-AI interaction. While the notion of human-aware AI as a formal framework to model human-AI interaction was most widely applied in the context of explanations, in this talk I would like to discuss how this formalism could be applied in other contexts. Towards this goal, I will discuss how this formalism has been used to make sense of phenomena like trust, assistance, objective alignment and even deception.
                          </AccordionItem>
                          {/* <AccordionItem
                            className="according-crush"
                            title={<span>Bio</span>}>
                            Coming soon!
                          </AccordionItem> */}
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>11:15 - 12:00</StructuredListCell>
                  <StructuredListCell>
                    Session II
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 2 && (
                            <Talk props={item} />
                          )}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    12:00 - 13:30
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Lunch Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>13:30 - 14:10</StructuredListCell>
                  <StructuredListCell>Session III</StructuredListCell>
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

                <StructuredListRow>
                  <StructuredListCell>
                    14:10 - 14:20
                    <br />
                  </StructuredListCell>
                  <StructuredListCell><a href="https://tuples.ai/">TUPLES</a> Competition Announcement</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    14:20 - 15:00
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Round Table and Closing Remarks</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    15:00 - 15:30
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Coffee Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    15:30 - 17:00
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Joint Panel Session</StructuredListCell>
                </StructuredListRow>

              </StructuredListBody>
            </StructuredListWrapper>
          </div>

          <br />
          <br />
          <h4>Videos </h4>
          <p>
          Unfortunately, some authors were unable to attend the workshop in person and have therefore provided a video presentation. We encourage you to contact the authors if you have any questions.
          </p>
          <hr />
              <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 0 && <VideoPresentation props={item} />}
                        </React.Fragment>
                      ))}
              </Accordion>
          
          <br />
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
          <h4>HAXP 2024 Organizing Team</h4>
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

          <h4>HAXP 2024 Steering Committee</h4>
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

export default Page2024;
