export interface JwtToken extends Record<string, unknown> {
  exp: number;
  iat: number;
}
export class JWT {
  private readonly token: string;

  private readonly exp: number;

  private iat: number;

  private readonly data: JwtToken;

  constructor(token: string) {
    if (token.startsWith('Bearer ') || token.startsWith('bearer ')) {
      this.token = token.substring(7);
    } else {
      this.token = token;
    }
    this.data = JWT.parseJwt(this.token);
    this.exp = this.data.exp;
    this.iat = this.data.iat;
  }

  static parseJwt(token: string): JwtToken {
    const base64Payload = token.split('.')[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload.toString());
  }

  isExpired(): boolean {
    return this.exp < Date.now() / 1000;
  }

  getExpireDate(): Date {
    const date = new Date(0);
    date.setUTCSeconds(this.exp);
    return date;
  }

  getData(): JwtToken {
    return this.data;
  }

  getToken(): string {
    return this.token;
  }
}
