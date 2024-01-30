import "./CardText.scss";
import { forwardRef, useState } from "react";
// import data from '../../data.json';

const CardText = forwardRef(function CardText(props, ref) {
    const { english,transcription,russian,addNum} = props;
  const [stText, setStText] = useState(true);

  function offSeeText() {
    setStText(false);
  }

  function onSeeText() {
    setStText(false);//если не хотим менять еще раз на кнопку
    // setStText(true);// меняется на кнопку и при повторном нажатии заносится +2 и тд к изученному слову
  }

  function handleClick() {
    offSeeText(),
    addNum();
  }

  return (
    <div className="scard">
      <div className="scard__container">
        <div className="scard__block">
          <h4 className="scard__block-word">{english}</h4>
          <p className="scard__block-transcr">{transcription}</p>
        </div>
        <div className="scard__change">
          {stText ? (
            <button
              className="scard__change-text"
              onClick={handleClick}
              ref={ref}
            >
              Проверить
            </button>
          ) : (
            <p className="scard__change-translation" onClick={onSeeText}>
              {russian}
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

export default CardText;
