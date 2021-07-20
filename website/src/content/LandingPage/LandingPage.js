import React from 'react';
import { Download16 } from '@carbon/icons-react';
import { Member, Talk, Speaker } from '../../components/Info';
import { DATA } from '../../components/Data/PaperData';
import { InvitedList, PanelList } from '../../components/Data/XAIP2021Data';
import {
  Link,
  ListItem,
  UnorderedList,
  Tag,
  Button,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  ProgressIndicator,
  ProgressStep,
  Modal,
  Accordion,
  AccordionItem,
} from 'carbon-components-react';

import { FaceDissatisfied16 } from '@carbon/icons-react';
import { FaceCool16 } from '@carbon/icons-react';

var items = [];
var shuffledData = DATA.filter(item => item.year === '2021');
shuffledData.sort(
  (item1, item2) =>
    item1.session * 10 + item1.position - (item2.session * 10 + item2.position)
);

shuffledData.forEach(function(item, key) {
  if (item.year === '2021') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'XAIP 2021 Accepted Paper | ' + item.title,
      });
    } else if (item.xai) {
      items.push({
        id: item.id,
        label: 'XAI 2021 Highlight | ' + item.title,
      });
    }
  }
});

class LandingPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      readme: false,
    };
  }

  onClickREADME = e => {
    this.setState({
      ...this.state,
      readme: true,
    });
  };

  onClickModalClose = e => {
    this.setState({
      ...this.state,
      readme: false,
    });
  };

  render() {
    return (
      <div>
        <div className="bx--grid bx--grid--full-width landing-page vertical-container fill-height">
          <div className="bx--row vertical-center">
            <div className="bx--col-lg-8">
              <h1 className="landing-page__heading">
                XAIP @{' '}
                <Link
                  href="https://icaps21.icaps-conference.org/"
                  target="_blank"
                  style={{ fontSize: 'inherit' }}>
                  ICAPS 2021
                </Link>
              </h1>
              <p style={{ paddingTop: '5px', color: 'grey' }}>
                Online, August 6
              </p>
              <br />
              <br />
              <p className="participation-page__p">
                The world of Explainable AI is rapidly expanding in scope from
                classification tasks to more complex decision-making processes
                where automated algorithms play an outsized role. The
                International Workshop of Explainable AI Planning (XAIP) brings
                together the latest and best in the field of explainable
                planning and sequential decision-making. The workshop is
                collocated with ICAPS, the premier conference on automated
                planning and scheduling.{' '}
                <Link
                  href="https://www.ijcai.org/Proceedings/2020/669"
                  target="_blank">
                  Read more
                </Link>
              </p>
              <br />
              <br />
              <Link
                href="#program"
                style={{ marginRight: '10px', textDecoration: 'none' }}>
                <Button
                  kind="primary"
                  size="field"
                  style={{ marginBottom: '20px', minWidth: '175px' }}>
                  Program
                </Button>
              </Link>
              <br />
              <Link
                href="https://github.com/TathagataChakraborti/xaip"
                target="_blank"
                style={{ marginRight: '10px', textDecoration: 'none' }}>
                <Button
                  kind="secondary"
                  size="field"
                  style={{ minWidth: '175px' }}>
                  Community
                </Button>
              </Link>
            </div>
            <div className="bx--col-lg-8">
              <img
                className="landing-page__illo"
                src={`${process.env.PUBLIC_URL}/images/cover.png`}
                alt="Carbon illustration"
              />
            </div>
          </div>
        </div>

        {/* <div className="bx--grid bx--grid--full-width landing-page landing-page__banner">
          <div className="bx--row landing-page__tab-content" id="program">
            <div className="bx--col-lg-12 bx--offset-lg-2">
              <StructuredListWrapper style={{ marginBottom: '20px' }}>
                <StructuredListHead>
                  <StructuredListRow>
                    <StructuredListCell>
                      <h2 className="landing-page__subheading">
                        Invited Speakers
                      </h2>
                    </StructuredListCell>
                  </StructuredListRow>
                </StructuredListHead>
              </StructuredListWrapper>

              <div className="bx--row">
                {InvitedList.map((item, key) => (
                  <React.Fragment key={key}>
                    <Member props={item} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div id="program" className="bx--col-lg-12 bx--offset-lg-2">
          <br />
          <br />
          <br />
          <br />
          <h4>XAIP 2021 Program</h4>
          <hr />

          <div className="bx--row">
            <Link
              href="https://openreview.net/group?id=icaps-conference.org/ICAPS/2021/Workshop/XAIP"
              style={{ marginLeft: '1rem', textDecoration: 'none' }}
              target="_blank">
              <Button small kind="primary" size="field">
                Papers
              </Button>
            </Link>

            <Link
              href="https://join.slack.com/t/xaip2020/shared_invite/zt-i8uy3uw0-hRqomirHfO__c5Bu47Uunw"
              target="_blank"
              style={{ marginLeft: '0.5rem', textDecoration: 'none' }}>
              <Button kind="danger" size="field">
                Slack
              </Button>
            </Link>
          </div>

          <br />
          <br />

          <StructuredListWrapper>
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>
                  Session 1 | Aug 06 GMT 13:00 - 16:30
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell>GMT 13:00 - 13:10</StructuredListCell>
                <StructuredListCell>
                  Welcome! <FaceCool16 />{' '}
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow className="no-border">
                <StructuredListCell>GMT 13:10 - 14:00</StructuredListCell>
                <StructuredListCell>
                  Talks from Accepted Papers
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell style={{ padding: '0' }}>
                  <Accordion align="start">
                    {shuffledData.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.session === 1 && item.position <= 3 && (
                          <Talk props={item} />
                        )}
                      </React.Fragment>
                    ))}
                  </Accordion>
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>GMT 14:00 - 14:10</StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>
              <StructuredListRow className="no-border">
                <StructuredListCell>GMT 14:10 - 15:20</StructuredListCell>
                <StructuredListCell>
                  Talks from Accepted Papers
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell style={{ padding: '0' }}>
                  <Accordion align="start">
                    {shuffledData.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.session === 1 && item.position > 3 && (
                          <Talk props={item} />
                        )}
                      </React.Fragment>
                    ))}
                  </Accordion>
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>GMT 15:20 - 15:30</StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>GMT 15:30 - 16:30</StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[1]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <br />
                      <br />
                      <strong>Invited Talk by Steve Chien</strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>More </span>}>
                          Comming soon!
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>GMT 16:30 - 17:30</StructuredListCell>
                <StructuredListCell>Break</StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>

          <StructuredListWrapper style={{ marginBottom: '2rem' }}>
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>
                  Session 2 | Aug 06 GMT 17:30 - 19:50
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell>GMT 17:30 - 18:30</StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[0]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <br />
                      <br />
                      <strong>Invited Talk by Been Kim</strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>More </span>}>
                          Comming soon!
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>GMT 18:30 - 18:40</StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>GMT 18:40 - 19:50</StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-16">
                      <strong>
                        Panel: Post-hoc Explainations versus Designed
                        Explainability
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          open
                          className="according-crush"
                          title={<span>More </span>}>
                          Research on Explainable AI has developed along two
                          seemingly conflicting threads: explanations that are
                          derived after the fact from decisions or algorithms
                          that are designed to be explainable. The
                          explainability of planning techniques also faces the
                          same questions in the form of the nature of the
                          decision-making models, domain abstractions, learned
                          state representation, and so on. In this panel, we
                          will ask experts about their experiences working on
                          that spectrum, tradeoffs between the two approaches,
                          bust myths on explainability versus accuracy, and much
                          more. Submit your questions for the panelists as
                          "ideas" below!
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
                    <div className="bx--col-lg-16">
                      <iframe
                        title="Submit your questions here!"
                        width="100%"
                        height="500"
                        src="http://www.tricider.com/embed/?show=2VsnmQDBZZ3"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"></iframe>
                    </div>
                  </div>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>GMT 19:50 - 20:50</StructuredListCell>
                <StructuredListCell>Break</StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>

          <StructuredListWrapper style={{ marginBottom: '2rem' }}>
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>
                  Session 3 | Aug 06 GMT 20:50 - 00:45
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow className="no-border">
                <StructuredListCell>GMT 20:50 - 21:55</StructuredListCell>
                <StructuredListCell>
                  Talks from Accepted Papers
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell style={{ padding: '0' }}>
                  <Accordion align="start">
                    {shuffledData.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.session === 2 && item.position <= 4 && (
                          <Talk props={item} />
                        )}
                      </React.Fragment>
                    ))}
                  </Accordion>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>GMT 21:55 - 22:05</StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow className="no-border">
                <StructuredListCell>GMT 22:05 - 23:15</StructuredListCell>
                <StructuredListCell>
                  Talks from Accepted Papers
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell style={{ padding: '0' }}>
                  <Accordion align="start">
                    {shuffledData.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.session === 2 && item.position > 4 && (
                          <Talk props={item} />
                        )}
                      </React.Fragment>
                    ))}
                  </Accordion>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>GMT 23:15 - 23:30</StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>GMT 23:30 - 00:30</StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[2]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <br />
                      <br />
                      <strong>Invited Talk by Dan Weld</strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>More </span>}>
                          Comming soon!
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow className="no-border">
                <StructuredListCell>GMT 00:30 - 00:45</StructuredListCell>
                <StructuredListCell>
                  Goodbye! <FaceDissatisfied16 />
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
        </div>

        <div className="bx--row landing-page__tab-content" id="call">
          <div className="bx--col-lg-8 bx--offset-lg-2">
            <StructuredListWrapper style={{ marginBottom: '20px' }}>
              <StructuredListHead>
                <StructuredListRow>
                  <StructuredListCell>
                    <h2 className="landing-page__subheading">
                      Call for Contributions.
                    </h2>
                    <br />
                    This year, in addition to the core XAIP topics, we welcome
                    submissions on user interfaces in XAIP, acknowledging the
                    inseparable role of interfacing in explanations. We invite
                    submissions of the following types relevant to the topics
                    listed below.
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                <StructuredListRow>
                  <StructuredListCell>
                    <strong>Full technical papers </strong>
                    making an original contribution; up to 9 pages including
                    references.
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>
                    <strong>Short technical papers </strong>
                    making an original contribution; up to 5 pages including
                    references.
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>
                    <strong>Position papers </strong>
                    proposing XAIP challenges, outlining XAIP ideas, debating
                    issues relevant to XAIP; up to 5 pages including references.
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>

            <Link disabled>
              <Button
                size="small"
                kind="ghost"
                style={{ cursor: 'not-allowed' }}>
                Submit
              </Button>
            </Link>

            <Link
              href="https://www.aaai.org/Publications/Templates/AuthorKit21.zip"
              target="_blank">
              <Button size="small" kind="ghost">
                Template
              </Button>
            </Link>

            <Button
              size="small"
              kind="ghost"
              onClick={this.onClickREADME.bind(this)}>
              README
            </Button>

            <Link href="/files/call-for-papers-xaip-2021.pdf" target="_blank">
              <Button size="small" kind="ghost">
                <Download16 />
              </Button>
            </Link>
          </div>

          <div className="bx--col-lg-4 xaip-tags">
            <div className="some-container" style={{ marginTop: '70px' }}>
              <ProgressIndicator vertical currentIndex={2}>
                <ProgressStep
                  invalid
                  label={
                    <>
                      <span style={{ color: 'red' }}>
                        Submission are closed.
                      </span>
                    </>
                  }
                  secondaryLabel="May 31 UTC-12"
                />
                <ProgressStep
                  label="Author Notification"
                  secondaryLabel="July 7 UTC-12"
                />
                <ProgressStep
                  label="XAIP 2021 Workshop"
                  secondaryLabel="August 2"
                />
                <ProgressStep
                  disabled
                  label="Camera Ready Deadline"
                  secondaryLabel="After the workshop"
                />
              </ProgressIndicator>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="bx--grid bx--grid--full-width landing-page landing-page__banner">
          <div className="bx--row landing-page__tab-content">
            <div className="bx--col-lg-6 bx--offset-lg-2 xaip-tags">
              <Tag type="magenta" title="Clear Filter">
                {' '}
                Core XAIP{' '}
              </Tag>

              <br />
              <br />

              <UnorderedList>
                <ListItem>
                  Representation, organization, and memory content used in
                  explanation
                </ListItem>
                <ListItem>
                  The creation of such content during plan generation or
                  understanding
                </ListItem>
                <ListItem>Generation and evaluation of explanations</ListItem>
                <ListItem>Contrastive explanations</ListItem>
                <ListItem>
                  The way in which explanations are communicated and
                  personalized to humans (e.g., plan summaries, answers to
                  questions)
                </ListItem>
                <ListItem>
                  The role of knowledge and learning in explainable planners
                </ListItem>
                <ListItem>Human vs AI models in explanations</ListItem>
                <ListItem>
                  Links between explainable planning and other disciplines
                  (e.g., social science, argumentation)
                </ListItem>
                <ListItem>
                  Use cases and applications of explainable planning
                </ListItem>
                <ListItem>
                  Ethical quandaries in explainable automated planning and
                  scheduling
                </ListItem>
              </UnorderedList>

              <br />
              <br />
            </div>

            <div className="bx--col-lg-6 xaip-tags">
              <Tag type="purple" title="Clear Filter">
                {' '}
                The UX of XAIP{' '}
              </Tag>

              <br />
              <br />

              <UnorderedList>
                <ListItem>
                  User interfaces for explainable automated planning and
                  scheduling
                  <UnorderedList nested>
                    <ListItem>Plan and schedule visualization</ListItem>
                    <ListItem>
                      Mixed initiative planning and scheduling
                    </ListItem>
                    <ListItem>
                      Emerging technology for human-planner interaction
                    </ListItem>
                    <ListItem>
                      Metrics for human readability or comprehensibility of
                      plans and schedules
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  Explainable automated planning and scheduling for user
                  interfaces
                  <UnorderedList nested>
                    <ListItem>
                      Representing and solving planning domains for user
                      interface creation and design tasks
                    </ListItem>
                    <ListItem>
                      Plan, activity, and intent recognition of users’
                      interactions with interfaces
                    </ListItem>
                    <ListItem>
                      Developing user (mental) models with description languages
                      and decision processes
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </div>
          </div>
        </div>

        <Modal
          iconDescription="Close"
          modalHeading="Additional Instructions"
          modalLabel="XAIP @ ICAPS 2021"
          passiveModal
          hasScrollingContent
          open={this.state.readme}
          onRequestClose={this.onClickModalClose.bind(this)}
          size="lg"
          aria-label=""
          style={{ height: '100%' }}>
          <StructuredListWrapper style={{ marginBottom: '20px' }}>
            <StructuredListHead>
              <StructuredListRow />
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell>
                  Authors who are considering submitting to the workshop papers
                  rejected from the main conference, please ensure you do your
                  utmost to address the comments given by ICAPS reviewers.
                  Please do not submit papers that are already accepted for the
                  main conference to the workshop.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  Every submission will be reviewed by members of the program
                  committee according to the usual criteria such as relevance to
                  the workshop, the significance of the contribution, and
                  technical quality. Authors can choose for themselves if they
                  want their submissions to be single-blind or double-blind
                  (recommended for NeurIPS and IJCAI dual submissions) at the
                  time of submission.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  The workshop is meant to be an open and inclusive forum, and
                  we encourage papers that report on work in progress or that do
                  not fit the mold of a typical conference paper.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  At least one author of each accepted paper must attend the
                  workshop in order to present the paper. There will be no
                  separate registration required.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell>
                  Accepted papers will be compiled into post-workshop
                  proceedings and posted on this page. Workshop proceedings are
                  not archival and do not require the transfer of copyright.
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
