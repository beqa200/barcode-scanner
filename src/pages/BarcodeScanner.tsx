import { useState } from "react";
import { Link } from "react-router-dom";
import Scanner from "../components/Scanner";

interface Result {
  codeResult: {
    code: string;
  };
}

const BarcodeScanner = () => {
  //ts-ignore
  const [results, setResults] = useState<Result[]>([]);

  const _onDetected = (result: QuaggaJS.ResultObject) => {
    setResults([result as Result]);
  };

  console.log(results);
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
