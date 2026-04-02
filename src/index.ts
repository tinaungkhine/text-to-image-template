export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "hyper realistic portrait of a cat wearing a suit and tie, 4k, studio lighting",
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
