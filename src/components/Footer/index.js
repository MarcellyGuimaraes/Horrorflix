import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.container}>
      <p className={style.textFooter}>
        Desenvolvido por:{' '}
        <a href="https://github.com/MarcellyGuimaraes">Marcelly Guimarães</a>.
      </p>
    </footer>
  )
}

export default Footer
