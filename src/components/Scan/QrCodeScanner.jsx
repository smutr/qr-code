import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import './qrScanner.css'
import { SCAN_DATA } from '../../constans.js'

function QrCodeScanner() {
const [scanned, setScanned] = useState(null)

  function scanHandler(result) {
    const value = result[0].rawValue
    setScanned(value)
   
  }

  const setting = {
    audio: false,
    finder: true,
  };

  
  return (
    <div className="scanner">

       <p className="resultScanner">{scanned}</p>

      <Scanner
        onScan={scanHandler}
        allowMultiple
        components={setting}
        styles={{ container: { width: 350 } }}
      />
     
    </div>
  );
}

export default QrCodeScanner;
