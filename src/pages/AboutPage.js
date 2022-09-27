import { useState, useEffect } from "react";
import About from "../components/About";
import SocialsIcons from "../components/SocialsIcons";

export default function AboutPage() {
    const [about, setAbouts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response1 = await fetch("https://portfolio.eniko.website/wp-json/wp/v2/about?_embed");
            const data1 = await response1.json();
            setAbouts(data1);
        }
        getData();
    }, []);
    return (
        <section className="page">
                {about.map(AboutObject => (
                    <About key={AboutObject.id} about={AboutObject} />
                ))}
                <SocialsIcons />
        </section>
    );
}