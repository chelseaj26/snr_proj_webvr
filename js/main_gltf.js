// Module imports
//

import * as THREE from '../node_modules/three/build/three.module.js';

import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

const myWorldObj = document.getElementById('myWorld');

// SCENE required 1 of 3
const scene = new THREE.Scene();
// customize some scene props
scene.background = new THREE.Color(0x355E3B);

// Add Light to scene .. REQUIRED for 3d models
const ambLight = new THREE.AmbientLight(0x101010, 25);
scene.add(ambLight);

// ADD SPOTLIGHT
const spotLight = new THREE.SpotLight( 0xffffff);
spotLight.position.set( 100, 1000, 200);

scene.add( spotLight );


const camera = new THREE.PerspectiveCamera(45, myWorldObj.scrollWidth / myWorldObj.scrollHeight, 1, 1000);

camera.position.z = 5;

// RENDER required 3 of 3
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(myWorldObj.scrollWidth, myWorldObj.scrollHeight);
myWorldObj.appendChild(renderer.domElement);

let modelObj;

// Load a glTF resource
const loaderObj = new GLTFLoader().setPath('./media/tiger/');
loaderObj.load(
  'tiger.gltf',
  function ( gltf ) {
    modelObj = gltf.scene;
    scene.add(modelObj);
    modelObj.position.y = -0.70;
    modelObj.position.x =-1.3;
    modelObj.position.z =1.2;
  },
  // While loading is processing
  function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },
  // called if loading error
  function ( error ) {
    console.log ('An error happened ' + error);
  }
);

function controlsRender() {
  renderer.render(scene, camera);
}

//Makes the cubemap/skybox environment
  {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([ 
      'media/images/px.png',
      'media/images/nx.png',
      'media/images/py.png',
      'media/images/ny.png',
      'media/images/pz.png',
      'media/images/nz.png'
    ]);
    scene.background = texture;
  }

let controlsObj = new OrbitControls(camera, myWorldObj);
controlsObj.minDistance = 3.0; //the lower the number, the closer it zooms
controlsObj.maxDistance = 8.0; //the higher the number, the further it zooms
controlsObj.minPolarAngle = Math.PI/2; //restricts orbit; cannot see ABOVE object
controlsObj.maxPolarAngle = Math.PI/2; //restricts orbit; cannot see UNDER object
controlsObj.addEventListener('change', controlsRender);


// Auto LOOP
// Create JS function that auto LOOPS
const animate = function () {
  requestAnimationFrame(animate);

  if (modelObj) {
    // modelObj.rotation.y += 0.015;
    
  }
  renderer.render(scene, camera);
};
animate();


