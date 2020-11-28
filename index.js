console.log 
("whatev");
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';




function main(){
    let canvas = document.querySelector("#canvas");
    let renderer = new THREE.WebGLRenderer({canvas});  
    //the number of angles in between left and right
    let fieldOfVisionDegrees = 150;
    //the ratio of ratio of width to height
    let aspectRatio = 2;
    //degree of perceived close up perspective (ND >FD see more dimension of depth)
    let nearDistance = 0.1;
    let farDistance = 5;
    let camera = new THREE.PerspectiveCamera(
        fieldOfVisionDegrees,
        aspectRatio,
        nearDistance,
        farDistance,
    );
    //camera placement z moves front to back creating perceived depth - distance btwn viewer and object 
    camera.position.z = 1.5;
    camera.position.x = 2;
    camera.position.y = 2;

    let scene = new THREE.Scene();


    let boxWidth = 1;

    let boxHeight = 1;

    let boxDepth = 1;
    let boxGeometry = new THREE.BoxGeometry(
        boxWidth, 
        boxHeight,
        boxDepth
        );

    let boxMaterial = new THREE.MeshBasicMaterial(
       {color:0xffffff}
       );

    let cube = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(cube);

    renderer.render(scene, camera);

}

main();
