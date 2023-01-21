const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color("#979797");
renderer.setSize( 1920, 1080 );
document.body.appendChild( renderer.domElement );

//Setting Textures
const woodTexture = new THREE.TextureLoader().load( 'assets/textures/wood.jpg');
const concreteTexture = new THREE.TextureLoader().load( 'assets/textures/cement.jpg');
const glossTexture = new THREE.TextureLoader().load( 'assets/textures/gloss.jpg')


//Setting Lighting
const bulblight = new THREE.PointLight( 0xffffff, 1, 20 );
bulblight.position.set( -0.88, 0.92, 1 );
scene.add( bulblight );

const headlight1 = new THREE.SpotLight( 0xffffff );
headlight1.position.set( -0.34, -0.05, 0.5 );
headlight1.target.position.set(2, -0.05, 0);
headlight1.castShadow = true;
scene.add( headlight1 );
scene.add( headlight1.target );

const headlight2 = new THREE.SpotLight( 0xffffff );
headlight2.position.set( -0.34, -0.12, 0.5 );
headlight2.target.position.set(2, -0.12, 0);
headlight2.castShadow = true;
scene.add( headlight2 );
scene.add( headlight2.target );


// Start of Floor
const floorGeometry = new THREE.PlaneGeometry( 2, 1 );
const floorMaterial = new THREE.MeshLambertMaterial( {color: 0x505050, side: THREE.DoubleSide, map: concreteTexture} );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.position.y = -0.75;
scene.add( floor );
// End of Floor


// Start of Shelf

// Shelf 1
const shelf1Geometry = new THREE.PlaneGeometry( 1, 0.05 );
const shelf1Material = new THREE.MeshLambertMaterial( {color: 0x503307, side: THREE.DoubleSide, map: woodTexture} );
const shelf1 = new THREE.Mesh( shelf1Geometry, shelf1Material );
shelf1.position.y = 0.70;
shelf1.position.x = -0.35;
scene.add( shelf1 );

const shelf_h1_1Geometry = new THREE.PlaneGeometry( 0.02, 0.05 );
const shelf_h1_1Material = new THREE.MeshPhongMaterial( {color: 0x362305, side: THREE.DoubleSide, map: woodTexture} );
const shelf_h1_1 = new THREE.Mesh( shelf_h1_1Geometry, shelf_h1_1Material );
shelf_h1_1.position.y = 0.65;
shelf_h1_1.position.x = -0.75;
scene.add( shelf_h1_1 );

const shelf_h2_1Geometry = new THREE.PlaneGeometry( 0.02, 0.05 );
const shelf_h2_1Material = new THREE.MeshPhongMaterial( {color: 0x362305, side: THREE.DoubleSide, map: woodTexture} );
const shelf_h2_1 = new THREE.Mesh( shelf_h2_1Geometry, shelf_h2_1Material );
shelf_h2_1.position.y = 0.65;
shelf_h2_1.position.x = 0.05;
scene.add( shelf_h2_1 );

// Shelf2
const shelf2Geometry = new THREE.PlaneGeometry( 1, 0.05 );
const shelf2Material = new THREE.MeshPhongMaterial( {color: 0x503307, side: THREE.DoubleSide, map: woodTexture} );
const shelf2 = new THREE.Mesh( shelf2Geometry, shelf2Material );
shelf2.position.y = 0.40;
shelf2.position.x = -0.35;
scene.add( shelf2 );

const shelf_h1_2Geometry = new THREE.PlaneGeometry( 0.02, 0.05 );
const shelf_h1_2Material = new THREE.MeshPhongMaterial( {color: 0x362305, side: THREE.DoubleSide, map: woodTexture} );
const shelf_h1_2 = new THREE.Mesh( shelf_h1_2Geometry, shelf_h1_2Material );
shelf_h1_2.position.y = 0.35;
shelf_h1_2.position.x = -0.75;
scene.add( shelf_h1_2 );

