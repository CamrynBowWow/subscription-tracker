import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD, TEST_EMAIL } from './env.js';

export const accountEmail = TEST_EMAIL;

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: accountEmail,
		pass: EMAIL_PASSWORD,
	},
});

export default transporter;
