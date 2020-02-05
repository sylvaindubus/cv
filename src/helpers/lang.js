export const getLangFromUrl = () => {
	const url = new URL(window.location.href)
	return url.searchParams.get('lang')
}

export const getLangFromStorage = () => {
	return window.localStorage.getItem('lang')
}

export const setLangToStorage = lang => {
	return window.localStorage.setItem('lang', lang)
}