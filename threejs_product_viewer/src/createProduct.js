
     export function createProduct() {
       const product = new THREE.Group();
       
       // Seat
       const seatGeo = new THREE.BoxGeometry(1, 0.2, 1);
       const seatMat = new THREE.MeshPhysicalMaterial({ color: 0x8b4513, roughness: 0.4, metalness: 0.1 });
       const seat = new THREE.Mesh(seatGeo, seatMat);
       seat.position.y = 0.9;
       seat.name = 'seat';
       seat.castShadow = true;
       product.add(seat);
       
       // Backrest
       const backrestGeo = new THREE.BoxGeometry(1, 0.8, 0.1);
       const backrestMat = new THREE.MeshPhysicalMaterial({ color: 0x8b4513, roughness: 0.4, metalness: 0.1 });
       const backrest = new THREE.Mesh(backrestGeo, backrestMat);
       backrest.position.set(0, 1.3, -0.45);
       backrest.name = 'backrest';
       backrest.castShadow = true;
       product.add(backrest);
       
       // Legs
       const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 32);
       const legMat = new THREE.MeshPhysicalMaterial({ color: 0x333333, roughness: 0.3, metalness: 0.5 });
       const positions = [[0.4, 0.4, 0.4], [0.4, 0.4, -0.4], [-0.4, 0.4, 0.4], [-0.4, 0.4, -0.4]];
       positions.forEach((pos, i) => {
         const leg = new THREE.Mesh(legGeo, legMat);
         leg.position.set(...pos);
         leg.name = `leg${i + 1}`;
         leg.castShadow = true;
         product.add(leg);
       });
       
       // Center the product
       product.position.set(0, 0, 0);
       
       // Pulsing animation
       product.userData.animate = () => {
         const time = Date.now() * 0.001;
         product.scale.set(1, 1 + Math.sin(time) * 0.02, 1);
       };
       
       return product;
     }
     