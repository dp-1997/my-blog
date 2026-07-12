/**
 * CV data — the single source of truth for /cv.
 * Edit this file to update the CV; the page renders from it.
 * Keep bullets to outcomes and decisions, not duties.
 */

export const cv = {
  name: 'Damian Pickett',
  role: 'Senior Product Marketer',
  location: 'Manchester, UK',
  email: 'damianpickett1997@gmail.com',
  linkedin: 'https://www.linkedin.com/in/damianpickett97',
  website: 'https://anyone-can-cook.com',

  summary: [
    'Product marketer with a journalist’s training and a maker’s habits. I find the important idea inside complex products, turn it into positioning and messaging that hold up in the market, and build the launches, demos, and stories that carry it.',
  ],

  experience: [
    {
      when: '2024–Present',
      title: 'Senior Product Marketer',
      org: 'SmartSurvey · B2B SaaS, experience management',
      bullets: [
        'Own positioning, messaging, and go-to-market for product launches, including SmartCE — the company’s entry into the citizen-engagement category, launched to UK local government in early 2026.',
        'Led the launch from research to public campaign: segmentation, pricing input, sales enablement, and the announcement that took SmartSurvey into a new market.',
        'Built the product-marketing foundations: persona research, competitive battlecards, launch playbooks, and a recurring product keynote webinar.',
        'Promoted within the first year.',
      ],
    },
    {
      when: '2022–2024',
      title: 'First marketing hire',
      org: 'Invevo · B2B fintech SaaS',
      bullets: [
        'Joined as the first marketer; built the function from zero — brand, website, content, demand, and events — then hired its second member.',
        'Discovered product marketing here: the work that mattered most was translating a technical credit-management platform into stories finance teams acted on.',
      ],
    },
    {
      when: '2020–2022',
      title: 'Marketing Assistant',
      org: 'KL Taylor Marketing · remote',
      bullets: [
        'First marketing role, taken while living in the US — client campaigns, copy, and social. Where marketing stopped being a subject and became the career.',
      ],
    },
    {
      when: '2019–2020',
      title: 'Broadcast journalism placements',
      org: 'BBC Sport · Manchester United · Salford FC',
      bullets: [
        'Newsroom and matchday media experience during my degree — live output, tight deadlines, and the discipline of the cut.',
      ],
    },
  ],

  capabilities: [
    'Positioning & messaging',
    'Product launches & GTM strategy',
    'Customer & competitive research',
    'Product storytelling & demos',
    'Sales enablement',
    'Editorial writing',
    'AI-assisted building & prototyping',
    'Webinars & presenting',
  ],

  education: [
    {
      when: '2017–2020',
      title: 'BA (Hons) Broadcast Journalism',
      org: 'University of Salford',
    },
    {
      when: '2016–2017',
      title: 'Access to Higher Education',
      org: 'The Manchester College',
    },
  ],

  selected: [
    { label: 'SmartCE — launching a consultation platform for the public sector', href: '/work/consultation-platform-launch/' },
    { label: 'Anyone Can Cook — the essay behind this site', href: '/essays/anyone-can-cook/' },
    { label: 'This website — designed, written, and shipped solo', href: '/work/this-website/' },
  ],
};
