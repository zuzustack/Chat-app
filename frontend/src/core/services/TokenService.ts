const ID_TOKEN_KEY = "id_token" as string;

export default class TokenService {
  public static setToken(token: string) {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
  }

  public static getToken(): string | null {
    return window.localStorage.getItem(ID_TOKEN_KEY);
  }
}
