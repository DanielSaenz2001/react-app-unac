import React, { Component } from 'react';
import TextoH1 from '../TextoH1';

class Home extends Component {
  render(){
    return(
      <div className="App">
      <h1>Home</h1>
      <img src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg" className="App-logo" alt="logo" />
        <div>
            <TextoH1 texto='Mi texto a mostrar'/>
        </div>
      </div>
    )
  };
}

export default Home;
