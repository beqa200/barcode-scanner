import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import Generator from "../components/Generator";

function BarcodeGenerator() {
  const [barcode, setBarcode] = useState<string>("lintangwisesa");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setBarcode(value);
  };

  console.log(barcode);

  return (
    <div>
      <Link to="/">
        <button
          style={{ marginRight: 10, backgroundColor: "red", color: "white" }}
        >
          Back
        </button>
      </Link>
      <h1>Barcode Generator</h1>

      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <input
          type="text"
          onChange={handleChange}
          style={{ width: 320 }}
          value={barcode}
          placeholder="Barcode content"
        />
      </div>

      {barcode && <Generator barcode={barcode} />}
    </div>
  );
}

export default BarcodeGenerator;
