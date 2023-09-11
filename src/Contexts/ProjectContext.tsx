import React from "react";

type technologies =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "Tailwind css"
  | "Sass"
  | "Scss"
  | "React";

export interface IProject {
  id: number;
  github?: string;
  deploy?: string;
  name: string;
  technologies: technologies[];
  description: string;
  image: string;
}

const ProjectContext = React.createContext<IProject[] | null>(null);

export function useContext() {
  const context = React.useContext(ProjectContext);
  if (!context) throw new Error("useContext deve estar dentro do provider");
  return context;
}

const ProjectContextProvider = ({ children }: React.PropsWithChildren) => {
  const projects: IProject[] = [
    {
      id: 1,
      name: "PodCastfy",
      description:
        "O PodCastfy é um website desenvolvido que utiliza a API do Spotify para mostrar dados de podcasts. Busque e salve seus podcasts favoritos, veja detalhes como descrição, autor, duração e data de lançamento dos episódios. Ouça prévias e controle a reprodução através do player do site.",
      github: "https://github.com/gabrielayresdev/PodCastfy",
      deploy: "https://pod-castfy.vercel.app",
      image:
        "https://github.com/gabrielayresdev/PodCastfy/blob/main/src/assets/readme_images/desktop.png?raw=true",
      technologies: ["React", "Scss", "JavaScript", "Tailwind css"],
    },
    {
      id: 2,
      github: "https://github.com/gabrielayresdev/Pokedex",
      deploy: "https://pokedex-neonys.netlify.app",
      name: "Pokedéx",
      technologies: ["HTML", "CSS", "JavaScript"],
      description:
        "A Pokedex é uma aplicação web interativa que fornece informações abrangentes sobre diferentes Pokémon. O projeto é uma iniciativa que visa fornecer aos fãs de Pokémon uma ferramenta prática e informativa para explorar o vasto universo dos Pokémon.",
      image:
        "https://github.com/gabrielayresdev/Pokedex/blob/main/Assets/startpage.png?raw=true",
    },
    {
      id: 3,
      github: "https://github.com/gabrielayresdev/Designo",
      deploy: "https://designo-gabrielayres.netlify.app/",
      name: "Designo",
      technologies: ["HTML", "Scss", "JavaScript"],
      description:
        "O projeto consiste em um website desenvolvido para uma empresa de design fictícia. O website é composto por sete páginas responsivas: uma página inicial, três páginas de destaque de projetos, uma página de visão geral da empresa, uma página contendo mapas interativos das filiais usando a biblioteca Leaflet e uma página de contato.",
      image:
        "https://github.com/gabrielayresdev/Designo/blob/main/assets/readme/Designo-Home-desktop.png?raw=true",
    },
    {
      id: 4,
      github: "https://github.com/gabrielayresdev/ToDoList",
      deploy: "https://tasknotebook.netlify.app",
      name: "ToDoList",
      technologies: ["HTML", "CSS", "JavaScript"],
      description:
        "ToDoList é um gerenciador de tarefas no qual é possível adicionar novas tarefas especificando a data limite para a realização, sua descrição, sua prioridade e seu tipo. Além disso, há a possibilidade de deletar tarefas, marcar as tarefas realizadas e pesquisar por uma tarefa em específico.",
      image:
        "https://github.com/gabrielayresdev/ToDoList/blob/main/public/howToUse/how_1.png?raw=true",
    },
  ];

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
