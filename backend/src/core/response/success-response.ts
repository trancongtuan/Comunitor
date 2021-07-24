import myCode from '../constants/my-code.constants';

export class SuccessResponse {
  constructor(data?: any, metaData?: any) {
    return {
      result: true,
      timestamp: new Date(),
      numberCode: myCode._SUCCESSFUL.numberCode,
      stringCode: myCode._SUCCESSFUL.stringCode,
      message: myCode._SUCCESSFUL.message,
      data: data || null,
      metaData: metaData || null,
    };
  }
}
