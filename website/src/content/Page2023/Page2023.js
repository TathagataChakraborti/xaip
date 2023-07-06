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
          <h4>HAXP 2023 Program</h4>
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
          <h4>Schedule (10 July 9:00 - 17:30)</h4>
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
                        <strong>
                          Invited Talk I: Explaining Numeric Flaws in Plans
                        </strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Abstract</span>}>
                            Consider the situation where plans are constructed
                            incrementally and cooperatively, with humans
                            involved in the selection and ordering of actions in
                            the plan. This is typical of many domains, such as
                            daily activity planning for spacecraft, rovers,
                            UAVs, rescue operations, and humanitarian missions.
                            In such situations, the plans under development may
                            be incomplete, and may have various kinds of flaws,
                            including unsatisfied action conditions, durative
                            conditions that are violated at some point,
                            conflicting effects of different actions, and
                            resource bounds that are exceeded. In classical
                            planning, it is relatively easy to explain the cause
                            of a violated precondition - either the proposition
                            was never satisfied to begin with, or some
                            intervening action made the propositional condition
                            false. However, with numeric conditions, things are
                            not so easy. The condition may be a function of more
                            than one variable, and there may be multiple
                            incremental contributions to the value of each
                            variable. For example, a rover Drive operation might
                            have a start condition that BatteryCharge > 200.
                            However, there are likely many previous activities
                            that incrementally increase or decrease battery
                            charge. Technically, the cause of the current value
                            of battery charge includes all of these
                            contributions. However, a long list of incremental
                            contributions to BatteryCharge is not a very
                            succinct or satisfying explanation of why the
                            condition was violated. In this talk, I will explore
                            a series of examples involving numeric condition
                            flaws, and suggest a number of possible ways of
                            explaining them, ranging from relatively simple
                            explanations, to more challenging explanations that
                            require more reasoning about the numeric functions
                            and the contributing effects.
                          </AccordionItem>
                          <AccordionItem
                            className="according-crush"
                            title={<span>Bio</span>}>
                            David E. Smith received his Ph.D. in AI from
                            Stanford University way back in 1985, at the start
                            of the expert systems boom. However, he resisted the
                            allure of expert systems startups and big bucks, and
                            instead found "true religion" working on AI
                            planning. He spent his earlier years as a Research
                            Associate at Stanford University, Research Scientist
                            at the Rockwell Palo Alto Science Center, and
                            Visiting Scholar at the University of Washington. He
                            joined NASA Ames Research Center in 1997 where he
                            served as lead of the Planning and Scheduling Group
                            for six years before abdicating the throne and going
                            back to scribbling incomprehensible stuff on
                            whiteboards. Much of his research focused on pushing
                            the boundaries of AI planning technology to handle
                            richer models of time, concurrency, exogenous
                            events, uncertainty, and oversubscription. He
                            retired from NASA in 2018, but can't seem to figure
                            out what that means. For the past several years he
                            has been consulting at NASA on a next generation
                            mission planning system called APRÈS, where he keeps
                            pushing the project into areas that are way too
                            difficult to solve. He has also been tormenting
                            several graduate students at Arizona State
                            University and Kings College London on topics
                            involving human-aware planning and plan explanation.
                            He is currently serving as a board member of the AI
                            Access Foundation (JAIR's parent organization), and
                            as Secretary-Treasurer for AAAI.
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>10:00 - 10:30</StructuredListCell>
                  <StructuredListCell>
                    Paper Session I Part 1
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 1 && item.position < 3 && (
                            <Talk props={item} />
                          )}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>
                    10:30 - 11:00
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Coffee Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>11:00 - 11:45</StructuredListCell>
                  <StructuredListCell>
                    Paper Session I Part 2
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {shuffledData.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 1 && item.position > 2 && (
                            <Talk props={item} />
                          )}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
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
                        <strong>
                          Invited Talk II: Start Making Sense! Using Cognitive,
                          Social, and Affective Information for Interaction and
                          Explainable Planning
                        </strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Abstract</span>}>
                            TBD
                          </AccordionItem>
                          <AccordionItem
                            className="according-crush"
                            title={<span>Bio</span>}>
                            Ron Petrick (http://petrick.uk/) is a Professor of
                            Computer Science at Heriot-Watt University and a
                            member of the Edinburgh Centre for Robotics. His
                            research is centred around automated planning,
                            knowledge representation and reasoning, and
                            cognitive robotics, with research interests in
                            epistemic planning, multiagent planning, human-robot
                            interaction, and explainable planning. Much of his
                            recent work has focused on applications of planning
                            to robot systems deployed in real-world environments
                            with humans. He is currently the Coordinator of the
                            UK Planning and Scheduling Special Interest Group
                            (UK PlanSIG) and Co-Chair of the AAAI Symposium
                            Series.
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
                  <StructuredListCell>14:00 - 15:30</StructuredListCell>
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
                    15:30 - 16:00
                    <br />
                  </StructuredListCell>
                  <StructuredListCell>Coffee Break</StructuredListCell>
                </StructuredListRow>

                <StructuredListRow>
                  <StructuredListCell>16:00 - 16:45</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[2]} />
                      </div>
                      <div className="bx--col-lg-12">
                        <br />
                        <br />
                        <strong>
                          Invited Talk III: Hierarchical Formalisms in Plan
                          Recognition as Planning
                        </strong>
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>Details</span>}>
                            In recent years, the idea of plan recognition as
                            planning has provided significant advances in the
                            field of plan recognition. The main benefits of
                            exploiting techniques from planning are the
                            availability of efficient solvers and heuristics, as
                            well as well-established formalisms to represent the
                            behavior to be recognized. However, while earlier
                            work in plan recognition often used hierarchical
                            representations, most work in this area has been
                            done using techniques from classical
                            (non-hierarchical) planning. In my talk, I want to
                            highlight some properties of hierarchical formalisms
                            that might be interesting for plan and goal
                            recognition as planning and advertise its use in
                            this area.
                          </AccordionItem>
                          <AccordionItem
                            className="according-crush"
                            title={<span>Bio</span>}>
                            Daniel Höller has been a postdoctoral research
                            fellow in the Foundations of Artificial Intelligence
                            Group of Jörg Hoffmann at Saarland University since
                            2020. Before that, he was at the Institute of
                            Artificial Intelligence at Ulm University, where he
                            did this PhD on hierarchical planning (especially
                            HTN planning), supervised by Susanne Biundo. Besides
                            HTN planning, his work is concerned with lifted
                            planning, and with the combination of machine
                            learning and planning.
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>

                <StructuredListRow className="no-border">
                  <StructuredListCell>16:45 - 17:30</StructuredListCell>
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
