import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
  if (props.phonetic.audio !== "") {
    return (
      <div className="Phonetic row align-items-center">
        <div className="col-4">
          <audio
            controls
            src={props.phonetic.audio}>
            <a
              href={props.phonetic.audio}
              target="_blank"
              rel="noreferrer">
              Download audio
            </a>
          </audio>
        </div>
        <div className="col-8">
          <span className="text">{props.phonetic.text}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
