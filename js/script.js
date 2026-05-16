AOS.init({
  duration: 600,
  easing: "ease-out-quad",
  once: false,
  mirror: true,
  offset: 60,
});

const progressBars = document.querySelectorAll(".progress-bar[data-width]");
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetWidth = entry.target.getAttribute("data-width");
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.width = targetWidth + "%";
        }, 200);
      } else {
        entry.target.style.width = "0%";
      }
    });
  },
  { threshold: 0.3 },
);
progressBars.forEach((bar) => progressObserver.observe(bar));

const themeBtn = document.querySelector(".theme-btn");

function applyTheme(dark) {
  document.body.classList.toggle("dark-mode", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

themeBtn.addEventListener("click", () => {
  applyTheme(!document.body.classList.contains("dark-mode"));
});

const saved = localStorage.getItem("theme");
if (
  saved === "dark" ||
  (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  applyTheme(true);
}

const translations = {
  pageTitle: {
    pt: "Paulo Henrique Moreira Araujo: Mapa de Carreira",
    en: "Paulo Henrique Moreira Araujo: Career Map",
  },

  jobTitle: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },

  sectionAbout: { pt: "Prazer em Conhecer", en: "Nice to Meet You" },
  aboutText: {
    pt: "Tenho formação técnica em Informática para Internet e experiência em aplicações web e mobile, trabalhando com front-end, back-end e banco de dados. Atualmente, participo do programa PROPROFISSÃO (desenvolvimento web com Python) do Instituto PROA, e estou me especializando em Inteligência Artificial pelo SENAC Lapa Tito (conclusão prevista em ago/2027). Nos meus projetos, priorizo interfaces intuitivas, código bem estruturado e soluções com foco na experiência do usuário. Sou proativo, aprendo rápido e estou constantemente evoluindo minhas habilidades para acompanhar as demandas do mercado.",
    en: "I have a technical degree in Internet Computing and experience building web and mobile applications, working across front-end, back-end, and databases. I currently participate in the PROPROFISSÃO program (web development with Python) at Instituto PROA, and I am specializing in Artificial Intelligence at SENAC Lapa Tito (expected completion Aug/2027). In my projects, I prioritize intuitive interfaces, well-structured code, and user-focused solutions. I am proactive, a fast learner, and constantly evolving my skills to keep up with market demands.",
  },
  btnCV: { pt: "Baixar o meu CV", en: "Download my CV" },

  sectionCareer: { pt: "Mapa de Carreira", en: "Career Map" },

  titleIntern: { pt: "Estagiário", en: "Intern" },
  titleJunior: { pt: "Desenvolvedor Júnior", en: "Junior Developer" },
  titlePleno: { pt: "Desenvolvedor Pleno", en: "Mid-level Developer" },
  titleSenior: { pt: "Desenvolvedor Sênior", en: "Senior Developer" },
  titleTechLead: { pt: "Líder Técnico", en: "Tech Lead" },
  titleArqManager: {
    pt: "Arquiteto de Software / Gerente de Engenharia",
    en: "Software Architect / Engineering Manager",
  },
  titleHead: { pt: "Chefe de Engenharia", en: "Head of Engineering" },
  titleCTO: {
    pt: "Diretor de Tecnologia (CTO)",
    en: "Chief Technology Officer (CTO)",
  },

  headingSoft: { pt: "Soft Skills exigidas:", en: "Required Soft Skills:" },
  headingRoadmap: { pt: "Roadmap de Aprendizado:", en: "Learning Roadmap:" },

  descIntern: {
    pt: "Como estagiário, meu objetivo é desenvolver experiência prática no desenvolvimento de software, aplicando os conhecimentos adquiridos nos estudos em projetos reais. Busco aprender com profissionais mais experientes, evoluir minhas habilidades técnicas e compreender boas práticas de desenvolvimento, colaboração em equipe e construção de aplicações modernas.",
    en: "As an intern, my goal is to gain practical experience in software development by applying the knowledge acquired through my studies to real projects. I aim to learn from experienced professionals, improve my technical skills, and understand best practices in development, teamwork, and modern application building.",
  },
  descJunior: {
    pt: "Nesta fase, meu foco é consolidar minha base como desenvolvedor full stack, dominando fundamentos de front-end e back-end, além de boas práticas de código. Busco evoluir na criação de aplicações, com foco em usabilidade, organização, performance e acessibilidade, participando de projetos reais e aprendendo com profissionais mais experientes.",
    en: "At this stage, my focus is to build a solid foundation as a full stack developer, mastering front-end and back-end fundamentals and coding best practices. I aim to grow by building real applications with a focus on usability, organization, performance, and accessibility, learning alongside experienced professionals.",
  },
  descPleno: {
    pt: "Como desenvolvedor pleno, meu objetivo é atuar com mais autonomia na construção de sistemas, tomando decisões técnicas e contribuindo diretamente na arquitetura das aplicações. Busco aprimorar performance, segurança e escalabilidade, além de colaborar ativamente com o time no desenvolvimento de soluções eficientes.",
    en: "As a mid-level developer, my goal is to work with greater autonomy on system development, making technical decisions and contributing directly to application architecture. I aim to improve performance, security, and scalability while actively collaborating with the team on efficient solutions.",
  },
  descSenior: {
    pt: "Como desenvolvedor sênior, meu foco é liderar tecnicamente projetos, definindo arquiteturas escaláveis e garantindo qualidade de código. Atuando na tomada de decisões estratégicas, otimização de sistemas e implementação de boas práticas, além de orientar outros desenvolvedores e garantir a evolução contínua do time.",
    en: "As a senior developer, my focus is on providing technical leadership, defining scalable architectures, and ensuring code quality. I act on strategic decisions, system optimization, and best practices implementation, while mentoring other developers and driving continuous team growth.",
  },
  descTechLead: {
    pt: "Como Líder Técnico, meu objetivo é liderar times de desenvolvimento, garantindo a entrega de projetos de alta qualidade. Atuo na definição de padrões, arquitetura e decisões estratégicas, além de alinhar o time com os objetivos do negócio, promovendo crescimento técnico e colaboração.",
    en: "As a Tech Lead, my goal is to lead development teams, ensuring high-quality project delivery. I work on defining standards, architecture, and strategic decisions, while aligning the team with business objectives and promoting technical growth and collaboration.",
  },
  descArqManager: {
    pt: "Nesta etapa, o caminho se bifurca, o Arquiteto de Software aprofunda-se em design de sistemas complexos, definindo padrões técnicos e garantindo a consistência da plataforma; o Gerente de Engenharia foca na evolução das pessoas, processos e na entrega sustentável do time. Ambos exigem visão sistêmica e capacidade de impactar além do código.",
    en: "At this stage the path forks, the Software Architect dives deep into complex system design, defining technical standards and ensuring platform consistency; the Engineering Manager focuses on people development, processes, and sustainable team delivery. Both require systemic thinking and the ability to create impact beyond code.",
  },
  descHead: {
    pt: "Como Chefe de Engenharia, o foco é na direção estratégica da engenharia como um todo. Responsável por múltiplos times, pela evolução da cultura técnica e pelo alinhamento com produto e negócio. Atua como ponte entre a liderança executiva e os times de desenvolvimento, garantindo entrega de valor com eficiência e qualidade.",
    en: "As Head of Engineering, the focus is on the strategic direction of engineering as a whole. Responsible for multiple teams, evolving the technical culture, and aligning with product and business. Acts as a bridge between executive leadership and development teams, ensuring value delivery with efficiency and quality.",
  },
  descCTO: {
    pt: "O Diretor de Tecnologia é o maior responsável pelas decisões tecnológicas da empresa. Define a visão de longo prazo da tecnologia, lidera a transformação digital, representa a engenharia no board executivo e garante que a tecnologia seja um diferencial competitivo sustentável. Exige combinação rara de profundidade técnica, visão de negócio e liderança humana.",
    en: "The CTO is the top authority on the company's technology decisions. They define the long-term technology vision, lead digital transformation, represent engineering at the executive board, and ensure technology is a sustainable competitive advantage. It requires a rare combination of technical depth, business vision, and human leadership.",
  },

  softIntern: {
    pt: [
      "Vontade de aprender e evoluir constantemente",
      "Boa comunicação e colaboração em equipe",
      "Organização e responsabilidade com tarefas",
      "Proatividade para buscar conhecimento e solucionar problemas",
    ],
    en: [
      "Willingness to learn and continuously improve",
      "Good communication and teamwork",
      "Organization and responsibility with tasks",
      "Proactivity in seeking knowledge and solving problems",
    ],
  },
  softJunior: {
    pt: [
      "Boa comunicação para trabalhar em equipe e entender demandas",
      "Proatividade para buscar soluções e aprender constantemente",
      "Organização e responsabilidade com prazos",
      "Capacidade de receber feedback e evoluir rapidamente",
    ],
    en: [
      "Good communication to work in teams and understand requirements",
      "Proactivity to seek solutions and keep learning",
      "Organization and accountability with deadlines",
      "Ability to receive feedback and grow quickly",
    ],
  },
  softPleno: {
    pt: [
      "Autonomia na resolução de problemas",
      "Boa comunicação técnica com o time",
      "Pensamento crítico e tomada de decisão",
      "Colaboração e mentoria de desenvolvedores juniores",
    ],
    en: [
      "Autonomy in problem-solving",
      "Strong technical communication with the team",
      "Critical thinking and decision-making",
      "Collaboration and mentoring of junior developers",
    ],
  },
  softSenior: {
    pt: [
      "Liderança técnica e tomada de decisão",
      "Capacidade de mentoria e desenvolvimento de equipe",
      "Visão estratégica de produto e tecnologia",
      "Comunicação clara com áreas técnicas e não técnicas",
    ],
    en: [
      "Technical leadership and decision-making",
      "Ability to mentor and develop the team",
      "Strategic vision of product and technology",
      "Clear communication with both technical and non-technical areas",
    ],
  },
  softTechLead: {
    pt: [
      "Liderança e gestão de equipe",
      "Comunicação estratégica com stakeholders",
      "Gestão de conflitos e tomada de decisão",
      "Visão de negócio alinhada à tecnologia",
    ],
    en: [
      "Leadership and team management",
      "Strategic communication with stakeholders",
      "Conflict management and decision-making",
      "Business vision aligned with technology",
    ],
  },
  softArqManager: {
    pt: [
      "Pensamento sistêmico e visão de longo prazo",
      "Influência sem autoridade direta",
      "Gestão de pessoas e desenvolvimento de carreira",
      "Comunicação executiva e apresentação de soluções",
    ],
    en: [
      "Systemic thinking and long-term vision",
      "Influence without direct authority",
      "People management and career development",
      "Executive communication and solution presentation",
    ],
  },
  softHead: {
    pt: [
      "Liderança de líderes e gestão de múltiplos times",
      "Visão estratégica de produto, tecnologia e negócio",
      "Capacidade de recrutamento e formação de cultura",
      "Gestão de orçamento e recursos de engenharia",
    ],
    en: [
      "Leading leaders and managing multiple teams",
      "Strategic vision of product, technology, and business",
      "Recruitment capability and culture building",
      "Engineering budget and resource management",
    ],
  },
  softCTO: {
    pt: [
      "Visão de futuro e pensamento estratégico de longo prazo",
      "Liderança inspiracional e construção de cultura",
      "Comunicação com investidores, board e stakeholders",
      "Tomada de decisão sob incerteza e alto impacto",
    ],
    en: [
      "Future vision and long-term strategic thinking",
      "Inspirational leadership and culture building",
      "Communication with investors, board, and stakeholders",
      "Decision-making under uncertainty and high impact",
    ],
  },

  sectionSkills: { pt: "Soft e Hard Skills", en: "Soft & Hard Skills" },
  skillsSubtitle: {
    pt: "Afinidade com as seguintes tecnologias e técnicas:",
    en: "Proficiency with the following technologies and techniques:",
  },
  catFrontend: { pt: "Frontend", en: "Frontend" },
  catBackend: { pt: "Backend", en: "Backend" },
  catDB: { pt: "Banco de Dados", en: "Databases" },
  catOther: { pt: "Outras", en: "Other" },
  sectionLang: { pt: "Idiomas", en: "Languages" },
  langPT: { pt: "Português", en: "Portuguese" },
  langEN: { pt: "Inglês", en: "English" },
  langES: { pt: "Espanhol", en: "Spanish" },
  levelNative: { pt: "(Nativo)", en: "(Native)" },
  levelInter: { pt: "(Intermediário)", en: "(Intermediate)" },
  levelBasic: { pt: "(Básico)", en: "(Basic)" },
};

const textMap = [
  { sel: ".title", key: "jobTitle" },
  { sel: ".summary-section .resume-section-title", key: "sectionAbout" },
  { sel: ".summary-section .resume-section-content p", key: "aboutText" },
  { sel: ".btn", key: "btnCV" },
  { sel: ".experience-section .resume-section-title", key: "sectionCareer" },
  { sel: ".skills-section .resume-section-title", key: "sectionSkills" },
  { sel: ".skills-section > p", key: "skillsSubtitle" },
  { sel: ".language-section .resume-section-title", key: "sectionLang" },
];

const badgeKeys = [
  {
    en: [
      "Programming Logic",
      "HTML5/CSS3",
      "JavaScript",
      "Git/GitHub",
      "Responsive Design",
      "REST API Fundamentals",
    ],
  },
  {
    en: [
      "HTML5/CSS3",
      "JavaScript (ES6+)",
      "React",
      "Node.js",
      "REST APIs",
      "Git/GitHub",
    ],
  },
  {
    en: [
      "TypeScript",
      "Advanced React (Hooks, Context API)",
      "Advanced Node.js",
      "MVC Architecture",
      "Databases (MySQL/PostgreSQL)",
      "Advanced Docker",
    ],
  },
  {
    en: [
      "Software Architecture",
      "Microservices",
      "Design Patterns",
      "Automated Testing",
      "CI/CD",
      "Cloud (AWS/Azure)",
    ],
  },
  {
    en: [
      "Distributed Systems Architecture",
      "Advanced Cloud",
      "DevOps",
      "Technical Leadership",
      "Project Management",
    ],
  },
  {
    en: [
      "Domain-Driven Design (DDD)",
      "Event-Driven Architecture",
      "SRE / Observability",
      "OKRs & Product Management",
      "FinOps (cloud optimization)",
      "People Management",
    ],
  },
  {
    en: [
      "Platform Strategy",
      "Hiring & Employer Branding",
      "Product Engineering",
      "Technical Roadmap Management",
      "Engineering Culture",
    ],
  },
  {
    en: [
      "Corporate IT Strategy",
      "Innovation & R&D",
      "Security & Compliance",
      "AI Applied to Business",
      "Tech M&A",
      "IT Governance",
    ],
  },
];

const badgeOriginals = [];
document.querySelectorAll(".resume-timeline-item").forEach((item, i) => {
  const badges = item.querySelectorAll(".list-inline .badge");
  badgeOriginals[i] = Array.from(badges).map((b) => b.textContent.trim());
});

const timelineItems = document.querySelectorAll(".resume-timeline-item");
const timelineKeys = [
  { title: "titleIntern", desc: "descIntern", soft: "softIntern" },
  { title: "titleJunior", desc: "descJunior", soft: "softJunior" },
  { title: "titlePleno", desc: "descPleno", soft: "softPleno" },
  { title: "titleSenior", desc: "descSenior", soft: "softSenior" },
  { title: "titleTechLead", desc: "descTechLead", soft: "softTechLead" },
  { title: "titleArqManager", desc: "descArqManager", soft: "softArqManager" },
  { title: "titleHead", desc: "descHead", soft: "softHead" },
  { title: "titleCTO", desc: "descCTO", soft: "softCTO" },
];

const skillsCats = document.querySelectorAll(".resume-skills-cat");
const skillsCatKeys = ["catFrontend", "catBackend", "catDB", "catOther"];

const langItems = [
  { nameKey: "langPT", levelKey: "levelNative" },
  { nameKey: "langEN", levelKey: "levelInter" },
  { nameKey: "langES", levelKey: "levelBasic" },
];

const softHeadings = document.querySelectorAll(
  ".resume-timeline-item-desc-heading:first-of-type",
);

let currentLang = localStorage.getItem("lang") || "pt";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelector(".lang-btn").textContent = lang === "pt" ? "EN" : "PT";

  document.title = translations.pageTitle[lang];

  textMap.forEach(({ sel, key }) => {
    const el = document.querySelector(sel);
    if (el && translations[key]) el.textContent = translations[key][lang];
  });

  const cvBtn = document.getElementById("cv-btn");
  if (cvBtn) {
    cvBtn.href = `assets/cv-paulo-henrique-moreira-araujo-${
      lang === "pt" ? "PT" : "EN"
    }.pdf`;
  }

  timelineItems.forEach((item, i) => {
    const keys = timelineKeys[i];
    if (!keys) return;

    const titleEl = item.querySelector(".resume-position-title");
    if (titleEl) {
      titleEl.firstChild.textContent = translations[keys.title][lang];
    }

    const descEl = item.querySelector(".resume-timeline-item-desc > p");
    if (descEl) descEl.textContent = translations[keys.desc][lang];

    const headings = item.querySelectorAll(
      ".resume-timeline-item-desc-heading",
    );

    if (headings[0])
      headings[0].textContent =
        lang === "pt" ? "Soft Skills exigidas:" : "Required Soft Skills:";

    if (headings[1])
      headings[1].textContent =
        lang === "pt" ? "Roadmap de Aprendizado:" : "Learning Roadmap:";

    const softList = item.querySelectorAll(
      ".resume-timeline-item-desc > ul li",
    );

    const softArr = translations[keys.soft][lang];
    softList.forEach((li, j) => {
      if (softArr[j]) li.textContent = softArr[j];
    });

    const badges = item.querySelectorAll(".list-inline-item .badge");
    const enBadges = badgeKeys[i]?.en;
    const ptBadges = badgeOriginals[i];
    badges.forEach((badge, j) => {
      if (lang === "en" && enBadges && enBadges[j])
        badge.textContent = enBadges[j];
      else if (lang === "pt" && ptBadges && ptBadges[j])
        badge.textContent = ptBadges[j];
    });
  });

  skillsCats.forEach((cat, i) => {
    if (skillsCatKeys[i])
      cat.textContent = translations[skillsCatKeys[i]][lang];
  });

  const langListItems = document.querySelectorAll(".resume-lang-list li");
  langListItems.forEach((li, i) => {
    const map = langItems[i];
    if (!map) return;

    const nameEl = li.querySelector(".resume-lang-name");
    const levelEl = li.querySelector("small");
    if (nameEl) nameEl.textContent = translations[map.nameKey][lang];
    if (levelEl) levelEl.textContent = translations[map.levelKey][lang];
  });

  document.head.appendChild(style);
}

document.querySelector(".lang-btn").addEventListener("click", () => {
  applyLang(currentLang === "pt" ? "en" : "pt");
});

applyLang(currentLang);
