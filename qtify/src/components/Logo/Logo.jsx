import logo from "../../assets/logo.png";
import Style from './Logo.module.css';
export default function Logo () {
    return <img className={Style.logo} src={logo} alt="logo" width="64px"/>
}