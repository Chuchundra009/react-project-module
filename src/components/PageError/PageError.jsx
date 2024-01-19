import error from "../../assets/error.jpg";
import "./PageError.scss";

export default function PageError() {
  return (
    <main className="pageerror">
      <div className="pageerror__container">
        <img className="pageerror__img" src={error} alt="error 404" />
      </div>
    </main>
  );
}
