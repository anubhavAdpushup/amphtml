import {loadScript} from '../3p/3p';

export function adpushup(global, data) {
  
  loadScript(global, 'http://localhost:7777/js/script.js',()=>{
    adpushDisplayAd(global, data.width, data.height, data.siteid, data.slotpath, data.totalampslots);
  },()=>{
    console.log("errror occured while loading script");
  })

}

