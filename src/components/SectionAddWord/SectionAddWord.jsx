import "./SectionAddWord.scss";
import { MyContext } from "../../Context/MyContext";
import { useContext, useState } from "react";
import Post from "../../Services/Post";

export default function SectionAddWord() {
  const { words, setWords } = useContext(MyContext);

  const [newEnglish, setNewEnglish] = useState("");
  const [newTranscription, setNewTranscription] = useState("");
  const [newRussian, setNewRussian] = useState("");

  function addNewWord() {
    const lastId = words[words.length - 1].id; //получили последний id
    const newWord = {
      id: lastId + 1,
      english: newEnglish,
      transcription: newTranscription,
      russian: newRussian,
    };
    setWords((prevState) => [newWord, ...prevState]);
    Post.postServer(newWord);
  }

  return (
    <section className="addWord">
      <div className="addWord__title">
        <h2 className="addWord__title-text">Добавить новое слово</h2>
      </div>
      <div className="addWord__block">
        <div>
          <input
            className="addWord__input-text"
            type="text"
            placeholder="english"
            value={newEnglish}
            onChange={(e) => setNewEnglish(e.target.value)}
          />
        </div>
        <div>
          <input
            className="addWord__input-text"
            type="text"
            placeholder="transcription"
            value={newTranscription}
            onChange={(e) => setNewTranscription(e.target.value)}
          />
        </div>
        <div>
          <input
            className="addWord__input-text"
            type="text"
            placeholder="russian"
            value={newRussian}
            onChange={(e) => setNewRussian(e.target.value)}
          />
        </div>
        <div>
          <button className="addWord__btn-text" onClick={addNewWord}>
            &#10004;
          </button>
        </div>
      </div>
    </section>
  );
}
