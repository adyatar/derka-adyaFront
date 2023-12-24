export interface TokenRequest {
    grantType: string;
    email: string;
    password: string;
    withRefreshToken?: boolean;
    refreshToken?: string;
  }