var scene, camera, renderer, group;

init();
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  var ambient = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
  scene.add(ambient);
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 10, 6);
  scene.add(light);
  camera.position.z = 5;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.update();
  document.body.appendChild(renderer.domElement);
  draw();
}
function draw() {
  const assetPath = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/";
  
  const envMap = new THREE.CubeTextureLoader().setPath(`${assetPath}skybox2_`).load([
    'px.jpg','nx.jpg','py.jpg','ny.jpg','pz.jpg','nz.jpg'
  ]);
  scene.background = envMap;
  group = new THREE.Group();
  var geometry = new THREE.SphereGeometry(
    2,
    30,
    30,
    0,
    Math.PI * 2,
    0,
    Math.PI / 2
  );
  var material = new THREE.MeshLambertMaterial({ wireframe: false, envMap:envMap});
  var sphere1 = new THREE.Mesh(geometry, material);
  sphere1.position.y = 2.5;

  var geometry2 = new THREE.CylinderGeometry(2, 2, 5, 30, 1, true);
  var cylinder = new THREE.Mesh(geometry2, material);

  var sphere2 = sphere1.clone();
  sphere2.rotation.z = Math.PI;
  sphere2.position.y = -2.5;
  group.add(sphere1);
  group.add(sphere2);
  group.add(cylinder);
  scene.add(group);
  
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  group.rotation.z += 0.01;
  group.rotation.x += 0.01;
  renderer.render(scene, camera);
}
