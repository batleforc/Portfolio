import React from 'react';

class Projet extends React.Component{

    render(){
       return( 
           <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                 <h2 className="w3-text-light-grey">Mes projets </h2>
                 <hr style={{width:"200px"}} className="w3-opacity"/>

                 <div className="w3-row-padding" style={{margin:"0 -16px"}}>
                  <div className="w3-half">
                    <img src="media/android-chrome-512x512.png" style={{width:"100%"}}/>
                    <img src="media/android-chrome-512x512.png" style={{width:"100%"}}/>
                    <img src="media/android-chrome-512x512.png" style={{width:"100%"}}/>
                  </div>            

                  <div className="w3-half">
                    <a href="/article/3"> <img src="media/android-chrome-512x512.png" style={{width:"100%"}}/></a>
                    <a href="/article/3"><img src="media/android-chrome-512x512.png" style={{width:"100%"}}/></a>
                    <a href="/article/3"><img src="media/android-chrome-512x512.png" style={{width:"100%"}}/></a>
                    <a href="/article/3"><img src="media/android-chrome-512x512.png" style={{width:"100%"}}/></a>
                  </div>
                </div>
            </div>)
    }
}

export default Projet;