import store from '../store';
import { setMobile } from '../store/session/actions';

function resize() {
    const isMobileScreenSize = window.matchMedia('(max-width: 991.98px)').matches;
	if (store.getState().session.isMobile !== isMobileScreenSize) {
		store.dispatch(setMobile(isMobileScreenSize));
	}
}

window.onresize = resize;
resize();
