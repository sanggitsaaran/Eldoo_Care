const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, LevelFormat, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageBreak, PageNumber, Header, Footer,
  TabStopType, TabStopPosition
} = require('docx');
const fs = require('fs');

// Colors
const BLUE = "1F4E79";
const LIGHT_BLUE = "2E75B6";
const ACCENT_BLUE = "D5E8F0";
const ACCENT_GREEN = "D8F0D8";
const ACCENT_RED = "F0D8D8";
const ACCENT_YELLOW = "FFF3CD";
const LIGHT_GRAY = "F5F5F5";
const MED_GRAY = "CCCCCC";
const DARK_GRAY = "595959";
const WHITE = "FFFFFF";

const border = (color = MED_GRAY) => ({ style: BorderStyle.SINGLE, size: 1, color });
const borders = (color = MED_GRAY) => ({ top: border(color), bottom: border(color), left: border(color), right: border(color) });
const noBorder = () => ({ style: BorderStyle.NONE, size: 0, color: "FFFFFF" });
const noBorders = () => ({ top: noBorder(), bottom: noBorder(), left: noBorder(), right: noBorder() });

const cellMargins = { top: 100, bottom: 100, left: 150, right: 150 };

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, bold: true, font: "Arial", size: 32, color: WHITE })],
    shading: { fill: BLUE, type: ShadingType.CLEAR },
    spacing: { before: 360, after: 200 },
    indent: { left: 200, right: 200 }
  });
}

function heading2(text, color = LIGHT_BLUE) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text, bold: true, font: "Arial", size: 26, color })],
    spacing: { before: 280, after: 140 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color, space: 2 } }
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    children: [new TextRun({ text, bold: true, font: "Arial", size: 22, color: DARK_GRAY })],
    spacing: { before: 200, after: 100 }
  });
}

function para(text, options = {}) {
  return new Paragraph({
    children: [new TextRun({ text, font: "Arial", size: 22, ...options })],
    spacing: { before: 80, after: 80 },
    ...( options.alignment ? { alignment: options.alignment } : {} )
  });
}

function boldPara(text) {
  return para(text, { bold: true });
}

function bullet(text, level = 0) {
  const indent = level === 0 ? { left: 720, hanging: 360 } : { left: 1080, hanging: 360 };
  return new Paragraph({
    numbering: { reference: "bullets", level },
    children: [new TextRun({ text, font: "Arial", size: 22 })],
    spacing: { before: 60, after: 60 },
    indent
  });
}

function numbered(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "numbers", level },
    children: [new TextRun({ text, font: "Arial", size: 22 })],
    spacing: { before: 60, after: 60 }
  });
}

function spacer(lines = 1) {
  return new Paragraph({ children: [new TextRun("")], spacing: { before: 0, after: lines * 100 } });
}

function divider() {
  return new Paragraph({
    children: [new TextRun("")],
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: MED_GRAY, space: 1 } },
    spacing: { before: 200, after: 200 }
  });
}

function infoBox(text, fillColor = ACCENT_BLUE) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [new TableRow({
      children: [new TableCell({
        borders: noBorders(),
        width: { size: 9360, type: WidthType.DXA },
        shading: { fill: fillColor, type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 200, right: 200 },
        children: [new Paragraph({
          children: [new TextRun({ text, font: "Arial", size: 22 })],
          spacing: { before: 0, after: 0 }
        })]
      })]
    })]
  });
}

function sectionHeader(text, fillColor = BLUE) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [new TableRow({
      children: [new TableCell({
        borders: noBorders(),
        width: { size: 9360, type: WidthType.DXA },
        shading: { fill: fillColor, type: ShadingType.CLEAR },
        margins: { top: 140, bottom: 140, left: 200, right: 200 },
        children: [new Paragraph({
          children: [new TextRun({ text, font: "Arial", size: 28, bold: true, color: WHITE })],
          spacing: { before: 0, after: 0 }
        })]
      })]
    })]
  });
}

// Two-column table helper
function twoColTable(rows, headerRow = null, col1Width = 2200, col2Width = 7160) {
  const total = col1Width + col2Width;
  const tableRows = [];
  if (headerRow) {
    tableRows.push(new TableRow({
      children: [
        new TableCell({
          borders: borders(LIGHT_BLUE),
          width: { size: col1Width, type: WidthType.DXA },
          shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
          margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: headerRow[0], bold: true, font: "Arial", size: 20, color: WHITE })], spacing: { before: 0, after: 0 } })]
        }),
        new TableCell({
          borders: borders(LIGHT_BLUE),
          width: { size: col2Width, type: WidthType.DXA },
          shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
          margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: headerRow[1], bold: true, font: "Arial", size: 20, color: WHITE })], spacing: { before: 0, after: 0 } })]
        })
      ]
    }));
  }
  rows.forEach(([col1, col2], i) => {
    const fill = i % 2 === 0 ? WHITE : LIGHT_GRAY;
    tableRows.push(new TableRow({
      children: [
        new TableCell({
          borders: borders(),
          width: { size: col1Width, type: WidthType.DXA },
          shading: { fill, type: ShadingType.CLEAR },
          margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: col1, bold: true, font: "Arial", size: 20 })], spacing: { before: 0, after: 0 } })]
        }),
        new TableCell({
          borders: borders(),
          width: { size: col2Width, type: WidthType.DXA },
          shading: { fill, type: ShadingType.CLEAR },
          margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: col2, font: "Arial", size: 20 })], spacing: { before: 0, after: 0 } })]
        })
      ]
    }));
  });
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: [col1Width, col2Width], rows: tableRows });
}

