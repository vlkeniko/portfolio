import { useState, useEffect } from "react";
import Availability from "../components/Availability";
import Introduction from "../components/Introduction";
import SocialsIcons from "../components/SocialsIcons";
import ContactMe from "../components/buttons/ContactMe";
import keyboard from "../images/keyboard.png"

export default function HomePage() {
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://portfolio.eniko.website/wp-json/wp/v2/availability?_embed"
      );
      const data = await response.json();
      setAvailability(data);
    }
    getData();
  }, []);
  return (
    <section className="page home-page">
      <Introduction />
      <ContactMe />
      <div className="availability">
        {availability.map((availabilityObject) => (
          <Availability
            key={availabilityObject.id}
            availability={availabilityObject}
          />
        ))}
      </div>
      <SocialsIcons />
      <img className="keyboard" src={keyboard} alt="keyboard" />
    </section>
  );
}
