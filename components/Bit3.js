/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Gohar.Munir (https://sketchfab.com/Gohar.Munir)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-bitcoin-ec0b85df2dde42eda90b571c12a7cd47
title: Low Poly Bitcoin
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/bit3.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.02} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.BitCoin_LowPoly_FFC107_0.geometry} material={materials.FFC107} />
          <mesh geometry={nodes.BitCoin_LowPoly_FFFFFF_0.geometry} material={materials.FFFFFF} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bit3.gltf')
