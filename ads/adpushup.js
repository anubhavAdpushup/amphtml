import {loadScript} from '../3p/3p';

export function adpushup(global, data) {
  loadScript(global, 'http://localhost:4566/js/script.js',()=>{
    console.log("loaded script successfully");
    adpushDisplayAd(global, data.width, data.height, data.slot, data.totalampslots);
  },()=>{
    console.log("errror occured while loading script");
  })

}

