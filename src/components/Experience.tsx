import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import {Mesh, Object3DEventMap} from 'three';
import { Group } from 'three/examples/jsm/libs/tween.module.js';

const Experience = () => {
  const boxMeshRef = useRef<Mesh>(null);
  const groupMeshRef = useRef<Group<Object3DEventMap>>(null);
  //useFrame can only be used inside the component and it has two 
  //paramater state,delta(elapsed time- for constant animation)
  useFrame((_, delta) => {
    if(boxMeshRef.current)  
    boxMeshRef.current.rotation.y += delta
  if(groupMeshRef.current){
    groupMeshRef.current.rotation.y += delta
  }

})
  return (
    <>
       <group ref={groupMeshRef}>
            <mesh rotation-y={Math.PI / 4} position-x={1} scale={1.5} ref={boxMeshRef}>
                <boxGeometry/>
                <meshBasicMaterial  color={"mediumpurple"}/>
            </mesh>
            <mesh position-x={-2}>
                <sphereGeometry/>
                <meshBasicMaterial  color={"orange"} />
            </mesh>
        </group>
        <mesh position={[0,-1,-2]} scale={10} rotation-x={-Math.PI/4}>
            <planeGeometry/>
            <meshBasicMaterial  color={"greenyellow"}/>
        </mesh>
    </>
  )
}

export default Experience