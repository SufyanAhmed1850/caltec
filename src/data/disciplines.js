// PROVISIONAL — will be reconciled with the research crawl of caltec.com.pk
export const DISCIPLINES = [
  {
    slug: "process-instruments",
    name: "Process Instruments",
    tagline: "The working end of your plant, kept honest.",
    description:
      "Loop checks, transmitters, controllers and field instrumentation calibrated in the laboratory or on your line — with the documentation your quality system expects.",
    points: ["Transmitters & transducers", "Loop calibration", "Controllers & recorders", "On-site service"],
  },
  {
    slug: "electrical",
    name: "Electrical",
    tagline: "From millivolts to mains.",
    description:
      "Multimeters, clamp meters, insulation testers and power analysers verified against traceable electrical references.",
    points: ["Multimeters & clamps", "Insulation testers", "Power analysers", "Loop / RCD testers"],
  },
  {
    slug: "temperature",
    name: "Temperature",
    tagline: "Every degree accounted for.",
    description:
      "RTDs, thermocouples, indicators, controllers, ovens and chambers calibrated across the ranges your process actually runs.",
    points: ["RTDs & thermocouples", "Indicators & controllers", "Ovens & chambers", "IR thermometers"],
  },
  {
    slug: "pressure",
    name: "Pressure",
    tagline: "Held to the last millibar.",
    description:
      "Gauges, transmitters, switches and dead-weight references calibrated with documented uncertainty budgets.",
    points: ["Pressure gauges", "Transmitters & switches", "Vacuum instruments", "Hydraulic comparators"],
  },
  {
    slug: "dimensional",
    name: "Dimensional",
    tagline: "Measured to the micron.",
    description:
      "Calipers, micrometers, gauges and CMM-adjacent tooling verified against traceable length standards.",
    points: ["Calipers & micrometers", "Height & bore gauges", "Dial indicators", "Gauge blocks"],
  },
  {
    slug: "mass",
    name: "Mass & Weighing",
    tagline: "What you weigh is what you get.",
    description:
      "Balances, scales and test weights calibrated with traceable mass standards — from analytical to floor scale.",
    points: ["Analytical balances", "Platform & floor scales", "Test weights", "Weighing indicators"],
  },
  {
    slug: "validation",
    name: "Validation Support",
    tagline: "Audit-ready by design.",
    description:
      "Mapping, qualification support and documentation packages that slot straight into regulated quality workflows.",
    points: ["Thermal mapping", "Qualification support", "Documentation packs", "SOP alignment"],
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Define",
    description: "Share instruments, ranges, location and turnaround needs. We clarify the requirement before anything is promised.",
  },
  {
    n: "02",
    title: "Plan",
    description: "Confirm the service scope, standards and delivery route — laboratory, on-site, or a planned mix of both.",
  },
  {
    n: "03",
    title: "Calibrate",
    description: "Complete the work with documented quality controls, traceable references and recorded uncertainties.",
  },
  {
    n: "04",
    title: "Close the loop",
    description: "Receive results and records ready for your quality system — certificates that survive an audit.",
  },
];
