// src/types/QuaggaResult.ts

export interface QuaggaResult {
  codeResult: CodeResult;
  line: Point[];
  angle: number;
  pattern: number[];
  box: Point[];
  boxes: Point[][];
}

export interface CodeResult {
  code: string;
  start: number;
  end: number;
  codeset: number;
  startInfo: CorrectionInfo;
  decodedCodes: DecodedCode[];
  endInfo: CorrectionInfo;
  format: string;
  direction: number;
}

export interface CorrectionInfo {
  error: number;
  code: number;
  start: number;
  end: number;
  correction: BarSpaceCorrection;
}

export interface DecodedCode {
  error?: number;
  code: number;
  start: number;
  end: number;
  correction: BarSpaceCorrection;
}

export interface BarSpaceCorrection {
  bar: number;
  space: number;
}

export interface Point {
  x: number;
  y: number;
}
