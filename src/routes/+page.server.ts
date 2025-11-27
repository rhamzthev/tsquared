import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import { GMAIL_USER, GMAIL_APP_PASSWORD } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const service = data.get('service')?.toString();
		const message = data.get('message')?.toString();

		// Validate form data
		if (!name || !email || !service || !message) {
			return fail(400, { error: 'All fields are required.' });
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, { error: 'Please provide a valid email address.' });
		}

		try {
			// Configure nodemailer transporter for Gmail
			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 587,
				secure: false, // Use TLS
				auth: {
					user: GMAIL_USER,
					pass: GMAIL_APP_PASSWORD
				}
			});

			// Email content
			const mailOptions = {
				from: GMAIL_USER,
				to: GMAIL_USER, // Send to yourself
				replyTo: email, // Allow easy reply to the client
				subject: `New inquiry from ${name} - ${service}`,
				html: `
					<h3>New Contact Form Submission</h3>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Service:</strong> ${service}</p>
					<p><strong>Message:</strong></p>
					<p>${message.replace(/\n/g, '<br>')}</p>
				`
			};

			// Send email
			await transporter.sendMail(mailOptions);

			return { success: true };
		} catch (error) {
			console.error('Email sending error:', error);
			return fail(500, { 
				error: 'Failed to send email. Please try again or contact us directly at rhamzthev@gmail.com' 
			});
		}
	}
} satisfies Actions;

