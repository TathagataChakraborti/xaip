import React from 'react';
import { DATA } from '../../components/Data/PaperData';
import {
  MemberListCache,
  PCListCache,
  InvitedList,
  PanelList,
} from '../../components/Data/XAIP2022Data';
import { Member, Talk, PCReduced, shuffleArray, Speaker } from '../../components/Info';
import {
  Accordion,
  AccordionItem,
  Link,
  Button,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';

import { FaceDissatisfied16 } from '@carbon/icons-react';
import { FaceCool16 } from '@carbon/icons-react';

var MemberList = shuffleArray(MemberListCache);
var PCList = shuffleArray(PCListCache);

var timeOptions = {hour: '2-digit', minute:'2-digit'};

var items = [];
var shuffledData = DATA.filter(item => item.year === '2022');
shuffledData.sort(
  (item1, item2) =>
    item1.session * 10 + item1.position - (item2.session * 10 + item2.position)
);

shuffledData.forEach(function(item, key) {
  if (item.year === '2022') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'XAIP 2022 Accepted Paper | ' + item.title,
      });
    }
  }
});

class Page2022 extends React.Component {
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
          <h4>XAIP 2022 Program</h4>
          <hr />

          <br />
          <br />

          <div className="bx--row">
            <Link
              href="https://openreview.net/group?id=icaps-conference.org/ICAPS/2022/Workshop/XAIP"
              style={{ marginLeft: '1rem', textDecoration: 'none' }}
              target="_blank">
              <Button kind="primary" size="sm">
                Open Review
              </Button>
            </Link>

            {/* <Link
              href="https://ibm.box.com/s/qds11d8aqzi8ja7pd8dh1695170qtyxn"
              target="_blank"
              style={{ marginLeft: '0.5rem', textDecoration: 'none' }}>
              <Button kind="secondary" size="sm">
                Recordings
              </Button>
            </Link> */}

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
          <h4>Schedule</h4>
          <hr />

