// Real CALTEC capability data — reconciled with caltec.com.pk research (2026-09-25)
// Card order follows the homepage; `cap` follows the "Capability 0X" numbering on detail pages.

export const DISCIPLINES = [
  {
    slug: "pressure-calibration",
    cap: "01",
    name: "Pressure",
    tagline: "Reliable pressure measurement for safer processes and confident decisions.",
    description:
      "Gauges, transmitters, switches and reference standards calibrated against traceable pressure references — in the laboratory or on your line.",
    points: ["Gauges & transmitters", "Switches & recorders", "Dead-weight testers", "Vacuum instruments"],
    instruments: [
      "Pressure, vacuum and compound gauges", "Pressure calibrators", "Pressure switches",
      "Pressure transmitters and transducers", "Pressure chart recorders", "Dead-weight testers",
      "Differential pressure gauges", "Anemometers", "Air velocity meters", "Barometers",
      "Chart recorders", "Digital pressure gauges", "Flow transmitters", "Gram gauges",
      "High-pressure gauges", "Hook gauges", "Low-pressure gauges", "Manometers",
      "Air and mass flow meters", "Oscilloscopes", "Pressure recorders", "RPM meters",
      "Rubber hardness testers", "Speed meters", "Turbine meters", "Vacuum gauges",
      "Vacuum switches", "Non-destructive testing (NDT)", "Medical-device manufacturing mass-flow instruments",
    ],
    related: ["temperature-calibration", "flow-meter-calibration", "mechanical-calibration"],
  },
  {
    slug: "temperature-calibration",
    cap: "02",
    name: "Temperature",
    tagline: "Confidence across sensors, controllers, chambers and thermal instruments.",
    description:
      "Sensors, controllers, chambers and thermal instruments calibrated across the ranges your process actually runs.",
    points: ["Sensors: RTD & thermocouple", "Controllers & indicators", "Ovens, chambers & baths", "Data loggers"],
    instruments: [
      "Temperature controllers and indicators", "Temperature sensors (RTD and thermocouple)",
      "Temperature transmitters", "Liquid-bath and dry-block temperature calibrators",
      "Chart and digital temperature recorders", "Thermo switches and thermostats",
      "Glass, digital, wet, dry and infrared thermometers", "Hot-air ovens", "Muffle furnaces",
      "Water baths", "Incubators", "Refrigerators", "Deep freezers", "Analogue gauges",
      "Bi-metal thermometers", "Chart recorders", "Temperature chambers", "Digital thermometers",
      "Digital temperature indicators", "Dry blocks", "Data loggers", "Furnaces", "Freezers",
      "Glass thermometers", "Heating baths and blocks", "Infrared thermometers", "Ovens",
      "Oil baths", "PRTs", "Partial-immersion thermometers", "Pyrometers", "RTD thermometers",
      "Sterilisers", "Surface thermometers", "Thermocouple thermometers", "Thermocouple probes",
      "Temperature gauges", "Temperature switches", "Temperature transducers", "Thermistor probes",
      "Temperature pen recorders", "Thermo-hygrographs", "Thermo-hygrometers",
      "Temperature and humidity meters", "Total-immersion glass thermometers",
    ],
    related: ["pressure-calibration", "flow-meter-calibration", "mechanical-calibration"],
  },
  {
    slug: "electrical-calibration",
    cap: "05",
    name: "Electrical",
    tagline: "Dependable electrical measurement across test, control and production.",
    description:
      "Test, measurement, power and control instrumentation verified against traceable electrical references.",
    points: ["Multimeters & clamps", "Calibrators & sources", "Power & energy meters", "Insulation & earth testers"],
    instruments: [
      "Digital multimeters", "Multi-function calibrators", "Clamp meters", "Ammeters and voltmeters",
      "Loop calibrators", "Insulation testers", "Non-contact tachometers", "AC/DC power supplies",
      "Analogue and digital meters", "Earth testers", "Decade resistance boxes", "Clamp-on HiTesters",
      "Capacitance boxes", "Current probes", "Current clamps", "Digital earth testers",
      "Energy meters", "Function generators", "Frequency meters", "Frequency counters",
      "High-voltage generators", "High-voltage probes", "HiPot testers", "Inductance boxes",
      "LCR meters", "Loggers", "Multi-function meters", "Megohmmeters", "Milliohmmeters",
      "Oscilloscopes", "Phase detectors", "Phase indicators", "Power meters", "Power-supply functions",
      "Resistivity meters", "RCD meters", "System controls", "Scope meters", "Timers",
    ],
    related: ["pressure-calibration", "temperature-calibration", "flow-meter-calibration"],
  },
  {
    slug: "mechanical-calibration",
    cap: "04",
    name: "Mechanical",
    tagline: "Traceable support for mass, force, torque and hardness measurement.",
    description:
      "Mass, force, torque and hardness measurement — balances to torque wrenches — with traceable references.",
    points: ["Balances & weights", "Force & tension gauges", "Torque tools", "Hardness testers"],
    instruments: [
      "Weighing balances", "Weights and weight boxes", "Cable tension meters", "Durometers",
      "Force gauges", "Gram gauges", "Hardness machines", "Hardness meters", "Load cells",
      "Masses", "Push/pull gauges", "Pocket balances", "RPM meters", "Rubber hardness testers",
      "Spring balances", "Speed indicators", "Stroboscopes", "Tension gauges", "Tachometers",
      "Torque drivers", "Torque checkers", "Torque dials", "Torque gauges", "Torque wrenches",
      "Standard weights",
    ],
    related: ["pressure-calibration", "temperature-calibration", "flow-meter-calibration"],
  },
  {
    slug: "precision-calibration",
    cap: "06",
    name: "Precision",
    tagline: "Dimensional measurement support where tolerances and records matter.",
    description:
      "Dimensional instruments, gauges and drawing checks — vernier to vision systems — verified against traceable length standards.",
    points: ["Calipers & micrometers", "Gauges & indicators", "Optical & vision systems", "GD&T drawing checks"],
    instruments: [
      "Vernier calipers", "Micrometers", "Dial gauges (plunger, lever and bore)", "Measuring tapes",
      "V-blocks", "Steel rulers", "Bore gauges", "Bevel protractors", "Bubble level gauges",
      "Carpenter tapes", "Circumferential tapes", "Caliper gauges", "Coating and thickness gauges",
      "Check masters", "Caliper checkers", "Crimping tools", "Carpenter level gauges",
      "Dial test indicators", "Dial slider calipers", "Dial indicators", "Dial calibrators",
      "Digimatic calipers", "Depth calipers", "Depth gauges", "Depth micrometers",
      "Depth micro checkers", "Digimatic micrometers", "Digital level gauges", "Electrical comparators",
      "Extension rods and anvils", "External micrometers", "Exchangeable micrometers",
      "Film applicators", "Fineness gauges", "Feeler gauges", "Gauge blocks", "Glass scales",
      "Hook tapes", "Horizontal metroscopes", "Height-setting micrometers", "Internal-jaw micrometers",
      "Inclinometers", "Interchangeable micrometers", "Loupe scales", "Lever probe indicators",
      "Jigs and fixtures checked against drawings", "Micrometer heads", "Micro indicators",
      "Mu-checkers", "Millitrons", "Mini horizontal instruments", "Optical flats", "Optical parallels",
      "Optical comparators", "Precision test indicators", "PI tapes", "Plastic rulers",
      "Three-point internal micrometers", "Pocket thickness gauges", "Plain plug gauges", "Pin gauges",
      "Plain ring gauges", "Parallel screw gauges", "Perforated plates", "Pendulums", "Riser blocks",
      "Standard rods", "Surveyor tapes", "Stage micrometer scales", "Slide calipers",
      "Stick and tubular inside micrometers", "Surface profile gauges", "Super micrometers",
      "Spirit level gauges", "Eye loupes", "Tank-gauging tapes", "Toolmaker microscopes",
      "Thread ring gauges", "Ultrasonic thickness gauges", "Universal length machines",
      "Vernier depth calipers", "Vertical height gauges", "Vertical linear height gauges",
      "Vision measurement machines", "Video measuring systems", "Wet and dry film thickness instruments",
      "Working gauge blocks", "Woven cloth wire", "GD&T drawing and jig/fixture measurement checks",
    ],
    related: ["pressure-calibration", "temperature-calibration", "flow-meter-calibration"],
  },
  {
    slug: "flow-meter-calibration",
    cap: "03",
    name: "Flow",
    tagline: "Verified flow measurement for production, utilities and process control.",
    description:
      "Industrial flow meters and process measurement systems — verified for production, utilities and process control.",
    points: ["Electromagnetic & turbine", "Thermal mass & vortex", "Coriolis mass", "Orifice & rotameters"],
    instruments: [
      "Digital electromagnetic flow meters", "Turbine flow meters", "Thermal mass flow meters",
      "Vortex flow meters", "Coriolis mass flow meters", "Glass rotameters", "Orifice flow meters",
    ],
    related: ["pressure-calibration", "temperature-calibration", "mechanical-calibration"],
  },
  {
    slug: "thermal-mapping-validation",
    cap: "07",
    name: "Thermal mapping",
    tagline: "Documented qualification for temperature-controlled spaces and equipment.",
    description:
      "Qualification and validation of controlled environments — chambers, rooms and sterilisers mapped and documented.",
    points: ["Chambers & rooms mapped", "Sterilisers qualified", "Stability studies", "Validation documentation"],
    instruments: [
      "Dry-heat sterilisers", "Autoclaves", "Steam sterilisers", "Ovens", "Stability chambers",
      "Humidity chambers", "Incubators", "Tray dryers", "Warehouses", "Cold rooms",
    ],
    related: ["pressure-calibration", "temperature-calibration", "flow-meter-calibration"],
  },
];

