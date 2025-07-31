import z from 'zod'

const envSchema = z.object({
	VITE_GITHUB_USERNAME: z.string().min(1),
	VITE_GITHUB_REPO: z.string().min(1),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
	console.error('Invalid environment variables:', z.treeifyError(_env.error))
	throw new Error('Invalid environment variables')
}

export const env = _env.data
