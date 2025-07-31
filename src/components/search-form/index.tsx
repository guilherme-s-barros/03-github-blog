import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { usePosts } from '../../hooks/use-posts'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
	const fetchPosts = usePosts('fetchPosts')

	const { handleSubmit, register } = useForm({
		resolver: zodResolver(searchFormSchema),
	})

	async function handleSearchPosts(data: SearchFormInputs) {
		await fetchPosts({ query: data.query })
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
