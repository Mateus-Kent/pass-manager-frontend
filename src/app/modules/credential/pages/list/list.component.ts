import { Component, OnInit } from '@angular/core';
import { Credential } from '../../models/Credential';
import { User } from '../../../../modules/user/models/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  credentialList: Credential[] = [];

  fakeUser: User = {
    id: 1,
    email: 'adasd213@gmail.com',
    username: 'arthur 5050',
    password: '$2b$04$27eywCCJTv7SdUHTnRcnH.FuaZfcewG2wzdQ2U8k5EEcJVWgbXMPW',
    createdAt: '2023-03-06T18:37:18.516Z',
    updatedAt: '2023-03-06T18:37:18.516Z',
  };

  fakeCredentialList: Credential[] = [
    {
      id: 1,
      emailCredential: '8af349de44@fireboxmail.lol',
      usernameCredential: 'Mateus-Kent',
      credentialPassword:
        '$2b$04$27eywCCJTv7SdUHTnRcnH.FuaZfcewG2wzdQ2U8k5EEcJVWgbXMPW',
      websiteName: 'Amazon',
      websiteUrl: 'www.amazon.com.br',
      user: this.fakeUser,
      userId: 1,
      createdAt: new Date(2012, 0, 1),
      updatedAt: new Date(2012, 0, 1),
    },
    {
      id: 1,
      emailCredential: 'ae1ea12a3e@fireboxmail.lol',
      usernameCredential: 'Kent',
      credentialPassword:
        '$2b$04$27eywCCJTv7SdUHTnRcnH.FuaZfcewG2wzdQ2U8k5EEcJVWgbXMPW',
      websiteName: 'Discord',
      websiteUrl: 'www.discord.com.br',
      user: this.fakeUser,
      userId: 1,
      createdAt: new Date(2012, 0, 1),
      updatedAt: new Date(2012, 0, 1),
    },
    {
      id: 1,
      emailCredential: 'f42a034dcf@fireboxmail.lol',
      usernameCredential: 'mateus.quent',
      credentialPassword:
        '$2b$04$27eywCCJTv7SdUHTnRcnH.FuaZfcewG2wzdQ2U8k5EEcJVWgbXMPW',
      websiteName: 'Spotify',
      websiteUrl: 'www.spotify.com.br',
      user: this.fakeUser,
      userId: 1,
      createdAt: new Date(2012, 0, 1),
      updatedAt: new Date(2012, 0, 1),
    },
  ];

  ngOnInit() {}
}
