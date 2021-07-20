import React from 'react';
import { DATA } from '../../components/Data/PaperData';
import { InvitedList } from '../../components/Data/XAIP2020Data';
import { Stub, Talk, Speaker } from '../../components/Info';
import {
  Dropdown,
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

var items = [];
var shuffledData = DATA.filter(item => item.year === '2020');

shuffledData.forEach(function(item, key) {
  if (item.year === '2020') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'XAIP 2020 Accepted Paper | ' + item.title,
      });
    } else if (item.xai) {
      items.push({
        id: item.id,
        label: 'XAI 2020 Highlight | ' + item.title,
      });
    }
  }
});

class Page2020 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      current: null,
    };
  }

  RenderPoster = e => {
    var itemNow = null;

    shuffledData.forEach(function(item, key) {
      if (item.id === e.id) {
        itemNow = item;
        return false;
      }
    });

    this.setState({
      ...this.state,
      current: itemNow,
    });
  };

  render() {
    return (
      <div
        className="bx--grid bx--grid--full-width landing-page landing-page__banner"
        style={{ minHeight: '100vh' }}>
        <Dropdown
          light
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={items}
          label="Select a paper"
          titleText="XAIP 2020 Program"
          style={{ marginBottom: '30px' }}
          itemToString={item => (item ? item.label : '')}
          onChange={({ selectedItem }) => this.RenderPoster(selectedItem)}
        />
        {this.state.current && <Stub props={this.state.current} />}

        <div id="program" className="bx--col-lg-16">
          <p style={{ color: 'gray' }}>
            These are proceedings of the XAIP 2020 edition. You can select a
            paper from above to view the poster or scroll down below for the
            recordings. You can also explore all previous editions by clicking{' '}
            <Link href="/#/explore">here</Link>.
          </p>
          <br />
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
                    {shuffledData.map((item, key) => (
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
                    <div className="bx--col-lg-12">
                      <Link
                        href="https://ibm.box.com/s/s9p2n9kcrwe3pk11veg09ljmh6acliwn"
                        target="_blank">
                        <Button kind="primary" size="field">
                          Recording
                        </Button>
                      </Link>
                      <br />
                      <br />
                      <strong>Invited Talk by Ofra Amir</strong> | Agent Policy
                      Summarization: Describing Agent Behavior to People
                      <br />
                      <br />
                      <Accordion align="start">
                        <AccordionItem
                          className="according-crush"
                          title={<span>More </span>}>
                          From cleaning robots to self-driving cars, autonomous
                          and semi-autonomous agents are becoming increasingly
                          prevalent. Understanding the capabilities and
                          limitations of agents is important for users, as they
                          might need to choose between different agents, adjust
                          the level of autonomy of an agent, or work alongside
                          an agent. While prior work in explainable AI has
                          developed methods for explaining individual decisions
                          of an agent to a person retrospectively, these
                          approaches do not provide users with a global
                          understanding of an agent’s expected behavior in a
                          range of situations. In this talk, I will discuss our
                          recent work on agent policy summarization, which aims
                          to convey to people the policy of an agent by
                          demonstrating its behavior in a selected set of
                          world-states, and its integration with local
                          explanations based on saliency maps.
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
              <StructuredListRow>
                <StructuredListCell>GMT 18:10 - 19:10</StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[1]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <Link
                        href="https://ibm.box.com/s/03scdefgzzdt7xgviv4nswr0aehfzlh4"
                        target="_blank">
                        <Button kind="primary" size="field">
                          Recording
                        </Button>
                      </Link>
                      <br />
                      <br />
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
                          and machine learning systems. In most cases, however,
                          the explanations are not attached to a sound semantics
                          and leave much open to the interpretation of the
                          explanation consumer. As a result, such explanations
                          can be highly misleading and counterproductive. In
                          this talk, we will overview some of our recent efforts
                          where we aim to develop deeper insight into
                          reinforcement learning agents, showing examples of how
                          even with the best of intentions it is easy to
                          misinterpret explanations. Next we will describe some
                          of our recent efforts on developing RL agents that
                          produce explanations with a clear notion of soundness.
                          We will end by discussing some of the challenges in
                          furthering the development of sound explanations.
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
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
                    {shuffledData.map((item, key) => (
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
              <StructuredListRow>
                <StructuredListCell>GMT 20:00 - 21:00</StructuredListCell>
                <StructuredListCell>
                  <div className="bx--row">
                    <div className="bx--col-lg-4">
                      <Speaker props={InvitedList[0]} />
                    </div>
                    <div className="bx--col-lg-12">
                      <Link
                        href="https://ibm.box.com/s/qcb6vayvm1fwtr169l4c8v45xh7ycftn"
                        target="_blank">
                        <Button kind="primary" size="field">
                          Recording
                        </Button>
                      </Link>
                      <br />
                      <br />
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
                          box models for high-stakes decisions, including flawed
                          bail and parole decisions in criminal justice, flawed
                          models in healthcare, and black box loan decisions in
                          finance. Transparency and interpretability of machine
                          learning models is critical in high stakes decisions.
                          In this talk, I will focus on two of the most
                          fundamental and important problems in the field of
                          interpretable machine learning: optimal sparse
                          decision trees and optimal scoring systems. I will
                          also briefly describe work on interpretable neural
                          networks for computer vision.
                          <br />
                          <br />
                          <strong>Optimal sparse decision trees:</strong> We
                          want to find trees that maximize accuracy and minimize
                          the number of leaves in the tree (sparsity). This is
                          an NP hard optimization problem with no polynomial
                          time approximation. I will present the first practical
                          algorithm for solving this problem, which uses a
                          highly customized dynamic-programming-with-bounds
                          procedure, computational reuse, specialized data
                          structures, analytical bounds, and bit-vector
                          computations.
                          <br />
                          <br />
                          <strong>Optimal scoring systems:</strong> Scoring
                          systems are sparse linear models with integer
                          coefficients. Traditionally, scoring systems have been
                          designed using manual feature elimination on logistic
                          regression models, with a post-processing step where
                          coefficients have been rounded. However, this process
                          can fail badly to produce optimal (or near optimal)
                          solutions. I will present a novel cutting plane method
                          for producing scoring systems from data. The solutions
                          are globally optimal according to the logistic loss,
                          regularized by the number of terms (sparsity), with
                          coefficients constrained to be integers. Predictive
                          models from our algorithm have been used for many
                          medical and criminal justice applications, including
                          in intensive care units in hospitals.
                          <br />
                          <br />
                          <strong>
                            Interpretable neural networks for computer vision:
                          </strong>{' '}
                          We have developed a neural network that performs
                          case-based reasoning. It aims to explains its
                          reasoning process in a way that humans can understand,
                          even for complex classification tasks such as bird
                          identification.
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
                    {shuffledData.map((item, key) => (
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
              <StructuredListRow className="no-border">
                <StructuredListCell />
                <StructuredListCell>
                  XAI @ IJCAI 2020 Highlights
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell />
                <StructuredListCell style={{ padding: '0' }}>
                  <Accordion align="start">
                    {shuffledData.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.xai && <Talk props={item} />}
                      </React.Fragment>
                    ))}
                  </Accordion>
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
          </StructuredListWrapper>
        </div>
      </div>
    );
  }
}

export default Page2020;
