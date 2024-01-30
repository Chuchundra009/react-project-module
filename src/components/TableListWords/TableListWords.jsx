import "./TableListWords.scss";
import d from "../../assets/icons8-мусор.png";
import r from "../../assets/icons8-редактировать.png";
import { useState } from "react";

export default function TableListWords({
  english,
  transcription,
  russian,
  delWords,
  id,
}) {
  const [stEdit, setStEdit] = useState(false);
  const [textEnglisg, setTextEnglish] = useState(english);
  const [textTranscription, setTextTranscription] = useState(transcription);
  const [textRussian, setTextRussian] = useState(russian);

  function closeRow() {
    setStEdit(true);
  }

  function cancelAction() {
    setStEdit(false);
  }

  return (
    <tbody>
      {!stEdit ? (
        <tr className="tlistwords">
          <td className="tlistwords__list-text">{english}</td>
          <td className="tlistwords__list-text">{transcription}</td>
          <td className="tlistwords__list-text">{russian}</td>

          <td className="tlistwords__list-btns">
            <button className="tlistwords__list-btnedit" onClick={closeRow}>
              <img className="tlistwords__list-img" src={r} alt="" />
            </button>

            <button
              className="tlistwords__list-btndel"
              onClick={() => delWords(id)}
            >
              <img className="tlistwords__list-img" src={d} alt="" />
            </button>
          </td>
        </tr>
      ) : (
        <tr className="tlistwords">
          <td className="tlistwords__list-text">
            <input
              type="text"
              value={textEnglisg}
              onChange={(event) => {
                setTextEnglish(event.target.value);
              }}
            />
          </td>
          <td className="tlistwords__list-text">
            <input
              type="text"
              value={textTranscription}
              onChange={(event) => {
                setTextTranscription(event.target.value);
              }}
            />
          </td>
          <td className="tlistwords__list-text">
            <input
              type="text"
              value={textRussian}
              onChange={(event) => {
                setTextRussian(event.target.value);
              }}
            />
          </td>

          <td className="tlistwords__list-btns">
            <button className="tlistwords__list-btnedit" onClick={cancelAction}>
              отмена
            </button>

            <button className="tlistwords__list-btndel">сохранить</button>
          </td>
        </tr>
      )}
    </tbody>
  );
}
