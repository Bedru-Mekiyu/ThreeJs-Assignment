
     export function setupInteraction(scene, camera, renderer, product) {
       const raycaster = new THREE.Raycaster();
       const mouse = new THREE.Vector2();
       const infoPanel = document.getElementById('info-panel');
       
       function onMouseMove(event) {
         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
         
         raycaster.setFromCamera(mouse, camera);
         const intersects = raycaster.intersectObject(product, true);
         
         product.traverse((child) => {
           if (child.isMesh) child.scale.set(1, 1, 1);
         });
         
         if (intersects.length > 0) {
           const mesh = intersects[0].object;
           mesh.scale.set(1.05, 1.05, 1.05);
         }
       }
       
       function onMouseClick(event) {
         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
         
         raycaster.setFromCamera(mouse, camera);
         const intersects = raycaster.intersectObject(product, true);
         
         if (intersects.length > 0) {
           const mesh = intersects[0].object;
           const originalColor = mesh.material.color.clone();
           mesh.material.color.set(0xff0000);
           setTimeout(() => mesh.material.color.copy(originalColor), 500);
           
           infoPanel.textContent = `Clicked: ${mesh.name}`;
           infoPanel.classList.remove('opacity-0');
           setTimeout(() => infoPanel.classList.add('opacity-0'), 2000);
         }
       }
       
       window.addEventListener('mousemove', onMouseMove);
       window.addEventListener('click', onMouseClick);
     }
     