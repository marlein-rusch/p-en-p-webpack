import { actionTypes } from './types';

export const doTest = test => ({
	type: actionTypes.TEST,
	test
});
