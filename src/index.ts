export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "ultra realistic portrait of a cat, 4k, high quality, detailed, sharp focus",
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
