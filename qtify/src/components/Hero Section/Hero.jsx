import Style from "./Hero.module.css";
import headphone from "../../assets/hero_headphones.png";
export default function Hero() {
  return (
    <div className={Style.hero}>
      <div className={Style.heroText}>
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousand podcasts episodes</h2>
      </div>
      <img src={headphone} alt="headphone" width="200" />
    </div>
  );
}
