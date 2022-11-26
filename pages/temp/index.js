import React, { Suspense } from "react";
import BitcoinModel from "../../components/Bit3"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function temp() {

    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 20, 20]} intensity={0.5} />
                <Suspense fallback={null}>
                    <BitcoinModel />
                </Suspense>
            </Canvas>
        </>
    )


}