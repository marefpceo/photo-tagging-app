import beach from '../assets/images/beach_waldo.jpeg';
import store from '../assets/images/department_store_waldo.jpg';
import mountain from '../assets/images/snow_mountain_waldo.jpeg';
import waldo from '../assets/images/waldo.jpg';
import odlaw from '../assets/images/odlaw.jpg';

export const imageList = [
  {
    id: 'img-1',
    imgSrc: beach,
    title: 'Beach',
    width: 3000,
    height: 1926,
    characters: [
      {
        characterId: 'char-1',
        name: 'Waldo',
        icon: waldo,
      },
      {
        characterId: 'char-2',
        name: 'Odlaw',
        icon: odlaw,
      },
    ],
  },
  {
    id: 'img-2',
    imgSrc: store,
    title: 'Department Store',
    width: 2800,
    height: 1760,
    characters: [
      {
        characterId: 'char-1',
        name: 'Waldo',
        icon: waldo,
      },
      {
        characterId: 'char-2',
        name: 'Odlaw',
        icon: odlaw,
      },
    ],
  },
  {
    id: 'img-3',
    imgSrc: mountain,
    title: 'Snow Mountain',
    width: 3000,
    height: 1902,
    characters: [
      {
        characterId: 'char-1',
        name: 'Waldo',
        icon: waldo,
      },
      {
        characterId: 'char-2',
        name: 'Odlaw',
        icon: odlaw,
      },
    ],
  },
];
