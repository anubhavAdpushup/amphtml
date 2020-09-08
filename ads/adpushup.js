import {loadScript} from '../3p/3p';

export function adpushup(global, data) {
  
  loadScript(global, 'http://localhost:4566/js/script.js',()=>{
    console.log("loaded script successfully");
    adpushDisplayAd(data.width, data.slot, data.height, global);
  },()=>{
    console.log("errror occured while loading script");
  })

}

