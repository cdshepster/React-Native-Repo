import {
  StackNavigator,
  NavigationActions,
  DrawerNavigator,
} from "react-navigation";

import Home from "../components/HomeScreen";
import Rewards from "../components/Rewards"
import History from "../components/History"
import About from "../components/About"
import Settings from "../components/settings";
import Map from "../components/Map";

import * as COLOR from "./colors";

import DrawerContainer from "../components/drawer";

const HomeItem = StackNavigator({
  Home: {
    screen: Home
  }
});

const RewardItem = StackNavigator({
    Rewards: {
      screen: Rewards
    }
  });
  const HistoryItem = StackNavigator({
    History: {
      screen: History
    }
  });
  const AboutItem = StackNavigator({
    About: {
      screen: About
    }
  });

const SettingsItem = StackNavigator({
  Settings: {
    screen: Settings
  }
});
const MapItem = StackNavigator({
    Settings: {
      screen: Map
    }
  });

export const MainStack = DrawerNavigator(
  {
    HomeItem: {
      screen: HomeItem
    },
    RewardItem: {
        screen: RewardItem
    },
    HistoryItem: {
        screen: HistoryItem
    },
    AboutItem: {
        screen: AboutItem
    },
    SettingsItem: {
      screen: SettingsItem
    },
    MapItem: {
        screen: MapItem
      }
  },
  { contentComponent: DrawerContainer }
);

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

MainStack.router.getStateForAction = navigateOnce(
  MainStack.router.getStateForAction
);
