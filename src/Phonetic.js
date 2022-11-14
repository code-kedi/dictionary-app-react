import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio !== "") {
    return (
      <div className="Phonetic">
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
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
