import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./qrCodeGenerator.css";


function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function handlerClick() {
    setResult(value);
    setValue("");
  
    
  }

  function handlerChange(event) {
    setValue(event.target.value);
    setResult("");
    
  }

  return (
    <div className="container">
      Изменеия
      <input
        type="text"
        value={value}
        onChange={handlerChange}
        className="result"
        placeholder="Введите текст...."
      />
      <button type="button" onClick={handlerClick} className="button">
        Generate code
      </button>

      {result !== "" && (
        <div className="qrWrapper">
          
          <QRCodeSVG value={result} size="200" />
        </div>
      )}
    </div>
  );
}

export default QrCodeGenerator;
