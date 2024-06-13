import "./Footer.css";

const Footer = (props) => {
  return (
    <section>
      <h6 className="footer">{props.titulo}</h6>
    </section>
  );
};

export default Footer;