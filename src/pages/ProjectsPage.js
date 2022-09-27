import { useState, useEffect } from "react";
import Project from "../components/Project";
import SocialsIcons from "../components/SocialsIcons";



export default function ProjectsPage() {
  const [project, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://portfolio.eniko.website/wp-json/wp/v2/project?_embed"
      );
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);
  return (
    <>
      <section className="page">
        <section className="project-container">
          {project.map((projectObject) => (
            <Project key={projectObject.id} project={projectObject} />
          ))}
        </section>
        <SocialsIcons />
      </section>
    </>
  );
}
