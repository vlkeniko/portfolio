import parse from "html-react-parser";
export default function Project({ project }) {

    return (
        <>
          <article className="project">
            <p className="small-title-project"><a href={parse(project.acf.website_link)}>{parse(project.acf.project_name)}</a></p>
            <img className="project-picture" src={project.acf.project_image.url} alt={parse(project.acf.project_name)} />
            <p className="small-text-project-centered">{parse(project.acf.project_type)}</p>
            <p className="small-text-project">{parse(project.acf.project_description)}</p>
            <p className="small-text-project">{parse(project.acf.project_role)}</p>
        </article>
        </>
      
    );
    
}
