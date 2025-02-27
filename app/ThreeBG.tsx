'use client'
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBG() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ////////////////////////////////////////////  THREE.JS Start  //////////////////////////////////////////////////
        if (!bgRef.current) {
            console.error('Board element not found');
            return;
        }

        const board = bgRef.current;
            
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        const camera = new THREE.PerspectiveCamera(75, board.clientWidth / board.clientHeight, 0.1, 1000);
        camera.position.z = 5;

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
            color: 0x444444,
            size: 0.001, // Size of each point
        });

        const pointCloud = new THREE.Points(geometry, pointMat);
        scene.add(pointCloud);


        function animate() {
            requestAnimationFrame( animate );
        
            pointCloud.rotation.z += 0.002;
            pointCloud.rotation.y += 0.002;
            renderer.render( scene, camera );
        }

        animate();

        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onResize);

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
    <div className="fixed top-0 left-0 flex w-full h-screen flex-col items-center justify-center">
      <div ref={bgRef} className="relative w-full h-screen bg-white"></div>
    </div>
  )
}
