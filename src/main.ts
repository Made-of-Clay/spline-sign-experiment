import './style.css'
import { Application } from '@splinetool/runtime';

const button = document.querySelector('#controls button');

const canvas = document.createElement('canvas');
document.querySelector('#app')?.appendChild(canvas);

const spline = new Application(canvas);
await spline.load('https://prod.spline.design/F2IZ1YFA38UCNk-f/scene.splinecode');

button?.addEventListener('click', () => {
  const text = spline.findObjectByName('Text');
  if (!text) {
    console.error('Text object not found');
    return;
  }
  text.position.z = 3;
});