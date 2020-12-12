import React from "react";
import Particles from "react-particles-js";

export const Particlesjs = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zindex: 500,
      }}
    >
      <Particles
        canvasClassName="particle"
        params={{
          particles: {
            number: {
              value: 90,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
           
            opacity: {
              value: 1.0,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              "enable": true,
              "distance": 130,
              "color": "#ffffff",
              "opacity": 0.5,
              "width": 1
            },
            interactivity: {
                "detect_on": 'window',
                "events": {
                  "onhover": {
                    "enable": true,
                  "mode": 'repulse'
                  },
                  "onclick": {
                    "enable": true,
                    "mode": 'push'
                  },
                  "resize": true
                },
                "modes": {
                  "grab":{
                    "distance": 400,
                    "line_linked":{
                      "opacity": 1
                    }
                  },
                  "bubble":{
                    "distance": 200,
                    "size": 80,
                    "duration": 0.4,
                    "opacity":1
                  },
                  "repulse":{
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push":{
                    "particles_nb": 4
                  },
                  "remove":{
                    "particles_nb": 2
                  }
                },
                mouse:{}
              },
            
          },
         
        }}
      />
    </div>
  );
};
export default Particlesjs;