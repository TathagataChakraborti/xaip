import React from 'react';
import { DATA } from '../../components/Data/PaperData';
import {
  InvitedList,
  PanelList,
  MemberListCache,
  PCListCache,
} from '../../components/Data/XAIP2021Data';
import {
  Member,
  Talk,
  Speaker,
  PCReduced,
  shuffleArray,
} from '../../components/Info';
import {
  ListItem,
  UnorderedList,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  Accordion,
  AccordionItem,
  Link,
  Button,
} from 'carbon-components-react';

import { FaceDissatisfied16 } from '@carbon/icons-react';
import { FaceCool16 } from '@carbon/icons-react';

var MemberList = shuffleArray(MemberListCache);
var PCList = shuffleArray(PCListCache);

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
    }
  }
});

class Page2021 extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        className="bx--grid bx--grid--full-width landing-page landing-page__banner"
        style={{ minHeight: '100vh' }}>
        <div id="program" className="bx--col-lg-12 bx--offset-lg-2">
          <br />
          <br />
          <br />
          <br />
          <h4>XAIP 2021 Program</h4>
          <hr />

          <p style={{ color: 'gray' }}>
            These are proceedings of the XAIP 2021 edition. You can also explore
            all previous editions by clicking{' '}
            <Link href="/#/explore">here</Link>.
          </p>
          <br />
          <br />

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
              href="https://ibm.box.com/s/qds11d8aqzi8ja7pd8dh1695170qtyxn"
              target="_blank"
              style={{ marginLeft: '0.5rem', textDecoration: 'none' }}>
              <Button kind="secondary" size="sm">
                Recordings
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
              <StructuredListRow className="no-border">
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
                <StructuredListCell />
                <StructuredListCell>
                  <Link
                    href="https://ibm.box.com/s/ylxb6twdeo9z73k89df8ef1dbu4f0slc"
                    target="_blank"
                    style={{ textDecoration: 'none', padding: '10px' }}>
                    <Button kind="secondary" size="sm">
                      Recordings
                    </Button>
                  </Link>
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
                      <Link
                        href="https://ibm.box.com/s/qjm4893zh031yt3j99rqnds05h35to6s"
                        target="_blank"
                        style={{ textDecoration: 'none' }}>
                        <Button kind="secondary" size="sm">
                          Recording
                        </Button>
                      </Link>
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
                      <Link
                        href="https://ibm.box.com/s/xph8vmooij069rwavdnm0r226dechtmq"
                        target="_blank"
                        style={{ textDecoration: 'none' }}>
                        <Button kind="secondary" size="sm">
                          Recording
                        </Button>
                      </Link>
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
                      <Link
                        href="https://ibm.box.com/s/grhdwyknneumx9recbgksyszockhf49z"
                        target="_blank"
                        style={{ textDecoration: 'none' }}>
                        <Button kind="secondary" size="sm">
                          Recording
                        </Button>
                      </Link>
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
              <StructuredListRow className="no-border">
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
                <StructuredListCell />
                <StructuredListCell>
                  <Link
                    href="https://ibm.box.com/s/7c6gvgjc530ey8pmj9knjhhrvjvipgt5"
                    target="_blank"
                    style={{ textDecoration: 'none', padding: '10px' }}>
                    <Button kind="secondary" size="sm">
                      Recordings
                    </Button>
                  </Link>
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
                      <Link
                        href="https://ibm.box.com/s/293l51pd9ueicdtploy4lu5kv6whyr9h"
                        target="_blank"
                        style={{ textDecoration: 'none' }}>
                        <Button kind="secondary" size="sm">
                          Recording
                        </Button>
                      </Link>
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

        <br />
        <br />
        <br />
        <br />

        <div id="team" className="bx--col-lg-12 bx--offset-lg-2">
          <h4>XAIP 2021 Organizing Team</h4>
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

export default Page2021;
