import React from 'react';
import { DATA } from '../../components/Data/PaperData';
import {
  OrganizingTeamList,
  SteeringCommitteeList,
  ProjectList,
  PCList,
  InvitedList,
  PanelList
} from '../../components/Data/HAXP2025Data';
import {
  Member,
  shuffleArray,
  PCReduced,
  Talk,
  Speaker
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
var shuffledData = DATA.filter(item => item.year === '2025');
shuffledData.sort(
  (item1, item2) =>
    item1.session * 10 + item1.position - (item2.session * 10 + item2.position)
);

shuffledData.forEach(function(item, key) {
  if (item.year === '2025') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'HAXP 2025 Accepted Paper | ' + item.title,
      });
    }
  }
});

class Page2025 extends React.Component {
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
          <h4>HAXP 2025 Program</h4>
          <hr />

          <br />
          <br />

          <div className="bx--row">
            <Link
              href="https://openreview.net/group?id=icaps-conference.org/ICAPS/2025/Workshop/HAXP"
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
          <h4>Schedule (10 November 8:30 - 17:00)</h4>
          <hr />

          <div>
            <StructuredListWrapper>
              <StructuredListBody>
                <StructuredListCell>8:30 - 10:00</StructuredListCell>
                <StructuredListCell>
                  Session I
                </StructuredListCell>
                <StructuredListRow>
                  <StructuredListCell>8:30 - 8:40</StructuredListCell>
                  <StructuredListCell>
                    Opening Remarks
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>8:40 - 9:30</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[0]} />
                      </div>
                      <div className="bx--col-lg-12">
                        <br />
                        <br />
                        <strong>
                          Invited Talk: eXplainable AI ! … ?
                        </strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Abstract</span>}>
                            In this talk I’ll provide an overview of my work in eXplainable AI (XAI), examining its state-of-the-art techniques, current trends, and limitations. I'll begin by introducing key XAI methods and explore the growing demand for fairness, accountability, and human-in-the-loop systems, as well as the challenges of balancing model accuracy with explainability. Despite significant progress, XAI faces limitations, including the trade-off between model complexity and interpretability, and the subjective nature of explanations. I’ll also discuss the importance of Human-Centered AI, emphasizing that explanations must be understandable to people, and how insights from the social sciences can inform better explanation design. And finally, I will introduce Evaluative AI, a paradigm shift from the current model of XAI . This concept represents a step toward creating more accountable, robust, and transparent AI systems, ensuring that explanations not only make sense but also align with human values and decision-making needs.
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
                  <StructuredListCell>9:30 - 10:00</StructuredListCell>
                  <StructuredListCell>
                    Paper Session I
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
                  <StructuredListCell>Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>10:30 - 12:00</StructuredListCell>
                  <StructuredListCell>
                    Session II
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>10:30 - 11:20</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[1]} />
                      </div>
                      <div className="bx--col-lg-12">
                        <br />
                        <br />
                        <strong>
                          Invited Talk: A Little of That Human Touch: Achieving Human-Centric Explainable AI via Argumentation
                        </strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Abstract</span>}>
                            As data-driven AI models achieve unprecedented feats across previously unthinkable tasks, the diminishing levels of interpretability of their increasingly complex architectures can often be sidelined in place of performance. If we are to comprehend and trust these AI models as they advance, it seems clear that symbolic methods, given their unparalleled strengths in knowledge representation and reasoning, can play an important role in explaining AI models. In this talk, I discuss some of the ways in which one branch of such methods, computational argumentation, given its human-like nature, can be used to tackle this problem. I first outline a general paradigm for this area of explainable AI, before detailing a prominent methodology therein which we have introduced. I then illustrate how this approach has been put into practice with diverse AI models and types of explanations, before looking ahead to challenges, future work and the outlook in this field.
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
                  <StructuredListCell>11:20 - 12:00</StructuredListCell>
                  <StructuredListCell>
                    Paper Session II
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
                  <StructuredListCell>Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>13:30 - 15:00</StructuredListCell>
                  <StructuredListCell>
                    Session III
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 3 && (
                            <Talk props={item} />
                          )}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    15:00 - 15:30
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Break</StructuredListCell>
                </StructuredListRow>


                <StructuredListRow className="no-border">
                  <StructuredListCell>15:30 - 17:00</StructuredListCell>
                  <StructuredListCell>
                    Session IV
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>15:30 - 16:30</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-16">
                        <strong>
                          Panel Discussion
                        </strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            open
                            className="according-crush"
                            title={<span>Details</span>}>
                            Coming soon!
                          </AccordionItem>
                        </Accordion>
                      </div>
                      <div className="bx--col-lg-16">
                        <div className="bx--row">
                          {PanelList.map((item, key) => (
                            <React.Fragment key={key}>
                              <Member props={item} />
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>16:30</StructuredListCell>
                  <StructuredListCell>
                    Closing Remarks
                  </StructuredListCell>
                </StructuredListRow>

              </StructuredListBody>
            </StructuredListWrapper>
          </div>

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
          <h4>HAXP 2025 Organizing Team</h4>
          <hr />
          <Link href="mailto:haxp.icaps@gmail.com">
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

          <h4>HAXP 2025 Steering Committee</h4>
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

export default Page2025;
