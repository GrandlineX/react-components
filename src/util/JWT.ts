export type JwtToken<A extends Record<string, any>> = {
  exp: number;
  iat: number;
} & A;

/**
 * A class to handle JWT tokens.
 */
export class JWT<A extends Record<string, any>> {
  private readonly token: string;

  private readonly exp: number;

  private iat: number;

  private readonly data: JwtToken<A>;

  /**
   * Creates a new JWT instance.
   * @param token - The JWT token string.
   */
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

  /**
   * Parses a JWT token string and returns the payload as an object.
   * @param token - The JWT token string.
   * @returns The parsed JWT payload.
   */
  static parseJwt<A extends Record<string, any> = any>(
    token: string,
  ): JwtToken<A> {
    const base64Payload = token.split('.')[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload.toString());
  }

  /**
   * Checks if the JWT token is expired.
   * @returns True if the token is expired, false otherwise.
   */
  isExpired(): boolean {
    return this.exp < Date.now() / 1000;
  }

  /**
   * Gets the expiration date of the JWT token.
   */
  getExpireDate(): Date {
    const date = new Date(0);
    date.setUTCSeconds(this.exp);
    return date;
  }

  /**
   * Gets the json data contained in the JWT token.
   */
  getData(): JwtToken<A> {
    return this.data;
  }

  /**
   * Gets the token string. Will not include the "Bearer " prefix.
   */
  getToken(): string {
    return this.token;
  }

  /**
   * Gets the token string with the "Bearer " prefix.
   */
  getHeader(): string {
    return `Bearer ${this.getToken()}`;
  }
}
