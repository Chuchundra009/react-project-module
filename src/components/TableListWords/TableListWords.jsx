import "./TableListWords.scss";
import d from "../../assets/icons8-мусор.png";
import r from "../../assets/icons8-редактировать.png";
import { useEffect, useState } from "react";

export default function TableListWords({
  english,
  transcription,
  russian,
  delWords,
  id,
  editRow,
}) {
  const [stEdit, setStEdit] = useState(false);
  const [textEnglish, setTextEnglish] = useState("");
  const [textTranscription, setTextTranscription] = useState("");
  const [textRussian, setTextRussian] = useState("");
  const [inputError, setInputError] = useState({});

  useEffect(() => {
    setTextEnglish(english);
    setTextTranscription(transcription);
    setTextRussian(russian);
  }, [english, transcription, russian]);

  function closeRow() {
    setStEdit(true);
  }

  function cancelAction() {
    setStEdit(false);
  }


  //проверка чтобы в textEnglish были только английские буквы
  function isEnglish() {
    const enLower = "abcdefghijklmnopqrstuvwxyz";
    const enUpper = enLower.toUpperCase();
    const en = enLower + enUpper;

    let trimTextEnglish = textEnglish.trim().split("");
    let arrTextEnglish = trimTextEnglish.every(char => en.includes(char));

    return arrTextEnglish
  }

  //проверка чтобы в textRussian были только русские буквы
  function isRussian() {
    const rusLower = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const rusUpper = rusLower.toUpperCase();
    const rus = rusLower + rusUpper;

    let trimTextRussian = textRussian.trim().split("");
    let arrTextRussian = trimTextRussian.every(char => rus.includes(char));

    return arrTextRussian;
  }


  //валидация каждого input, чтобы нельзя было сохранить пустой input + чтобы были только нужные буквы (английские или русские)
  function validateAndSave() {
    const errors = {};
    if (textEnglish.trim() === "" || !isEnglish()) {
      errors.textEnglish = true;
    }
    if (textTranscription.trim() === "") {
      errors.textTranscription = true;
    }
    if (textRussian.trim() === "" || !isRussian()) {
      errors.textRussian = true;
    }

    if (Object.keys(errors).length === 0) {
      editRow(id, textEnglish, textTranscription, textRussian);
      setStEdit(false);
    } else {
      setInputError(errors);
    }
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
              value={textEnglish}
              onChange={(event) => {
                setTextEnglish(event.target.value);
                setInputError({ ...inputError, textEnglish: false });
              }}
              style={{ borderColor: inputError.textEnglish ? "red" : "" }}
            />
          </td>
          <td className="tlistwords__list-text">
            <input
              type="text"
              value={textTranscription}
              onChange={(event) => {
                setTextTranscription(event.target.value);
                setInputError({ ...inputError, textTranscription: false });
              }}
              style={{ borderColor: inputError.textTranscription ? "red" : "" }}
            />
          </td>
          <td className="tlistwords__list-text">
            <input
              type="text"
              value={textRussian}
              onChange={(event) => {
                setTextRussian(event.target.value);
                setInputError({ ...inputError, textRussian: false });
              }}
              style={{ borderColor: inputError.textRussian ? "red" : "" }}
            />
          </td>

          <td className="tlistwords__list-btns">
            <button className="tlistwords__list-btnedit" onClick={cancelAction}>
              отмена
            </button>

            <button
              className="tlistwords__list-btndel"
              onClick={() => {
                validateAndSave();
              }}
            >
              сохранить
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
}
