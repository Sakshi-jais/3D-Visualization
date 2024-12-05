import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import roomTexture from './images/room.png';
import boxTexture from './images/abstract.png';


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new  THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 2000 );
const orbit = new OrbitControls( camera, renderer.domElement);
camera.position.z =100;


scene.add(camera);
const textureLoader = new THREE.TextureLoader();

const roomGeo = new THREE.SphereGeometry( 1000, 64, 64 ); 
const roomMat = new THREE.MeshBasicMaterial({ 
    map : textureLoader.load(roomTexture), 
    side: THREE.DoubleSide
    
}); 
const room = new THREE.Mesh( roomGeo, roomMat );
 scene.add( room );

const boxGeo = new THREE.BoxGeometry( 50, 50, 50 ); 
const boxMat = new THREE.MeshBasicMaterial({ 
    map : textureLoader.load(boxTexture), 
    
}); 
const box = new THREE.Mesh( boxGeo, boxMat );
 scene.add( box );



function animate (){
    orbit.update();
    box.rotation.x += 0.01;
    box.rotation.x += 0.01;
    box.rotation.x += 0.01;

    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);
window.addEventListener('resize',function(){
    camera.aspect= window.innerWidth/this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);

})

