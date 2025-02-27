'use client'
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
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
        const camera = new THREE.PerspectiveCamera(50, board.clientWidth / board.clientHeight, 0.1, 1000);
        camera.position.z = 20;
    
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(board.clientWidth, board.clientHeight);
        board.appendChild(renderer.domElement);

        const numPoints = 8000;
        const cubeSize = 15;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(numPoints * 3);
        const originalPositions = new Float32Array(numPoints * 3);
        const targetPositions = new Float32Array(numPoints * 3);
        const morphFactor = { value: 0 };
        
        function getEvenlyDistributedCubePoint(index: any) {
            const s = Math.cbrt(numPoints);
            const i = index % s;
            const j = Math.floor((index / s) % s);
            const k = Math.floor(index / (s * s));
            const x = (i / (s - 1) - 0.5) * cubeSize;
            const y = (j / (s - 1) - 0.5) * cubeSize;
            const z = (k / (s - 1) - 0.5) * cubeSize;
            return [x, y, z];
        }

        function getEvenlyDistributedSpherePoint(index: any) {
            const phi = Math.acos(1 - 2 * (index / (numPoints - 1)));
            const theta = Math.PI * (1 + Math.sqrt(5)) * index;
            const x = Math.sin(phi) * Math.cos(theta);
            const y = Math.sin(phi) * Math.sin(theta);
            const z = Math.cos(phi);
            return [x * (cubeSize / 2), y * (cubeSize / 2), z * (cubeSize / 2)];
        }

        for (let i = 0; i < numPoints; i++) {
            const [x, y, z] = getEvenlyDistributedCubePoint(i);
            positions.set([x, y, z], i * 3);
            originalPositions.set([x, y, z], i * 3);
            const [sx, sy, sz] = getEvenlyDistributedSpherePoint(i);
            targetPositions.set([sx, sy, sz], i * 3);
        }

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

        // Resize handler
        const onResize = () => {
          renderer.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onResize);
        // ////////////////////////////////////////////  THREE.JS End  //////////////////////////////////////////////////
        
        // ////////////////////////////////////////////  GSAP Start  //////////////////////////////////////////////////
        const timeline = gsap.timeline()
        timeline
            .fromTo('.hero-h', { x: '-100%' }, { delay: 1, duration: 1, x: 0, ease: "power1.out" })
            .to(pointCloud.scale, { delay: -.5, duration: 2, x: 1, y: 1, z: 1, ease: "power3.out" })

        // ScrollTrigger when the hero section is passing
        gsap.to( pointCloud.position, { x: 0, y: 0, ease: "power1.inOut", scrollTrigger: { trigger: ".hero-con", start: "top 5%", end: "top -70%", scrub: true, }, });
        gsap.to( camera.position, { z: 2, ease: "power1.inOut", scrollTrigger: { trigger: ".hero-con", start: "top 5%", end: "top -70%", scrub: true, }, });
        gsap.to( pointMat, { size: .005, ease: "power1.inOut", scrollTrigger: { trigger: ".hero-con", start: "top 5%", end: "top -70%", scrub: true, }, });
        // gsap.to('.hero-h', { x: -100, opacity: 0, duration: 2, ease: "power1.inOut", scrollTrigger: { trigger: "hero-con", start: "top -5%", end: "top -70%", scrub: true, }, });
        
        // ScrollTrigger when the why-us section is passing
        // forward
        gsap.to( pointMat.color, { r: 0, g: .3, b: .6, ease: "none", scrollTrigger: { trigger: ".why-us", start: "top 60%", end: "top 10%", scrub: true, }, });
        gsap.fromTo( camera.position, {z: 2}, { z: 30, ease: "none", scrollTrigger: { trigger: ".why-us", start: "top 60%", end: "top 10%", scrub: true, }, });
        gsap.to(morphFactor, {
          value: 1,
            scrollTrigger: {
                trigger: ".why-us",
                start: "top 60%",
                end: "top 10%",
                scrub: true,
                onUpdate: (self) => {
                  for (let i = 0; i < numPoints; i++) {
                    const idx = i * 3;
                    positions[idx] = originalPositions[idx] * (1 - morphFactor.value) + targetPositions[idx] * morphFactor.value;
                    positions[idx + 1] = originalPositions[idx + 1] * (1 - morphFactor.value) + targetPositions[idx + 1] * morphFactor.value;
                    positions[idx + 2] = originalPositions[idx + 2] * (1 - morphFactor.value) + targetPositions[idx + 2] * morphFactor.value;
                  }
                  geometry.attributes.position.needsUpdate = true;
                },
            }
        });
        // backward
        gsap.fromTo( camera.position, {z: 30}, { z: 2, ease: "none", scrollTrigger: { trigger: ".why-us", start: "top -20%", end: "bottom 0%", scrub: true, }, });
        gsap.fromTo(morphFactor, {value: 1}, {
          value: 0,
            scrollTrigger: {
                trigger: ".why-us",
                start: "top -20%",
                end: "bottom 0%",
                scrub: true,
                onUpdate: (self) => {
                  for (let i = 0; i < numPoints; i++) {
                    const idx = i * 3;
                    positions[idx] = originalPositions[idx] * (1 - morphFactor.value) + targetPositions[idx] * morphFactor.value;
                    positions[idx + 1] = originalPositions[idx + 1] * (1 - morphFactor.value) + targetPositions[idx + 1] * morphFactor.value;
                    positions[idx + 2] = originalPositions[idx + 2] * (1 - morphFactor.value) + targetPositions[idx + 2] * morphFactor.value;
                  }
                  geometry.attributes.position.needsUpdate = true;
                },
            }
        });

        // ////////////////////////////////////////////  GSAP End  //////////////////////////////////////////////////
    
        return () => {
          // Remove event listeners
          window.removeEventListener("resize", onResize);
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
    </div>
  )
}