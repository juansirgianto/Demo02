import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function createPins(scene) {
  const loader = new THREE.TextureLoader();

  function createPin(position, svgURL, name, status, price) {
  const pinGroup = new THREE.Group();
  pinGroup.userData = { name, status, price };

  loader.load(svgURL, texture => {
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, alphaTest: 0.1 });
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
  new THREE.Vector3(0.05, 0, 0.05),
  'assets/pin1.svg',
  'Unit A',
  'Sold',
  '1,325,000 $'
);

const pin2 = createPin(
  new THREE.Vector3(0.3, 0.1, -0.41),
  'assets/pin2.svg',
  'Unit B',
  'Available',
  '985,000 $'
);

const pin3 = createPin(
  new THREE.Vector3(0.6, 0, 0.1),
  'assets/pin3.svg',
  'Unit B',
  'Available',
  '985,000 $'
);

  const pins = [pin1, pin2, pin3];

  const pinPOIs = [
    {
        id: 'pin1',
        mesh: pin1,
        position: pin1.position,
        descriptionId: 'pooldescription', // sesuai ID HTML
        camera_position: new THREE.Vector3(-0.52, 0.73, -0.15),
        camera_target: pin1.position,
        images: [
      "./photos/pool.png",
      "./photos/house1.jpg",
    ]
    },
    {
      id: 'pin2',
      mesh: pin2,
      position: pin2.position,
      descriptionId: 'housedescription',
      camera_position: new THREE.Vector3(-0.3, 0.75, -0.15),
      camera_target: pin2.position,
    },
    {
      id: 'pin3',
      mesh: pin3,
      position: pin3.position,
      descriptionId: 'gardendescription',
      camera_position: new THREE.Vector3(0.65, 0.67, 0.68),
      camera_target: pin3.position,
    },
  ];

  return { pins, pinPOIs };
}
