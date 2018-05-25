import { SET_CURRENT_SCREEN, SET_CURRENT_TAB } from "../config/redux-events";

const initialState = {
    screen: "Home",
    TASKS: [
        {
            tripType: 'Public Trans.',
            tripCount: 1,
            image: require('../assets/IMG_3977.png'),
            date: '04-22-18'
        },
        {
            tripType: 'Active',
            tripCount: 1,
            image: require('../assets/IMG_3978.png'),
            date: '04-22-18'
        },
        {
            tripType: 'Carpool',
            tripCount: 1,
            image: require('../assets/IMG_3979.png'),
            date: '04-22-18'
        }
    ],
    count: 3,
    firstTrip: false,
    firstCarpool: false,
    firstPublicTrans: false,
    name: "Cole Shepherd",
    address: "123 Happy Street. Logan, Utah.",
    goal: "Do good."
};

export default function screenTracking(state = initialState, action = {}) {
    switch (action.type) {
        case SET_CURRENT_SCREEN:
            return {
                ...state,
                screen: action.data
            };
        case 'ADDTASK':
            mytasks = []

            count = state.count

            state.TASKS.forEach(element => {
                mytasks.push(element);
            });

            newTask = { 
                tripType: action.tripType,
                tripCount: action.tripCount,
                image: action.image,
                date: action.date
            }

            mytasks.splice(0,0,newTask);

            return {...state, TASKS: mytasks, count: count + parseInt(newTask.tripCount)};
        case 'SETFIRSTTRIP':
        return {
            ...state,
            firstTrip: action.firstTrip
        };
        case 'SETFIRSTCARPOOL':
        return {
            ...state,
            firstCarpool: action.firstCarpool
        };
        case 'SETFIRSTPUBLIC':
        return {
            ...state,
            firstPublicTrans: action.firstPublicTrans
        };
        case 'UPDATESETTINGS':
        return {
            ...state,
            name: action.name,
            address: action.address,
            goal: action.goal
        };
        default:
            return state;
    }
}
