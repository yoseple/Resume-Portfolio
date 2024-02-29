import ReactDOM from 'react-dom/client';
import React, { Suspense, useState, useEffect, useRef } from "react";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls, useGLTF, Html, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three'


function Scene() {
    const [zoomedIn, setZoomedIn] = useState(false);
    const htmlContentRef = useRef(); // Reference to the container where the MacOS component will be portaled
    const [iframeSrc, setIframeSrc] = useState("https://benevolent-snickerdoodle-b8a816.netlify.app"); 
    useEffect(() => {
        // Append a timestamp or a random number as a query parameter to the URL
        const newSrc = `${iframeSrc}?cacheBuster=${new Date().getTime()}`;
        setIframeSrc(newSrc);
      }, []);
    useEffect(() => {
        // Ensure MacOS is rendered inside the <Html> component using a portal
        if (htmlContentRef.current) {
            const portalDiv = document.createElement('div'); // This div acts as a portal target
            htmlContentRef.current.appendChild(portalDiv);
            const portalRoot = ReactDOM.createRoot(portalDiv); // Create a root for the portal
            portalRoot.render(<MacOS/>); // Render MacOS component into the portal
        }
    }, []); 
    const LaptopModel = () => {
        const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
        return <primitive object={scene} position-y={1.05} scale={[1, 1, 1]} />;
    };

    const DeskModel = () => {
        const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table/model.gltf");
        return <primitive object={scene} position-y={-3.5} scale={[3, 3, 3]} />;
    };

    
    // Camera controls and zoom logic would need to be re-implemented here
    // Use `useThree` for accessing the camera and other scene properties

    return (
        <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}>
            <Suspense fallback={null}>
                
                <Environment preset="warehouse" />
                <PerspectiveCamera makeDefault fov={zoomedIn ? 35 : 50} position={[0, 3, 30]} />
                <PresentationControls>
                    <LaptopModel />
                    <DeskModel />
                </PresentationControls>
                {/* Other components */}
                <Html
                    ref={htmlContentRef}
                    wrapperClass="laptop"
                    className='content'
                    position={[0, 2.68, 1]} // Adjusted position values; these are example values
                    transform
                    rotation-x={-.25} // This might need fine-tuning
                    distanceFactor={1.14}
                    scale={[0.9,0.9,0.9]}
                    occlude
                    
                >
                    <div className='wrapper'>

                    
                            <iframe 
                            src={iframeSrc}
                            allow = "autoplay; fullscreen"
                            execution-while-not-rendered = "true"
                            web-share ="true" /> 
                    </div>
                </Html>
            </Suspense>
           
        </Canvas>
    );
}


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<Scene/>);

// Functional Component: Encapsulated the scene within a Scene functional component.
// Suspense: Used Suspense from React to handle the asynchronous loading of models with useGLTF.
// Model Components: Defined LaptopModel and DeskModel inside the Scene component to correctly use the useGLTF hook.