function multiColTable(headers, rows, widths) {
  const total = widths.reduce((a, b) => a + b, 0);
  const headerRow = new TableRow({
    children: headers.map((h, i) => new TableCell({
      borders: borders(LIGHT_BLUE),
      width: { size: widths[i], type: WidthType.DXA },
      shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
      margins: cellMargins,
      children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, font: "Arial", size: 20, color: WHITE })], spacing: { before: 0, after: 0 } })]
    }))
  });
  const dataRows = rows.map((row, ri) => new TableRow({
    children: row.map((cell, i) => new TableCell({
      borders: borders(),
      width: { size: widths[i], type: WidthType.DXA },
      shading: { fill: ri % 2 === 0 ? WHITE : LIGHT_GRAY, type: ShadingType.CLEAR },
      margins: cellMargins,
      children: [new Paragraph({ children: [new TextRun({ text: cell, font: "Arial", size: 20 })], spacing: { before: 0, after: 0 } })]
    }))
  }));
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: widths, rows: [headerRow, ...dataRows] });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()], spacing: { before: 0, after: 0 } });
}

// ─────────────────────────────────────────────
// BUILD DOCUMENT
// ─────────────────────────────────────────────

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 22 } }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: WHITE },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: LIGHT_BLUE },
        paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 1 }
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: DARK_GRAY },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "\u25E6", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }
        ]
      },
      {
        reference: "numbers",
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
        ]
      },
      {
        reference: "checklist",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "\u25A1", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: "ELDOO CARE  \u2014  Booking System Strategy Analysis", font: "Arial", size: 18, color: DARK_GRAY }),
              new TextRun({ text: "\t", font: "Arial", size: 18 }),
              new TextRun({ text: "CONFIDENTIAL", font: "Arial", size: 18, bold: true, color: LIGHT_BLUE })
            ],
            tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: LIGHT_BLUE, space: 1 } },
            spacing: { before: 0, after: 160 }
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: "May 12, 2026  \u2014  Phase 1 Planning", font: "Arial", size: 18, color: DARK_GRAY }),
              new TextRun({ text: "\t", font: "Arial", size: 18 }),
              new TextRun({ text: "Page ", font: "Arial", size: 18, color: DARK_GRAY })
            ],
            tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
            border: { top: { style: BorderStyle.SINGLE, size: 6, color: MED_GRAY, space: 1 } },
            spacing: { before: 160, after: 0 }
          })
        ]
      })
    },
    children: [
      // ─── COVER ───────────────────────────────────
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [9360],
        rows: [new TableRow({
          children: [new TableCell({
            borders: noBorders(),
            width: { size: 9360, type: WidthType.DXA },
            shading: { fill: BLUE, type: ShadingType.CLEAR },
            margins: { top: 600, bottom: 600, left: 400, right: 400 },
            children: [
              new Paragraph({ children: [new TextRun({ text: "ELDOO CARE", font: "Arial", size: 56, bold: true, color: WHITE })], alignment: AlignmentType.CENTER, spacing: { before: 0, after: 120 } }),
              new Paragraph({ children: [new TextRun({ text: "Booking System Strategy Analysis", font: "Arial", size: 36, color: "BDD7EE" })], alignment: AlignmentType.CENTER, spacing: { before: 0, after: 240 } }),
              new Paragraph({ children: [new TextRun({ text: "\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015", font: "Arial", size: 28, color: "4472C4" })], alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200 } }),
              new Paragraph({ children: [new TextRun({ text: "Complete Discussion Document for Team Review", font: "Arial", size: 24, color: "9DC3E6", italics: true })], alignment: AlignmentType.CENTER, spacing: { before: 0, after: 400 } }),
              new Paragraph({ children: [new TextRun({ text: "Document Date: May 12, 2026", font: "Arial", size: 20, color: WHITE })], alignment: AlignmentType.CENTER, spacing: { before: 0, after: 80 } }),
              new Paragraph({ children: [new TextRun({ text: "Status: Phase 1 Planning \u2014 Ready for Team Discussion", font: "Arial", size: 20, color: WHITE })], alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 } }),
            ]
          })]
        })]
      }),
      spacer(3),

      // ─── EXECUTIVE SUMMARY ───────────────────────
      sectionHeader("1. EXECUTIVE SUMMARY"),
      spacer(),
      heading3("Current Situation"),
      twoColTable([
        ["Frontend", "React app with 4 pages (Home, Plans, About, Book Now) deployed on Arcada"],
        ["Backend", "None currently"],
        ["Phase 1", "Limited resources and budget"],
        ["Challenge", "Need to capture and store booking data for admin management"],
        ["Future Concern", "Must scale if user growth increases"]
      ], null, 2000, 7360),
      spacer(),
      heading3("Decision Point"),
      para("The team must decide between two approaches for handling booking data:"),
      spacer(),
      twoColTable([
        ["Option 1", "Email-based form submission \u2014 simple, free, Phase 1 focused"],
        ["Option 2", "Full backend with database \u2014 complex, has cost, but highly scalable"]
      ], ["Option", "Description"], 1400, 7960),
      spacer(),
      heading3("Key Timeline"),
      multiColTable(
        ["Phase", "Timeframe", "Focus"],
        [
          ["Phase 1", "Now", "Limited users, focus on MVP"],
          ["Phase 2", "3\u20136 months", "Potential growth, might need backend"],
          ["Phase 3+", "6+ months", "Scale to 1,000s of bookings"]
        ],
        [2000, 2500, 4860]
      ),
      spacer(2),
      pageBreak(),

      // ─── OPTION 1 ────────────────────────────────
      sectionHeader("2. OPTION 1: EMAIL-BASED FORMS (Phase 1 \u2014 Recommended)"),
      spacer(),
      heading3("How It Works"),
      numbered("User fills booking form on BookNowPage with: Name, Phone number, City, Service type, Additional notes"),
      numbered("Form data is sent to the company email via an email service (EmailJS or Formspree)"),
      numbered("Email contains all booking details formatted clearly"),
      numbered("Admin receives email in inbox and stores in spreadsheet/folder or manually records the booking"),
      numbered("Customer receives an auto-reply confirmation (optional enhancement)"),
      spacer(),
      heading3("Advantages"),
      multiColTable(
        ["Aspect", "Benefit"],
        [
          ["Cost", "FREE \u2014 no server or database infrastructure needed"],
          ["Setup Time", "2\u20134 hours \u2014 just API key integration"],
          ["Maintenance", "None \u2014 email providers handle everything"],
          ["Learning Curve", "Very easy \u2014 basic form integration, no complex code"],
          ["Scalability (Phase 1)", "Works perfectly for 10\u2013100 bookings per day"],
          ["Implementation", "No backend code required \u2014 frontend only"],
          ["Admin Experience", "Emails drop in familiar inbox \u2014 no new tools to learn"],
          ["Testing", "Simple to test \u2014 just send a test email"],
          ["Risk", "Minimal \u2014 worst case, need to switch to backend later"]
        ],
        [2400, 6960]
      ),
      spacer(),
      heading3("Disadvantages"),
      multiColTable(
        ["Aspect", "Limitation"],
        [
          ["Data Management", "Manual admin work \u2014 emails pile up in inbox and need to be organized"],
          ["Scalability (Growth)", "Breaks down at 500+ bookings/day \u2014 inbox becomes unmanageable"],
          ["Analytics", "No built-in reporting or insights into booking trends"],
          ["Automation", "Cannot auto-send customer confirmations or reminders without manual work"],
          ["Real-time Updates", "No visibility of pending or completed booking statuses"],
          ["Duplicate Prevention", "No system to detect or prevent duplicate bookings"],
          ["CRM Integration", "Difficult to connect with Salesforce or HubSpot later"],
          ["Mobile App", "Cannot track bookings in a future mobile app"],
          ["Data Backup", "Depends on email provider's backup \u2014 not within your control"],
          ["Historical Reports", "Hard to generate reports from old emails"]
        ],
        [2400, 6960]
      ),
      spacer(),
      heading3("Enhancement Options (Add-Ons)"),
      multiColTable(
        ["Option", "Cost", "Function", "Best For"],
        [
          ["A: Zapier Integration", "$10\u201320/month", "Auto-save each email to Google Sheets or Airtable", "Small teams (1\u20132 admins)"],
          ["B: Formspree Pro", "$25/month", "Better spam protection, CSV export, unlimited submissions", "Growing to 100+ bookings/month"],
          ["C: Auto-reply System", "$0 (built-in)", "Automatically send customer confirmation email after booking", "All phases"],
          ["D: Email Forwarding", "$0 (email provider)", "Forward all bookings to multiple team members", "Distributed teams"]
        ],
        [2200, 1500, 3600, 2060]
      ),
      spacer(2),
      pageBreak(),

      // ─── OPTION 2 ────────────────────────────────
      sectionHeader("3. OPTION 2: BACKEND + DATABASE (Future Scaling)"),
      spacer(),
      heading3("How It Works"),
      numbered("Create backend API server (Node.js / Python / Go) that receives form submissions from the React frontend, validates data, and stores it in a database"),
      numbered("Connect to a database (PostgreSQL / MongoDB / Firebase / etc.) that stores all booking records, maintains data integrity, and enables complex queries"),
      numbered("Send confirmation email to customer automatically (e.g., \"Your booking #12345 confirmed\")"),
      numbered("Create admin dashboard with: login page, full booking table view with filters, booking detail view, status updates (Pending \u2192 Confirmed \u2192 Completed)"),
      numbered("Enable automations: SMS reminder day before booking, auto-send confirmation email, generate weekly reports"),
      spacer(),
      heading3("Advantages"),
      multiColTable(
        ["Aspect", "Benefit"],
        [
          ["Cost (Early)", "$0\u201315/month on free-tier databases (Firebase, Supabase, MongoDB Atlas)"],
          ["Scalability", "Handles 1,000s of bookings/day without issues"],
          ["Data Safety", "Professional database with automatic backups and encryption"],
          ["Analytics", "Built-in reporting \u2014 see trends, peak booking times, popular services"],
          ["Automation", "Send auto-confirmations, SMS reminders, follow-up emails"],
          ["Admin Dashboard", "Professional booking management UI \u2014 not scattered emails"],
          ["Real-time Updates", "Live booking status tracking \u2014 see new bookings instantly"],
          ["CRM Ready", "Easy to export to Salesforce/HubSpot or other tools later"],
          ["Mobile App", "API works for future mobile app or WhatsApp bot"],
          ["Duplicate Prevention", "System can block duplicate bookings from same phone"],
          ["Historical Data", "Easy to query 2 years of booking history"],
          ["Multi-admin Support", "Multiple team members can access simultaneously"],
          ["Audit Trail", "Track who updated what booking and when"]
        ],
        [2400, 6960]
      ),
      spacer(),
      heading3("Disadvantages"),
      multiColTable(
        ["Aspect", "Limitation"],
        [
          ["Initial Cost", "$20\u2013100+ for the first month (dev time + infrastructure setup)"],
          ["Setup Time", "1\u20132 weeks for complete implementation (backend + DB + dashboard)"],
          ["Maintenance Required", "Need to monitor server health and database performance"],
          ["Learning Curve", "Requires backend developer knowledge (Node.js, databases, APIs)"],
          ["Complexity", "More code = more potential bugs, more testing needed"],
          ["Deployment Complexity", "Requires DevOps and server management knowledge"],
          ["Overkill for Phase 1", "Unnecessary complexity if only getting <50 bookings/day"],
          ["Team Skill Gap", "Needs an experienced backend developer on the team"],
          ["Debugging", "When issues occur, they are harder to troubleshoot"],
          ["Data Sovereignty", "If using cloud, data is stored on third-party servers"]
        ],
        [2400, 6960]
      ),
      spacer(2),
      pageBreak(),

      // ─── RECOMMENDATION ───────────────────────────
      sectionHeader("4. RECOMMENDATION"),
      spacer(),
      infoBox("PHASE 1 RECOMMENDATION: GO WITH OPTION 1 \u2014 Email-Based Forms", ACCENT_GREEN),
      spacer(),
      heading3("Why This Makes Sense Now"),
      twoColTable([
        ["1. Phase 1 with Limited Users", "Email-based forms are perfect for 0\u2013100 bookings/month. No point over-engineering before it is needed."],
        ["2. Zero Infrastructure Cost", "Every saved rupee can go toward marketing and user acquisition. Avoid wasting budget on backend infrastructure that is not yet required."],
        ["3. Focus on What Matters", "The team should focus on marketing, user growth, and service quality \u2014 not managing servers, fixing database bugs, or DevOps."],
        ["4. Can Implement This Week", "Maximum 3\u20134 hours of work. No backend developer needed. Can be tested immediately."],
        ["5. Easy for Admin to Manage", "Admin receives emails \u2014 a familiar process. Can export to spreadsheet if needed. No special tools to learn."],
        ["6. Validate Business Model First", "Prove customers want the service and validate the numbers before investing in backend infrastructure."],
        ["7. Clear Upgrade Path", "When hitting 100+ bookings/day, switch to backend. No data loss \u2014 emails can be migrated to a database. Transition takes only 1\u20132 weeks."]
      ], null, 2600, 6760),
      spacer(),
      heading3("Phase 2 Strategy (3\u20136 Months Later)"),
      infoBox("UPGRADE TO OPTION 2: Backend + Firebase or Supabase", ACCENT_YELLOW),
      spacer(),
      heading3("Why Switch in Phase 2?"),
      twoColTable([
        ["Email Becomes Unmanageable", "200 bookings/day = 6,000 emails/month. Inbox becomes impossible to manage. A searchable database becomes necessary."],
        ["Need Real-Time Visibility", "Admin dashboard showing live bookings, demand by city, and popular services."],
        ["Customer Expectations Grow", "Customers expect automatic confirmation emails, booking status visibility, and booking reference numbers."],
        ["Revenue Justifies Investment", "By Phase 2, booking revenue covers backend costs. Going from $0 to $15\u201330/month is negligible with positive ROI on automation."]
      ], null, 2600, 6760),
      spacer(2),
      pageBreak(),

      // ─── DATABASE COMPARISON ──────────────────────
      sectionHeader("5. DATABASE SERVICES COMPARISON"),
      spacer(),
      heading2("Free Tier Options (Starting at $0/month)"),
      spacer(),

      // Firebase
      heading3("1. Firebase (Google Cloud) \u2014 Best for Startups"),
      twoColTable([
        ["Storage", "1 GB"],
        ["Downloads", "10 GB/month"],
        ["Write Operations", "100K writes/day"],
        ["Reads", "Unlimited"],
        ["Authentication", "Included"],
        ["Phase 1 Cost (0\u201350 bookings/day)", "$0/month"],
        ["Phase 2 Cost (50\u2013200 bookings/day)", "$5\u201310/month"],
        ["Phase 3 Cost (200+ bookings/day)", "$20\u201350/month"],
        ["Year 1 Total", "~$100\u2013200"]
      ], ["Detail", "Value"], 2800, 6560),
      spacer(),
      para("Key features: Real-time NoSQL database, built-in user authentication, cloud functions for automations, hosting included, mobile app SDK support."),
      twoColTable([
        ["Fastest setup", "Running in as little as 1 hour"],
        ["No backend server needed", "React connects directly to Firebase"],
        ["Real-time updates", "Bookings appear instantly in admin dashboard"],
        ["Vendor lock-in risk", "Moving data away from Firebase is complex later"],
        ["Not SQL-based", "Less flexible for complex queries"]
      ], ["Pros / Cons", "Detail"], 2800, 6560),
      spacer(),

      // Supabase
      heading3("2. Supabase (Open-Source Postgres) \u2014 Most Flexible"),
      twoColTable([
        ["Database", "PostgreSQL (open source)"],
        ["Storage", "500 MB"],
        ["Bandwidth", "5 GB/month"],
        ["Real-time Subscriptions", "Included"],
        ["Authentication", "Included"],
        ["Phase 1 Cost (up to 50K reads/month)", "$0/month"],
        ["Phase 2 Cost (100K+ reads/month)", "$25/month"],
        ["Phase 3 Cost (massive scale)", "$50+/month"],
        ["Year 1 Total", "~$0\u201350"]
      ], ["Detail", "Value"], 2800, 6560),
      spacer(),
      para("Key features: Real PostgreSQL database, auto-generated REST API, GraphQL API optional, file storage, real-time listeners."),
      twoColTable([
        ["Open-source (no vendor lock-in)", "Can self-host if needed later"],
        ["Full PostgreSQL power", "Complex SQL queries supported"],
        ["Extremely affordable scaling", "Free tier is genuinely sufficient for startups"],
        ["Requires backend code", "Node.js server needed to connect frontend to DB"],
        ["Slightly more complex setup", "Compared to Firebase"]
      ], ["Pros / Cons", "Detail"], 2800, 6560),
      spacer(),

      // MongoDB
      heading3("3. MongoDB Atlas (NoSQL \u2014 JSON-like)"),
      twoColTable([
        ["Storage", "512 MB"],
        ["Replicas", "3 nodes (built-in backup)"],
        ["Documents", "Unlimited number"],
        ["Connections", "Limited to 500/month initially"],
        ["Phase 1 Cost", "$0/month"],
        ["Phase 2 Cost (1\u201310 GB)", "$3\u201330/month"],
        ["Year 1 Total", "~$0\u201350"]
      ], ["Detail", "Value"], 2800, 6560),
      spacer(),
      para("Best for JavaScript/Node.js teams who want a flexible schema (add fields anytime). Familiar JSON-like document format."),
      spacer(),

      // Neon
      heading3("4. Neon (Serverless Postgres) \u2014 Emerging Favorite"),
      twoColTable([
        ["Database", "PostgreSQL (serverless)"],
        ["Storage", "0.5 GB"],
        ["Projects", "3 independent projects"],
        ["Auto-scaling", "Included"],
        ["Schema Branching", "Git-like version control for schemas"],
        ["Phase 1 Cost", "$0/month"],
        ["Phase 2 Cost", "$15/month"],
        ["Year 1 Total", "~$0\u201350"]
      ], ["Detail", "Value"], 2800, 6560),
      spacer(),

      // PlanetScale
      heading3("5. PlanetScale (MySQL)"),
      twoColTable([
        ["Database", "MySQL 8.0"],
        ["Storage", "5 GB"],
        ["Queries", "Unlimited"],
        ["Branch Deployments", "Included (test schema changes safely)"],
        ["GitHub Integration", "Deploy schema via pull requests"],
        ["Phase 1 Cost", "$0/month"],
        ["Phase 2 Cost", "$29/month"],
        ["Year 1 Total", "~$0\u201350"]
      ], ["Detail", "Value"], 2800, 6560),
      spacer(),

      // DynamoDB
      heading3("6. AWS DynamoDB (NoSQL \u2014 for AWS users)"),
      twoColTable([
        ["Write Capacity (Free Tier)", "25 write units/month"],
        ["Read Capacity (Free Tier)", "25 read units/month"],
        ["Storage (Free Tier)", "25 GB"],
        ["Free Tier Duration", "12 months"],
        ["Phase 1 Cost", "$0/month (first year)"],
        ["Phase 2+ Cost", "$10\u2013100+/month depending on scale"],
        ["Year 1 Total", "~$0"]
      ], ["Detail", "Value"], 2800, 6560),
      spacer(),
      para("Infinitely scalable and built by Amazon. Best for startups confident they will scale massively. AWS learning curve applies."),
      spacer(),

      // Cosmos DB
      heading3("7. Azure Cosmos DB (Multi-model \u2014 for Azure users)"),
      twoColTable([
        ["Request Units (Free Tier)", "1,000 RU/month (~5\u201310 bookings/hour)"],
        ["Storage (Free Tier)", "25 GB"],
        ["Free Tier Duration", "12 months"],
        ["Phase 2 Cost", "$15\u201350/month"],
        ["Phase 3 Cost", "$50+/month"],
        ["Year 1 Total", "~$0"]
      ], ["Detail", "Value"], 2800, 6560),
      spacer(),
      para("Enterprise-grade reliability from Microsoft. Overkill for Phase 1. Best for enterprise teams already on the Azure ecosystem."),
      spacer(),

      // Paid tier
      heading2("Low-Cost Paid Options (When Scaling Beyond Free Tier)"),
      multiColTable(
        ["Service", "Starting Price", "Why Choose", "Best For"],
        [
          ["AWS RDS (PostgreSQL/MySQL)", "$15\u201330/mo", "Managed DB, auto-backups, reliable", "Enterprise scaling"],
          ["DigitalOcean App Platform", "$5\u201360/mo", "Simple pricing, great docs", "Developers who like simplicity"],
          ["Railway.app", "$5\u201320/mo", "Pay-as-you-go, Node.js friendly", "Quick-deploy startups"],
          ["Render.com", "$7\u201350/mo", "All-in-one (DB + backend hosting)", "Full-stack projects"],
          ["Vercel Postgres (Neon)", "$10\u201320/mo", "Built for Next.js, serverless", "Frontend-heavy projects"],
          ["AWS Lambda + RDS", "$10\u201350+/mo", "Serverless backend, managed DB", "Cost-effective at scale"],
          ["Heroku", "$25+/mo", "Easy deployment, great for beginners", "Teams valuing simplicity"]
        ],
        [2200, 1600, 3100, 2460]
      ),
      spacer(),

      // Decision matrix
      heading2("Decision Matrix \u2014 Which Database is Right?"),
      multiColTable(
        ["Criteria", "Firebase", "Supabase", "MongoDB", "Neon", "DynamoDB"],
        [
          ["Setup Speed", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605", "\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605", "\u2605\u2605"],
          ["Cost (Phase 1)", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605"],
          ["Scalability", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605"],
          ["Learning Curve", "\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605", "\u2605\u2605\u2605", "\u2605\u2605\u2605", "\u2605"],
          ["SQL Support", "\u2716", "\u2605\u2605\u2605\u2605\u2605", "\u2716", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605"],
          ["No Backend Needed", "YES \u2714", "No", "No", "No", "No"],
          ["Phase 1 Best Fit", "\ud83c\udfc6 Winner", "Runner-up", "\u2605\u2605\u2605", "\u2605\u2605\u2605", "\u2605\u2605"],
          ["Phase 2+ Best Fit", "\u2605\u2605\u2605\u2605\u2605", "\ud83c\udfc6 Best", "\u2605\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605"]
        ],
        [2100, 1452, 1452, 1452, 1452, 1452]
      ),
      spacer(2),
      pageBreak(),

      // ─── TOP 3 RECOMMENDATIONS ────────────────────
      sectionHeader("6. TOP 3 RECOMMENDATIONS"),
      spacer(),

      heading2("Recommendation Set A: Best Path Forward (Recommended)"),
      heading3("Phase 1 (Right Now \u2014 This Month): Email-Based Forms + Zapier/Sheets"),
      twoColTable([
        ["Email Service", "Formspree or EmailJS"],
        ["Destination Emails", "admin@eldocare.com + booking@eldocare.com"],
        ["Auto-reply", "\"Your booking is received. We\u2019ll call you soon.\""],
        ["Optional Add-on", "Zapier to auto-save emails to Google Sheets"],
        ["Setup Time", "3\u20134 hours"],
        ["Monthly Cost", "$0\u201325/month (Zapier optional)"],
        ["Team Requirements", "Frontend developer only \u2014 no backend needed"],
        ["Capacity", "0\u2013100 bookings/day without issues"]
      ], ["Detail", "Value"], 2400, 6960),
      spacer(),
      heading3("Phase 2 (3\u20136 Months Later): Node.js Backend + Supabase"),
      twoColTable([
        ["Backend", "Node.js Express server with simple REST API"],
        ["Database", "Supabase (PostgreSQL)"],
        ["Admin Dashboard", "React-based booking management system"],
        ["Automations", "Confirmations, reminders, weekly reports"],
        ["Setup Time", "1\u20132 weeks"],
        ["Monthly Cost", "$0\u201325/month (free tier stays valid longer)"],
        ["Team Requirements", "1 backend developer"],
        ["Capacity", "0\u20131,000+ bookings/day"],
        ["Data Migration", "Can import email CSV to database"]
      ], ["Detail", "Value"], 2400, 6960),
      spacer(),
      divider(),

      heading2("Recommendation Set B: Fast Track (Backend Immediately)"),
      para("If the team wants to skip the email phase and go straight to backend, choose between Firebase and Supabase:"),
      spacer(),
      multiColTable(
        ["Aspect", "Firebase", "Supabase"],
        [
          ["Setup Time", "1\u20132 hours", "2\u20133 hours"],
          ["Backend Needed", "No (direct connection)", "Yes (Node.js API)"],
          ["Developer Skill Required", "React developer sufficient", "Backend developer needed"],
          ["Complexity", "Very simple", "Moderate"],
          ["Monthly Cost", "$0\u201315/month", "$0\u201325/month"],
          ["SQL Support", "Limited (NoSQL)", "Full PostgreSQL"],
          ["Best For", "Teams without a backend dev", "Teams with a backend dev"]
        ],
        [2300, 3530, 3530]
      ),
      spacer(),
      divider(),

      heading2("Recommendation Set C: Maximum Scalability (Confident Growth)"),
      para("For teams planning to handle 10,000+ bookings/day from the outset, an AWS-based architecture is the most powerful option:"),
      spacer(),
      twoColTable([
        ["Backend", "Node.js on AWS Lambda (serverless)"],
        ["Database", "RDS PostgreSQL or DynamoDB"],
        ["Admin Dashboard", "React on CloudFront"],
        ["Monthly Cost", "$0\u201315/month (first year on AWS free tier)"],
        ["Pros", "Infinite scale, AWS reliability, enterprise-grade setup"],
        ["Cons", "Complex setup, steep learning curve, overkill for Phase 1"]
      ], ["Component", "Detail"], 2000, 7360),
      spacer(2),
      pageBreak(),

      // ─── ACTION ITEMS ────────────────────────────
      sectionHeader("7. ACTION ITEMS"),
      spacer(),

      heading2("Short Term \u2014 Decide This Week"),
      bullet("Team Discussion: Read this document and discuss as a team"),
      bullet("Vote: Option 1 (Email) OR Option 2 (Backend Now)?"),
      bullet("If choosing Email: Choose Formspree or EmailJS, set up a company email for bookings, test delivery, implement on BookNowPage"),
      bullet("If choosing Backend immediately: Choose Firebase or Supabase, decide on backend developer (hire or assign), create project plan, set timeline"),
      spacer(),

      heading2("If Implementing Backend Now"),
      numbered("Hire or assign a backend developer with Node.js experience"),
      numbered("Choose your database: Firebase (if no backend dev available) or Supabase (if backend dev available)"),
      numbered("Build the following API endpoints:"),
      bullet("POST /bookings \u2014 receive booking data", 1),
      bullet("GET /bookings \u2014 retrieve all bookings", 1),
      bullet("PUT /bookings/:id \u2014 update booking status", 1),
      numbered("Create the admin dashboard:"),
      bullet("Login screen", 1),
      bullet("Booking list with filters (date, status, service, city)", 1),
      bullet("Booking detail view", 1),
      numbered("Integrate with frontend (BookNowPage form \u2192 Backend API, send confirmations via email)"),
      spacer(),

      heading2("If Implementing Email for Now (Recommended Path)"),
      numbered("Choose email service: Formspree Pro ($25/mo, recommended) or EmailJS (free tier)"),
      numbered("Obtain API key from chosen service"),
      numbered("Update BookNowPage.tsx: import email service library, add email sending on form submit, show success message to user"),
      numbered("Set email address: decide which inbox receives bookings, consider creating a shared Gmail for the team"),
      numbered("Test thoroughly: submit test booking, confirm email received, verify all data is present"),
      numbered("Deploy to production"),
      numbered("Monitor: track bookings/week \u2014 when volume hits 50/week, evaluate Phase 2"),
      spacer(2),
      pageBreak(),

      // ─── TEAM DISCUSSION ──────────────────────────
      sectionHeader("8. QUESTIONS FOR TEAM DISCUSSION"),
      spacer(),
      multiColTable(
        ["Question", "Under 50", "50\u2013200", "Over 200"],
        [
          ["Expected bookings in the first month?", "Email is perfect", "Email with Zapier", "Consider backend now"]
        ],
        [3100, 2086, 2086, 2088]
      ),
      spacer(),
      twoColTable([
        ["Do you have a backend developer on the team?", "No \u2192 Use email for Phase 1, hire dev before Phase 2\nYes \u2192 Can do backend now if wanted"],
        ["What is your budget for the next 6 months?", "Under \u20b95,000 \u2192 Email is the only option\n\u20b95,000\u201320,000 \u2192 Email now, backend in Phase 2\n\u20b920,000+ \u2192 Can do backend now"],
        ["Do you need real-time admin notifications?", "Yes \u2192 Need backend for instant dashboard alerts\nNo \u2192 Email notifications are fine"],
        ["Will you need customer SMS confirmations?", "Email auto-reply is included in both options\nSMS requires a backend system"],
        ["Do you need booking analytics/reports?", "Yes \u2192 Need a backend dashboard\nNo \u2192 Excel/Sheets is sufficient"],
        ["Will you build a mobile app later?", "Yes \u2192 Backend API will be needed for mobile\nNo \u2192 Email/web is sufficient\nMaybe \u2192 Start with backend now to prepare"],
        ["What is your expected growth timeline?", "10x growth expected \u2192 Plan for backend now\nGradual growth \u2192 Email first, scale in Phase 2\nUncertain \u2192 Email for Phase 1, stay flexible"]
      ], ["Question", "Guidance"], 3200, 6160),
      spacer(2),
      pageBreak(),

      // ─── COST COMPARISON ─────────────────────────
      sectionHeader("9. COST COMPARISON OVER TIME"),
      spacer(),
      para("Scenario: Starting now through Year 2"),
      spacer(),
      heading2("Path 1: Email \u2192 Backend (Recommended)"),
      multiColTable(
        ["Phase", "Duration", "Solution", "Monthly Cost", "Total"],
        [
          ["Phase 1", "0\u20133 months", "Formspree + Zapier", "$35", "$105"],
          ["Phase 2", "3\u20136 months", "Supabase + Node.js", "$25", "$75"],
          ["Phase 3", "6\u201312 months", "Supabase scaled", "$50", "$600"],
          ["Year 2", "12\u201324 months", "RDS PostgreSQL", "$100", "$1,200"],
          ["TOTAL 2-YEAR COST", "", "", "", "\u20b919,500"]
        ],
        [1600, 1800, 2800, 1800, 1360]
      ),
      spacer(),
      heading2("Path 2: Backend Now (Firebase)"),
      multiColTable(
        ["Phase", "Duration", "Solution", "Monthly Cost", "Total"],
        [
          ["Phase 1", "0\u20133 months", "Firebase", "$10", "$30"],
          ["Phase 2", "3\u20136 months", "Firebase scaled", "$25", "$75"],
          ["Phase 3", "6\u201312 months", "Firebase massive", "$50", "$600"],
          ["Year 2", "12\u201324 months", "Firebase enterprise", "$150", "$1,800"],
          ["TOTAL 2-YEAR COST", "", "", "", "\u20b921,000"]
        ],
        [1600, 1800, 2800, 1800, 1360]
      ),
      spacer(),
      heading2("Path 3: Backend Now (Supabase)"),
      multiColTable(
        ["Phase", "Duration", "Solution", "Monthly Cost", "Total"],
        [
          ["Phase 1", "0\u20133 months", "Supabase", "$0", "$0"],
          ["Phase 2", "3\u20136 months", "Supabase", "$0", "$0"],
          ["Phase 3", "6\u201312 months", "Supabase scaled", "$25", "$300"],
          ["Year 2", "12\u201324 months", "Supabase enterprise", "$75", "$900"],
          ["TOTAL 2-YEAR COST", "", "", "", "\u20b911,700"]
        ],
        [1600, 1800, 2800, 1800, 1360]
      ),
      spacer(),
      infoBox("Note: Supabase backend now is the cheapest option overall, but requires a backend developer to implement.", ACCENT_YELLOW),
      spacer(2),
      pageBreak(),

      // ─── FINAL CONCLUSION ────────────────────────
      sectionHeader("10. FINAL CONCLUSION"),
      spacer(),
      heading2("The Best Approach for Eldoo Care"),
      multiColTable(
        ["Criteria", "Phase 1", "Phase 2+"],
        [
          ["Booking Capture", "Email Forms (Formspree)", "Backend API (Node.js)"],
          ["Data Storage", "Email inbox + Google Sheets", "PostgreSQL (Supabase)"],
          ["Admin Dashboard", "Sheets / Airtable", "React-based custom dashboard"],
          ["Customer Notifications", "Auto-reply email", "Auto confirmation + SMS"],
          ["Monthly Cost", "$25\u201335/month", "$25\u201350/month"],
          ["Setup Timeline", "3\u20134 hours", "1\u20132 weeks"],
          ["Team Requirements", "Frontend developer only", "1 backend developer"],
          ["Scalability", "Up to 100 bookings/day", "1,000+ bookings/day"],
          ["User Acquisition Focus", "YES \u2014 maximum focus", "YES \u2014 plus operational focus"],
          ["Ready for Mobile App", "No", "Yes"]
        ],
        [2600, 3380, 3380]
      ),
      spacer(),
      heading2("Phased Execution Plan"),
      multiColTable(
        ["Timeframe", "Phase", "Key Actions"],
        [
          ["Week 1\u20132", "Phase 1 Implementation", "Implement Formspree/EmailJS, set up emails to company inbox, configure auto-reply to customers, test thoroughly"],
          ["Month 2\u20133", "Growth & Monitoring", "Measure bookings/week, gather admin feedback, monitor email volume, plan Phase 2 if needed"],
          ["Month 3\u20134", "Phase 2 Decision", "If bookings < 20/week: stay on email. If bookings > 50/week: start backend development. Hire backend developer if not available."],
          ["Month 4\u20136", "Phase 2 Execution", "Build Node.js API, set up Supabase database, create admin dashboard, migrate email data to database, launch new system"]
        ],
        [1800, 2400, 5160]
      ),
      spacer(2),

      // ─── RECOMMENDED NEXT STEPS ──────────────────
      sectionHeader("11. RECOMMENDED NEXT STEPS"),
      spacer(),
      heading3("Team Action Plan"),
      numbered("Print this document and share with the entire team"),
      numbered("Hold a team meeting to discuss all options (allow 1\u20132 hours)"),
      numbered("Vote: which approach? Email for Phase 1 or Backend now?"),
      numbered("Commit to the chosen path"),
      numbered("Assign ownership of implementation"),
      numbered("Set a completion timeline"),
      spacer(),
      heading3("Decision Tree"),
      infoBox(
        "IF VOTING EMAIL (Recommended):\n" +
        "  \u2192 Choose service: Formspree or EmailJS\n" +
        "  \u2192 Assign a frontend developer\n" +
        "  \u2192 Target: Complete by end of this week\n\n" +
        "IF VOTING BACKEND NOW:\n" +
        "  \u2192 Choose database: Firebase or Supabase\n" +
        "  \u2192 Hire or assign a backend developer\n" +
        "  \u2192 Target: Start next week, complete in 2\u20133 weeks",
        LIGHT_GRAY
      ),
      spacer(2),
      pageBreak(),

      // ─── APPENDIX ────────────────────────────────
      sectionHeader("APPENDIX: HELPFUL LINKS & RESOURCES"),
      spacer(),
      heading2("Email Services"),
      twoColTable([
        ["Formspree (Pro: $25/month)", "https://formspree.io"],
        ["EmailJS (Free tier available)", "https://www.emailjs.com"]
      ], ["Service", "URL"], 3600, 5760),
      spacer(),
      heading2("Databases \u2014 Free Tier"),
      twoColTable([
        ["Firebase (Google)", "https://firebase.google.com"],
        ["Supabase", "https://supabase.com"],
        ["MongoDB Atlas", "https://www.mongodb.com/cloud/atlas"],
        ["Neon", "https://neon.tech"],
        ["PlanetScale", "https://planetscale.com"]
      ], ["Service", "URL"], 3600, 5760),
      spacer(),
      heading2("Automation & Admin Tools"),
      twoColTable([
        ["Zapier (connects services)", "https://zapier.com"],
        ["Airtable (spreadsheet-like booking management)", "https://airtable.com"],
        ["Notion (team workspace)", "https://notion.so"],
        ["Google Sheets (free)", "https://sheets.google.com"]
      ], ["Service", "URL"], 3600, 5760),
      spacer(2),
      divider(),
      new Paragraph({
        children: [
          new TextRun({ text: "Created: May 12, 2026  \u2022  For: Eldoo Care Team  \u2022  Confidence Level: Based on industry best practices for healthcare startups", font: "Arial", size: 18, color: DARK_GRAY, italics: true })
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 200, after: 200 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "Questions or clarifications before implementing? Bring them to the team discussion.", font: "Arial", size: 18, color: DARK_GRAY, italics: true })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 0 }
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("ELDOO_CARE_Booking_System_Strategy.docx", buffer);
  console.log("Done! Document created: ELDOO_CARE_Booking_System_Strategy.docx");
}).catch(err => {
  console.error("Error generating document:", err);
});