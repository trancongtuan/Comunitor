import { Api } from "redux/api/api";
import { API_CONFIG } from "redux/type";

export default class LoginService extends Api {
  /**
   * Constructor
   */
  public constructor() {
    super(API_CONFIG);
  }

  public login = (
    email: string,
    password: string
  ): Promise<{
    data: { tokenId: string };
  }> => this.post("/auth/login",  { login: email, password });
}
