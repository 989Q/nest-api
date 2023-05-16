import { Controller, Get, Post, Body, Param, Put, Query } from "@nestjs/common";
import { EstateAgentService } from "../provider/estateAgent.service";

// google auth
import { OAuth2Client } from "google-auth-library"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "uri";

const client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
)

@Controller()
export class EstateAgentController {
  constructor(private readonly estateAgentService: EstateAgentService) {}

  @Post('/login')
  async login(@Body('token') token): Promise<any> {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const data = await this.estateAgentService.login({
      email: payload.email,
      name: payload.name,
      image: payload.picture,
    })
    return data;
  }
  
}
