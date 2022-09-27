import SocialsIcons from "../components/SocialsIcons";
import ContactContent from "../components/ContactContent";
import SendMessage from "../components/buttons/SendMessage";
import keyboard from "../images/keyboard.png"

export default function ContactPage() {
    return (
        <section className="page contact-page">
            <ContactContent/>
            <SendMessage />
            <SocialsIcons/>
            <img className="keyboard" src={keyboard} alt="keyboard" />
        </section>
    );
}
