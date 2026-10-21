import s from "./Header.module.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router"
import { PATH } from "../../routing/Routing"

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerInner}>
          <Link to={PATH.Home} className={s.logo}>
            <img src={logo} alt="Импульс" />
          </Link>
          <nav className={s.nav}>
            <Link to={PATH.Home}>Главная</Link>
            <Link to={PATH.Catalog}>Каталог</Link>
            <Link to={PATH.NotFound}>Корзина</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}