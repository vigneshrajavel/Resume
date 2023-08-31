import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>If you saw my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:vigneshrajavel1816@gmail.com">vigneshrajavel1816@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="tel" />
          <a href="tel:+91-7806875158">7806875158</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}