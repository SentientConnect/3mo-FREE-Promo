import {
  Activity,
  Brain,
  BriefcaseBusiness,
  Building2,
  Compass,
  Fingerprint,
  HeartHandshake,
  Home,
  LockKeyhole,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  Triangle,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "AURA Genesis", href: "/aura-genesis" },
  { label: "Home Services AURA", href: "/home-services-aura" },
  { label: "Behavioral Health", href: "/behavioral-health" },
  { label: "DISC Profile", href: "/disc-profile" },
  { label: "Business Consulting", href: "/business-consulting" },
  { label: "SentientOS", href: "/sentientos" },
  { label: "MBS Framework", href: "/mbs-framework" },
];

export const ecosystemCards = [
  {
    title: "AURA Genesis™",
    href: "/aura-genesis",
    description: "The orchestration layer for decisions, workflows, accountability, and aligned execution.",
    icon: Orbit,
  },
  {
    title: "Home Services AURA™",
    href: "/home-services-aura",
    description: "Dispatch, vendor coordination, intake routing, completion tracking, and operational automation.",
    icon: Home,
  },
  {
    title: "Behavioral Health",
    href: "/behavioral-health",
    description: "Ethical support infrastructure for coaching, recovery support, self-reporting, and practitioner clarity.",
    icon: HeartHandshake,
  },
  {
    title: "DISC Profile",
    href: "/disc-profile",
    description: "Behavioral insight for communication style, motivation patterns, and personalized coaching.",
    icon: UserRoundCheck,
  },
  {
    title: "Business Consulting",
    href: "/business-consulting",
    description: "Systems design, automation strategy, client journey mapping, and execution architecture.",
    icon: BriefcaseBusiness,
  },
  {
    title: "SentientOS™",
    href: "/sentientos",
    description: "The parent operating layer that connects personal, operational, and future wearable intelligence.",
    icon: Network,
  },
  {
    title: "Wearables Coming Soon",
    href: "/sentientos#wearables",
    description: "Future body-state awareness, behavioral signal support, and personalized growth insights.",
    icon: Activity,
  },
  {
    title: "MBS Triangulation™",
    href: "/mbs-framework",
    description: "Mind, Body, and Spirit mapped into one practical framework for individual execution.",
    icon: Triangle,
  },
];

