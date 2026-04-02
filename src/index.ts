export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "isometric view of a futuristic city at sunset, with flying cars and neon lights, in the style of cyberpunk art",
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
