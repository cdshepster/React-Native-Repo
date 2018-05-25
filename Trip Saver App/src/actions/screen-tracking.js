
import { SET_CURRENT_SCREEN, SET_CURRENT_TAB } from "../config/redux-events";

export function setScreen(name) {
  return {
    type: SET_CURRENT_SCREEN,
    data: name
  };
}

export function addTask(newTask) {
    return {
      type: 'ADDTASK',
      tripType: newTask.type,
      tripCount: newTask.tripCount,
      image: newTask.image,
      date: newTask.date
    };
  }
  export function setFirstTrip() {
    return {
      type: 'SETFIRSTTRIP',
      firstTrip: true
    };
  }
  export function setFirstPublic() {
    return {
      type: 'SETFIRSTPUBLIC',
      firstPublicTrans: true
    };
  }
  export function setFirstCarpool() {
    return {
      type: 'SETFIRSTCARPOOL',
      firstCarpool: true
    };
  }

  export function updateSettings(name, address, goal) {
    return {
      type: 'UPDATESETTINGS',
      name: name,
      address: address,
      goal: goal
    };
  }

