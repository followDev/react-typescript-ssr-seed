/* eslint-disable @typescript-eslint/camelcase */
import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { JwtPayload } from './interfaces/jwt-payload.interface';

// config
import { GITHUB_CONFIG, JWT_SECRET } from './config';

@Injectable()
export class AuthService {
	async createToken(code, state) {
		const { clientID, clientSecret, callbackURL } = GITHUB_CONFIG;
		const githubToken = await axios({
			method: 'post',
			headers: {
				Accept: 'application/json'
			},
			url: 'https://github.com/login/oauth/access_token',
			data: {
				code,
				state,
				client_id: clientID,
				client_secret: clientSecret,
				redirect_uri: callbackURL
			}
		});
		const {
			error,
			error_description,
			access_token,
			token_type
		} = githubToken.data;
		if (error) {
			return {
				error: true,
				title: error,
				error_description
			};
		}
		const getUserInfo: any = await axios.get('https://api.github.com/user', {
			headers: {
				Authorization: `${token_type} ${access_token}`
			}
		});
		const idToken = jwt.sign(getUserInfo.data, access_token, { expiresIn: 5 });
		return {
			...this.refreshToken(access_token),
			idToken
		};
	}

	async refreshToken(lastToken) {
		const expiresIn = process.env.NODE_ENV === 'development' ? 555 : 5;
		const time = new Date().getTime();
		const accessToken = jwt.sign({
			time
		}, JWT_SECRET, { expiresIn });
		return {
			accessToken,
			expiresIn
		};
	}

	async validateUser(payload: JwtPayload): Promise<any> {
		// put some validation logic here
		// for example query user by id/email/username
		return {};
	}
}
