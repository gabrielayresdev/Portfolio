import React from "react";

export interface IProject {
  id: number;
  github?: string;
  deploy?: string;
  name: string;
  technologies: string[];
  description: string;
  image: string;
  images: string[];
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
        "Aute velit Lorem do amet officia irure ullamco non sit aute aliqua esse. Ipsum eiusmod voluptate Lorem eiusmod et reprehenderit voluptate est sit quis aliquip. Veniam consequat sint cillum ipsum laborum duis in. Tempor elit quis consequat aliquip consectetur laboris ut. Commodo fugiat et ullamco laborum qui labore commodo labore consequat.",
      github: "https://github.com/gabrielayresdev/PodCastfy",
      deploy: "https://pod-castfy.vercel.app",
      image:
        "https://github.com/gabrielayresdev/PodCastfy/blob/main/src/assets/readme_images/desktop.png?raw=true",
      images: [
        "https://github.com/gabrielayresdev/PodCastfy/blob/main/src/assets/readme_images/desktop.png?raw=true",
      ],
      technologies: ["react", "scss", "tailwind css"],
    },
  ];

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
