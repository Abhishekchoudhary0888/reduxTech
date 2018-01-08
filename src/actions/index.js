export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementFn = () => {
	return {
		type: INCREMENT
	}
}

export const decrementFn = () => {
	return {
		type: DECREMENT
	}
}