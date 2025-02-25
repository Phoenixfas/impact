'use client'
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
// import WebGL from 'three/addons/capabilities/WebGL.js';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewHeroBg() {
    const boardRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // ////////////////////////////////////////////  THREE.JS Start  //////////////////////////////////////////////////
        if (!boardRef.current) {
          console.error('Board element not found');
          return;
        }
        const board = boardRef.current;
    
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        const camera = new THREE.PerspectiveCamera(75, board.clientWidth / board.clientHeight, 0.1, 1000);
        camera.position.z = 16;
    
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(board.clientWidth, board.clientHeight);
        board.appendChild(renderer.domElement);

        // Create a grid of evenly spaced points
        const size = 20; // Number of points per row/column
        const spacing = .8; // Distance between points

        const positions = new Float32Array(size * size * size * 3);
        let index = 0;
        
        for (let x = 0; x < size; x++) {
          for (let y = 0; y < size; y++) {
            for (let z = 0; z < size; z++) {
              positions[index++] = (x - size / 2) * spacing;
              positions[index++] = (y - size / 2) * spacing;
              positions[index++] = (z - size / 2) * spacing;
            }
          }
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const pointMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05, // Size of each point
        });
    
        const pointCloud = new THREE.Points(geometry, pointMat);
        scene.add(pointCloud);
        pointCloud.position.x = 15
        pointCloud.position.y = -5
        pointCloud.scale.set(0, 0, 0);


        function animate() {
            requestAnimationFrame( animate );
      
            pointCloud.rotation.z += 0.002;
            pointCloud.rotation.y += 0.002;
            renderer.render( scene, camera );
        }
    
        animate();
        // renderer.render( scene, camera );
        // ////////////////////////////////////////////  THREE.JS End  //////////////////////////////////////////////////
        
        // ////////////////////////////////////////////  GSAP Start  //////////////////////////////////////////////////
        const timeline = gsap.timeline()
        timeline
            .fromTo('.hero-h', { x: '-100%' }, { delay: 1, duration: 1, x: 0, ease: "power1.out" })
            .to(pointCloud.scale, { delay: -.5, duration: 2, x: 1, y: 1, z: 1, ease: "power3.out" })

        gsap.to( pointCloud.position, { x: 0, ease: "power1.inOut", scrollTrigger: { trigger: ".hero-con", start: "top 5%", end: "top -70%", scrub: true, }, });
        gsap.to( camera.position, { z: 5, ease: "power1.inOut", scrollTrigger: { trigger: ".hero-con", start: "top 5%", end: "top -70%", scrub: true, }, });
        gsap.to( pointMat, { size: .005, ease: "power1.inOut", scrollTrigger: { trigger: ".hero-con", start: "top 5%", end: "top -70%", scrub: true, }, });
        // gsap.to('.hero-h', { x: -100, opacity: 0, duration: 2, ease: "power1.inOut", scrollTrigger: { trigger: "hero-con", start: "top -5%", end: "top -70%", scrub: true, }, });

        // ////////////////////////////////////////////  GSAP End  //////////////////////////////////////////////////
    
        return () => {
          // Dispose of materials and geometries
          geometry.dispose();
          pointMat.dispose();
    
          // Remove the renderer and its canvas
          board.removeChild(renderer.domElement);
    
          // Dispose of the renderer
          renderer.dispose();
        };
    
    }, []);

  return (
    <div className="fixed top-0 left-0 flex w-full h-screen flex-col items-center justify-center bg-red-400">
      <div ref={boardRef} className="relative w-full h-screen bg-gray-500"></div>
      <div className="absolute left-0 top-0 flex flex-col gap-5">
      </div>
    </div>
  )
}
