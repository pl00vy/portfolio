import type { PageServerLoad } from './$types'
import { faq } from '$lib/faq'

export const load:PageServerLoad = ({ params }) => {
    return { faq }
}