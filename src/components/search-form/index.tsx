import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { SearchFormContainer } from './styles'

import type { FetchOptions } from '../../interfaces/http'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
	onSearch(params: FetchOptions): Promise<void>
}

export function SearchForm({ onSearch }: SearchFormProps) {
	const { handleSubmit, register } = useForm({
		resolver: zodResolver(searchFormSchema),
	})

	async function handleSearchPosts(data: SearchFormInputs) {
		await onSearch({ query: data.query })
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
			<input
				type="search"
				placeholder="Buscar publicações"
				{...register('query')}
			/>
		</SearchFormContainer>
	)
}
