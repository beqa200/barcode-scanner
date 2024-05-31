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
            height: 280,
            facingMode: "environment",
          },
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: {
          readers: ["code_128_reader"],
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
      Quagga.stop();
      Quagga.offDetected(_onDetected);
    };
  }, []);

  return <div id="interactive" className="viewport" />;
};

export default Scanner;
