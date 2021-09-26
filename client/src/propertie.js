const properties = {
  name: "Maxime Leriche",
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
        { icon: "github", label: "Exemple" },
        { icon: "github", label: "Exemple" },
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
      Icon: [{ icon: "github", label: "Exemple" }],
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
      Icon: [{ icon: "github", label: "Exemple" }],
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
      Icon: [{ icon: "github", label: "Exemple" }],
      categorie: [
        {
          Label: "Gérer",
          List: ["MariaDB", "MongoDB", "PostgreSQL"],
          Horizontal: false,
        },
      ],
    },
  ],
};

export default properties;
