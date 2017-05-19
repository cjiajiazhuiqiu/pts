import {Vector, Matrix} from 'vectorious';
import {Pt} from './Pt';
import {Pts} from './Pts';
import CanvasSpace from "./CanvasSpace";

window["Pt"] = Pt;
window["Pts"] = Pts;

var canvas = new CanvasSpace("#pt");
console.log(canvas);
canvas.setup({bgcolor: "#f00", resize: false });

/*
let vec = new Vector( [1000, 2, 3] ).add( new Vector( [2, 3, 4] ) );
console.log(vec.toString());

setInterval( () => vec.add( new Vector( [ 1, 2, 3 ]) ), 500 );

let m1 = Matrix.identity(3);
let m2 = Matrix.identity(3);


console.log( Matrix.add(m1, m2).toString() );

let pts = new Pts();
console.log( pts );
*/

// console.log(pts.toString());
// pts.pt(1,2,3);
// pts.pt(2,3,4);
// console.log(pts.toString());
// console.log( Matrix.augment(m1, m2).toString() );