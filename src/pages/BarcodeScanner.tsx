import { useState } from "react";
import { Link } from "react-router-dom";
import Scanner from "./Scanner";

const BarcodeScanner = () => {
  //ts-ignore
  const [results, setResults] = useState<any>([]);

  //ts-ignore
  const _onDetected = (result: any) => {
    console.log("result", result[0]);
    setResults([result]);
  };

  return (
    <div>
      <Link to="/">back</Link>
      <span>Barcode Scanner</span>

      <Scanner onDetected={_onDetected} />

      <p>{results[0] ? results[0].codeResult.code : "No data scanned"}</p>
    </div>
  );
};

export default BarcodeScanner;
