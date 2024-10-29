import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Resize
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
});

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

// Orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Axes Helper
// const axesHelper = new THREE.AxesHelper(2);
// scene.add(axesHelper);

// Geometry
// const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);

const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("/textures/matcaps/shiny_gold.png");
const shapesMatcapTexture = textureLoader.load("/textures/matcaps/silver.png");
const rainbowMatcapTexture = textureLoader.load(
  "/textures/matcaps/rainbow.png"
);
const crystalMatcapTexture = textureLoader.load(
  "/textures/matcaps/crystal.png"
);
const blueMatcapTexture = textureLoader.load("/textures/matcaps/blue.png");
const greenMarbelMatcapTexture = textureLoader.load(
  "/textures/matcaps/green_marble.png"
);
const shinyWoodMatcapTexture = textureLoader.load(
  "/textures/matcaps/shiny_wood.png"
);
matcapTexture.colorSpace = THREE.SRGBColorSpace;

// font Geometry
const fontLoader = new FontLoader();
fontLoader.load(
  "/fonts/dancing_script.json",
  (font) => {
    // Material
    const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
    const shapesMaterial = new THREE.MeshMatcapMaterial({
      matcap: shapesMatcapTexture,
    });
    const donutMaterial = new THREE.MeshMatcapMaterial({
      matcap: rainbowMatcapTexture,
    });
    const crystalMaterial = new THREE.MeshMatcapMaterial({
      matcap: crystalMatcapTexture,
    });
    const blueMaterial = new THREE.MeshMatcapMaterial({
      matcap: blueMatcapTexture,
    });
    const greenMarbelMaterial = new THREE.MeshMatcapMaterial({
      matcap: greenMarbelMatcapTexture,
    });
    const shinyWoodMaterial = new THREE.MeshMatcapMaterial({
      matcap: shinyWoodMatcapTexture,
    });

    // Text
    const textGeometry = new TextGeometry("Rishabh Bhardwaj", {
      font: font,
      size: 0.5,
      depth: 0.2,
      curveSegments: 2,
      bevelEnabled: true,
      bevelThickness: 0.01, // Reduced bevel thickness to make the font thinner from sides
      bevelSize: 0.005, // Reduced bevel size to make the font thinner from sides
      bevelOffset: 0,
      bevelSegments: 2,
    });
    textGeometry.center();

    const text = new THREE.Mesh(textGeometry, material);
    scene.add(text);

    // Donuts
    const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 32, 64);
    // Donuts
    for (let i = 0; i < 50; i++) {
      const donut = new THREE.Mesh(donutGeometry, donutMaterial);
      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;
      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      donut.scale.set(scale, scale, scale);
      scene.add(donut);
    }

    // Squares
    const squareGeometry = new THREE.BoxGeometry(1, 1, 1);

    for (let i = 0; i < 10; i++) {
      const square = new THREE.Mesh(squareGeometry, greenMarbelMaterial);
      square.position.x = (Math.random() - 0.5) * 10;
      square.position.y = (Math.random() - 0.5) * 10;
      square.position.z = (Math.random() - 0.5) * 10;
      square.rotation.x = Math.random() * Math.PI;
      square.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      square.scale.set(scale, scale, scale);
      scene.add(square);
    }

    // Spheres
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);

    for (let i = 0; i < 10; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, blueMaterial);
      sphere.position.x = (Math.random() - 0.5) * 10;
      sphere.position.y = (Math.random() - 0.5) * 10;
      sphere.position.z = (Math.random() - 0.5) * 10;
      sphere.rotation.x = Math.random() * Math.PI;
      sphere.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      sphere.scale.set(scale, scale, scale);
      scene.add(sphere);
    }

    // Cones
    const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);

    for (let i = 0; i < 20; i++) {
      const cone = new THREE.Mesh(coneGeometry, crystalMaterial);
      cone.position.x = (Math.random() - 0.5) * 10;
      cone.position.y = (Math.random() - 0.5) * 10;
      cone.position.z = (Math.random() - 0.5) * 10;
      cone.rotation.x = Math.random() * Math.PI;
      cone.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      cone.scale.set(scale, scale, scale);
      scene.add(cone);
    }

    // Cylinders
    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);

    for (let i = 0; i < 10; i++) {
      const cylinder = new THREE.Mesh(cylinderGeometry, shinyWoodMaterial);
      cylinder.position.x = (Math.random() - 0.5) * 10;
      cylinder.position.y = (Math.random() - 0.5) * 10;
      cylinder.position.z = (Math.random() - 0.5) * 10;
      cylinder.rotation.x = Math.random() * Math.PI;
      cylinder.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      cylinder.scale.set(scale, scale, scale);
      scene.add(cylinder);
    }
  },
  undefined,
  (error) => {
    console.error("An error happened during font loading:", error);
  }
);

// // Material
// const material = new THREE.MeshBasicMaterial({
//   color: 0xffe4d9,
//   wireframe: true,
// });
// const mesh = new THREE.Mesh(boxGeometry, material);
// scene.add(mesh);

camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Set Pixel Ratio
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Render
renderer.render(scene, camera);

// Animate
const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
