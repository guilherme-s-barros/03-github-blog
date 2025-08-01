import dayjs from 'dayjs'

export function format(date: string | Date) {
	return dayjs(date).format('DD/MM/YYYY [às] HH:mm')
}

export function timeRelativeToNow(date: string | Date) {
	return dayjs(date).fromNow()
}
