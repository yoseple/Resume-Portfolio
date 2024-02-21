import ReactDOM from 'react-dom/client';
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls, useGLTF, Html, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useState } from "react";

function Scene() {
    const [zoomedIn, setZoomedIn] = useState(false);

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
                    wrapperClass="laptop"
                    position={[0, 0.05, -0.09]} // Adjusted position values; these are example values
                    transform
                    rotation-x={-.25} // This might need fine-tuning
                    distanceFactor={1.16}
                    scale={1.2}
                    occlude
                    
                >
                    <iframe src="/Mac-OS-Desktop/index.html" style="hidden"  />
                    <iframe title="Desk Set" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f26030d09d73422f8ff270425c7c63e0/embed"> </iframe> 
                </Html>
            </Suspense>
        </Canvas>
    );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<Scene />);

// Functional Component: Encapsulated the scene within a Scene functional component.
// Suspense: Used Suspense from React to handle the asynchronous loading of models with useGLTF.
// Model Components: Defined LaptopModel and DeskModel inside the Scene component to correctly use the useGLTF hook.
