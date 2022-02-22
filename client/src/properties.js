const properties = {
  name: "Maxime Leriche",
  cvUrl: "/CV.pdf",
  attribute: [
    "Développeur.",
    "Étudiant.",
    "Back.",
    "Infra.",
    "Front.",
    "Bdd.",
    "DevOps.",
    "Architecture",
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
      icon: "gitlab1",
      link: "https://gitlab.com/maxLeriche.weebo",
    },
    {
      label: "Linkedin",
      icon: "linkedin2",
      link: "https://www.linkedin.com/in/maxime-leriche-weebo/",
    },
  ],
  about: [
    "Un étudiant en Master Architecte Logicielle. Entre le développeur Back et Front avec un amour profond pour l'infra.",
  ],
  tech: [
    {
      Label: "Back",
      Icon: [
        { icon: "dot-net", label: "Dot Net" },
        { icon: "node-dot-js", label: "Node.js" },
        { icon: "go", label: "Go" },
      ],
      categorie: [
        {
          Label: "Language",
          List: ["C#", "C", "C++", "Php", "Node", "Python", "Java", "go"],
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
        { icon: "kubernetes", label: "Kubernetes" },
        { icon: "docker", label: "Docker" },
        { icon: "gitea", label: "Gitea" },
        { icon: "helm", label: "Helm3" },
      ],
      categorie: [
        {
          Label: "Support",
          List: [
            "Vm",
            "Ovh",
            "Ansible",
            "VPS",
            "Docker",
            "Heroku",
            "Kubernetes",
          ],
          Horizontal: false,
        },
        {
          Label: "Kubernetes",
          List: [
            "K3S / Microk8s",
            "Helm3",
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
      Label: "Interaction de donnée",
      Icon: [
        { icon: "mongodb", label: "MongoDb" },
        { icon: "postgresql", label: "PostgreSQL" },
      ],
      categorie: [
        {
          Label: "Base de donnée",
          List: ["MariaDB", "MongoDB", "PostgreSQL"],
          Horizontal: false,
        },
        {
          Label: "Bucket",
          List: ["MinIo"],
          Horizontal: false,
        },
        {
          Label: "Event",
          List: ["Apache Kafka"],
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
      location: "Nogent-sur-oise",
      where: "Lycée Marie-Curie",
      description: "Mention Bien",
      Icon: "logoLyceeMarieCurie.png",
    },
    {
      Label: "DUT Info",
      type: "School",
      from: "2018",
      to: "2020",
      location: "Amiens",
      where: "Iut amiens",
      description: "",
      Icon: "logoIutAmiens.jpg",
    },
    {
      Label: "LP Dev Cloud",
      type: "School",
      from: "2020",
      to: "2021",
      location: "Niort",
      where: "IUT La rochelle",
      description: "",
      Icon: "logoIUTLaRochelle.png",
    },
    {
      Label: "Master Architecte Logicielle",
      type: "School",
      from: "2021",
      to: "",
      location: "Niort",
      where: "Université La rochelle",
      description: "",
      Icon: "logoUniversiteLaRochelle.png",
    },
    {
      Label: "Dev Natif et PWA",
      type: "Work",
      from: "2020",
      to: "2021",
      location: "Aigrefeuille d'aunis",
      where: "Nexi conseils",
      description: "",
      Icon: "nexiConseils.png",
    },
    {
      Label: "Alternant DevOps/Couche d'échange",
      type: "Work",
      from: "2021",
      to: "",
      location: "Niort",
      where: "Macif",
      description: "",
      Icon: "macif.png",
    },
    {
      Label: "Codeur",
      type: "Event",
      from: "2019",
      to: "2019",
      location: "Amiens",
      where: "Museomix",
      description: "",
      Icon: "museomixLogo.png",
    },
  ],
  project: [
    {
      Slug: "portfolio",
      Name: "Portfolio",
      Description: ["Projet de mise en place d'un portfolio"],
      ShortDescription: "Plateforme pour me vendre",
      Tag: ["react", "V2"],
      Status: "En cours de dev",
      Techno: [
        {
          Label: "Api",
          Content: [
            "Nodejs",
            "Express ,bcrypt, mongodb, LinkPreviewGenerator, node-fetch,WebPush",
            "Mongodb",
          ],
        },
        {
          Label: "Ui",
          Content: [
            "ReactJs",
            "EditorJs,React Router, FontAwesome, Recaptcha et W3CSchool",
          ],
        },
      ],
      Link: [
        { Label: "Git", Lien: "https://github.com/batleforc/Portfolio" },
        { Label: "Lien", Lien: "https://maxleriche.tech" },
      ],
    },
    {
      Slug: "make-pwa",
      Name: "MaKe Pwa",
      Description: [""],
      ShortDescription: "",
      Tag: ["react", "gulp", "plein de truc", "jojo"],
      Status: "Archivé",
      Techno: [],
      Link: [],
    },
  ],
};

export default properties;
