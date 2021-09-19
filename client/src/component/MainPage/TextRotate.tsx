import React, { useEffect, useState } from "react";

const TextRotate = ({
  dataRotate,
  className,
  dataPeriod = 2000,
}: {
  dataRotate: Array<string>;
  dataPeriod?: number;
  className?: string;
}) => {
  const [text, setText] = useState("");
  const [timeoutId, setTimeoutId] = useState<any>(0);
  const tick = (textIncoming: string, deleting: boolean, loopNum: number) => {
    var fullText = dataRotate[loopNum % dataRotate.length];
    var futurText = fullText.substring(
      0,
      textIncoming.length + (deleting ? -1 : +1)
    );
    setText(futurText);
    var delta = 200 - Math.random() * 100;
    if (deleting) delta /= 2;
    if (!deleting && futurText === fullText) {
      delta = dataPeriod;
      deleting = true;
    } else if (deleting && futurText === "") {
      deleting = false;
      loopNum = loopNum + 1;
      delta = 400;
    }
    var id = setTimeout(() => {
      tick(futurText, deleting, loopNum);
    }, delta);
    setTimeoutId(id);
  };
  useEffect(() => {
    tick(text, false, 0);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className={`txt-rotate-wrapper ${className}`}>
      <span className="txt-rotate">
        <span className="wrap">{text}</span>
      </span>
    </div>
  );
};

export default TextRotate;
