import Style from "./Hero.module.css";
import headphone from "../../assets/hero_headphones.png";
export default function Hero() {
  return (
    <div className={Style.hero}>
      <div className={Style.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousand podcasts episodes</h1>
      </div>
      <img src={headphone} alt="headphone" width="220" />
    </div>
  );
}
