export interface UserInfo {
  IsAuthenticated: boolean;
  UserId: number;
  Username: string;
  Role: string;
  Token: string;
  ExpiresOn: Date;
}
