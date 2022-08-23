import React, { useState } from "react";
import styles from "./URLShortnerForm.module.scss";
import constant from "../../constants/constants";
import SITE_URL from "../../helpers/getCurrentDomain";
import saveToFirebase from "../../firebase/saveToFirebase";
import copyImage from "./assets/copy.png";
import Toast, { notifyCopy } from "../Toast/Toast";
const URLShortnerForm = () => {
  const [input, setInput] = useState("");
  const [shortURL, setShortURL] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = async () => {
    if (!input) {
      return;
    }
    const randString = constant.CHARACTERS.split("")
      .sort(() => 0.5 - Math.random())
      .join("")
      .slice(0, 6);
    setShortURL(`${SITE_URL}${randString}`);
    // check url
    const URL = !constant.URL_PROTOCOLE.test(input) ? `http://${input}` : input;
    await saveToFirebase(URL, randString);
    Navigator.vibrate();
  };
  const clearHandler = () => {
    setInput("");
    setShortURL("");
  };

  return (
    <div className={styles.URLShortnerFormWrapper}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p>URL Shortner</p>
        </div>
        <div className={styles.body}>
          <div className={styles.innerBody}>
            <div className={styles.content}>
              {shortURL && (
                <div className={styles.resultContainer}>
                  <p>{shortURL}</p>
                  <img src={copyImage} alt="icon" onClick={notifyCopy} />
                </div>
              )}
              <div className={styles.inputContainer}>
                <input
                  type="url"
                  placeholder="Enter your long url here..."
                  value={input}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className={styles.buttonContainer}>
                <button onClick={clearHandler}>Clear</button>
                <button onClick={submitHandler}>Shorten</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast shortURL={shortURL} />
    </div>
  );
};

export default URLShortnerForm;
