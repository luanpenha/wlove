import React, { useState } from "react";
import "./App.css"
import PhotoCarousel from "./components/PhotoCarousel/PhotoCarousel"
import Hearts from "./components/Hearts/Hearts";
import TextDate from "./components/FooterText/FooterText/TextDate";

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
  };

  return (
    <>
      <div>
        {!showContent ? (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            
          <button className="btn" onClick={handleClick}>
          &#128151;Clique
          </button>
          
          </div>
        ) : (
          <div>
            <Hearts />
            <div className="sptfy">
            <iframe style={{borderRadius:'12px', marginBottom: '1em'}}
            title='SpotifyPlayer' 
            src="https://open.spotify.com/embed/track/04h9o3gtRD7fvGafF7ukJj?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">

            </iframe>
            </div>
            <Hearts />
          <div className="flex">
          <PhotoCarousel />
          <h2 style={{display:'flex', justifyContent:'center'}}>💖Eu te amo há:</h2>
          <TextDate />
          </div>
          <hr style={{marginTop:'20px', marginBottom:'20px'}}></hr>
          <div>
            <div style={{display:'flex', justifyContent:'center', itemsAlign:'center', textAlign:'center', fontSize: '1.15em', marginBottom: '30px'}}>
            Obrigado por tudo que fez e faz por mim, você me motiva a ser uma pessoa melhor e ilumina meus dias.
             Cada momento ao seu lado se torna mais bonito e significativo. É incrível como você me ensina, me apoia e transforma tudo em algo mais leve.
              Espero que possamos criar ainda mais memórias especiais juntos, porque você é uma das melhores partes da minha vida. Eu te amo. 💖 
            </div>
            <br></br>
          </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