export const pageData = {
  aura: {
    eyebrow: "AURA Genesis™",
    title: "Orchestration intelligence for the human and the system.",
    description:
      "AURA Genesis helps organize decisions, workflows, client journeys, operations, and personal accountability into one structured command layer.",
    icon: Orbit,
    features: [
      { title: "Decision Clarity", description: "Turn scattered information into prioritized next moves." },
      { title: "Workflow Orchestration", description: "Connect tasks, intake, follow-up, approvals, and reporting." },
      { title: "Accountability Loops", description: "Create rhythm around daily actions, check-ins, and execution quality." },
      { title: "Client Journey Support", description: "Map the path from first contact to handoff, service, and retention." },
      { title: "Mission Alignment", description: "Keep execution connected to values, truth, and measurable outcomes." },
      { title: "Operator Command", description: "Give founders and teams a clearer view of what matters now." },
    ],
  },
  homeServices: {
    eyebrow: "Home Services AURA™",
    title: "A smarter operating layer for service intake, dispatch, and completion.",
    description:
      "Home Services AURA helps teams structure lead intake, route jobs, coordinate vendors, track completion, and protect operational quality.",
    icon: Building2,
    features: [
      { title: "Service Intake", description: "Capture the right job details before work is assigned." },
      { title: "Vendor Dispatch", description: "Broadcast, assign, accept, and coordinate service requests." },
      { title: "Completion Tracking", description: "Track status from request to completion with cleaner visibility." },
      { title: "Audit Trail", description: "Create records that support accountability and follow-through." },
      { title: "Client Communication", description: "Support timely updates, next steps, and service clarity." },
      { title: "Operational Automation", description: "Reduce manual handoffs and repetitive coordination work." },
    ],
  },
  behavioralHealth: {
    eyebrow: "Behavioral Health",
    title: "Ethical support infrastructure for clarity, coaching, and care workflows.",
    description:
      "Sentient Connect supports self-reporting, recovery support, practitioner workflows, client clarity, and coaching structure without replacing licensed clinical care.",
    icon: HeartHandshake,
    features: [
      { title: "Self-Reporting", description: "Help clients organize daily state, behavior, and progress data." },
      { title: "Recovery Support", description: "Support structured reflection, routines, and accountability." },
      { title: "Practitioner Workflows", description: "Give teams cleaner context before and between sessions." },
      { title: "Client Clarity", description: "Translate goals, triggers, patterns, and next steps into practical language." },
      { title: "Ethical Boundaries", description: "Designed as support infrastructure, not a replacement for licensed care." },
      { title: "MBS Integration", description: "Connect mental, physical, and purpose-based signals in one framework." },
    ],
    disclaimer: "Sentient Connect does not replace licensed medical, clinical, or emergency care.",
  },
  disc: {
    eyebrow: "DISC Profile",
    title: "Behavioral insight that makes coaching and communication more precise.",
    description:
      "DISC-style insight helps identify how a person communicates, executes, handles pressure, builds trust, and responds to structure.",
    icon: Fingerprint,
    features: [
      { title: "Communication Style", description: "Understand how someone gives, receives, and processes information." },
      { title: "Motivation Patterns", description: "Identify what drives action, avoidance, consistency, and urgency." },
      { title: "Execution Style", description: "Match goals to the way a person naturally gets things done." },
      { title: "Conflict Awareness", description: "Reduce misalignment by naming predictable friction points." },
      { title: "Coaching Personalization", description: "Adapt plans to the person instead of forcing one generic method." },
      { title: "Team Fit", description: "Improve role clarity, handoffs, and operating rhythm." },
    ],
  },
  business: {
    eyebrow: "Business Consulting",
    title: "Systems design for operators who need clarity, automation, and execution.",
    description:
      "Sentient Connect consulting helps design funnels, workflows, client journeys, automation maps, operating cadence, and AI-supported execution systems.",
    icon: BriefcaseBusiness,
    features: [
      { title: "Systems Design", description: "Turn the business into a clearer operating architecture." },
      { title: "Automation Strategy", description: "Identify where AI and workflows can reduce drag without losing human judgment." },
      { title: "Funnel Mapping", description: "Structure TOFU, MOFU, and BOFU around real client movement." },
      { title: "Client Journey Design", description: "Clarify what happens from attention to conversion to delivery." },
      { title: "Operational Execution", description: "Create rhythm around tasks, ownership, reporting, and accountability." },
      { title: "AI Workflow Design", description: "Use AI to support work, not confuse the mission." },
    ],
  },
  sentientos: {
    eyebrow: "SentientOS™",
    title: "The parent operating layer for human growth and connected execution.",
    description:
      "SentientOS connects AURA Genesis, Sentient Connect, MBS Triangulation, behavioral insight, automation, and future wearable signals into one operating model.",
    icon: Network,
    features: [
      { title: "Operating Layer", description: "A central structure for personal, business, and behavioral execution." },
      { title: "Connected Intelligence", description: "Bring context, workflows, insights, and decisions into one view." },
      { title: "Human-Centered Design", description: "Keep technology aligned with clarity, accountability, and values." },
      { title: "Wearables Coming Soon", description: "Prepare for body-state signals, behavior awareness, and personalized growth insights." },
      { title: "Decision Support", description: "Support better timing, prioritization, and alignment." },
      { title: "Future Ecosystem", description: "Build toward a connected OS for individuals, operators, and teams." },
    ],
  },
  mbs: {
    eyebrow: "Mind | Body | Spirit Triangulation™",
    title: "A practical framework for the full human system.",
    description:
      "MBS Triangulation connects clarity, regulation, habits, purpose, integrity, and execution so individuals can grow with structure instead of chaos.",
    icon: Triangle,
    features: [
      { title: "Mind", description: "Clarity, decisions, thoughts, focus, emotional patterns, and cognitive direction." },
      { title: "Body", description: "Regulation, habits, energy, recovery, cravings, sleep, nutrition, and movement." },
      { title: "Spirit", description: "Purpose, integrity, values, alignment, forgiveness, service, and identity." },
      { title: "Daily Check-Ins", description: "Turn self-awareness into measurable rhythm and accountability." },
      { title: "Individual Growth", description: "Build plans around the person, not a generic template." },
      { title: "Integrated Execution", description: "Connect what someone knows, feels, does, and believes into one path." },
    ],
  },
};

export const principles = [
  {
    title: "Built around the human",
    description: "The system exists to support people first: clearer choices, better structure, and stronger follow-through.",
    icon: Compass,
  },
  {
    title: "Truth before momentum",
    description: "Sentient Connect prioritizes grounded clarity over rushed action or inflated claims.",
    icon: ShieldCheck,
  },
  {
    title: "Execution with alignment",
    description: "The framework connects decisions, behaviors, workflows, and mission into one operating rhythm.",
    icon: Workflow,
  },
  {
    title: "Access with responsibility",
    description: "Role-based portals and secure system access are designed to expand as the ecosystem matures.",
    icon: LockKeyhole,
  },
  {
    title: "Intelligence in service",
    description: "AI supports organization, reflection, and operations without replacing human responsibility.",
    icon: Brain,
  },
  {
    title: "Greater-good orientation",
    description: "The ecosystem is designed for practical human growth, ethical automation, and sustainable service.",
    icon: Sparkles,
  },
];
