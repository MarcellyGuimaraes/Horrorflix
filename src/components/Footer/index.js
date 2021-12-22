import style from "./Footer.module.css";
import github from "./git.png";

function Footer() {
  return (
    <footer className={style.container}>
      <p>Desenvolvido por: Marcelly Guimarães. </p>
      <img src={github} alt="github" className={style.logo} />
      <a
        href="https://github.com/MarcellyGuimaraes"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Meu Github
      </a>
    </footer>
  );
}

export default Footer;
