import MapList from './components/MapList';
import CreateMaps from './components/maps/CreateMaps';
import EditMap from './components/maps/EditMap';

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
  {
    path: "/edit-map/:id",
    component: EditMap,
  },
];
