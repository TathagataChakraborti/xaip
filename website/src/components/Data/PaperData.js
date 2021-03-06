import React from 'react';
import { Link } from 'carbon-components-react';

const DATA = [
  {
    id: 1,
    title: 'Macrocognition: Foundations for Planning and Explanation',
    authors: 'Robert R. Hoffman',
    abstract:
      'Macrocognition is how cognition adapts to complexity. The historical roots of macrocognition reach back to the late 1800s, and the essentials of the paradigm have been fairly well specified. The models of sensemaking, flexecution, coordination, re-learning, and mental projection help clarify differences between macrocognitive and microcognitive approaches. Microcognitive models are based on causal chains having distinct start and stop (or input-output) points. On the other hand, macrocognitive models are cyclical and closed-loop. Microcognitive models are useful in hindsight, to tell stories; macrocognitive models are transcendent and anticipatory. The primary macrocognitive functions correspond with the "Families of Laws of Complex Cognitive Systems" developed by David Woods. The Families are based on five fundamental bounds on complex human-machine work systems. Noteworthy aspects of macrocognition are pertinent to planning systems technology: 1) Flexecution emphasizes the fact that goals morph even as they are being pursued; 2) Re-grounding embraces the fact that planning and plan execution are team activities; and 3) Projection elaborates on how planning is anticipatory. These macrocognitive concepts and models have implications for Explainable AI (XAI) systems. If we present to a user an AI planning system that explains how it works, how do we know whether the explanation works and the user has made sense of the AI and is able to flexecute with it? In other words, how do we know that an XAI system is any good? Key concepts of measurement include specific methods for evaluating: (1) the goodness of explanations, (2) whether users are satisfied by explanations, (3) how well users understand the AI systems, (4) how curiosity motivates the search for explanations, (5) whether the user\'s trust and reliance on the AI are appropriate, and finally, (6) how well the human-XAI work system performs.',
    uisp: false,
    xaip: true,
    invited: true,
    year: '2019',
    link: null,
    render: true,
  },
  {
    id: 2,
    title: '(How) Can AI Bots Lie?',
    authors: 'Tathagata Chakraborti, Subbarao Kambhampati',
    abstract:
      'Recent work on explanations for decision-making problems has viewed the explanation process as one of model reconciliation where an AI agent brings the human mental model (of its capabilities, beliefs, and goals) to the same page with regards to a task at hand. This formulation succinctly captures many possible types of explanations, as well as explicitly addresses the various properties – e.g. the social aspects, contrastiveness, and selectiveness – of explanations studied in social sciences among human-human interactions. However, it turns out that the same process can be hijacked into producing "alternative explanations" that are not true but still satisfy all these properties of a proper explanation. In AIES 2019, we discussed when such behavior may be appropriate but did not go into details of how exactly they can be generated. In this paper, we go into details of this curious feature of the model reconciliation process as a well-established framework for explanation generation of decision-making problems and formalize the relationship between explanations, lies, and persuasion in the model reconciliation framework.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_17.pdf',
    render: true,
  },
  {
    id: 3,
    title:
      'A General Framework for Synthesizing and Executing Self-Explaining Plans for Human-AI Interaction',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, Christian Muise, Subbarao Kambhampati',
    abstract:
      "In this work, we present a general formulation for decision making in human-in-the-loop planning problems where the human's expectations about an autonomous agent may differ from the agent's own model. We show how our formulation for such multi-model planning problems allows us to capture existing approaches to this problem and also be used to generate novel explanatory behaviors. Our formulation also reveals a deep connection between multi-model planning and epistemic planning and we show how we can leverage classical planning compilations designed for epistemic planning for solving multi-model planning problems. We empirically show how this new compilation provides a computational advantage over previous approaches that separate reasoning about model reconciliation and identifying the agent's plan.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_20.pdf',
    render: true,
  },
  {
    id: 4,
    title: 'Feature-directed Active Learning for Learning User Preferences',
    authors: 'Sriram Gopalakrishnan, Utkarsh Soni, Subbarao Kambhampati',
    abstract:
      'Learning preferences of users over plan traces can be a challenging task given a large number of features and limited queries that we can ask a single user. Additionally, the preference function itself can be quite convoluted and non-linear. Our approach uses feature-directed active learning to gather the necessary information about plan trace preferences. This data is used to train a simple feedforward neural network to learn preferences over the sequential data. We evaluate the impact of active learning on the number of traces that are needed to train a model that is accurate and interpretable. This evaluation is done by comparing the aforementioned feedforward network to a more complex neural network model that uses LSTMs and is trained with a larger dataset without active learning.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_13.pdf',
    render: true,
  },
  {
    id: 5,
    title: 'Design for Interpretability',
    authors:
      'Anagha Kulkarni, Sarath Sreedharan, Sarah Keren, Tathagata Chakraborti, David E. Smith, Subbarao Kambhampati',
    abstract:
      "The interpretability of an AI agent's behavior is of utmost importance for effective human-AI interaction. To this end, there has been increasing interest in characterizing and generating interpretable behavior of the agent. An alternative approach to guarantee that the agent generates interpretable behavior would be to design the agent's environment such that uninterpretable behaviors are either prohibitively expensive or unavailable to the agent. To date, there has been work under the umbrella of goal or plan recognition design exploring this notion of environment redesign in some specific instances of interpretable of behavior. In this position paper, we scope the landscape of interpretable behavior and environment redesign in all its different flavors. Specifically, we focus on three specific types of interpretable behaviors -- explicability, legibility, and predictability -- and present a general framework for the problem of environment design that can be instantiated to achieve each of the three interpretable behaviors. We also discuss how specific instantiations of this framework correspond to prior works on environment design and identify exciting opportunities for future work.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_9.pdf',
    render: true,
  },
  {
    id: 6,
    title:
      "Why Can't You do that HAL? Explaining Unsolvability of Planning Tasks",
    authors:
      'Sarath Sreedharan, Siddharth Srivastava, David Smith, Subbarao Kambhampati',
    abstract:
      ' Explainable planning is widely accepted as a prerequisite for autonomous agents to successfully work with humans. While there has been a lot of research on generating explanations of solutions to planning problems, explaining the absence of solutions remains an open and under-studied problem, even though such situations can be the hardest to understand or debug. In this paper, we show that hierarchical abstractions can be used to efficiently generate reasons for unsolvability of planning problems. In contrast to related work on computing certificates of unsolvability, we show that these methods can generate compact, human-understandable reasons for unsolvability. Empirical analysis and user studies show the validity of our methods as well as their computational efficacy on a number of benchmark planning domains.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_16.pdf',
    render: true,
  },
  {
    id: 7,
    title: 'Model-Free Model Reconciliation',
    authors:
      'Sarath Sreedharan, Alberto Olmo, Aditya Prasad Mishra, Subbarao Kambhampati',
    abstract:
      "Designing agents capable of explaining complex sequential decisions remain a significant open problem in automated decision-making. Recently, there has been a lot of interest in developing approaches for generating such explanations for various decision-making paradigms. One such approach has been the idea of explanation as model-reconciliation. The framework hypothesizes that one of the common reasons for the user's confusion could be the mismatch between the user's model of the task and the one used by the system to generate the decisions. While this is a general framework, most works that have been explicitly built on this explanatory philosophy have focused on settings where the model of user's knowledge is available in a declarative form. Our goal in this paper is to adapt the model reconciliation approach to the cases where such user models are no longer explicitly provided. We present a simple and easy to learn labeling model that can help an explainer decide what information could help achieve model reconciliation between the user and the agent.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_7.pdf',
    render: true,
  },
  {
    id: 8,
    title: 'Towards Explainable Planning as a Service',
    authors:
      'Michael Cashmore, Anna Collins, Benjamin Krarup, Senka Krivic, Daniele Magazzeni, David Smith',
    abstract:
      'Explainable AI is an important area of research within which Explainable Planning is an emerging topic. In this paper, we argue that Explainable Planning can be designed as a service – that is, as a wrapper around an existing planning system that utilises the existing planner to assist in answering contrastive questions. We introduce a prototype framework to facilitate this, along with some examples of how a planner can be used to address certain types of contrastive questions. We discuss the main advantages and limitations of such an approach and we identify open questions for Explainable Planning as a service that identify several possible research directions.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_14.pdf',
    render: true,
  },
  {
    id: 9,
    title: 'Online Explanation Generation for Human-Robot Teaming',
    authors:
      'Mehrdad Zakershahrak, Ze Gong, Nikhillesh Sadassivam, Akkamahadevi Hanni, Yu Zhang',
    abstract:
      "As Artificial Intelligence (AI) becomes an integral part of our life, the development of explainable AI, embodied in the decision-making process of an AI or robotic agent, becomes imperative. For a robotic teammate, the ability to generate explanations to explain its behavior is one of the key requirements of an explainable agency. Prior work on explanation generation focuses on supporting the reasoning behind the robot's behavior. These approaches, however, fail to consider the mental workload needed to understand the received explanation. In other words, the human teammate is expected to understand any explanation provided, often before the task execution, no matter how much information is presented in the explanation. In this work, we argue that an explanation, especially complex ones, should be made in an online fashion during the execution, which helps spread out the information to be explained and thus reducing the mental workload of humans. However, a challenge here is that the different parts of an explanation are dependent on each other, which must be taken into account when generating online explanations. To this end, a general formulation of online explanation generation is presented along with three different implementations satisfying different online properties. We base our explanation generation method on a model reconciliation setting introduced in our prior work. Our approaches are evaluated both with human subjects in a standard planning competition (IPC) domain, using NASA Task Load Index (TLX), as well as in simulation with ten different problems across two IPC domains.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_12.pdf',
    render: true,
  },
  {
    id: 10,
    title:
      'Towards Model-Based Contrastive Explanations for Explainable Planning',
    authors: 'Benjamin Krarup, Michael Cashmore, Daniele Magazzeni, Tim Miller',
    abstract:
      'An important type of question that arises in Explainable Planning is a contrastive question, of the form "Why action A instead of action B?". These kinds of questions can be answered with a contrastive explanation that compares properties of the original plan containing A against the contrastive plan containing B. An effective explanation of this type serves to highlight the differences between the decisions that have been made by the planner and what the user would expect, as well as to provide further insight into the model and the planning process. Producing this kind of explanation requires the generation of the contrastive plan. This paper introduces domain-independent compilations of user questions into constraints. These constraints are added to the planning model, so that a solution to the new model represents the contrastive plan. We introduce a formal description of the compilation from user question to constraints in a temporal and numeric PDDL2.1 planning setting.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_3.pdf',
    render: true,
  },
  {
    id: 11,
    title:
      'Human-Understandable Explanations of Infeasibility for Resource-Constrained Scheduling Problems',
    authors: 'Niklas Lauffer, Ufuk Topcu',
    abstract:
      'Significant work has been dedicated to developing methods for communicating reasons for decision-making within automated scheduling systems to human users. However, much less focus has been placed on communicating reasons for why scheduling systems are unable to arrive at a feasible solution when over-constrained. We investigate this problem in the context of task scheduling. We introduce the agent resource-constrained project scheduling problem (ARCPSP), an extension of the resource-constrained project scheduling problem which includes a conception of agents that execute tasks in parallel. We outline a generic framework, based on efficiently enumerating minimal unsatisfiable sets (MUS) and maximal satisfiable sets (MSS), to produce small descriptions of the source of infeasibility. These descriptions are supplemented with potential relaxations that would fix the infeasibility found within the problem instance. We illustrate how this method may be applied to the ARCPSP and demonstrate how to generate different types of explanations for an over-constrained instance of the ARCPSP.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_6.pdf',
    render: true,
  },
  {
    id: 12,
    title: 'Towards an argumentation-based approach to explainable planning',
    authors: 'Anna Collins, Daniele Magazzeni, Simon Parsons',
    abstract:
      'Providing transparency of AI planning systems is crucial for their success in practical applications. In order to create a transparent system, a user must be able to query it for explanations about its outputs. We argue that a key underlying principle for this is the use of causality within a planning model, and that argumentation frameworks provide an intuitive representation of such causality. In this paper, we discuss how argumentation can aid in extracting causalities in plans and models, and how they can create explanations from them.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_5.pdf',
    render: true,
  },
  {
    id: 13,
    title:
      'Domain-independent Plan Intervention When Users Unwittingly Facilitate Attacks',
    authors: 'Sachini Weerawardhana, Darrell Whitley, Mark Roberts',
    abstract:
      ' In competitive situations, agents may take actions to achieve their goals that unwittingly facilitate an opponent’s goals. We consider a domain where three agents operate: (1) a user (human), (2) an attacker (human or a software) agent and (3) an observer (a software) agent. The user and the attacker compete to achieve different goals. When there is a disparity in the domain knowledge the user and the attacker possess, the attacker may use the user’s unfamiliarity with the domain to its advantage and further its own goal. In this situation, the observer, whose goal is to support the user may need to intervene, and this intervention needs to occur online, on-time and be accurate. We formalize the online plan intervention problem and propose a solution that uses a decision tree classifier to identify intervention points in situations where agents unwittingly facilitate an opponent’s goal. We trained a classifier using domain-independent features extracted from the observer’s decision space to evaluate the “criticality” of the current state. The trained model is then used in an online setting on IPC benchmarks to identify observations that warrant intervention. Our contributions lay a foundation for further work in the area of deciding when to intervene.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_4.pdf',
    render: true,
  },
  {
    id: 14,
    title: 'Explaining the Space of Plans through Plan-Property Dependencies',
    authors:
      'Rebecca Eifler, Michael Cashmore, Joerg Hoffmann, Daniele Magazzeni, Marcel Steinmetz',
    abstract:
      'A key problem in explainable AI planning is to elucidate decision rationales. User questions in this context are often contrastive, taking the form “Why do A rather than B?”. Answering such a question requires a statement about the space of possible plans. We propose to do so through plan-property dependencies, where plan properties are Boolean properties of plans the user is interested in, and dependencies are entailment relations in plan space. The answer to the above question then consists of those properties C entailed by B. We introduce a formal framework for such dependency analysis. We instantiate and operationalize that framework for the case of dependencies between goals in oversubscription planning. More powerful plan properties can be compiled into that special case. We show experimentally that, in a variety of benchmarks, the suggested analyses can be feasible and produce compact answers for human inspection.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_8.pdf',
    render: true,
  },
  {
    id: 15,
    title: 'Challenges of Explaining Control',
    authors: 'Adrian Agogino, Ritchie Lee, Dimitra Giannakopoulou',
    abstract:
      'Reinforcement learning and evolutionary algorithms can be used to create sophisticated control solutions. Unfortunately explaining how these solutions work can be difficult to due to their "black box" nature. In addition, the time-extended nature of control algorithms often prevent direct applications of explainability techniques used for standard supervised learning algorithms. This paper attempts to address explainability of blackbox control algorithms through six different techniques: 1) Bayesian rule lists, 2) Function analysis, 3) Single time step integrated gradients, 4) Grammar-based decision trees, 5) Sensitivity analysis combined with temporal modeling with LSTMs, and 6) Explanation templates. These techniques are tested on a simple 2d domain, where a simulated rover attempts to navigate through obstacles to reach a goal. For control, this rover uses an evolved multi-layer perception that maps an 8d field of obstacle and goal sensors to an action determining where it should go in the next time step. Results show that some simple insights in explaining the neural network are possible, but that good explanations are difficult.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_11.pdf',
    render: true,
  },
  {
    id: 16,
    title: 'A Preliminary Logic-based Approach for Explanation Generation',
    authors: 'Stylianos Loukas Vasileiou, William Yeoh, Tran Cao Son',
    abstract:
      'In an explanation generation problem, an agent needs to identify and explain the reasons for its decisions to another agent. Existing work in this area is mostly confined to planning-based systems that use automated planning approaches to solve the problem. In this paper, we approach this problem from a new perspective, where we propose a general logic-based framework for explanation generation. In particular, given a knowledge base KB1 that entails a formula phi and a second knowledge base KB2 that does not entail phi, we seek to identify an explanation E that is a subset of KB1 such that the union of KB2 and E entails phi. We define two types of explanations, model- and proof-theoretic explanations, and use cost functions to reflect preferences between explanations. Further, we present our algorithm implemented for propositional logic that compute such explanations and empirically evaluate it in random knowledge bases and a planning domain.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_18.pdf',
    render: true,
  },
  {
    id: 27,
    title: 'Branching-Bounded Contingent Planning via Belief Space Search',
    authors: 'Kevin McAreavey, Kim Bauters, Weiru Liu, Jun Hong',
    abstract:
      'A contingent plan can be encoded as a rooted graph where branching occurs due to sensing. In many applications it is desirable to limit this branching; either to reduce the complexity of the plan (e.g. for subsequent execution by a human), or because sensing itself is deemed to be too expensive. This leads to an established planning problem that we refer to as branching-bounded contingent planning. In this paper, we formalise solutions to such problems in the context of history, and belief-based policies: under noisy sensing, these policies exhibit differing notions of sensor actions. We also propose a new algorithm, called BAO*, that is able to find optimal solutions via belief space search. This work subsumes both conformant and contingent planning frameworks, and represents the first practical treatment of branching-bounded contingent planning that is valid under partial observability.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_1.pdf',
    render: true,
  },
  {
    id: 18,
    title: 'When Agents Talk Back: Rebellious Explanations',
    authors: 'Ben Wright, Mark Roberts, David W. Aha, Ben Brumback',
    abstract:
      'As the area of Explainable AI (XAI), and Explainable AI Planning (XAIP), matures, the ability for agents to generate and curate explanations will likewise grow. We propose a new challenge area in the form of rebellious and deceptive explanations. We discuss how these explanations might be generated and then briefly discuss evaluation criteria.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_10.pdf',
    render: true,
  },
  {
    id: 19,
    title: 'Robust Goal Recognition with Operator-Counting Heuristics',
    authors: 'Felipe Meneguzzi, Andre Grahl Pereira, Ramon F. Pereira',
    abstract:
      'Goal recognition is the problem of inferring the correct goal towards which an agent executes a plan, given a set of goal hypotheses, a domain model, and a (possibly noisy) sample of the plan being executed. This is a key problem in both cooperative and competitive agent interactions and recent approaches have produced fast and accurate goal recognition algorithms. In this paper, we leverage advances in operator-counting heuristics computed using linear programs over constraints derived from classical planning problems to solve goal recognition problems. Our approach uses additional operator-counting constraints derived from the observations to efficiently infer the correct goal, and serves as basis for a number of further methods with additional constraints.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_2.pdf',
    render: true,
  },
  {
    id: 20,
    title:
      'Combining Cognitive and Affective Measures with Epistemic Planning for Explanation Generation',
    authors: 'Ronald P. A. Petrick, Sara Dalzel-Job, Robin L. Hill',
    abstract:
      "This paper presents an overview of the EPSRC-funded project Start Making Sense, which is investigating explainability and trust maintenance in interactive and autonomous systems. This project brings together experimental research in cognitive science involving cooperative joint action with the practical construction of automated planning tools to apply to the task of explanation generation. The project's challenges are addressed through three concrete objectives: (i) to study cooperative joint action in humans to identify the emotional, affective, or cognitive factors that are essential for successful human communication, (ii) to enhance epistemic planning techniques with measures derived from the studies for improved human-like explanation generation, and (iii) to deploy and evaluate the resulting system with human participants. We also describe initial work from the cognitive side of the project aimed at exploring how ambiguity, uncertainty, and certain types of biometric measurements impact instruction giving and explanation actions in scenarios with humans. The insights from this work will be combined with epistemic planning techniques to generate appropriate explanatory actions in similar instruction giving scenarios.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_19.pdf',
    render: true,
  },
  {
    id: 21,
    title: 'Varieties of Explainable Agency',
    authors: 'Pat Langley',
    abstract:
      'In this paper, I discuss some varieties of explanation that can arise in intelligent agents. I distinguish between process accounts, which address the detailed decisions made during heuristic search, and preference accounts, which clarify the ordering of alternatives independent of how they were generated. I also hypothesize which types of users will appreciate which types of explanation. In addition, I discuss three facets of multi-step decision making -- conceptual inference, plan generation, and plan execution -- in which explanations can arise. I also consider alternative ways to present questions to agents and for them provide their answers.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: '/papers/XAIP_2019_15.pdf',
    render: true,
  },
  {
    id: 22,
    title:
      'Bayesian Inference of Temporal Specifications to Explain How Plans Differ',
    authors:
      'Joseph Kim, Christian Muise, Ankit Shah, Shubham Agarwal, Julie Shah',
    abstract:
      'Temporal logics are useful for describing dynamic system behavior, and have been successfully used as a language for goal definitions during task planning. Prior works on inferring temporal logic specifications have focused on "summarizing" the input dataset -- i.e., finding specifications that are satisfied by all plan traces belonging to the given set. In this paper, we examine the problem of inferring specifications that describe temporal differences between two sets of plan traces. We formalize the concept of providing such contrastive explanations, then present a Bayesian probabilistic model for inferring contrastive explanations as linear temporal logic specifications. We demonstrate the efficacy, scalability, and robustness of our model for inferring correct specifications across various benchmark planning domains and for a simulated air combat mission.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2019',
    link: null,
    render: true,
  },
  {
    id: 26,
    title: 'Relating XAI (Explainable AI) to XAIP (XAI Planning)',
    authors: 'David Aha',
    abstract:
      "The DARPA Explainable AI (XAI) program is a high-profile effort, among many, whose objective is to encourage research on AI systems whose models and decisions are more accessible and transparent to users. Yet the common focus of DARPA XAI’s 11 projects is machine learning; it could have been called XML rather than XAI. Still, it is raising awareness that AI researchers need to collaborate with social scientists, and others, on the design and evaluation of XAI systems. This also applies broadly to other XAI efforts, including those of interest to the ICAPS community. In this talk, I'll summarize the objectives and status of DARPA XAI, emphasizing some topics of interest to XAIP. I'll also discuss/relate some work on XAIP that has appeared at the IJCAI-17 XAI Workshop, or will appear at the upcoming IJCAI/ECAI-18 XAI Workshop, which has a broad XAI focus (i.e., not limited to ML).",
    uisp: false,
    xaip: true,
    invited: true,
    year: '2018',
    link: null,
    render: true,
  },
  {
    id: 27,
    title: 'Human-Aware Planning Revisited: A Tale of Three Models',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan and Subbarao Kambhampati',
    abstract:
      "Human-aware planning requires an agent to be aware of the mental model of the humans, in addition to their physical or capability model. This not only allows an agent to envisage the desired roles of the human in a joint plan but also anticipate how its plan will be perceived by the latter. The human mental model becomes especially useful in the context of an explainable planning (XAIP) agent since an explanatory process cannot be a soliloquy, i.e. it must incorporate the human's beliefs and expectations of the planner. In this paper, we survey our recent efforts in this direction.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_1.pdf',
    render: true,
  },
  {
    id: 28,
    title: 'Explaining Rebel Behavior in Goal Reasoning Agents',
    authors:
      'Dustin Dannenhauer, Michael Floyd, Daniele Magazzeni and David Aha',
    abstract:
      'Generating human-comprehensible explanations is an important requirement for autonomous systems in human-agent teaming environments. Humans and agents often have their own knowledge of the world, knowledge of objectives being pursued and tasks being performed, and their own constraints. Given these differences, an agent may be issued goals that violate its own constraints or preferences, or are undesirable for the team’s task. Numerous situations may arise where rebellion by dropping or changing goals leads to a more beneficial outcome. Agents with goal reasoning capabilities may rebel by rejecting or altering the goals and plans expected of them by human teammates. Explanations help build trust and understanding between the human and agent, leading to greater overall effectiveness. In this paper we outline motivating examples for explainable rebellious behavior in goal reasoning systems and identify open research questions.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_2.pdf',
    render: true,
  },
  {
    id: 29,
    title: 'Action Selection for Transparent Planning',
    authors: 'Aleck Macnally, Nir Lipovetzky, Miquel Ramirez and Adrian Pearce',
    abstract:
      "We introduce a novel framework to formalize and solve transparent planning tasks by executing actions selected in a suitable and timely fashion. A transparent planning task is defined as a task where the objective of the agent is to communicate its true goal to observers, thereby making its intentions and its action selection transparent. We formally define and model these tasks as Goal POMDP's where the state space is the Cartesian product of the states of the world and a given set of hypothetical goals. Action effects are deterministic in the world states of the problem but probabilistic in the observer's beliefs. Transition probabilities are obtained from making a call to a model–based plan recognition algorithm, which we refer to as an observer stereotype. We propose an action selection strategy via on–line planning that seeks actions to quickly convey the goal being pursued to an observer assumed to fit a given stereotype. In order to keep run–times feasible, we propose a novel model–based plan recognition algorithm that approximates well–known probabilistic plan recognition methods. The resulting on–line planner, after being evaluated over a diverse set of domains and three different observer stereotypes, is found to convey goal information faster than purely goal–directed planners.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_3.pdf',
    render: true,
  },
  {
    id: 30,
    title: 'Moral Permissibility of Action Plans',
    authors: 'Felix Lindner, Robert Mattmuller and Bernhard Nebel',
    abstract:
      'Research in classical planning so far was mainly concerned with generating a satisficing or an optimal plan. However, if such systems are used to make decisions that are relevant to humans, one should also consider the ethical consequences that generated plans can have. We address this challenge by analyzing in how far it is possible to generalize existing approaches of machine ethics to automatic planning systems. Traditionally, ethical principles are formulated in an action-based manner, allowing to judge the execution of one action. We show how such a judgment can be generalized to plans. Further, we study the complexity of making ethical judgment about plans.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_4.pdf',
    render: true,
  },
  {
    id: 31,
    title: 'Explaining Agent Plans with Valuings',
    authors: 'Michael Winikoff, Virginia Dignum and Frank Dignum',
    abstract:
      'An important issue in deploying an autonomous system is how to enable human users and stakeholders to develop an appropriate level of trust in the system. It has been argued that a crucial mechanism to enable appropriate trust is the ability of a system to explain its behaviour. Obviously, such explanations need to be comprehensible to humans. We argue that it makes sense to build on the results of extensive research in social sciences that explores how humans explain their behaviour. Using similar concepts for explanation is argued to help with comprehensibility, since the concepts are familiar. Following work in the social sciences, we propose the use of a commonsense-psychology model that utilises beliefs, desires, and "valuings". We propose a formal framework for constructing explanations of the behaviour of an autonomous system, present an (implemented) algorithm for giving explanations, and present evaluation results.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_5.pdf',
    render: true,
  },
  {
    id: 32,
    title: 'Explicability as Minimizing Distance from Expected Behavior',
    authors:
      'Anagha Kulkarni, Yu Zhang, Tathagata Chakraborti and Subbarao Kambhampati',
    abstract:
      "n order to have effective human-AI collaboration, it is necessary to address how the AI agent’s behavior is being perceived by the humans-in-the-loop. When the agent’s task plans are generated without such considerations, they may often demonstrate inexplicable behavior from the human's point of view. This problem may arise due to the human's partial or inaccurate understanding of the agent's planning model. This may have serious implications from increased cognitive load to more serious concerns of safety around a physical agent. In this paper, we address this issue by modeling plan explicability as a function of the distance between a plan that agent makes and the plan that human expects it to make. We learn a regression model for mapping the plan distances to explicability scores of plans and develop an anytime search algorithm that can use this model as a heuristic to come up with progressively explicable plans. We evaluate the effectiveness of our approach in a simulated autonomous car domain and a physical robot domain.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_6.pdf',
    render: true,
  },
  {
    id: 33,
    title:
      'Generating Explanations for Mathematical Optimisation: Solution Framework and Case Study',
    authors: 'Christina Burt, Katerina Klimova and Bernhard Primas.',
    abstract:
      'In this paper, we address the problem of generating explanations automatically for mathematical optimisation. Explanations can improve the way users interact with optimisation tools and help them trust the solutions. One of the challenges of generating explanations for mathematical optimisation is to reconstruct meaning from abstract mathematical expressions. We present a general framework in which we exploit problem diversity exploration in order to infer meaning from algorithm results, and present an automatic sentence generator that works with this framework. Finally, we describe an industrial project where we applied these algorithms.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_7.pdf',
    render: true,
  },
  {
    id: 34,
    title: 'What was I planning to do?',
    authors:
      'Mark Roberts, Isaac Monteath, Raymond Sheh, David Aha, Piyabutra Jampathom, Keith Akins, Eric Sydow, Vikas Shivashankar and Claude Sammut',
    abstract:
      'Adjusting commitments to ongoing plans can occur frequently when executing these plans in a dynamic environment. Often, an agent will repair its plan or re-plan vis-a-vis such change, which is a type of planning-specific adjustment. However, adjusting commitments to the goals by re-goaling, transforming goals, or deferring goals may also be needed. As discussed in the literature on plan explanation, an agent may be asked to account for plan adjustments. In this position paper, we advocate for considering the full suite of possible adjustments in explanation. This includes plan repair, re-planning, deferring, re-goaling, and abandoning goals. Using an example from the RoboCup Rescue Agent Simulator (Roborescue), we leverage a goal lifecycle, extended with time-based Chronicles and transitions goals, for explanation. We propose an explanation taxonomy that spans three dimensions and illustrate the use of this taxonomy for many possible explanations in Roborescue. Finally, we highlight several possible user interfaces we intend to build.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_8.pdf',
    render: true,
  },
  {
    id: 35,
    title:
      'Plan Explanation Through Search in an Abstract Model Space: Extended Results',
    authors:
      'Sarath Sreedharan, Midhun Pookkottil Madhusoodanan, Siddharth Srivastava and Subbarao Kambhampati',
    abstract:
      "There is a growing interest within the AI research community in developing autonomous systems capable of explaining their behavior to users. However, the problem of computing explanations for users of different levels of expertise has received little research attention. We propose an approach for addressing this problem by representing the user's understanding of the task as an abstraction of the domain model that the planner uses. We present algorithms for generating minimal explanations in cases where this abstract human model is not known. We reduce the problem of generating an explanation to a search over the space of abstract models and show that while the complete problem is NP-hard, a greedy algorithm can provide good approximations of the optimal solution. We also empirically show that our approach can efficiently compute explanations for a variety of problems.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_9.pdf',
    render: true,
  },
  {
    id: 36,
    title: 'Challenges in Explainable Planning for Space Operations',
    authors: 'Simone Fratini and Nicola Policella',
    abstract:
      'This paper discuss the role of explanation and the solutions adopted in the development of planning and scheduling tools for the support of space mission operations at the European Space Agency (ESA). A key point to strengthen the effectiveness and success of fielding planning and scheduling applications in space is the capability of providing an explanation of the solutions as well as of the solving process tothe end users. The approach has been consolidated over the last decade while developing several tools and functionality to support explanation, but the challenge is still open and faraway for being properly resolved. Even though the approach has been utilized only in the space operations domain, we think that the concepts and problems highlighted are general enough to be applied to other domains and/or planning algorithms.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_10.pdf',
    render: true,
  },
  {
    id: 37,
    title:
      'Improving Explanation and Effectiveness of Interactions among Autonomous Vehicles and Pedestrians',
    authors:
      'Sara Manzoni, Simone Fontana, Andrea Gorrini, Domenico G. Sorrenti and Stefania Bandini',
    abstract:
      'In this paper we describe a study involving an autonomous vehicle based on planning and interaction situations with other road users (i.e. pedestrians). The paper presents the research framework and directions towards enriching the vehicle information about the moving objects on its way with formal, explicit and shared representation of available findings about pedestrian on-road behaviors. Among the advantages of the integration of empirical data achieved through behavioral studies about pedestrian dynamics, we claim that a research effort in this direction may significantly contribute to improve trust, transparency, and quality of communication between heterogeneous road users, mainly to avoid and solve obstruction situations. In the paper we describe first steps of this multi-discilpinary research and we present a representation of concepts related to pedestrian crossing behaviours at unsignalized pedestrian crossings (based on ontology formalism and derived from the reference literature). After, we introduce the movement planning model of the autonomous vehicle and we overview experiments we are developing to collect useful insights to improve knowledge on perception and interpretation of actions in interaction situations (involving pedestrians crossing in the presence of an autonomous vehicle). Further developments of the vehicle behavior to improve its capability to interpret the scene at real-time, as well as effectiveness of the vehicle communication with other road users are then discussed.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_11.pdf',
    render: true,
  },
  {
    id: 38,
    title: 'Towards Explanation-Supportive Knowledge Engineering for Planning',
    authors: 'Mauro Vallati, Lee Mccluskey and Lukas Chrpa',
    abstract:
      'In real-world planning applications, it is of pivotal importance that decisions and solutions can be explained, in order to maximise safety and increase the reliability of the planning component. There is a significant strand of research that focuses on exploiting planning models, and the planning process itself, in order to deal with a wide range of possible requests of explanation. However, there are explanations that cannot be provided by considering only those elements, but that require additional knowledge -- which is usually available during the knowledge engineering process of designing planning models. In this paper, we introduce two classes of explanations that require a formal (or semi-formal) encoding of additional knowledge. We then describe how knowledge engineering tools can be extended in order to support the collection of such additional knowledge, and we briefly introduce the structure of an appropriate architecture.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_13.pdf',
    render: true,
  },
  {
    id: 39,
    title: 'Visualizations for an Explainable Planning Agent',
    authors:
      'Tathagata Chakraborti, Kshitij Fadnis, Kartik Talamadupula, Mishal Dholakia, Biplav Srivastava, Jeffrey O. Kephart and Rachel K. E. Bellamy',
    abstract:
      'In this paper, we report on the visualization capabilities of an Explainable AI Planning (XAIP) agent that can support human in the loop decision making. Imposing transparency and explainability requirements on such agents is especially important in order to establish trust and common ground with the end-to-end automated planning system. Visualizing the agent\'s internal decision making processes is a crucial step towards achieving this. This may include externalizing the "brain" of the agent -- starting from its sensory inputs, to progressively higher order decisions made by it in order to drive its planning components. We also show how the planner can bootstrap on the latest techniques in explainable planning to cast plan visualization as a plan explanation problem, and thus provide concise model based visualization of its plans. We demonstrate these functionalities in the context of the automated planning components of a smart assistant in an instrumented meeting space.',
    uisp: true,
    xaip: true,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_12.pdf',
    render: true,
  },
  {
    id: 40,
    title: 'Who is the Scheduler?',
    authors: 'Neil Yorke-Smith',
    abstract: '',
    uisp: true,
    xaip: false,
    invited: true,
    year: '2018',
    link: null,
    render: true,
  },
  {
    id: 41,
    title: 'Transitioning a Plan Execution System from Research to Deployment',
    authors: 'David Kortenkamp',
    abstract: '',
    uisp: true,
    xaip: false,
    invited: true,
    year: '2018',
    link: null,
    render: true,
  },
  {
    id: 42,
    title: 'Generating Human Work Instructions from Assembly Plans',
    authors: 'Csaba Kardos, Andras Kovacs, Balazs E. Pataki, and Jozsef Vancza',
    abstract:
      'Despite enormous robotization efforts, most of the assembly process is still executed by human workforce in many industries performing the assembly of mechanical products. Therefore, a crucial component of any automated planning system in those applications is the worker instruction system that presents the automatically generated plans to human assembly workers. In case of complex products and processes, finding the most efficient presentation to workers with different skills and background is a great challenge. This paper proposes novel methods for generating context-dependent, animated work instructions from automatically generated assembly plans. The proposed approach is demonstrated on an industrial case study that involves the manual assembly of an automotive supercharger.',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2018',
    link: '/papers/XAIP_2018_1.pdf',
    render: true,
  },
  {
    id: 43,
    title:
      'Technologies for Mixed-Initiative Plan Management for Human Space Flight',
    authors:
      'Melissa Baltrusaitis, Karen Feigh, Martijn IJtsma, Amy Pritchett, William Lassiter, and Martin Savelsbergh',
    abstract:
      "As humans endeavor to explore Mars and other celestial bodies further afield, we are faced with a bevy of challenges unique to deep space travel. Given that astronauts have traditionally relied on ground-based mission control to produce, manage, and adjust daily flight plans as needed, one such challenge will be the time lag in communications with mission control as a crew moves further away from the Earth. This will necessitate (automated) planning systems that will provide crews greater autonomy in managing and adapting plans to reflect the current state of the mission. This paper details the progress our research team has made in developing a mixed-initiative plan management system for use on future missions to Mars and beyond. We describe the system's design and intended capabilities and provide the results of some preliminary testing with small sample plans.",
    uisp: true,
    xaip: false,
    invited: false,
    year: '2018',
    link: '/papers/UISP_2018_1.pdf',
    render: true,
  },
  {
    id: 44,
    title:
      'NL2PDDL: A Conversational Interface for Model Generation and Iteration',
    authors: 'Kshitij P. Fadnis and Kartik Talamadupula',
    abstract:
      'Although the automated planning community has seen many advances to planning techniques in the past decade, domain model creation and maintenance has remained the central bottleneck preventing wider adoption of planning technology in the real world. While there has been some work on learning these models in an automated fashion, there has been very little focus on user-friendly interfaces for the creation, querying, and editing of planning models. In this work, we present a novel approach to interfacing with planning models using natural language via a conversation modality. We detail the construction of the system, its capabilities, as well as some key opportunities and challenges that are brought up by this unique interface with planning models.',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2018',
    link: '/papers/UISP_2018_4.pdf',
    render: true,
  },
  {
    id: 45,
    title:
      'Projection-Aware Task Planning and Execution for Human-in-the-Loop Operation of Robots in a Mixed-Reality Workspace',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, Anagha Kulkarni, and Subbarao Kambhampati',
    abstract:
      'Recent advances in mixed-reality technologies have renewed interest in alternative modes of communication for human-robot interaction. However, most of the work in this direction has been confined to tasks such as teleoperation, simulation or explication of individual actions of a robot. In this paper, we will discuss how the capability to project intentions affect the task planning capabilities of a robot. Specifically, we will start with a discussion on how projection actions can be used to reveal information regarding the future intentions of the robot at the time of task execution. We will then pose a new planning paradigm –- projection-aware planning -– whereby a robot can trade off its plan cost with its ability to reveal its intentions using its projection actions. Finally, we will show how in the context of task planning, projection actions may also be useful for plan explicability and explanations. We will demonstrate each of these scenarios with the help of a joint human-robot activity using the HoloLens.',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2018',
    link: '/papers/UISP_2018_3.pdf',
    render: true,
  },
  {
    id: 46,
    title:
      'MA-RADAR - A Mixed-Reality Interface for Collaborative Decision Making',
    authors: 'Sailik Sengupta, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      'There has been a lot of recent interest in the planning community towards adapting automated planning techniques for the role of decision support for human decision makers in the loop. A unique challenge in such settings is the presence of multiple humans collaborating during the planning process which not only requires algorithmic advances to handle issues such as diverging mental models and the establishment of common ground, but also the development of user interfaces that can facilitate the distributed decision making process among the human planners. We posit that recent advances in augmented reality technology is uniquely positioned to serve this need. For example, a mixed-reality workspace can be ideal for curating information towards the particular needs (e.g. explanations) of the individual decision makers. In this paper, we report on ongoing work along these directions and showcase MA-RADAR, the multi-agent version of the decision support system RADAR.',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2018',
    link: '/papers/UISP_2018_6.pdf',
    render: true,
  },
  {
    id: 48,
    title: 'User Interfaces for eXplainable Planning',
    authors: 'Daniele Magazzeni',
    abstract:
      'As AI is increasingly being adopted into application solutions, the challenge of supporting interaction with humans is becoming more apparent. Partly this is to support integrated working styles, in which humans and intelligent systems cooperate in problem-solving, but also it is a necessary step in the process of building trust as humans migrate greater responsibility to such systems. The challenge is to find effective ways to communicate the foundations of AI-driven behaviour, when the algorithms that drive it are far from transparent to humans. In this talk we consider the opportunities that arise in AI planning, exploiting the model-based representations that form a familiar and common basis for communication with users, and we focus on the user interfaces needed to fill the gap between planning algorithms and human problem-solving.',
    uisp: true,
    xaip: false,
    invited: true,
    year: '2017',
    link: null,
    render: true,
  },
  {
    id: 49,
    title:
      'So You Want to Field Your Intelligent Planning and Scheduling System? Then Suck It Up!',
    authors: 'Dick Stottler',
    abstract:
      'User Interface (UI) design has a major influence on whether an automatic intelligent planning and scheduling system will be accepted and fielded operationally. Additionally, intelligent planning and scheduling systems have specific requirements of and present unique opportunities to the UI. Having fielded dozens of intelligent planning and scheduling systems in many diverse domains over the last three decades, I will discuss the challenges, pitfalls, lessons learned, and principles to keep in mind during the user interface design process for intelligent planning and scheduling applications.',
    uisp: true,
    xaip: false,
    invited: true,
    year: '2017',
    link: null,
    render: true,
  },
  {
    id: 50,
    title: 'CHAP-E: A Plan Execution Assistant for Pilots',
    authors: 'J. Benton, David Smith, John Kaneshige, Leslie Keely',
    abstract:
      "Pilots have benefited from ever-increasing and evolving automation techniques for many decades. This automation has allowed pilots to handle increasingly complex aircraft with greater safety, precision, and reduced workload. Unfortunately, it can also lead to misunderstandings and loss of situational awareness. In the face of malfunctions or unexpected events, pilots sometimes have an unclear picture of the situation and what to do next, or must find and follow written procedures that do not take into account all the details of the particular situation. Pilots may also incorrectly assume the mode or state of an automated system and fail to perform certain necessary actions that they assumed an automated system would handle. To help alleviate these issues, we introduce the Cockpit Hierarchical Activity Planning and Execution (CHAP-E) system. CHAP-E provides pilots with guidance toward executing procedures based on the aircraft and automation system's state and assists pilots through both nominal and off-nominal flight situations.",
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_1.pdf',
    render: true,
  },
  {
    id: 51,
    title: 'Alternate Realities for Mission Operations Plan Execution',
    authors: 'Pete Bonasso, David Kortenkamp, Blair MacIntyre, Bryn Wolf',
    abstract:
      'Procedures are a mechanism by which NASA crewmembers execute plans. Alternate reality systems can help replace some of the guidance that ground controllers offer to crew-members during procedure execution. As space exploration missions take crews further away from Earth, new forms of procedure assistance will be necessary. This paper describes an early development of an alternate reality (AR) system called PRIDE-AVR. PRIDE-AVR is an integration of the PRIDE electronic procedure development and execution system with augmented, virtual and hybrid reality technologies. We describe the system architecture and three proofs of concept demonstrations that use these AR technologies.',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_2.pdf',
    render: true,
  },
  {
    id: 52,
    title: 'In-Situ Domain Modeling with Fact Routes',
    authors:
      'Daniel Bryce, Pete Bonasso, Khalid Adil, Scott Bell, David Kortenkamp',
    abstract:
      'Engineering plans and the domain models that underly them is a significant challenge. Research on knowledge engineering for planning has developed many ways to produce both plans and domain models, but most work treats these as separate tasks. We propose that it is more natural to combine plan synthesis with domain modeling. We describe a new planning and modeling tool, called Conductor, that is based upon representing plan steps and fact routes. Conductor uses a visualization metaphor derived from metro maps to display facts as transit routes and step preconditions as stations. The visualization helps quickly convey how a plan modifies the state and appeals to the metro-metaphor to support user engagement in modeling',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_3.pdf',
    render: true,
  },
  {
    id: 53,
    title: 'Augmented Workspace for Human-in-the-Loop Plan Execution',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, Anagha Kulkarni, Subbarao Kambhampati',
    abstract:
      "Ambiguity and noise in natural language instructions create a significant barrier towards adopting autonomous systems into safety critical workflows involving humans and machines. In this paper, we build on recent advances in electrophysiological monitoring methods and augmented reality technologies, to develop alternative modes of communication between humans and robots involved in large-scale proximal collaborative tasks. We will first introduce augmented reality techniques for projecting a robot's intentions to its human teammate, who can interact with these cues to engage in real-time collaborative plan execution with the robot. We will then look at how electroencephalographic (EEG) feedback can be used to monitor human response to both discrete events, as well as longer term affective states while execution of a plan. These signals can be used by a learning agent, a.k.a. an affective robot, to modify its policy. We will present an end-to-end system capable of demonstrating these modalities of interaction. We hope that the proposed system will inspire research in augmenting human-robot interactions with alternative forms of communications in the interests of safety, productivity, and fluency of teaming, particularly in engineered settings such as the factory floor or the assembly line in the manufacturing industry where use of such wearables can be enforced.",
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_4.pdf',
    render: true,
  },
  {
    id: 54,
    title:
      'WEB PLANNER: A Tool to Develop Classical Planning Domains and Visualize Heuristic State-Space Search',
    authors:
      'Mauricio C. Magnaguagno, Ramon Fraga Pereira, Martin D. More, Felipe Meneguzzi',
    abstract:
      'Automated planning tools are complex pieces of software that take declarative domain descriptions and generate plans for complex domains. New users often find it challenging to understand the plan generation process, while experienced users often find it difficult to track semantic errors and efficiency issues. To simplify this process, in this paper, we develop a cloud-based planning tool with code editing and state-space visualization capabilities. The code editor focuses on visualizing the domain, problem, and resulting sample plan, helping the user to see how such descriptions are connected without changing context. The visualization tool explores two alternative visualizations aimed at illustrating the operation of the planning process and how the domain dynamics evolve during plan execution.',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_5.pdf',
    render: true,
  },
  {
    id: 55,
    title: 'Session Analysis using Plan Recognition',
    authors: 'Reuth Mirsky, Yakov (Kobi) Gal, David Tolpin',
    abstract:
      "This paper presents preliminary results of our work with a major financial company, where we try to use methods of plan recognition in order to investigate the interactions of a costumer with the company’s online interface. In this paper, we present the first steps of integrating a plan recognition algorithm in a real-world application for detecting and analyzing the interactions of a costumer. It uses a novel approach for plan recognition from bare-bone UI data, which reasons about the plan library at the lowest recognition level in order to define the relevancy of actions in our domain, and then uses it to perform plan recognition. We present preliminary results of inference on three different use-cases modeled by domain experts from the company, and show that this approach manages to decrease the overload of information required from an analyst to evaluate a costumer's session — whether this is a malicious or benign session, whether the intended tasks were completed, and if not — what actions are expected next.",
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_6.pdf',
    render: true,
  },
  {
    id: 56,
    title:
      'RADAR -- A Proactive Decision Support System for Human-in-the-Loop Planning',
    authors:
      'Sailik Sengupta, Tathagata Chakraborti, Sarath Sreedharan, Satya Gautam Vadlamudi, Subbarao Kambhampati',
    abstract:
      'Proactive Decision Support (PDS) aims at improving the decision making experience of human decision makers by enhancing both the quality of the decisions and the ease of making them. In this paper, we ask the question what role automated decision making technologies can play in the deliberative process of the human decision maker. Specifically, we focus on expert humans in the loop who now share a detailed, if not complete, model of the domain with the assistant, but may still be unable to compute plans due to cognitive overload. To this end, we propose a PDS framework RADAR based on research in the automated planning community that aids the human decision maker in constructing plans. We will situate our discussion on principles of interface design laid out in the literature on the degrees of automation and its effect on the collaborative decision making process. Also, at the heart of our design is the principle of naturalistic decision making which has been shown to be a necessary requirement of such systems, thus focusing more on providing suggestions rather than enforcing decisions and executing actions. We will demonstrate the different properties of such a system through examples in a fire-fighting domain, where human commanders are involved in building response strategies to mitigate a fire outbreak. The paper is written to serve both as a position paper by motivating requirements of an effective proactive decision support system, and also an emerging application of these ideas in the context of the role of an automated planner in human decision making, in a platform that can prove to bea valuable test bed for research on the same.',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_7.pdf',
    render: true,
  },
  {
    id: 57,
    title:
      'Workflow Complexity for Collaborative Interactions: Where are the Metrics? -- A Challenge',
    authors: 'Kartik Talamadupula, Biplav Srivastava, Jeffrey O. Kephart',
    abstract:
      'In this paper, we introduce the problem of denoting and deriving the complexity of workflows (plans, schedules) in collaborative, planner-assisted settings where humans and agents are trying to jointly solve a task. The interactions – and hence the workflows that connect the human and the agents – may differ according to the domain and the kind of agents. We adapt insights from prior work in human-agent teaming and workflow analysis to suggest metrics for workflow complexity. The main motivation behind this work is to highlight metrics for human comprehensibility of plans and schedules. The planning community has seen its fair share of work on the synthesis of plans that take diversity into account – what value do such plans hold if their generation is not guided at least in part by metrics that reflect the ease of engaging with and using those plans?',
    uisp: true,
    xaip: false,
    invited: false,
    year: '2017',
    link: '/papers/UISP_2017_8.pdf',
    render: true,
  },
  {
    id: 108,
    title: 'Provenance-Based Assessment of Plans in Context',
    authors:
      'Scott Friedman, Robert P. Goldman, Richard G. Freedman, Ugur Kuter, Christopher Geib and Jeffrey Rye',
    abstract:
      'Many real-world planning domains involve diverse information sources, external entities, and variable-reliability agents, all of which may impact the confidence, risk, and sensitivity of plans. Humans reviewing a plan may lack context about these factors; however, this information is available during the domain generation, which means it can also be interwoven into the planner and its resulting plans. This paper presents a provenance-based approach to explaining automated plans. Our approach (1) extends the SHOP3 HTN planner to generate dependency information, (2) transforms the dependency information into an established PROV-O representation, and (3) uses graph propagation and TMS-inspired algorithms to support dynamic and counter-factual assessment of information flow, confidence, and support. We qualified our approach’s explanatory scope with respect to explanation tar- gets from the automated planning literature and the information analysis literature, and we demonstrate its ability to assess a plan’s pertinence, sensitivity, risk, assumption support, diversity, and relative confidence.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.01774',
    render: true,
    session: 3,
    position: 1,
    xaipid: 8,
  },
  {
    id: 114,
    title: 'Explainable Planner Selection',
    authors: 'Patrick Ferber and Jendrik Seipp',
    abstract:
      'Since no classical planner consistently outperforms all others, it is important to select a planner that works well for a given classical planning task. The two strongest approaches for planner selection use image and graph convolutional neural networks. They have the drawback that the learned models are not interpretable. To obtain explainable models, we identify a small set of simple task features and show that elementary and interpretable machine learning techniques can use these features to solve as many tasks as the approaches based on neural networks.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://ai.dmi.unibas.ch/papers/ferber-seipp-icaps2020wsxaip.pdf',
    render: true,
    session: 1,
    position: 1,
    xaipid: 14,
  },
  {
    id: 107,
    title: 'Using Explainable Scheduling for the Mars 2020 Rover Mission',
    authors: 'Jagriti Agrawal, Amruta Yelamanchili and Steve Chien',
    abstract:
      'Understanding the reasoning behind the behavior of an automated scheduling system is essential to ensure that it will be trusted and consequently used to its full capabilities in critical applications. In cases where a scheduler schedules activities in an invalid location, it is usually easy for the user to infer the missing constraint by inspecting the schedule with the invalid activity to determine the missing constraint. If a scheduler fails to schedule activities because constraints could not be satisfied, determining the cause can be more problematic. In such cases it is important to understand which constraints caused the activities to fail to be scheduled and how to alter constraints to achieve the desired schedule. In this paper, we describe such a scheduling system for NASA’s next planetary mission, the Mars 2020 Perseverance Rover, as well as Crosscheck, an explainable scheduling tool that explains the scheduler behavior. The scheduling system and Crosscheck are the baseline for operational use to schedule activities for the Mars 2020 rover. As we describe, the scheduler generates a schedule given a set of activities and their constraints and Crosscheck (1) provides a visual representation of the generated schedule (2) analyzes and explains why activities failed to schedule given the constraints provided; and (3) provides guidance on potential constraint relaxations to enable the activities to schedule in future scheduler runs.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.08733',
    render: true,
    session: 3,
    position: 1,
    xaipid: 7,
  },
  {
    id: 116,
    title:
      'RADAR-X: An Interactive Interface Pairing Contrastive Explanations with Revised Plan Suggestions',
    authors:
      'Karthik Valmeekam, Sarath Sreedharan, Sailik Sengupta and Subbarao Kambhampati',
    abstract:
      'Empowering decision support systems with automated planning has received significant recognition in the planning community. The central idea for such systems is to augment the capabilities of the human-in-the-loop with automated planning techniques and provide timely support to enhance the decision-making experience. In addition to this, an effective decision support system must be able to provide intuitive explanations based on specific queries on proposed decisions to its end users. This makes decision-support systems an ideal test-bed to study the effectiveness of various XAIP techniques being developed in the community. To this end, we present our decision support system RADAR-X that extends RADAR by allowing the user to participate in an interactive explanatory dialogue with the system. Specifically, we allow the user to ask for contrastive explanations, wherein the user can try to understand why a specific plan was chosen over an alternative (referred to as the foil). Furthermore, we use the foil raised as evidence for unspecified user preferences and use it to further refine plan suggestions.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'http://arxiv.org/abs/2011.09644',
    render: true,
    session: 2,
    position: 1,
    xaipid: 16,
  },
  {
    id: 111,
    title: 'On the Relationship Between KR Approaches for Explainable Planning',
    authors: 'Stylianos Loukas Vasileiou, William Yeoh and Tran Cao Son',
    abstract:
      'In this paper, we build upon notions from knowledge representation and reasoning (KR) to expand a preliminary logic-based framework that characterizes the model reconciliation problem for explainable planning. We also provide a detailed exposition on the relationship between similar KR techniques, such as abductive explanations and belief change, and their applicability to explainable planning. Finally, we provide preliminary experimental results that demonstrate the promise of our approach on problems that require long explanations.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.09006',
    render: true,
    session: 2,
    position: 1,
    xaipid: 1,
  },
  {
    id: 113,
    title: 'Model Minimization For Online Predictability',
    authors: 'Sriram Gopalakrishnan and Subbarao Kambhampati',
    abstract:
      "For humans in a teaming scenario, context switching between reasoning about a teammate's behavior and thinking about thier own task can slow us down, especially if the cognitive cost of predicting the teammate's actions is high. So if we can make the prediction of a robot-teammate's actions quicker, then the human can be more productive. In this paper we present an approach to constrain the actions of a robot so as to increase predictability (specifically online predictability) while keeping the plan costs of the robot within acceptable limits. Existing works on human-robot interaction do not consider the computational cost for predictability, which we consider in our approach. We approach this problem from the perspective of directed graph minimization, and we connect the concept of predictability to the out-degree of vertices. We present an algorithm to minimize graphs for predictability, and contrast this with minimization for legibility (goal inference) and optimality.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2010.15255',
    render: true,
    session: 3,
    position: 1,
    xaipid: 13,
  },
  {
    id: 115,
    title:
      'Iterative Planning with Plan-Space Explanations: A Tool and User Study',
    authors: 'Rebecca Eifler and Joerg Hoffmann',
    abstract:
      'In a variety of application settings, the user preference for a planning task - the precise optimization objective - is difficult to elicit. One possible remedy is planning as an iterative process, allowing the user to iteratively refine and modify example plans. A key step to support such a process are explanations, answering user questions about the current plan. In particular, a relevant kind of question is "Why does the plan you suggest not satisfy p?", where p is a plan property desirable to the user. Note that such a question pertains to plan space, i.e., the set of possible alternative plans. Adopting the recent approach to answer such questions in terms of plan-property dependencies, here we implement a tool and user interface for human-guided iterative planning including plan-space explanations. The tool runs in standard Web browsers, and provides simple user interfaces for both developers and users. We conduct a first user study, whose outcome indicates the usefulness of plan-property dependency explanations in iterative planning.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.09705',
    render: true,
    session: 1,
    position: 1,
    xaipid: 5,
  },
  {
    id: 106,
    title:
      'Investigating Human Response, Behaviour, and Preference in Joint-Task Interaction',
    authors:
      'Alan Lindsay, Bart Craenen, Sara Dalzel-Job, Robin Hill and Ron Petrick',
    abstract:
      "Human interaction relies on a wide range of signals, including non-verbal cues. In order to develop effective Explainable Planning (XAIP) agents it is important that we understand the range and utility of these communication channels. Our starting point is existing results from joint task interaction and their study in cognitive science. Our intention is that these lessons can inform the design of interaction agents—including those using planning techniques—whose behaviour is conditioned on the user's response, including affective measures of the user (i.e., explicitly incorporating the user's affective state within the planning model). We have identified several concepts at the intersection of plan-based agent behaviour and joint task interaction and have used these to design two agents: one reactive and the other partially predictive. We have designed an experiment in order to examine human behaviour and response as they interact with these agents. In this paper we present the designed study and the key questions that are being investigated. We also present the results from an empirical analysis where we examined the behaviour of the two agents for simulated users.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.14016',
    render: true,
    session: 1,
    position: 1,
    xaipid: 6,
  },
  {
    id: 109,
    title:
      'Explainable AI for System Failures: Generating Explanations that Improve Humans’ Assistance in Fault Recovery',
    authors: 'Devleena Das, Siddhartha Banerjee and Sonia Chernova',
    abstract:
      'With the growing capabilities of intelligent systems, the integration of artificial intelligence (AI) and robots in everyday life is increasing. However, when interacting in such complex human environments, the failure of intelligent systems,such as robots, can be inevitable, requiring recovery assistance from users. In this work, we develop automated, natural language explanations for failures encountered during an AI agents’ plan execution. These explanations are developed with a focus of helping non-expert users understand different point of failures to better provide recovery assistance. Specifically, we introduce a context-based information property for explanations that can both help non-expert users understand the underlying cause of a system failure, and select proper failure recoveries. Additionally, we extend an existing sequence-to-sequence methodology to automatically generate our context-based explanations. By doing so, we are able develop a model that can generalize context-based explanations over both different failure types and failure scenarios.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.09407',
    render: true,
    session: 3,
    position: 1,
    xaipid: 9,
  },
  {
    id: 120,
    title: 'Model Elicitation through Direct Questioning',
    authors: 'Sachin Grover, David Smith and Subbarao Kambhampati',
    abstract:
      "The future will be replete with scenarios where humans are robots will be working together in complex environments. Teammates interact, and the robot's interaction has to be about getting useful information about the human's (teammate's) model. There are many challenges before a robot can interact, such as having a simple methodology for interaction with teammates with varying thought process while working in the same environment, ensuring that the teammate does not feel overwhelmed with these interactions, etc. In this paper, we investigate how a robot can interact by asking eliciting questions from their teammate to localize the human model from a set of models. We show how to generate questions oriented towards different responses from the teammate and ensure meaningful conversation. We evaluate the method in various planning domains for collaboration. The evaluation shows that these questions can be generated offline, and provided the knowledge of the domain, it supports asking about specific parts of the model.",
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.12262',
    render: true,
    session: 3,
    position: 1,
    xaipid: 20,
  },
  {
    id: 117,
    title: 'Towards the Role of Theory of Mind in Explanation',
    authors: 'Maayan Shvo, Toryn Q. Klassen and Sheila A. McIlraith',
    abstract:
      'Theory of Mind is commonly defined as the ability to attribute mental states (e.g., beliefs, goals) to oneself, and to others. A large body of previous work -- from the social sciences to artificial intelligence -- has observed that Theory of Mind capabilities are central to providing an explanation to another agent or when explaining that agent’s behaviour. In this paper, we build and expand upon previous work by providing an account of explanation in terms of the beliefs of agents and the mechanism by which agents revise their beliefs given possible explanations. We further identify a set of desiderata for explanations that utilize Theory of Mind. These desiderata inform our belief-based account of explanation.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2005.02963',
    render: true,
    session: 2,
    position: 1,
    xaipid: 17,
  },
  {
    id: 103,
    title:
      'Domain-Level Explainability – A Challenge for Creating Trust in Superhuman AI Strategies',
    authors:
      'Jonas Andrulis, Ole Meyer, Grégory Schott, Samuel Weinbach and Volker Gruhn',
    abstract:
      'For strategic problems, intelligent systems based on Deep Reinforcement Learning (DRL) have demonstrated an impressive ability to learn advanced solutions that can go far beyond human capabilities, especially when dealing with complex scenarios. While this creates new opportunities for the development of intelligent assistance systems with groundbreaking functionalities, applying this technology to real-world problems carries significant risks and therefore requires trust in their transparency and reliability. With superhuman strategies being non-intuitive and complex by definition and real-world scenarios prohibiting a reliable performance evaluation, the key components for trust in these systems are difficult to achieve. Explainable AI (XAI) has successfully increased transparency for modern AI systems through a variety of measures, however, XAI research has not yet provided approaches enabling domain level insights for expert users in strategic situations. In this paper, we discuss the existence of superhuman DRL-based strategies, their properties, the requirements and challenges for transforming them into real-world environments, and the implications for trust through explainability as a key technology.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.06665',
    render: true,
    session: 1,
    position: 1,
    xaipid: 3,
  },
  {
    id: 119,
    title: 'Explainable Composition of Aggregated Assistants',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, Yara Rizk and Yasaman Khazaeni',
    abstract:
      'A new design of an AI assistant that has become increasingly popular is that of an "aggregated assistant" -- realized as an orchestrated composition of several individual skills or agents that can each perform atomic tasks. In this paper, we will talk about the role of planning in the automated composition of such assistants and explore how concepts in automated planning can help to establish transparency of the inner workings of the assistant to the end-user.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.10707',
    render: true,
    session: 3,
    position: 1,
    xaipid: 19,
  },
  {
    id: 118,
    title:
      'A Bayesian Account of Measures of Interpretability in Human-AI Interaction',
    authors:
      'Sarath Sreedharan, Anagha Kulkarni, Tathagata Chakraborti, David Smith and Subbarao Kambhampati',
    abstract:
      'Existing approaches for the design of interpretable agent behavior consider different measures of interpretability in isolation. In this paper we posit that, in the design and deployment of human-aware agents in the real world, notions of interpretability are just some among many considerations; and the techniques developed in isolation lack two key properties to be useful when considered together: they need to be able to 1) deal with their mutually competing properties; and 2) an open world where the human is not just there to interpret behavior in one specific form. To this end, we consider three well-known instances of interpretable behavior studied in existing literature -- namely, explicability, legibility, and predictability -- and propose a revised model where all these behaviors can be meaningfully modeled together. We will highlight interesting consequences of this unified model and motivate, through results of a user study, why this revision is necessary.',
    uisp: false,
    xaip: true,
    invited: false,
    year: '2020',
    link: 'https://arxiv.org/abs/2011.10920',
    render: true,
    session: 2,
    position: 1,
    xaipid: 18,
  },
  {
    id: 125,
    title:
      'Fanoos: Multi-Resolution, Multi-Strength, Interactive Explanations for Learned Systems',
    authors: 'David Bayani and Stefan Mitsch',
    abstract:
      'Machine learning becomes increasingly important to control the behavior of safety and financially critical components in sophisticated environments, where the inability to understand learned components in general, and neural nets in particular, poses serious obstacles to their adoption. Explainability and interpretability methods for learned systems have gained considerable academic attention, but the focus of current approaches on only one aspect of explanation, at a fixed level of abstraction, and limited if any formal guarantees, prevents those explanations from being digestible by the relevant stakeholders (e.g., end users, certification authorities, engineers) with their diverse backgrounds and situation-specific needs. We introduce Fanoos, a flexible framework for combining formal verification techniques, heuristic search, and user interaction to explore explanations at the desired level of granularity and fidelity. We demonstrate the ability of Fanoos to produce and adjust the abstractness of explanations in response to user requests on a learned controller for an inverted double pendulum and on a learned CPU usage model.',
    xai: true,
    uisp: false,
    xaip: false,
    invited: false,
    year: '2020',
    link:
      'https://drive.google.com/file/d/1_RN_8DvF-XV1b_m1_AyrkQ-Tst0dVSJd/view',
    render: true,
    xaipid: 125,
  },
  {
    id: 126,
    title:
      'Explaining plans at scale: scalable path planning explanations in navigation meshes using inverse optimization',
    authors: 'Martim Brandao and Daniele Magazzeni',
    abstract:
      'In this paper we propose methods that provide explanations for path plans, in particular those that answer questions of the type “why is path A optimal, rather than path B which I expected?”. In line with other work in eXplainable AI Planning (XAIP), such explanations could help users better understand the outputs of path planning methods, as well as help debug or iterate the design of planners and maps. By specializing the explanation methods to path planning, using optimization-based inverse-shortest-paths formulations, we obtain drastic computation time improvements relative to general XAIP methods, especially as the length of the explanations increases. One of the claims of this paper is that such specialization might be required for explanation methods to scale and therefore come closer to real-world usability. We propose and evaluate the methods on large-scale navigation meshes, which are representations for path planning heavily used in the computer game industry and robotics.',
    xai: true,
    uisp: false,
    xaip: false,
    invited: false,
    year: '2020',
    link:
      'https://drive.google.com/file/d/1UEQVEEifcFYCRFMvZZhUJhVgwV9FId7I/view',
    render: true,
    xaipid: 126,
  },
  {
    id: 127,
    title: 'Design for Explicability',
    authors:
      'Anagha Kulkarni, Sarath Sreedharan, Sarah Keren, Tathagata Chakraborti, David E. Smith, and Subbarao Kambhampati',
    abstract:
      'Designing agents capable of generating explicable behavior is a pre-requisite for achieving effective human-AI collaboration. However, exhibiting such behavior in arbitrary environments could be quite expensive for the agents involved, and in some cases, the agent may not even be able to exhibit the expected behavior. Given structured environments (like warehouses and restaurants), it may be possible to design the environment so as to boost explicable behavior on the part of the agent or to shape the human’s expectations of the agent’s behavior. In this paper, we investigate the opportunities and limitations of environment design as a tool to promote explicable behavior generation. We formulate a novel environment design framework that considers design over multiple tasks and over a time horizon. In addition, we explore the longitudinal aspect of explicable behavior and the trade-off that arises between the cost of design and the cost of generating explicable behavior over a time horizon.',
    xai: true,
    uisp: false,
    xaip: false,
    invited: false,
    year: '2020',
    link:
      'https://drive.google.com/file/d/1VjcnlXUi7M1XZuweEZqrjrwiUIz3NpmU/view',
    render: true,
    xaipid: 127,
  },
  {
    id: 128,
    title: 'Explainable Search',
    authors: 'Hendrik Baier and Michael Kaisers',
    abstract:
      'Search-based AI agents are state of the art in many challenging sequential decision-making domains. However, contemporary approaches lack the ability to explain, summarize, or visualize their plans and decisions, and how they are derived from traversing complex spaces of possible futures, contingencies, and eventualities, spanned by the available actions of the agent. This limits human trust in high-stakes scenarios, as well as effective human-AI collaboration. In this paper, we propose and motivate the new research direction of explainable search. We discuss its differences to existing approaches in explainable AI, and outline important related research challenges with concrete examples, focusing in particular on online interactions and the resulting understanding of explanations in an ongoing process of mutual collaboration towards human goals.',
    xai: true,
    uisp: false,
    xaip: false,
    invited: false,
    year: '2020',
    link:
      'https://drive.google.com/file/d/14FjlPSwqR_fZRkPwnXHJWa0sYaeWPuet/view',
    render: true,
    xaipid: 128,
  },
  {
    id: 130,
    title: 'Agent Policy Summarization: Describing Agent Behavior to People',
    authors: 'Ofra Amir',
    abstract:
      'From cleaning robots to self-driving cars, autonomous and semi-autonomous agents are becoming increasingly prevalent. Understanding the capabilities and limitations of agents is important for users, as they might need to choose between different agents, adjust the level of autonomy of an agent, or work alongside an agent. While prior work in explainable AI has developed methods for explaining individual decisions of an agent to a person retrospectively, these approaches do not provide users with a global understanding of an agent’s expected behavior in a range of situations. In this talk, I will discuss our recent work on agent policy summarization, which aims to convey to people the policy of an agent by demonstrating its behavior in a selected set of world-states, and its integration with local explanations based on saliency maps.',
    uisp: false,
    xaip: true,
    invited: true,
    year: '2020',
    link: null,
    render: true,
  },
  {
    id: 131,
    title: "Don't Get Fooled by Explanations",
    authors: 'Alan Fern',
    abstract:
      'In recent year, many approaches have been developed for producing different types of explanations for AI and machine learning systems. In most cases, however, the explanations are not attached to a sound semantics and leave much open to the interpretation of the explanation consumer. As a result, such explanations can be highly misleading and counterproductive. In this talk, we will overview some of our recent efforts where we aim to develop deeper insight into reinforcement learning agents, showing examples of how even with the best of intentions it is easy to misinterpret explanations. Next we will describe some of our recent efforts on developing RL agents that produce explanations with a clear notion of soundness. We will end by discussing some of the challenges in furthering the development of sound explanations.',
    uisp: false,
    xaip: true,
    invited: true,
    year: '2020',
    link: null,
    render: true,
  },
  {
    id: 132,
    title:
      'The Extremes of Interpretability: Sparse Decision Trees and Scoring Systems',
    authors: 'Cynthia Rudin',
    abstract: (
      <>
        <span>
          {' '}
          With widespread use of machine learning, there have been serious
          societal consequences from using black box models for high-stakes
          decisions, including flawed bail and parole decisions in criminal
          justice, flawed models in healthcare, and black box loan decisions in
          finance. Transparency and interpretability of machine learning models
          is critical in high stakes decisions. In this talk, I will focus on
          two of the most fundamental and important problems in the field of
          interpretable machine learning: optimal sparse decision trees and
          optimal scoring systems. I will also briefly describe work on
          interpretable neural networks for computer vision.
          <br />
          <br />
          <strong>Optimal sparse decision trees:</strong> We want to find trees
          that maximize accuracy and minimize the number of leaves in the tree
          (sparsity). This is an NP hard optimization problem with no polynomial
          time approximation. I will present the first practical algorithm for
          solving this problem, which uses a highly customized
          dynamic-programming-with-bounds procedure, computational reuse,
          specialized data structures, analytical bounds, and bit-vector
          computations.
          <br />
          <br /> <strong>Optimal scoring systems:</strong> Scoring systems are
          sparse linear models with integer coefficients. Traditionally, scoring
          systems have been designed using manual feature elimination on
          logistic regression models, with a post-processing step where
          coefficients have been rounded. However, this process can fail badly
          to produce optimal (or near optimal) solutions. I will present a novel
          cutting plane method for producing scoring systems from data. The
          solutions are globally optimal according to the logistic loss,
          regularized by the number of terms (sparsity), with coefficients
          constrained to be integers. Predictive models from our algorithm have
          been used for many medical and criminal justice applications,
          including in intensive care units in hospitals.
          <br />
          <br />
          <strong>Interpretable neural networks for computer vision:</strong> We
          have developed a neural network that performs case-based reasoning. It
          aims to explains its reasoning process in a way that humans can
          understand, even for complex classification tasks such as bird
          identification.
          <br />
          <br /> [
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
        </span>
      </>
    ),
    uisp: false,
    xaip: true,
    invited: true,
    year: '2020',
    link: null,
    render: true,
  },
];

export { DATA };
