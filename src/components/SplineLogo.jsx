import React from 'react'
import Spline from '@splinetool/react-spline';

function Logo() {
  return (
    <div className="spline-container">
      <Spline 
        scene="https://prod.spline.design/MOtgpb9D-NTXAv3f/scene.splinecode"
        className="spline-component"
      />
      <style jsx>{`
        .spline-container canvas {
          width: 300px !important;
          height: 300px !important;
        }
        
        @media (min-width: 480px) {
          .spline-container canvas {
            width: 400px !important;
            height: 400px !important;
          }
        }
      `}</style>
    </div> 
  )
}

export default Logo