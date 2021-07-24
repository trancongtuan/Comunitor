import myCode from '../constants/my-code.constants';
import { MyResponseCode } from '../interfaces/my-response-code';

export class ErrorResponse {
  constructor(myRepsonseCode?: MyResponseCode, error?: any) {
    return {
      result: false,
      timestamp: new Date(),
      numberCode: myRepsonseCode.numberCode || myCode._UNKNOWN.numberCode,
      stringCode: myRepsonseCode.stringCode || myCode._UNKNOWN.stringCode,
      message: myRepsonseCode.message || myCode._UNKNOWN.message,
      error: error || null,
    };
  }
}
