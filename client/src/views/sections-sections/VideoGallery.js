import React  from "react";
import ReactPlayer from "react-player";
import video01 from "../../assets/videos/Sri_Vaikhanasam.mp4";
import video02 from "../../assets/videos/Sri_Vikhanasa_Sthotra_Patham.mp4";


// reactstrap components
import {    
    Container,
    Row,
    Col
  } from "reactstrap";

function VideoGallery() {
      
    return (
      <>
        <div className="cd-section" id="videogallery">
          <div className="team-1">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto " md="12">
                  <h2 className="title text-center">Video Gallery</h2> 
                  <h4 className="description">
                    View all the videos.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="4">                                  
                    <div>
                        <ReactPlayer                        
                            url= {video01}
                            width='100%'
                            height='100%'
                            controls = {true}
                        />
                  </div>
                  <p>
                    About Vaikhanasa Agama<br/><br/>                  
                  </p>                                     
                </Col>
                <Col className="ml-auto mr-auto" md="4">                                  
                    <div>
                        <ReactPlayer                        
                            url= {video02}
                            width='100%'
                            height='100%'
                            controls = {true}
                        />
                  </div>
                  <p>
                    Sri Vikhanasa Stotra Patham<br/><br/>                  
                  </p>                                     
                </Col>                
              </Row>    
                                 
            </Container>
          </div>          
        </div>
      </>
    );
  }
  
  export default VideoGallery;