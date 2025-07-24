import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function createPins(scene) {
  const loader = new THREE.TextureLoader();

  function createPin(position, svgURL, name, status, price) {
  const pinGroup = new THREE.Group();
  pinGroup.userData = { name, status, price };

  loader.load(svgURL, texture => {
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(0.1, 0.1, 1);
    sprite.center.set(0.5, 0); // Ujung bawah pin menyentuh lantai
    sprite.position.set(0, 0.1, 0);
    pinGroup.add(sprite);

    pinGroup.position.copy(position); // Set posisi SETELAH sprite ditambahkan
    scene.add(pinGroup);
  });

  return pinGroup;
}

const pin1 = createPin(
  new THREE.Vector3(0.18, 0.08, 0.15),
  'assets/pin1.svg',
  'Unit A',
  'Sold',
  '1,325,000 $'
);

const pin2 = createPin(
  new THREE.Vector3(-0.18, 0.1, 0.36),
  'assets/pin2.svg',
  'Unit B',
  'Available',
  '985,000 $'
);

  const pins = [pin1, pin2];

  const pinPOIs = [
    {
        id: 'pin1',
        mesh: pin1,
        position: pin1.position,
        descriptionId: 'pooldescription', // sesuai ID HTML
        camera_position: new THREE.Vector3(-0.52, 0.73, -0.15),
        camera_target: pin1.position,
    },
    {
      id: 'pin2',
      mesh: pin2,
      position: pin2.position,
      descriptionId: 'housedescription',
      camera_position: new THREE.Vector3(-0.07, 0.68, 1.24),
      camera_target: pin2.position,
    },
  ];

  return { pins, pinPOIs };
}
