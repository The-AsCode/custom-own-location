import MapList from './components/MapList';
import CreateMaps from './components/maps/CreateMaps';

export default [
  {
    path: "/",
    component: MapList,
    exact: true,
  },
  {
    path: "/create-map",
    component: CreateMaps,
  },
];
