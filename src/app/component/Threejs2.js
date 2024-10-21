// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
// import Stats from "three/examples/jsm/libs/stats.module.js";

// export default function Three2() {
//   const containerRef = useRef(null);
//   const normalRef = useRef(null);
//   const logzbufRef = useRef(null);
//   const borderRef = useRef(null);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     let SCREEN_WIDTH = window.innerWidth;
//     let SCREEN_HEIGHT = window.innerHeight;
//     let screensplit = 0.25;
//     let zoompos = -100,
//       minzoomspeed = 0.015;
//     let zoomspeed = minzoomspeed;
//     const mouse = [0.5, 0.5];

//     const labeldata = [
//       { size: 0.01, scale: 0.0001, label: "microscopic (1µm)" },
//       { size: 0.01, scale: 0.1, label: "minuscule (1mm)" },
//       // ... other labels
//       { size: 1e19, scale: 1.0, label: "mind boggling (1000 light years)" },
//     ];

//     let objects = {};

//     function init() {
//       const loader = new FontLoader();
//       loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
//         const scene = initScene(font);

//         objects.normal = initView(scene, "normal", false);
//         objects.logzbuf = initView(scene, "logzbuf", true);

//         animate();
//       });

//       statsRef.current = new Stats();
//       containerRef.current.appendChild(statsRef.current.dom);

//       window.addEventListener("resize", onWindowResize);
//       window.addEventListener("mousemove", onMouseMove);
//       window.addEventListener("wheel", onMouseWheel);
//     }

//     function initScene(font) {
//       const scene = new THREE.Scene();
//       scene.add(new THREE.AmbientLight(0x777777));

//       const light = new THREE.DirectionalLight(0xffffff, 3);
//       light.position.set(100, 100, 100);
//       scene.add(light);

//       const geometry = new THREE.SphereGeometry(0.5, 24, 12);
//       const materialargs = {
//         color: 0xffffff,
//         specular: 0x050505,
//         shininess: 50,
//         emissive: 0x000000,
//       };

//       labeldata.forEach((data) => {
//         const scale = data.scale || 1;
//         const labelgeo = new TextGeometry(data.label, {
//           font,
//           size: data.size,
//           height: data.size / 2,
//         });
//         labelgeo.translate(-labelgeo.boundingSphere.radius, 0, 0);

//         const material = new THREE.MeshPhongMaterial(materialargs);
//         const group = new THREE.Group();
//         group.position.z = -data.size * scale;
//         scene.add(group);

//         const textMesh = new THREE.Mesh(labelgeo, material);
//         textMesh.scale.set(scale, scale, scale);
//         textMesh.position.z = -data.size * scale;
//         textMesh.position.y = (data.size / 4) * scale;
//         group.add(textMesh);

//         const dotMesh = new THREE.Mesh(geometry, material);
//         dotMesh.position.y = (-data.size / 4) * scale;
//         dotMesh.scale.multiplyScalar(data.size * scale);
//         group.add(dotMesh);
//       });

//       return scene;
//     }

//     function initView(scene, name, logDepthBuf) {
//       const container =
//         name === "normal" ? normalRef.current : logzbufRef.current;

//       const camera = new THREE.PerspectiveCamera(
//         50,
//         (screensplit * SCREEN_WIDTH) / SCREEN_HEIGHT,
//         1e-6,
//         1e27
//       );
//       scene.add(camera);

//       const renderer = new THREE.WebGLRenderer({
//         antialias: true,
//         logarithmicDepthBuffer: logDepthBuf,
//       });
//       renderer.setPixelRatio(window.devicePixelRatio);
//       renderer.setSize(SCREEN_WIDTH / 2, SCREEN_HEIGHT);
//       container.appendChild(renderer.domElement);

//       return { renderer, scene, camera };
//     }

//     function animate() {
//       requestAnimationFrame(animate);
//       render();
//     }

//     function render() {
//       objects.normal.renderer.render(
//         objects.normal.scene,
//         objects.normal.camera
//       );
//       objects.logzbuf.renderer.render(
//         objects.logzbuf.scene,
//         objects.logzbuf.camera
//       );
//       statsRef.current.update();
//     }

//     function onWindowResize() {
//       SCREEN_WIDTH = window.innerWidth;
//       SCREEN_HEIGHT = window.innerHeight;
//       objects.normal.renderer.setSize(SCREEN_WIDTH / 2, SCREEN_HEIGHT);
//       objects.logzbuf.renderer.setSize(SCREEN_WIDTH / 2, SCREEN_HEIGHT);
//     }

//     function onMouseMove(event) {
//       // Handle mouse move events
//     }

//     function onMouseWheel(event) {
//       // Handle mouse wheel events
//     }

//     init();

//     return () => {
//       window.removeEventListener("resize", onWindowResize);
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("wheel", onMouseWheel);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{ width: "100vw", height: "100vh", display: "flex" }}
//     >
//       <div ref={normalRef} style={{ width: "50%" }}></div>
//       <div ref={logzbufRef} style={{ width: "50%" }}></div>
//       <div
//         id="renderer_border"
//         ref={borderRef}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: "50%",
//           bottom: 0,
//           width: "2px",
//           background: "#ccc",
//           border: "1px inset #ccc",
//           cursor: "col-resize",
//         }}
//       ></div>
//     </div>
//   );
// }
