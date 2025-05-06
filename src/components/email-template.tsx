import {
	Body,
	Container,
	Head,
	Html,
	Section,
	Text,
	Tailwind,
} from '@react-email/components'
import * as React from 'react'

export default function EmailTemplate({
	fullName,
	phoneNumber,
	email,
	message,
}: {
	fullName: string
	phoneNumber: string
	email: string
	message: string
}) {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body style={main}>
					<Container style={container}>
						<Section style={{ section } as React.CSSProperties}>
							<Text style={{ text } as React.CSSProperties}>
								<strong>Name: </strong>
								{fullName}
							</Text>
							<Text style={{ text } as React.CSSProperties}>
								<strong>Phone: </strong>
								{phoneNumber}
							</Text>
							<Text style={{ text } as React.CSSProperties}>
								<strong>Email: </strong>
								{email}
							</Text>
							<Text style={{ text } as React.CSSProperties}>
								<strong>Message: </strong>
								{message}
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}

const main = {
	backgroundColor: '#ffffff',
	color: '#24292e',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
}

const container = {
	maxWidth: '480px',
	margin: '0 auto',
	padding: '20px 0 48px',
}

const section = {
	padding: '24px',
	border: 'solid 1px #dedede',
	borderRadius: '5px',
	textAlign: 'center',
}

const text = {
	margin: '0 0 10px 0',
	textAlign: 'left',
}
