
     export function setupCameraAnimation(camera, controls) {
       let isUserInteracting = false;
       let lastInteractionTime = 0;
       
       controls.addEventListener('start', () => {
         isUserInteracting = true;
         lastInteractionTime = Date.now();
       });
       
       controls.addEventListener('end', () => {
         lastInteractionTime = Date.now();
       });
       
       function animateCamera() {
         requestAnimationFrame(animateCamera);
         
         if (!isUserInteracting && Date.now() - lastInteractionTime > 1000) {
           const time = Date.now() * 0.001;
           const radius = 5;
           camera.position.x = Math.sin(time * 0.2) * radius;
           camera.position.z = Math.cos(time * 0.2) * radius;
           camera.position.y = 2;
           camera.lookAt(0, 0, 0);
         }
         
         controls.update();
       }
       
       animateCamera();
     }
    