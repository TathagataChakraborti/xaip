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
              <Button kind="primary" size="sm">
                Papers
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
                      <strong>
                        Why Explain? Or Why didn't I get my observation?
                        Explanation in Space Mission Scheduling for the Rosetta
                        and M2020 Missions
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>Details</span>}>
                          <p>
                            AI scheduling techniques have been used for decades
                            in a wide range of space missions including
                            observatories: Hubble Space Telescope, Spitzer
                            Infrared Telescope Facility; Orbiters: Earth
                            Observing One, Mars Express; and surface missions:
                            Mars Exploration Rovers and M2020.
                          </p>
                          <br />
                          <p>
                            In all of these missions, explanation of the
                            scheduler behavior serves a valuable function. In
                            this talk, I highlight the role of explanation
                            (mostly by human scheduling experts) in two very
                            different missions. First, I describe scheduling and
                            explanation in the ASPEN-RSSC scheduling system for
                            the Rosetta Orbiter, a multi flyby mission that
                            escorted the comet 67P/Churyumov-Gerasimenko for
                            over two years. For Rosetta, explanation, analytics,
                            and visualization were essential to understand how
                            to best plan complex science campaigns in a mission
                            driven by geometry and pointing. Second, I describe
                            the Crosscheck system used in the operations of the
                            M2020 Perseverance Rover on Mars. Crosscheck
                            explains ground generated plans and provides
                            guidance on how to enable unscheduled activities to
                            be scheduled.
                          </p>
                          <br />
                          <p>
                            In both missions, the scheduling process is highly
                            interactive and the purpose of explanation is to
                            facilitate the user to improve the overall schedule
                            produced by the combined user/automated scheduler
                            team.
                          </p>
                          <br />
                          <p>
                            I highlight several insights related to more
                            automated explanation in the context of space
                            mission operations.
                          </p>

                          <br />
                          <UnorderedList>
                            <ListItem>
                              The most common query is “Why didn’t I get X?” [as
                              opposed to why did I get X] This query is a
                              general statement over a large area of the search
                              space.
                            </ListItem>
                            <ListItem>
                              Blame assignment is more challenging in a resource
                              centric scheduling view
                            </ListItem>
                            <ListItem>
                              In many cases resource modeling is complex and
                              opaque (energy, thermal, pointing)
                            </ListItem>
                            <ListItem>
                              Complex campaign structure also complicates blame
                              assignment
                            </ListItem>
                            <ListItem>
                              Optimization of complex interacting preferences is
                              more common than hard constraint satisfaction
                            </ListItem>
                            <ListItem>
                              Users operate more at the strategic level (how can
                              I reduce contention for energy at Mid Day? Can
                              this campaign be moved to the 3rd flyby?). This is
                              a leap from individual resource constraint
                              violations to search space and problem structure
                            </ListItem>
                            <ListItem>
                              Because the overall goal is optimization of the
                              user – machine combination, user understanding of
                              the scheduling algorithm is critical, making a
                              simple scheduler far more important that scheduler
                              optimality.
                            </ListItem>
                          </UnorderedList>
                        </AccordionItem>
                        <AccordionItem
                          className="according-crush"
                          title={<span>Bio</span>}>
                          <p>
                            Steve Chien is a JPL Fellow, Senior Research
                            Scientist, and Technical Group Supervisor at the Jet
                            Propulsion Laboratory, California Institute of
                            Technology. He supported the deployment of AI
                            software to operational use in numerous missions
                            including: EO-1, MER, Rosetta, ECOSTRESS, OCO-3, and
                            M2020. He is a three time honoree in the NASA
                            Software of the Year Competition and has been
                            awarded four NASA Medals for his work in space
                            autonomy.{' '}
                            <Link
                              target="_blank"
                              href="https://ai.jpl.nasa.gov/public/people/chien/">
                              Learn More
                            </Link>
                          </p>
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
                      <strong>
                        Interpretability with a Skeptical and User-Centric Mind
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>Details</span>}>
                          Interpretable machine learning has been a popular
                          topic of study in the era of machine learning. But are
                          we making progress? Are we heading in the right
                          direction? In this talk, I start with a
                          skeptically-minded journey of this field on our
                          past-selves, before moving on to recent developments
                          of more user-focused methods. The talk will finish
                          with where we might be heading, and a number of open
                          questions we should think about.
                        </AccordionItem>
                        <AccordionItem
                          className="according-crush"
                          title={<span>Bio</span>}>
                          Been Kim is a staff research scientist at Google
                          Brain. Her research focuses on improving
                          interpretability in machine learning: not only by
                          building interpretability methods but also challenging
                          them for their validity. She gave a talk at the G20
                          meeting in Argentina in 2019. Her work TCAV received
                          UNESCO Netexplo award, was featured at Google I/O 19'
                          and in Brian Christian's book on "The Alignment
                          Problem". Been has given keynote at ECML 2020,
                          tutorials on interpretability at ICML, University of
                          Toronto, CVPR and at Lawrence Berkeley National
                          Laboratory. She was a co-workshop Chair ICLR 2019, and
                          has been an (senior) area chair at conferences
                          including NeurIPS, ICML, ICLR, and AISTATS. She
                          received her PhD. from MIT.
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
                        Panel: Post-hoc Explanations versus Designed
                        Explainability
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          open
                          className="according-crush"
                          title={<span>Details</span>}>
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
                          more.
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
                        title="Questions for XAIP 2021 Panelists"
                        width="100%"
                        height="500"
                        src="http://www.tricider.com/embed/?show=3IiA21QTWxJ"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"></iframe>
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
                      <strong>
                        Explanations & Complementarity for Optimal Human-AI
                        Teams
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>Details</span>}>
                          While some AI systems operate in an autonomous mode,
                          many AI systems are deployed in an advisory capacity
                          where a human (eg, loan-officer, judge or doctor) is
                          responsible for the final decision. Should such
                          collaborative AI system be trained in the same way as
                          autonomous AIs, eg by solely optimizing their
                          accuracy? We answer “No” – instead arguing for a
                          human-centered AI (HCAI) approach, that makes
                          fundamentally different demands: complementary
                          performance instead of just accuracy, explanations
                          that increase appropriate reliance instead of mere
                          trust, and controls for accepting user feedback. We
                          discuss several novel methods for achieving these
                          goals, present the results of user studies which
                          challenge current directions in explanation
                          generation, and sketch directions for future research.
                        </AccordionItem>
                        <AccordionItem
                          className="according-crush"
                          title={<span>Bio</span>}>
                          Daniel S. Weld is Thomas J. Cable / WRF Professor in
                          the Paul G. Allen School of Computer Science &
                          Engineering and manages the Semantic Scholar research
                          group at the Allen Institute of Artificial
                          Intelligence. After formative education at Phillips
                          Academy, he received bachelor's degrees in both
                          Computer Science and Biochemistry at Yale University
                          in 1982. He landed a Ph.D. from the MIT Artificial
                          Intelligence Lab in 1988, received a Presidential
                          Young Investigator's award in 1989, an Office of Naval
                          Research Young Investigator's award in 1990, was named
                          AAAI Fellow in 1999 and deemed ACM Fellow in 2005. Dan
                          was a founding editor for the Journal of AI Research,
                          was area editor for the Journal of the ACM, guest
                          editor for Computational Intelligence and Artificial
                          Intelligence, and was Program Chair for AAAI-96. Dan
                          has published two books and scads of technical papers.
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
                className="no-decoration-on-hover"
                size="sm"
                kind="ghost"
                style={{ cursor: 'not-allowed' }}>
                Submit
              </Button>
            </Link>

            <Link
              className="no-decoration-on-hover"
              href="https://www.aaai.org/Publications/Templates/AuthorKit21.zip"
              target="_blank">
              <Button size="sm" kind="ghost">
                Template
              </Button>
            </Link>

            <Button
              className="no-decoration-on-hover"
              size="sm"
              kind="ghost"
              onClick={this.onClickREADME.bind(this)}>
              README
            </Button>

            <Link
              href="/files/call-for-papers-xaip-2021.pdf"
              target="_blank"
              className="no-decoration-on-hover">
              <Button size="sm" kind="ghost">
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
