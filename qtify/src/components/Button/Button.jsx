
import Style from './Button.module.css'

export default function ButtonComponent({children}) {
  return <button className={Style.button}>{children}</button>;
}