          <div>
          <StructuredListWrapper>
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>
                  Day 1 | June 14 UTC 13:30:00 - 18:00<br/>
                  local {new Date(Date.UTC(2022, 5, 14, 13, 30)).toLocaleTimeString([], timeOptions) + " - " + new Date(Date.UTC(2022, 5, 14, 18, 0)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>

              <StructuredListRow>
                <StructuredListCell>
                  UTC 13:30 - 13:45
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 13, 30)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 13, 45)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  Welcome! <FaceCool16 />{' '}
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow className="no-border">
                <StructuredListCell>UTC 13:45 - 14:50
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 13, 45)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 14, 50)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  Paper Session 1
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
                <StructuredListCell>UTC 14:50 - 15:00
                <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 14, 50)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 15, 0)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow className="no-border">
                <StructuredListCell>UTC 15:00 - 15:50
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 15, 0)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 15, 50)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  Paper Session 2
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
                <StructuredListCell>UTC 15:50 - 16:00
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 15, 50)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 16, 0)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow  className="no-border">
                <StructuredListCell>UTC 16:00 - 16:50
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 16, 0)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 16, 50)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  Paper Session 3
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
                <StructuredListCell>UTC 16:50 - 17:00
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 16, 50)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 17, 0)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>UTC 17:00 - 18:00
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 14, 17, 0)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 14, 18, 0)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[0]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <br />
                      <br />
                      <strong>
                        TBD
                      </strong>
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
                          <p>
                          Mark Riedl is a professor in the College of Computing,
                          School of Interactive Computing.  As director of the
                          Entertainment Intelligence Lab, Dr. Riedl's research
                          focuses on the study of artificial intelligence and
                          storytelling for entertainment (e.g., computer games).
                          Narrative is a cognitive tool used by humans for
                          communication, sense-making, entertainment, education,
                          and training. Consequently, there is value in
                          discovering new computational techniques that make
                          computers better communicators, entertainers, and
                          educators. The principle research question Dr. Riedl
                          addresses through his research is: how can intelligent
                          computational systems reason about and autonomously
                          create engaging experiences for users of virtual
                          worlds and computer games?.{' '}
                            <Link
                              target="_blank"
                              href="https://www.cc.gatech.edu/people/mark-riedl">
                              Learn More
                            </Link>
                          </p>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>

          <StructuredListWrapper style={{ marginBottom: '2rem' }}>
            <StructuredListHead>
              <StructuredListRow>
                <StructuredListCell head>
                  Day 2 | June 15 UTC 14:00 - 18:30
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 14, 0)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 18, 30)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell>UTC 14:00 - 15:00
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 14, 0)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 15, 0)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[2]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <br />
                      <br />
                      <strong>
                        Argumentation-based Interactive Explanations
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>Details</span>}>
                          It is widely acknowledged that transparency of
                          automated decision making is crucial for deployability
                          of intelligent systems, and explaining the reasons why
                          some outputs are computed is a way to achieve this
                          transparency. As a result, explainable AI (XAI) has
                          been investigated for decades and, together with AI
                          itself, has witnessed unprecedented growth in recent
                          years. Among various approaches to XAI, argumentative
                          models have been advocated in both the AI and social
                          science literature, as their dialectical nature
                          appears to match some basic desirable features of the
                          explanation activity.
                          Thus, it is not surprising that computational
                          argumentation, as understood in AI, is being used to
                          provide (a variety of) explanations for the outputs of
                          (a variety of) AI methods, leveraging on computational
                          argumentation’s wide array of reasoning abstractions.
                          I will argue that this overall take on XAI is in line
                          with Mercier and Sperber’s interactionist view to
                          human reasoning and can support, in particular,
                          interactive forms of XAI between humans
                          and machines.I will also provide several illustrations
                          of interactive XAI via computational argumentation.
                        </AccordionItem>
                        <AccordionItem
                          className="according-crush"
                          title={<span>Bio</span>}>
                          Francesca Toni is Professor in Computational Logic and
                          Royal Academy of Engineering/JP Morgan Research Chair
                          in Argumentation-based Interactive Explainable AI,
                          in the Department of Computing at Imperial College
                          London, where she is a member of the Artificial
                          Intelligence research theme and the leader of the
                          CLArg (Computational Logic and Argumentation)
                          research group.
                          She is also a member of the GLAM research group and of
                          the AI@Imperial Network of Excellence at
                          Imperial College London, and the founding leader of
                          the Centre for eXplainable AI (XAI).
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>UTC 15:00 - 15:30
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 15, 0)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 15, 30)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>UTC 15:30 - 16:30</StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-16">
                      <strong>
                        Panel: Explanations as an Interactive Dialogue
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          open
                          className="according-crush"
                          title={<span>Details</span>}>
                         Within XAIP and the wider XAI community, there is a
                         consensus that explanations may be best modeled as a
                         conversation between the system and the user. However,
                         while most researchers agree on the centrality of
                         explanatory dialogue in the overall explanatory
                         process, the vast majority of works, particularly
                         within the XAIP community, tend to focus on a single
                         iteration of the overall interaction. Many explanation
                         generation methods are formalized as methods to
                         generate responses to specific explanatory queries.
                         This has led to the development of several useful
                         explanatory methods, but we are none the closer to
                         modeling and supporting the entire explanatory
                         dialogue. While all the current works in XAIP can in
                         principle be used as part of a larger explanatory
                         dialogue, there are very few works that have explicitly
                         studied the problem of supporting the full explanatory
                         dialogue. To the best of our knowledge most existing
                         works that try to address this larger interaction tend
                         to do so in the context of specific systems like
                         decision-support systems. The goal of this panel is
                         to motivate the community to look at the problem of
                         supporting the overall explanatory dialogue. Through
                         this panel we hope to highlight the research challenges
                         and opportunities related to modeling, implementing,
                         and evaluating explanatory dialogues.
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

              <StructuredListRow>
                <StructuredListCell>UTC 16:30 - 16:45
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 16, 30)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 16, 45)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow  className="no-border">
                <StructuredListCell>UTC 16:45 - 17:25
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 16, 45)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 17, 25)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  Paper Session 4
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell style={{ padding: '0' }}>
                  <Accordion align="start">
                    {shuffledData.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.session === 4 && (
                          <Talk props={item} />
                        )}
                      </React.Fragment>
                    ))}
                  </Accordion>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>UTC 17:25 - 17:30
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 17, 25)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 17, 30)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>Small Break</StructuredListCell>
              </StructuredListRow>

              <StructuredListRow>
                <StructuredListCell>UTC 17:30 - 18:30
                <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 17, 30)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 18, 30)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[1]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <br />
                      <br />
                      <strong>
                      Explanations Are Not Enough: The Power of Justification in Repairing Trust
                      </strong>
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>Details</span>}>
                          Explanations are important to people’s understanding
                          of other agents (human or machine). But when an agent
                          commits a norm-violating act, trust is at risk, and
                          explanations may be insufficient to repair trust. I
                          will examine the complex relationship between
                          explanations and trust and propose that
                          justifications—norm-referencing action
                          explanations—can repair trust after norm violations.
                          I will also explore the role of justifications in
                          planning future actions that may violate norms.
                        </AccordionItem>
                        <AccordionItem
                          className="according-crush"
                          title={<span>Bio</span>}>
                          Bertram F. Malle was born in Graz, Austria, and
                          studied psychology, philosophy, and linguistics at
                          the University of Graz. After receiving his Masters
                          degrees in psychology and philosophy,
                          he entered graduate school in psychology in the
                          United States in 1990. Malle received his Ph.D. at
                          Stanford University in 1995 and joined the faculty
                          of the University of Oregon that year. During his
                          tenure at the University of Oregon, Dr. Malle also
                          served as the Director of the Institute of Cognitive
                          and Decision Sciences (2001-2007). He became
                          Professor of Psychology in 2007, and in 2008 he
                          joined Brown University.

                          Malle’s research, funded by the NSF, Army, Templeton
                          Foundation, Office of Naval Research, and DARPA,
                          focuses on social cognition (intentionality, mental
                          state inferences, explanations), moral psychology
                          (blame, guilt, norms), and human-robot interaction
                          (moral competence in robots, socially assistive
                          robotics). He uses a wide variety of methodologies,
                          including text content analysis, observations of
                          social interaction, eye tracking, and reaction times.
                          He was recipient of the Society of Experimental Social
                          Psychology Outstanding Dissertation award in 1995 and
                          of a National Science Foundation CAREER award in 1997.
                          In 2009, he was president of the Society of Philosophy
                          and Psychology.
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow className="no-border">
                <StructuredListCell>UTC 18:30 - 18:45
                  <br/>
                  local {new Date(Date.UTC(2022, 5, 15, 18, 30)).toLocaleTimeString([], timeOptions) + " - " +
                  new Date(Date.UTC(2022, 5, 15, 18, 45)).toLocaleTimeString([], timeOptions)}
                </StructuredListCell>
                <StructuredListCell>
                  Goodbye! <FaceDissatisfied16 />
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
          <h4>XAIP 2022 Organizing Team</h4>
          <hr />
          <Link href="mailto:xaip21team@gmail.com">
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
        </div>
      </div>
    );
  }
}

export default Page2022;
