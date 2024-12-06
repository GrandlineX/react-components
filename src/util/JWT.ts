export type JwtToken<A extends Record<string, any>> = {
  exp: number;
  iat: number;
} & A;

export class JWT<A extends Record<string, any>> {
  private readonly token: string;

  private readonly exp: number;

  private iat: number;

  private readonly data: JwtToken<A>;

  constructor(token: string) {
    if (token.startsWith('Bearer ') || token.startsWith('bearer ')) {
      this.token = token.substring(7);
    } else {
      this.token = token;
    }
    this.data = JWT.parseJwt<A>(this.token);
    this.exp = this.data.exp;
    this.iat = this.data.iat;
  }

  static parseJwt<A extends Record<string, any> = any>(
    token: string,
  ): JwtToken<A> {
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

  getData(): JwtToken<A> {
    return this.data;
  }

  getToken(): string {
    return this.token;
  }

  getHeader(): string {
    return `Bearer ${this.getToken()}`;
  }
}
