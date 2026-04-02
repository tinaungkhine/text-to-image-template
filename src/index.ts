export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "xl stable diffusion base model, 4k, high quality, trending on artstation, cinematic lighting",
		};

		const response = await env.AI.run(
			"@cf/stabilityai/stable-diffusion-xl-base-1.0",
			inputs,
		);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
