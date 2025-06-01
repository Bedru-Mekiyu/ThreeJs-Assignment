
     export function addLighting(scene) {
       const ambient = new THREE.AmbientLight(0xffffff, 0.3);
       scene.add(ambient);
       
       const spotLight = new THREE.SpotLight(0xffffff, 0.8);
       spotLight.position.set(2, 3, 2);
       spotLight.castShadow = true;
       spotLight.shadow.mapSize.set(1024, 1024);
       spotLight.shadow.camera.near = 0.5;
       spotLight.shadow.camera.far = 10;
       scene.add(spotLight);
     }
     