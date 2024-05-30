import React, { useEffect } from "react";
import Quagga from "@ericblade/quagga2";

// Define the props type
interface ScannerProps {
  onDetected: (result: QuaggaJS.ResultObject) => void;
}

const Scanner: React.FC<ScannerProps> = ({ onDetected }) => {
  const _onDetected = (result: QuaggaJS.ResultObject) => {
    onDetected(result);
  };

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          },
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
          ],
        },
        locate: true,
      },
      (err) => {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(_onDetected);

    return () => {
      Quagga.offDetected(_onDetected);
      Quagga.stop();
    };
  }, []);

  return <div id="interactive" className="viewport" />;
};

export default Scanner;
