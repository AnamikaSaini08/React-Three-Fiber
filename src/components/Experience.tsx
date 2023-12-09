import { Canvas } from '@react-three/fiber'

const Experience = () => {
  return (
    <>
    <Canvas>
        <mesh rotation-y={Math.PI / 4} position-x={1} scale={1.5}>
            <boxGeometry/>
            <meshBasicMaterial  color={"mediumpurple"}/>
        </mesh>
        <mesh position-x={-2}>
            <sphereGeometry/>
            <meshBasicMaterial  color={"orange"} />
        </mesh>
        <mesh position={[0,-1,-2]} scale={10} rotation-x={-Math.PI/4}>
            <planeGeometry/>
            <meshBasicMaterial  color={"greenyellow"}/>
        </mesh>
    </Canvas>
    </>
  )
}

export default Experience