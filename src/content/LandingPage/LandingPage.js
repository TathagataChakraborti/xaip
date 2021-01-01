import React from 'react';
import { Talk, Speaker } from '../../components/Info';
import { DATA } from '../../components/Data/PaperData';
import { InvitedList } from '../../components/Data/XAIP2020Data';
import {
  Link,
  ListItem,
  UnorderedList,
  Tag,
  Accordion,
  AccordionItem,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  Button,
} from 'carbon-components-react';

import { FaceDissatisfied16 } from '@carbon/icons-react';
import { FaceCool16 } from '@carbon/icons-react';

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
        <div className="bx--grid bx--grid--full-width landing-page">
          <div
            className="bx--row"
            style={{ padding: '50px', marginTop: '100px' }}>
            <div className="bx--col-lg-8">
              <h1 className="landing-page__heading">XAIP @ ICAPS 2020</h1>
              <p style={{ paddingTop: '5px', color: 'grey' }}>Oct 21, 2020</p>
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
              <Link href="#program" style={{ marginRight: '10px' }}>
                <Button
                  kind="secondary"
                  size="field"
                  style={{ marginBottom: '20px', minWidth: '175px' }}>
                  Program
                </Button>
              </Link>
              <Link href="#2020" style={{ marginRight: '10px' }}>
                <Button
                  kind="primary"
                  size="field"
                  style={{ marginBottom: '20px', minWidth: '175px' }}>
                  Papers
                </Button>
              </Link>
              <Link
                href="https://join.slack.com/t/xaip2020/shared_invite/zt-i8uy3uw0-hRqomirHfO__c5Bu47Uunw"
                target="_blank"
                style={{ marginRight: '10px' }}>
                <Button
                  kind="danger"
                  size="field"
                  style={{ minWidth: '175px' }}>
                  Slack
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

        <div className="bx--grid bx--grid--full-width landing-page landing-page__banner">
          <div
            id="program"
            className="bx--col-lg-12 bx--offset-lg-2"
            style={{ paddingTop: '50px' }}>
            <StructuredListWrapper>
              <StructuredListHead>
                <StructuredListRow>
                  <StructuredListCell head>
                    Session 1 | Oct 21 GMT 9:00 - 12:00
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                <StructuredListRow>
                  <StructuredListCell>GMT 9:00 - 9:10</StructuredListCell>
                  <StructuredListCell>
                    Welcome! <FaceCool16 />{' '}
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>GMT 9:10 - 10:00</StructuredListCell>
                  <StructuredListCell>
                    Talks from Accepted Papers
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {DATA.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 1 && <Talk props={item} />}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell>
                    <Link
                      href="https://ibm.box.com/s/4x4q7xbkmy9t0kej9lqg3we7fi6trfhc"
                      target="_blank">
                      <Button kind="primary" size="field">
                        Recording
                      </Button>
                    </Link>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>GMT 10:00 - 10:50</StructuredListCell>
                  <StructuredListCell>Poster Session - 1</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>GMT 10:50 - 11:00</StructuredListCell>
                  <StructuredListCell>Break</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>GMT 11:00 - 12:00</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[2]} />
                      </div>
                      <div
                        className="bx--col-lg-12"
                        style={{ marginTop: '20px' }}>
                        <strong>Invited Talk by Ofra Amir</strong> | Agent
                        Policy Summarization: Describing Agent Behavior to
                        People
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>More </span>}>
                            From cleaning robots to self-driving cars,
                            autonomous and semi-autonomous agents are becoming
                            increasingly prevalent. Understanding the
                            capabilities and limitations of agents is important
                            for users, as they might need to choose between
                            different agents, adjust the level of autonomy of an
                            agent, or work alongside an agent. While prior work
                            in explainable AI has developed methods for
                            explaining individual decisions of an agent to a
                            person retrospectively, these approaches do not
                            provide users with a global understanding of an
                            agent’s expected behavior in a range of situations.
                            In this talk, I will discuss our recent work on
                            agent policy summarization, which aims to convey to
                            people the policy of an agent by demonstrating its
                            behavior in a selected set of world-states, and its
                            integration with local explanations based on
                            saliency maps.
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell />
                  <StructuredListCell>
                    <Link
                      href="https://ibm.box.com/s/s9p2n9kcrwe3pk11veg09ljmh6acliwn"
                      target="_blank">
                      <Button kind="primary" size="field">
                        Recording
                      </Button>
                    </Link>
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>

            <StructuredListWrapper style={{ marginBottom: '2rem' }}>
              <StructuredListHead>
                <StructuredListRow>
                  <StructuredListCell head>
                    Session 2 | Oct 21 GMT 18:00 - 24:00
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                <StructuredListRow>
                  <StructuredListCell>GMT 18:00 - 18:10</StructuredListCell>
                  <StructuredListCell>
                    Welcome back! <FaceCool16 />
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>GMT 18:10 - 19:10</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[1]} />
                      </div>
                      <div
                        className="bx--col-lg-12"
                        style={{ marginTop: '20px' }}>
                        <strong>Invited Talk by Alan Fern</strong> | Don't Get
                        Fooled by Explanations
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>More </span>}>
                            In recent year, many approaches have been developed
                            for producing different types of explanations for AI
                            and machine learning systems. In most cases,
                            however, the explanations are not attached to a
                            sound semantics and leave much open to the
                            interpretation of the explanation consumer. As a
                            result, such explanations can be highly misleading
                            and counterproductive. In this talk, we will
                            overview some of our recent efforts where we aim to
                            develop deeper insight into reinforcement learning
                            agents, showing examples of how even with the best
                            of intentions it is easy to misinterpret
                            explanations. Next we will describe some of our
                            recent efforts on developing RL agents that produce
                            explanations with a clear notion of soundness. We
                            will end by discussing some of the challenges in
                            furthering the development of sound explanations.
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell>
                    <Link
                      href="https://ibm.box.com/s/03scdefgzzdt7xgviv4nswr0aehfzlh4"
                      target="_blank">
                      <Button kind="primary" size="field">
                        Recording
                      </Button>
                    </Link>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>GMT 19:10 - 19:50</StructuredListCell>
                  <StructuredListCell>
                    Talks from Accepted Papers
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {DATA.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 2 && <Talk props={item} />}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell>
                    <Link
                      href="https://ibm.box.com/s/b1axsgvq1a2day9ymjwy5dj23g1bbi15"
                      target="_blank">
                      <Button kind="primary" size="field">
                        Recording
                      </Button>
                    </Link>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>GMT 19:50 - 20:00</StructuredListCell>
                  <StructuredListCell>Break</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>GMT 20:00 - 21:00</StructuredListCell>
                  <StructuredListCell>
                    <div className="bx--row">
                      <div className="bx--col-lg-4">
                        <Speaker props={InvitedList[0]} />
                      </div>
                      <div
                        className="bx--col-lg-12"
                        style={{ marginTop: '20px' }}>
                        <strong>Invited Talk by Cynthia Rudin</strong> | The
                        Extremes of Interpretability: Sparse Decision Trees and
                        Scoring Systems
                        <br />
                        <br />
                        <Accordion align="start">
                          <AccordionItem
                            className="according-crush"
                            title={<span>More </span>}>
                            With widespread use of machine learning, there have
                            been serious societal consequences from using black
                            box models for high-stakes decisions, including
                            flawed bail and parole decisions in criminal
                            justice, flawed models in healthcare, and black box
                            loan decisions in finance. Transparency and
                            interpretability of machine learning models is
                            critical in high stakes decisions. In this talk, I
                            will focus on two of the most fundamental and
                            important problems in the field of interpretable
                            machine learning: optimal sparse decision trees and
                            optimal scoring systems. I will also briefly
                            describe work on interpretable neural networks for
                            computer vision.
                            <br />
                            <br />
                            <strong>Optimal sparse decision trees:</strong> We
                            want to find trees that maximize accuracy and
                            minimize the number of leaves in the tree
                            (sparsity). This is an NP hard optimization problem
                            with no polynomial time approximation. I will
                            present the first practical algorithm for solving
                            this problem, which uses a highly customized
                            dynamic-programming-with-bounds procedure,
                            computational reuse, specialized data structures,
                            analytical bounds, and bit-vector computations.
                            <br />
                            <br />
                            <strong>Optimal scoring systems:</strong> Scoring
                            systems are sparse linear models with integer
                            coefficients. Traditionally, scoring systems have
                            been designed using manual feature elimination on
                            logistic regression models, with a post-processing
                            step where coefficients have been rounded. However,
                            this process can fail badly to produce optimal (or
                            near optimal) solutions. I will present a novel
                            cutting plane method for producing scoring systems
                            from data. The solutions are globally optimal
                            according to the logistic loss, regularized by the
                            number of terms (sparsity), with coefficients
                            constrained to be integers. Predictive models from
                            our algorithm have been used for many medical and
                            criminal justice applications, including in
                            intensive care units in hospitals.
                            <br />
                            <br />
                            <strong>
                              Interpretable neural networks for computer vision:
                            </strong>{' '}
                            We have developed a neural network that performs
                            case-based reasoning. It aims to explains its
                            reasoning process in a way that humans can
                            understand, even for complex classification tasks
                            such as bird identification.
                            <br />
                            <br />[
                            <Link
                              href="https://proceedings.icml.cc/static/paper_files/icml/2020/3364-Paper.pdf"
                              target="_blank">
                              1
                            </Link>
                            ] [
                            <Link
                              href="https://jmlr.org/beta/papers/v20/18-615.html"
                              target="_blank">
                              2
                            </Link>
                            ] [
                            <Link
                              href="https://pubmed.ncbi.nlm.nih.gov/29052706/"
                              target="_blank">
                              3
                            </Link>
                            ] [
                            <Link
                              href="https://papers.nips.cc/paper/9095-this-looks-like-that-deep-learning-for-interpretable-image-recognition.pdf"
                              target="_blank">
                              4
                            </Link>
                            ]
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell>
                    <Link
                      href="https://ibm.box.com/s/qcb6vayvm1fwtr169l4c8v45xh7ycftn"
                      target="_blank">
                      <Button kind="primary" size="field">
                        Recording
                      </Button>
                    </Link>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>GMT 21:00 - 22:00</StructuredListCell>
                  <StructuredListCell>Break</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>GMT 22:00 - 23:00</StructuredListCell>
                  <StructuredListCell>
                    Talks from Accepted Papers
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell />
                  <StructuredListCell style={{ padding: '0' }}>
                    <Accordion align="start">
                      {DATA.map((item, key) => (
                        <React.Fragment key={key}>
                          {item.session === 3 && <Talk props={item} />}
                        </React.Fragment>
                      ))}
                    </Accordion>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell />
                  <StructuredListCell>
                    <Link
                      href="https://ibm.box.com/s/9ica7xblyb0870it65xgnuyc2vsuaruv"
                      target="_blank">
                      <Button kind="primary" size="field">
                        Recording
                      </Button>
                    </Link>
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>GMT 23:00 - 24:00</StructuredListCell>
                  <StructuredListCell>Poster Session - 2</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow className="no-border">
                  <StructuredListCell>GMT midnight</StructuredListCell>
                  <StructuredListCell>
                    Goodbye! <FaceDissatisfied16 />
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListBody>
              <StructuredListRow className="no-border">
                <StructuredListCell>
                  <br />
                  <br />
                  <Link href="#2020" style={{ marginRight: '10px' }}>
                    <Button
                      kind="primary"
                      size="field"
                      style={{ marginBottom: '20px', minWidth: '175px' }}>
                      Papers
                    </Button>
                  </Link>
                  <Link
                    href="https://join.slack.com/t/xaip2020/shared_invite/zt-i8uy3uw0-hRqomirHfO__c5Bu47Uunw"
                    target="_blank">
                    <Button
                      kind="danger"
                      size="field"
                      style={{ minWidth: '175px' }}>
                      Slack
                    </Button>
                  </Link>
                  <br />
                  <br />
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListWrapper>
          </div>

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
      </div>
    );
  }
}

export default LandingPage;
