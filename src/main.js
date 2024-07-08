import * as THREE from "three";

window.addEventListener("load", function () {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({
    // alpha: true, // 검정 배경 사라지도록 해줌
    antialias: true, // 거친 표면 표현을 부드럽게
  });

  // 캔버스 크기 조절
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75, // fov(field of view) : 시야각
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  const geometry = new THREE.BoxGeometry(2, 2, 2); // 높이,너비,깊이
  const material = new THREE.MeshStandardMaterial({ color: 0xcc99ff }); // MeshStandardMaterial: 얘를 사용해야 조명의 영향을 받음

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.set(3, 4, 5); // x, y, z

  // camera가 항상 인자 값의 위치를 바라볼 수 있도록
  camera.lookAt(cube.position);

  const directionalLight = new THREE.DirectionalLight(0xf0f0f0, 1); // 조명색/ 조명 강도

  directionalLight.position.set(-1, 2, 3);

  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.1); // 조명색/ 조명 강도

  ambientLight.position.set(3, 2, 1);

  scene.add(ambientLight);

  renderer.render(scene, camera);
}
