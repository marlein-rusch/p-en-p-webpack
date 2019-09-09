export const closeMenu = () => ({
	type: 'CLOSEMENU'
});

export const openMenu = () => ({
	type: 'OPENMENU'
});

export const setMobile = boolean => ({
	type: 'SET_MOBILE',	
	boolean
});

// API 
export const loadMuseums = museums => ({
	type: 'LOAD_MUSEUMS',
	museums
});

export const loadAnnouncements = announcements => ({
	type: 'LOAD_ANNOUNCEMENTS',
	announcements
});

export const loadArchive = oldAnnouncements => ({
	type: 'LOAD_ARCHIVE',
	oldAnnouncements
});

