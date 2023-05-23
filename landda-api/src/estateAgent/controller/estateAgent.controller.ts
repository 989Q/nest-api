// create estateAgent.controller.ts

import { Controller, Get, Post, Body, Param, Put, Query } from "@nestjs/common";
import { EstateAgentService } from "../provider/estateAgent.service";

// google auth
import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "uri";

const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);

@Controller()
export class EstateAgentController {
  // constructor(private readonly estateAgentService: EstateAgentService) {}
  constructor(private estateAgentService: EstateAgentService) {}

  @Post("/login")
  async login(@Body() userData: { id_token: string }): Promise<any> {
    // console.log('id_token: ', userData);

    try {
      const ticket = await client.verifyIdToken({
        idToken: userData.id_token,
        audience: GOOGLE_CLIENT_ID,
      });

      console.log('__________ ticket: ', ticket);

      const payload = ticket.getPayload();

      const { user, token } = await this.estateAgentService.login({
        email: payload.email,
        // name: payload.name,
        name: 'salmon',
        image: payload.picture
      })

      const response = { user, token }
      console.log('__________ response: ', response);

      return { user, accessToken: token };
      // return { token };

    } catch (error) {
      console.error("Error verifying id_token:", error);
    }
  }
  
  // async login(@Body() userData: { id_token: string }): Promise<any> {
  //   try {
  //     const ticket = await client.verifyIdToken({
  //       idToken: userData.id_token,
  //       audience: GOOGLE_CLIENT_ID,
  //     });

  //     const payload = ticket.getPayload();

  //     const { user, token } = await this.estateAgentService.login({
  //       email: payload.email,
  //       name: "salmon",
  //       image: payload.picture,
  //     });

  //     const response = { ...user.toObject(), accessToken: token };
  //     return response;
  //   } catch (error) {
  //     console.error("Error verifying id_token:", error);
  //   }
  // }
}