const shelf_h2_2Geometry = new THREE.PlaneGeometry( 0.02, 0.05 );
const shelf_h2_2Material = new THREE.MeshPhongMaterial( {color: 0x362305, side: THREE.DoubleSide, map: woodTexture} );
const shelf_h2_2 = new THREE.Mesh( shelf_h2_2Geometry, shelf_h2_2Material );
shelf_h2_2.position.y = 0.35;
shelf_h2_2.position.x = 0.05;
scene.add( shelf_h2_2 );

// End of Shelf


// Start of Table

//Desk Stands
const desk_s1Geometry = new THREE.PlaneGeometry( 0.04, 0.45 );
const desk_s1Material = new THREE.MeshPhongMaterial( {color: 0x563707, side: THREE.DoubleSide, map: woodTexture} );
const desk_s1 = new THREE.Mesh( desk_s1Geometry, desk_s1Material );
desk_s1.position.y = -0.17;
desk_s1.position.x = -0.5;
scene.add( desk_s1 );

const desk_s2Geometry = new THREE.PlaneGeometry( 0.04, 0.45 );
const desk_s2Material = new THREE.MeshPhongMaterial( {color: 0x563707, side: THREE.DoubleSide, map: woodTexture} );
const desk_s2 = new THREE.Mesh( desk_s2Geometry, desk_s2Material );
desk_s2.position.y = -0.17;
desk_s2.position.x = 0.2;
scene.add( desk_s2 );

//Desk
const deskGeometry = new THREE.PlaneGeometry( 0.8, 0.08 );
const deskMaterial = new THREE.MeshPhongMaterial( {color: 0x6D4509, side: THREE.DoubleSide, map: woodTexture} );
const desk = new THREE.Mesh( deskGeometry, deskMaterial );
desk.position.y = 0.03;
desk.position.x = -0.15;
scene.add( desk );

// End of Table


// Start of Door

//Door Frame
const door_fGeometry = new THREE.PlaneGeometry( 0.37, 1 );
const door_fMaterial = new THREE.MeshStandardMaterial( {color: 0x6A6A6A, side: THREE.DoubleSide} );
const door_f = new THREE.Mesh( door_fGeometry, door_fMaterial );
door_f.position.y = 0.44;
door_f.position.x = 0.60;
scene.add( door_f );

//Door
const window_pGeometry = new THREE.PlaneGeometry( 0.33, 1 );
const window_pMaterial = new THREE.MeshStandardMaterial( {color: 0xD6D6D6, side: THREE.DoubleSide} );
const window_p = new THREE.Mesh( window_pGeometry, window_pMaterial );
window_p.position.y = 0.39;
window_p.position.x = 0.60;
scene.add( window_p );

//Door Handle
const door_hGeometry = new THREE.PlaneGeometry( 0.09, 0.03 );
const door_hMaterial = new THREE.MeshStandardMaterial( {color: 0xAEAEAE, side: THREE.DoubleSide} );
const door_h = new THREE.Mesh( door_hGeometry, door_hMaterial );
door_h.position.y = 0.4;
door_h.position.x = 0.70;
scene.add( door_h );

// End of Door 


// Start of Stairs

//Step 2
const step2Geometry = new THREE.PlaneGeometry( 0.38, 0.15 );
const step2Material = new THREE.MeshLambertMaterial( {color: 0xAEAEAE, side: THREE.DoubleSide, map: concreteTexture} );
const step2 = new THREE.Mesh( step2Geometry, step2Material );
step2.position.y = -0.1;
step2.position.x = 0.60;
scene.add( step2 );


//Step 1
const step1Geometry = new THREE.PlaneGeometry( 0.4, 0.15 );
const step1Material = new THREE.MeshLambertMaterial( {color: 0xBEBEBE, side: THREE.DoubleSide, map: concreteTexture} );
const step1 = new THREE.Mesh( step1Geometry, step1Material );
step1.position.y = -0.24;
step1.position.x = 0.60;
scene.add( step1 );

// End of Stairs


// Car

//Wind Shield
const wind_sGeometry = new THREE.PlaneGeometry( 0.02, 0.3 );
const wind_sMaterial = new THREE.MeshBasicMaterial( {color: 0xEBEBEB, side: THREE.DoubleSide} );
const wind_s = new THREE.Mesh( wind_sGeometry, wind_sMaterial );
wind_s.position.y = 0.11;
wind_s.position.x = -0.65;
scene.add( wind_s );

