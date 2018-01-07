
export const HELLO_WORLD = 'HELLO_WORLD';

export const helloWorld = () => {
	console.log('helloworld action');
	
	return {
		type: HELLO_WORLD
	}
}