export const initialState = {
    announcements: null,
    archive: null,
    isMobile: true,
    menuItems: [
        {
            category: 'over-ons',
            subcategories: ['verenigingsgeschiedenis', 'ateliergebruik', 'archief']
        },
        {
            category: 'lessen-en-activiteiten',
            subcategories: ['lessen', 'activiteiten', 'groepen', 'artistieke-begeleiding']
        },
        {
            category: 'prikbord',
            subcategories: ['nieuwtjes', 'musea']
        },
        {
            category: 'lidmaatschap',
            subcategories: ['kosten', 'informatie', 'aanmelden-als-lid']
        },
        {
            category: 'contact',
            subcategories: []
        }   
    ],
    museums: null,
    mobileMenuIsOpen: false
};

const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
        case 'CLOSEMENU':
        case 'OPENMENU':
            return {
                ...state,
                mobileMenuIsOpen: action.type === 'OPENMENU'
            };
        case 'SET_MOBILE':
            return {
                ...state,
                isMobile: action.boolean
            };
        // API
        case 'LOAD_ARCHIVE': {
            return {
                ...state,
                archive: action.oldAnnouncements
            }
        }
        case 'LOAD_ANNOUNCEMENTS': {
            return {
                ...state,
                announcements: action.announcements
            }
        }
        case 'LOAD_MUSEUMS': {
            return {
                ...state,
                museums: action.museums
            }
        }
        default:
			return state;
    }
};

export default sessionReducer;
