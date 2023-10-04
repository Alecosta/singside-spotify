import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <html>
      <head>
        <title>Ouvir a CBN</title>
      </head>
      <body>
        <h1>Olá mundo!</h1>
        <p>O contador está em {count}</p>
        <button onClick={() => setCount(count + 1)}>Adicionar</button>
        <button onClick={() => {
          if (audioRef.current) {
            audioRef.current.play();
          }
        }}>Tocar</button>
        <audio src="https://www.cbn.com.br/radio/ao-vivo/audio.mp3" controls ref={audioRef}></audio>
      </body>
    </html>
  );
}

export default App;
