import { User } from '../../user/models/User';

export interface Credential {
  id: number;
  emailCredential: string;
  usernameCredential: string;
  credentialPassword: string;
  websiteName: string;
  websiteUrl: string;
  user: User;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
