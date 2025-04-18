import { Link } from "react-router-dom"
import s from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={s.container}>
            <Link to={"/generate"}>Генерировать QR Code</Link>
            <Link to={"/scan"}>Сканировать QR Code</Link>
            <Link to={'/'}>История сканирования</Link>
            <Link to={'/'}>История генерирования</Link>
        </nav>
    )
}

export default Navigation