export const bySlug = (slug) => DISCIPLINES.find((d) => d.slug === slug);

export const STEPS = [
  {
    n: "01",
    title: "Define",
    description: "Share instruments, ranges, location and turnaround needs.",
  },
  {
    n: "02",
    title: "Plan",
    description: "Confirm the service scope, standards and delivery route.",
  },
  {
    n: "03",
    title: "Calibrate",
    description: "Complete the work with documented quality controls.",
  },
  {
    n: "04",
    title: "Close the loop",
    description: "Receive results and records ready for your quality system.",
  },
];

export const CONTACT = {
  mobile: "+92 333 22 83557",
  mobileHref: "tel:+923332283557",
  whatsapp: "+92 300 8213260",
  whatsappHref: "https://wa.me/923008213260",
  landline: "+92 21 35167530",
  landlineHref: "tel:+922135167530",
  emails: [
    { label: "General enquiries", value: "info@caltec.com.pk" },
    { label: "Sales", value: "sales@caltec.com.pk" },
    { label: "Calibration", value: "calibration@caltec.com.pk" },
  ],
  address: "Office 203, 2nd Floor, Building LS-1, Plot S/T-3/1, Sector 15, Korangi Industrial Area, Karachi, Pakistan",
  mapsHref: "https://maps.google.com/?q=Korangi+Industrial+Area+Karachi",
  linkedin: "https://pk.linkedin.com/company/caltec-instrument-services-co",
};
