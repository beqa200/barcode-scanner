/// <reference types="vite/client" />

declare namespace QuaggaJS {
  interface ResultObject {
    // define the properties of ResultObject here
  }
}

interface ScannerProps {
  onDetected: (result: QuaggaJS.ResultObject) => void;
}
