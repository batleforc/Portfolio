const properties = {
  name: "Maxime Leriche",
  cvUrl: "/CV.pdf",
  attribute: [
    "Développeur.",
    "Étudiant.",
    "Core.",
    "Infra.",
    "Front.",
    "Bdd.",
    "DevOps.",
    "All you need!",
  ],
  media: [
    {
      label: "Github",
      icon: "github",
      link: "https://github.com/batleforc",
    },
    {
      label: "Gitlab",
      icon: "gitlab",
      link: "https://gitlab.com/maxLeriche.weebo",
    },
    {
      label: "Linkedin",
      icon: "linkedin2",
      link: "https://www.linkedin.com/in/maxime-leriche-weebo/",
    },
  ],
  about: [
    "Un étudiant en Master Architecte Logicielle. Entre le développeur Back et Front saupoudré d'un fan d'Infra.",
  ],
  tech: [
    {
      Label: "Core",
      Icon: [
        { icon: "dot-net", label: "Dot Net" },
        { icon: "node-dot-js", label: "Node.js" },
      ],
      categorie: [
        {
          Label: "Language",
          List: ["C#", "C", "C++", "Php", "Node", "Python", "Java"],
          Horizontal: false,
        },
      ],
    },
    {
      Label: "Front",
      Icon: [
        { icon: "javascript", label: "Js" },
        { icon: "react", label: "ReactJs" },
      ],
      categorie: [
        {
          Label: "Language",
          List: ["Html", "Css", "JS"],
          Horizontal: false,
        },
        {
          Label: "Framework",
          List: ["ReactJs", "VueJs", "SvelteJs"],
          Horizontal: false,
        },
      ],
    },
    {
      Label: "Infra",
      Icon: [
        { icon: "docker", label: "Docker" },
        { icon: "kubernetes", label: "Kubernetes" },
        { icon: "gitea", label: "Gitea" },
      ],
      categorie: [
        {
          Label: "Support",
          List: ["Vm", "VPS", "Docker", "Heroku", "Kubernetes"],
          Horizontal: false,
        },
        {
          Label: "Kubernetes",
          List: [
            "Microk8s",
            "Keycloak",
            "Gitea",
            "Harbor",
            "EclipseChe",
            "Concourse",
          ],
          Horizontal: false,
        },
      ],
    },
    {
      Label: "Base de donnée",
      Icon: [
        { icon: "mongodb", label: "MongoDb" },
        { icon: "postgresql", label: "PostgreSQL" },
      ],
      categorie: [
        {
          Label: "Gérer",
          List: ["MariaDB", "MongoDB", "PostgreSQL"],
          Horizontal: false,
        },
      ],
    },
  ],
  exp: [
    {
      Label: "Bac Sti2D",
      type: "School",
      from: "2015",
      to: "2018",
      Location: "Nogent-sur-oise",
      where: "Lycée Marie-Curie",
      Description: "logoLyceeMarieCurie.png?",
    },
    {
      Label: "DUT Info",
      type: "School",
      from: "2018",
      to: "2020",
      Location: "Amiens",
      where: "Iut amiens",
      Description: "logoIutAmiens.png",
    },
    {
      Label: "LP Dev Cloud",
      type: "School",
      from: "2020",
      to: "2021",
      Location: "Niort",
      where: "IUT La rochelle",
      Description: "logoIUTLaRochelle.png?",
    },
    {
      Label: "Master Architecte Logicielle",
      type: "School",
      from: "2021",
      to: "",
      Location: "Niort",
      where: "Université La rochelle",
      Description: "",
      Icon: "logoUniversitéLaRochelle.png?",
    },
    {
      Label: "Dev Natif et PWA",
      type: "Work",
      from: "2020",
      to: "2021",
      Location: "Aigrefeuille d'aunis",
      where: "Nexi conseils",
      Description: "",
      Icon: "nexiConseils.png?",
    },
    {
      Label: "DevOps",
      type: "Work",
      from: "2021",
      to: "",
      Location: "Niort",
      where: "Macif",
      Description: "",
      Icon: "macif.png?",
    },
    {
      Label: "Codeur Museomix",
      type: "Event",
      from: "2019",
      to: "2019",
      Location: "Amiens",
      where: "Museomix",
      Description: "",
      Icon: "museomixLogo.png?",
    },
  ],
};

export default properties;
