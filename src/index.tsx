import React from 'react';
import ReactDOM from 'react-dom/client';



function App() {
  return (   
    <>
    <div>
      <h1>Hello world</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quasi itaque non, porro nisi reprehenderit at dolorum illum officiis mollitia aspernatur, cum animi vitae pariatur molestias incidunt. Cupiditate, sequi aperiam!</p>  
    </div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente ea, possimus porro voluptates tempora rem quisquam maiores atque dolorum, odit dolores neque veritatis cum nisi nostrum sed adipisci aperiam.</div>
    </>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>);


