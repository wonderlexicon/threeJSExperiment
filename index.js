console.log 
("whatev");
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';




function main(){
    let canvas = document.querySelector("#canvas");
    let renderer = new THREE.WebGLRenderer({canvas});  
    //the number of angles in between left and right
    let fieldOfVisionDegrees = 75;
    //the ratio of ratio of width to height
    let aspectRatio = 2.3;
    //degree of perceived close up perspective (ND >FD see more dimension of depth)
    let nearDistance = 0.1;
    let farDistance = 3.5;
    let camera = new THREE.PerspectiveCamera(
        fieldOfVisionDegrees,
        aspectRatio,
        nearDistance,
        farDistance,
    );
    //camera placement z moves front to back creating perceived depth - distance btwn viewer and object 
    camera.position.z = 2.1;
    camera.position.x = 1.5;
    camera.position.y = .01;

    let scene = new THREE.Scene();
    {
        let lightColor = 0xffffff; 
        let lightIntensity = 1;
        let light = new THREE.DirectionalLight(
            lightColor,
            lightIntensity,
        );
        light.position.set(-1,2,4);
        scene.add(light);
    }



    let boxWidth = 1;

    let boxHeight = 1;

    let boxDepth = 1;
    let boxGeometry = new THREE.BoxGeometry(
        boxWidth, 
        boxHeight,
        boxDepth
        );

    let boxMaterial = new THREE.MeshPhongMaterial(
       {color:0xfff888}
       );

    let cube = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(cube);
    function render(timeStamp){
        timeStamp = timeStamp * 0.001;
        cube.rotation.x = timeStamp;
        cube.rotation.y = timeStamp;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    
    }
  requestAnimationFrame(render);
}

main();
