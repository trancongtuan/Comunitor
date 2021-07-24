import myCode from '../constants/my-code.constants';
import { MyResponseCode } from './../interfaces/my-response-code';
export class VPResponse {
  result: boolean;
  timestamp: Date;
  numberCode: number | undefined | null;
  stringCode: string | undefined | null;
  message: string | undefined | null;
  data: any | undefined | null;
  metaData: any | undefined | null;
  error: any | undefined | null;

  constructor(
    result: boolean,
    myRepsonseCode?: MyResponseCode,
    data?: any,
    metaData?: any,
    error?: any,
  ) {
    this.result = result;
    this.timestamp = new Date();
    this.numberCode = myRepsonseCode.numberCode || myCode._UNKNOWN.numberCode;
    this.stringCode = myRepsonseCode.stringCode || myCode._UNKNOWN.stringCode;
    this.message = myRepsonseCode.message || myCode._UNKNOWN.message;
    this.data = data || null;
    this.metaData = metaData || null;
    this.error = error || null;
  }
}
