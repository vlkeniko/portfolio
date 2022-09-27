import parse from "html-react-parser";
export default function About({ about }) {
  return (
    <article className="about-container">
      <div className="aboutme-box">
        <img
          className="profile-picture"
          src={about.acf.profile_picture.url}
          alt={parse(about.acf.about_me_title)}
        />
        <div className="about aboutme">
          <h2 className="small-title">{parse(about.acf.about_me_title)}</h2>
          <h2 className="small-text-about">
            {parse(about.acf.about_me_description)}
          </h2>
        </div>
      </div>
      <div className="skills-experience-box">
      <div class="skills-box">
        <div className="about">
          <h2 className="small-title">{parse(about.acf.skills_title)}</h2>
          <ul>
            <li className="small-list">{about.acf.skills_list_item_1}</li>
            <li className="small-list">{about.acf.skills_list_item_2}</li>
            <li className="small-list">{about.acf.skills_list_item_3}</li>
            <li className="small-list">{about.acf.skills_list_item_4}</li>
          </ul>
        </div>
      </div>
      <div className="experience-box">
        <div className="about">
          <div className="experience">
            <h2 className="small-title">{parse(about.acf.experience_title)}</h2>
            <div>
              <p className="experience-list">{about.acf.experience_list_item_1}</p>
              <p className="experience-list">{about.acf.experience_list_item_2}</p>
              <p className="experience-list">{about.acf.experience_list_item_3}</p>
              <p className="experience-list">{about.acf.experience_list_item_4}</p>
            </div>
          </div>
        </div>
      </div>

      </div>


      
    </article>
  );
}
