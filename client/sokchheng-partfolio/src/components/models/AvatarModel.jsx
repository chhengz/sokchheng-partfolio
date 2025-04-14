import React, { useEffect } from 'react'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module.js'

const style = {
  backgroundColor: 'white',
}

const AvatarModel = () => {

  useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        50, 
        window.innerWidth / window.innerHeight, 
        1, 1000);
        camera.position.z = 5;
       
        const canvas = document.getElementById('threeCanvas');
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
        });
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);

        // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        // ambientLight.castShadow = true;
        // scene.add(ambientLight);

        // const pointLight = new THREE.PointLight(0xffffff, 0.5);
        // pointLight.position.set(25, 50, 25);
        // pointLight.castShadow = true;
        // scene.add(pointLight);

        // sample cube
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Add OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Add PFS state
        // const stats = Stats();
        // document.body.appendChild(stats.dom);


        const animate = () => {
          renderer.render(scene, camera);
          window.requestAnimationFrame(animate);
          // cube.rotation.x += 0.01;
          // cube.rotation.y += 0.01;
          // stats.update()
          // controls.update();
        }
        animate();


  }, [])

  return (
    <div>
      <h2>Three.js Model</h2>
      <canvas id='threeCanvas' style={style} />
    </div>
  )
}

export default AvatarModel