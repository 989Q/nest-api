import { Controller, Get, Post, Body, Param, Put, Query } from "@nestjs/common";
import { EstateAgentService } from "../provider/estateAgent.service";

// google auth
import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "uri";

const client = new OAuth2Client(
  GOOGLE_CLIENT_ID, 
  GOOGLE_CLIENT_SECRET,
);

@Controller()
export class EstateAgentController {
  // constructor(private readonly estateAgentService: EstateAgentService) {}
  constructor(private estateAgentService: EstateAgentService) {}

  @Post('/login')
  async login(@Body() userData: { id_token: string }): Promise<any> {
    // console.log('id_token: ', userData);

    try {
      const ticket = await client.verifyIdToken({
        idToken: userData.id_token,
        audience: GOOGLE_CLIENT_ID,
      });

      console.log('ticket: ', ticket);

      const payload = ticket.getPayload();

      // ____________________________________ doing

      const data = await this.estateAgentService.login({
        email: payload.email,
        name: payload.name,
        image: payload.picture
      })
      
      return data;

      // ____________________________________ work

      // const userId = payload.sub;
      // const email = payload.email;

      // // Extract any other required user data from the payload
      // console.log('payload', payload)

      // // Perform any necessary actions with the user data, such as creating a new user or logging them in
      // return { message: "Login successful" };
    } catch (error) {
      console.error("Error verifying id_token:", error);
    }
  }
}
