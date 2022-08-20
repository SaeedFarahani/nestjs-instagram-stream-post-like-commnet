import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IgApiClient } from 'instagram-private-api';

@Injectable()
export class CommentLikeService {
    private logger = new Logger(CommentLikeService.name);

    constructor(
        private readonly configService: ConfigService,
    ) { }

    async monitorComments() {
        /// Read env instagram credentials
        const username = this.configService.get('IG_USERNAME');
        const password = this.configService.get('IG_PASSWORD');
        
        this.logger.log(`Logged in as ${username} - ${password}`);


        /// Generate [IgApiClient]
        const client = new IgApiClient();
        client.state.generateDevice(username);

        /// Login into Instagram with given credentials
        await client.simulate.preLoginFlow();
        const user = await client.account.login(username, password);
        this.logger.log(`Logged in as ${user.username}`);
        return `Welcome ${user.username} - ${user.full_name}!`;
    }
}