//Headlights
const head_lGeometry = new THREE.PlaneGeometry( 0.2, 0.1);
const head_lMaterial = new THREE.MeshBasicMaterial( {color: 0xD3D3D3, side: THREE.DoubleSide} );
const head_l = new THREE.Mesh( head_lGeometry, head_lMaterial );
head_l.position.y = -0.05;
head_l.position.x = -0.28;
scene.add( head_l );

//Car Body
const car_bGeometry = new THREE.PlaneGeometry( 1, 0.45 );
const car_bMaterial = new THREE.MeshPhongMaterial( {color: 0xCD0404, side: THREE.DoubleSide, map: glossTexture} );
const car_b = new THREE.Mesh( car_bGeometry, car_bMaterial );
car_b.position.y = -0.2;
car_b.position.x = -0.7;
scene.add( car_b );

//Car Detail
const car_dGeometry = new THREE.PlaneGeometry( 0.5, 0.02 );
const car_dMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const car_d = new THREE.Mesh( car_dGeometry, car_dMaterial );
car_d.position.y = -0.30;
car_d.position.x = -1;
scene.add( car_d );

//Bumper
const bumperGeometry = new THREE.PlaneGeometry( 0.2, 0.2);
const bumperMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, map: glossTexture} );
const bumper = new THREE.Mesh( bumperGeometry, bumperMaterial );
bumper.position.y = -0.34;
bumper.position.x = -0.28;
scene.add( bumper );

//Wheel
const tireGeometry = new THREE.CircleGeometry( 0.2, 32 );
const tireMaterial = new THREE.MeshBasicMaterial( { color: 0x0F0E0E, side: THREE.DoubleSide } );
const tire = new THREE.Mesh( tireGeometry, tireMaterial );
tire.position.y = -0.37;
tire.position.x = -0.56;
tire.scale.set(0.65, 1.25, 1)
scene.add( tire );

const wheelGeometry = new THREE.CircleGeometry( 0.12, 32 );
const wheelMaterial = new THREE.MeshBasicMaterial( { color: 0xDCDCDC, side: THREE.DoubleSide } );
const wheel = new THREE.Mesh( wheelGeometry, wheelMaterial );
wheel.position.y = -0.37;
wheel.position.x = -0.56;
wheel.scale.set(0.65, 1.25, 1)
scene.add( wheel );

//End of Car


// Start of Lightbulb

//Bulb
const bulbGeometry = new THREE.CircleGeometry( 0.04, 32 );
const bulbMaterial = new THREE.MeshBasicMaterial( { color: 0xFCFE8C, side: THREE.DoubleSide } );
const bulb = new THREE.Mesh( bulbGeometry, bulbMaterial );
bulb.position.y = 0.92;
bulb.position.x = -0.8;
bulb.rotation.y = 1
scene.add( bulb );

//Bulb Stem
const bulb_sGeometry = new THREE.PlaneGeometry( 0.03, 0.1 );
const bulb_sMaterial = new THREE.MeshBasicMaterial( { color: 0xFCFE8C, side: THREE.DoubleSide } );
const bulb_s = new THREE.Mesh( bulb_sGeometry, bulb_sMaterial );
bulb_s.position.y = 1;
bulb_s.position.x = -0.8;
scene.add( bulb_s );


//Base
const lb_baseGeometry = new THREE.PlaneGeometry( 0.06, 0.05);
const lb_baseMaterial = new THREE.MeshBasicMaterial( {color: 0xD3D3D3, side: THREE.DoubleSide} );
const lb_base = new THREE.Mesh( lb_baseGeometry, lb_baseMaterial );
lb_base.position.y = 1;
lb_base.position.x = -0.8;
scene.add( lb_base );

// End of Lightbulb

camera.position.z = 1;

function animate() {
    requestAnimationFrame( animate );
    //start animate code HERE

    //end animate code HERE
    renderer.render( scene, camera );

}
animate();