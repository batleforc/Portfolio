import type { Properties } from "./model/Properties";

const properties = {
  name: "Maxime Leriche",
  cvUrl: "/CV.pdf",
  attributes: [
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
      label: "Back",
      icon: [
        { icon: "dot-net", label: "Dot Net" },
        { icon: "node-dot-js", label: "Node.js" },
        { icon: "go", label: "Go" },
      ],
      categorie: [
        {
          label: "Language",
          list: ["C#", "C", "C++", "Php", "Node", "Python", "Java", "go"],
          horizontal: false,
        },
      ],
    },
    {
      label: "Front",
      icon: [
        { icon: "javascript", label: "Js" },
        { icon: "react", label: "ReactJs" },
      ],
      categorie: [
        {
          label: "Language",
          list: ["Html", "Css", "JS"],
          horizontal: false,
        },
        {
          label: "Framework",
          list: ["ReactJs", "VueJs", "SvelteJs"],
          horizontal: false,
        },
      ],
    },
    {
      label: "Infra",
      icon: [
        { icon: "docker", label: "Docker" },
        { icon: "gitea", label: "Gitea" },
        { icon: "helm", label: "Helm3" },
      ],
      categorie: [
        {
          label: "Support",
          list: [
            "Vm",
            "Ovh",
            "Ansible",
            "VPS",
            "Docker",
            "Heroku",
            "Kubernetes",
            "GitOps",
          ],
          horizontal: false,
        },
        {
          label: "Kubernetes",
          list: [
            "K3S / Microk8s",
            "Helm3",
            "Keycloak",
            "Gitea",
            "Harbor",
            "EclipseChe",
            "Concourse",
          ],
          horizontal: false,
        },
      ],
    },
    {
      label: "&Ops",
      icon: [{ icon: "kubernetes", label: "Kubernetes" }],
      categorie: [
        {
          label: "DevOps",
          list: ["K3S", "MicroK8S", "Helm3", "Ansible"],
          horizontal: false,
        },
        {
          label: "GitOps",
          list: ["FluxCD"],
          horizontal: false,
        },
        {
          label: "CiCd",
          list: ["Gitlab Ci", "Github Actions", "Concourse", "Tekton"],
          horizontal: false,
        },
      ],
    },
    {
      label: "Interaction de donnée",
      icon: [
        { icon: "mongodb", label: "MongoDb" },
        { icon: "postgresql", label: "PostgreSQL" },
      ],
      categorie: [
        {
          label: "Base de donnée",
          list: ["MariaDB", "MongoDB", "PostgreSQL"],
          horizontal: false,
        },
        {
          label: "Bucket",
          list: ["MinIo"],
          horizontal: false,
        },
        {
          label: "Event",
          list: ["Apache Kafka"],
          horizontal: false,
        },
      ],
    },
  ],
  exp: [
    {
      label: "Bac Sti2D",
      type: "School",
      from: "2015",
      to: "2018",
      location: "Nogent-sur-oise",
      where: "Lycée Marie-Curie",
      description: "Mention Bien",
      icon: "logoLyceeMarieCurie.png",
    },
    {
      label: "DUT Info",
      type: "School",
      from: "2018",
      to: "2020",
      location: "Amiens",
      where: "Iut amiens",
      description: "",
      icon: "logoIutAmiens.jpg",
    },
    {
      label: "LP Dev Cloud",
      type: "School",
      from: "2020",
      to: "2021",
      location: "Niort",
      where: "IUT La rochelle",
      description: "",
      icon: "logoIUTLaRochelle.png",
    },
    {
      label: "Master Architecte Logicielle",
      type: "School",
      from: "2021",
      to: "",
      location: "Niort",
      where: "Université La rochelle",
      description: "",
      icon: "logoUniversiteLaRochelle.png",
    },
    {
      label: "Dev Natif et PWA",
      type: "Work",
      from: "2020",
      to: "2021",
      location: "Aigrefeuille d'aunis",
      where: "Nexi conseils",
      description: "",
      icon: "nexiconseils.png",
    },
    {
      label: "Alternant DevOps/Couche d'échange",
      type: "Work",
      from: "2021",
      to: "",
      location: "Niort",
      where: "Macif",
      description: "",
      icon: "macif.png",
    },
    {
      label: "Codeur",
      type: "Event",
      from: "2019",
      to: "2019",
      location: "Amiens",
      where: "Museomix",
      description: "",
      icon: "museomixLogo.png",
    },
  ],
  project: [
    {
      slug: "portfolio",
      name: "Portfolio",
      description: ["Projet de mise en place d'un portfolio"],
      shortDescription: "Plateforme pour me vendre",
      tag: ["react", "V2"],
      status: "En cours de dev",
      techno: [
        {
          label: "Api",
          content: [
            "Nodejs",
            "Express ,bcrypt, mongodb, LinkPreviewGenerator, node-fetch,WebPush",
            "Mongodb",
          ],
        },
        {
          label: "Ui",
          content: [
            "ReactJs",
            "EditorJs,React Router, FontAwesome, Recaptcha et W3CSchool",
          ],
        },
      ],
      link: [
        { label: "Git", link: "https://github.com/batleforc/Portfolio" },
        { label: "Lien", link: "https://maxleriche.tech" },
      ],
    },
    {
      slug: "make-pwa",
      name: "MaKe Pwa",
      description: [""],
      shortDescription: "",
      tag: ["react", "gulp", "plein de truc", "jojo"],
      status: "Archivé",
      techno: [],
      link: [],
    },
  ],
} as Properties;

export default properties;
