import "./MainHome.scss";
import home from "../../assets/home.jpg";

export default function MainHome() {
  return (
    <main className="mainhome">
      <div className="mainhome__container">
        <div className="mainhome__text">
          <p className="mainhome__text-p">
            Здравствуй, ученик.
          </p>
          <p className="mainhome__text-p">Добро подаловать на нашу платформу по изучению
            английских слов</p>
        </div>
        <div className="mainhome__img">
          <img className="mainhome__img-home" src={home} alt="home img" />
        </div>
      </div>
    </main>
  );
}
