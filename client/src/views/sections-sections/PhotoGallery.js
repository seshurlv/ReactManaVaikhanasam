import { useState } from "react";
import { useTranslation } from 'react-i18next';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
//import Video from "yet-another-react-lightbox/plugins/video";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import photos from "./SitePhotos.ts";
import ReactPlayer from "react-player";
// Add these imports at the top
import video01 from "../../assets/videos/kvs2023videos/01.mp4";
import video02 from "../../assets/videos/kvs2023videos/02.mp4"; 
import video03 from "../../assets/videos/kvs2023videos/03.mp4";
import video04 from "../../assets/videos/kvs2023videos/04.mp4"; 
import video05 from "../../assets/videos/kvs2023videos/05.mp4";
import video06 from "../../assets/videos/kvs2023videos/06.mp4"; 
import video07 from "../../assets/videos/kvs2023videos/07.mp4";

// ... import other videos


// reactstrap components
import {  
  Container,
  Row,
  Col
} from "reactstrap";



function PhotoGallery() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);
  const [index1, setIndex1] = useState(-1);
  const [index2, setIndex2] = useState(-1);
  const [index3, setIndex3] = useState(-1);
  const [index4, setIndex4] = useState(-1);
  const [index5, setIndex5] = useState(-1);
  const [index6, setIndex6] = useState(-1);
  const [index7, setIndex7] = useState(-1);
  const [index8, setIndex8] = useState(-1);
  const [index9, setIndex9] = useState(-1);
  const [index10, setIndex10] = useState(-1);
  const [index11, setIndex11] = useState(-1);
  const [index12, setIndex12] = useState(-1);
  const [index13, setIndex13] = useState(-1);
  const [index14, setIndex14] = useState(-1);

  return (
    <>
      <div key="photogallery" className="cd-section" id="photogallery">
        <div className="team-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto " md="12">
                <h2 className="title text-center">{t('photoGallery.title')}</h2> 
                <h4 className="description">
                  {t('photoGallery.description')}                  
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto " md="12">                
                <h4 className="text-center">
                  {t('photoGallery.kvs2023.title')}<br/><br/>                  
                </h4>
                <div>
                  <p>
                    {t('photoGallery.kvs2023.description')}
                  </p>                
                  <PhotoAlbum photos={photos.kvs2023Photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex14(index)} />
                  <Lightbox
                      slides={photos.kvs2023Photos}
                      open={index14 >= 0}
                      index={index14}
                      close={() => setIndex14(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                  <br/>
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
                    </Col>
                    <Col className="ml-auto mr-auto" md="4">                                  
                        <div>
                        <ReactPlayer                        
                            url= {video03}
                            width='100%'
                            height='100%'
                            controls = {true}
                          />
                      </div>                                                      
                    </Col>
                    <Col className="ml-auto mr-auto" md="4">                                  
                        <div>
                        <ReactPlayer                        
                            url= {video04}
                            width='100%'
                            height='100%'
                            controls = {true}
                          />
                      </div>                                                      
                    </Col>
                    <Col className="ml-auto mr-auto" md="4">                                  
                        <div>
                        <ReactPlayer                        
                            url= {video05}
                            width='100%'
                            height='100%'
                            controls = {true}
                          />
                      </div>                                                      
                    </Col>
                    <Col className="ml-auto mr-auto" md="4">                                  
                        <div>  
                        <ReactPlayer                        
                            url= {video06}
                            width='100%'
                            height='100%'
                            controls = {true}
                          />                      
                        </div>                                                         
                    </Col>
                    <Col className="ml-auto mr-auto" md="4">                                  
                        <div>  
                        <ReactPlayer                        
                            url= {video07}
                            width='100%'
                            height='100%'
                            controls = {true}
                          />                      
                        </div>                                                         
                    </Col>
                  </Row> 
                  {/* <PhotoAlbum Video={photos.kvs2023Videos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
                  <Lightbox
                    plugins={[Video]}
                    slides={photos.kvs2023Videos}                    
                  /> */}
                </div>
                <br/>                
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto " md="12">                
                <h4 className="text-center">
                  {t('photoGallery.apyf2021.title')}<br/><br/>                  
                </h4>
                <div>
                  <p>
                  {t('photoGallery.apyf2021.description')}
                  </p>                
                  <PhotoAlbum photos={photos.apyf2021Photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
                  <Lightbox
                      slides={photos.apyf2021Photos}
                      open={index >= 0}
                      index={index}
                      close={() => setIndex(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>
                <br/>                
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto " md="12">                
                <h4 className="text-center">
                  Sravana Poornima 2019 Celebrations<br/><br/>                  
                </h4>  
                <div> 
                  <p>
                  హైదరాబాద్ లోని శ్రీవిఖనస ఆశ్రమంలో శ్రీవిఖనస జయంతి ఘనంగా నిర్వహించారు. ఈ సందర్భంగా శ్రీ వైఖానస మహా మండలి, హైదరాబాద్ వారు వైఖనసాగమ మహదాచార్య వైఖనసాగమ వాచస్పతి, ఆగమశిరోమణి సహస్రాధిక ప్రతిష్టాపనాచార్య, సింహతలాట గ్రహీత శ్రీమాన్ పెద్దింటి వెంకట లక్ష్మీనృసింహాచార్యులు, కాపీలేశ్వరపురం వారిని ఘన్నంగా సత్కరించారు.
                  </p>             
                  <PhotoAlbum photos={photos.sp2019HydPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex1(index)} />
                  <Lightbox
                      slides={photos.sp2019HydPhotos}
                      open={index1 >= 0}
                      index={index1}
                      close={() => setIndex1(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>
                <br/> 
                <div>
                  <p>
                  విజయవాడ లబ్బీపేట లోగల శ్రీ వేంకటేశ్వర స్వామి వారి ఆలయంలో శ్రీ విఖనస జయంతి సందర్భంగా విశిష్ట అతిథిగా పాల్గొన్న శ్రీమాన్ అగ్నిహోత్రం ఆత్రేయబాబు దంపతులు వారిని సమ్మానిస్తున్న విఖనస సేవా సంఘం విజయవాడ
                  </p>         
                  <PhotoAlbum photos={photos.sp2019VjwPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex2(index)} />
                  <Lightbox
                      slides={photos.sp2019VjwPhotos}
                      open={index2 >= 0}
                      index={index2}
                      close={() => setIndex2(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>
                <br/> 
                <div>
                <p>
                  శ్రీవైఖనసా సేవాసంఘ్ ము తినాలిలో శ్రీ స్వామి జయంతి ఘనంగా జరిగింది వైఖనసా ఆగమ పండితులు శ్రీ పెద్దింటి అనిల్ కుమార్ గారిని సతీసమేతంగా సన్మానించారు.
                </p>
                <PhotoAlbum photos={photos.sp2019TnlPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex3(index)} />
                <Lightbox
                    slides={photos.sp2019TnlPhotos}
                    open={index3 >= 0}
                    index={index3}
                    close={() => setIndex3(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
                </div>
                <br/> 
                <div>
                  <p>
                    శ్రీ వైఖానస మహా మండలి గుంటూరు.
                  </p>
                  <PhotoAlbum photos={photos.sp2019GntPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex4(index)} />
                  <Lightbox
                      slides={photos.sp2019GntPhotos}
                      open={index4 >= 0}
                      index={index4}
                      close={() => setIndex4(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
                </div>
                <br/> 
                <div>
                  <p>
                    వైఖానస సంఘం వైజాగ్ ఉత్తర ఆంధ్ర 
                  </p>
                  <PhotoAlbum photos={photos.sp2019UtrAndPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex5(index)} />
                  <Lightbox
                      slides={photos.sp2019UtrAndPhotos}
                      open={index5 >= 0}
                      index={index5}
                      close={() => setIndex5(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
                </div>
                <br/> 
                <div>
                  <p>
                    N.L.R.జిల్లాలో ఇందుకూరుపెటలో శ్రీలక్ష్మీనరసింహస్వామిఆలయంలో వెైఖానస జయంతి ఘనంగా జరిగింది
                  </p>
                  <PhotoAlbum photos={photos.sp2019NLRPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex6(index)} />
                  <Lightbox
                      slides={photos.sp2019NLRPhotos}
                      open={index6 >= 0}
                      index={index6}
                      close={() => setIndex6(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>
                <br/> 
                <div>
                  <p>
                  విశాఖ శ్రీ శారదా పీఠ పాలిత ఫిలింనగర్ దైవసన్నిధానంలో శ్రావణ పౌర్ణమి "శ్రీ విఖనస జయంతి" సందర్భముగా జరిగిన పండిత సన్మాన సభలో ప్రముఖ ఆయుర్వేద వైద్యులు శ్రీమాన్ గంజాం కృష్ణ ప్రసాద్ గారిని "ఆయుర్వేద వైద్య విద్వన్మణి" అను బిరుదుతో సన్మానించడమైయినది.
                  </p>
                  <PhotoAlbum photos={photos.sp2019VzgPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex7(index)} />
                  <Lightbox
                      slides={photos.sp2019VzgPhotos}
                      open={index7 >= 0}
                      index={index7}
                      close={() => setIndex7(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
                </div>
                <br/>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto " md="12">                
                <h4 className="text-center">
                  Sravana Poornima 2018 Celebrations<br/><br/>                  
                </h4>  
                <div> 
                  <p>
                  హైదరాబాద్ లోని శ్రీవిఖనస ఆశ్రమంలో శ్రీవిఖనస జయంతి ఘనంగా నిర్వహించారు.
                  </p>             
                  <PhotoAlbum photos={photos.sp2018HydPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex8(index)} />
                  <Lightbox
                      slides={photos.sp2018HydPhotos}
                      open={index8 >= 0}
                      index={index8}
                      close={() => setIndex8(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>
                <br/> 
                <div>
                  <p>
                    Guntur Sri Vaikhanasa Maha Mandali
                  </p>         
                  <PhotoAlbum photos={photos.sp2018GntPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex9(index)} />
                  <Lightbox
                      slides={photos.sp2018GntPhotos}
                      open={index9 >= 0}
                      index={index9}
                      close={() => setIndex9(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>
                <br/> 
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto " md="12">                
                <h4 className="text-center">
                  Karteeka Vana Samaradhana 2015<br/><br/>                  
                </h4>  
                <div> 
                  <p>
                    హైదరాబాద్ లోని శ్రీవిఖనస ఆశ్రమంలో కార్తీక వనసమారాధన వేడుకలు.
                  </p>             
                  <PhotoAlbum photos={photos.kvs2015HydPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex10(index)} />
                  <Lightbox
                      slides={photos.kvs2015HydPhotos}
                      open={index10 >= 0}
                      index={index10}
                      close={() => setIndex10(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>                
                <br/> 
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto " md="12">                
                <h4 className="text-center">
                  Sravana Poornima 2015<br/><br/>                  
                </h4>  
                <div> 
                  <p>
                    Sravana Pournima 2015 - First function at our Sri Vikhanasa Ashramam, Hyderabad
                  </p>             
                  <PhotoAlbum photos={photos.sp2015HydPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex11(index)} />
                  <Lightbox
                      slides={photos.sp2015HydPhotos}
                      open={index11 >= 0}
                      index={index11}
                      close={() => setIndex10(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>                
                <br/> 
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto " md="12">                
                <h4 className="text-center">
                  Vaikhanasa Vivaha Paricheya Vedika<br/><br/>                  
                </h4>  
                <div> 
                  <p>
                    Vaikhanasa Vivaha Paricheya Vedika - at our Sri Vikhanasa Ashramam, Hyderabad
                  </p>             
                  <PhotoAlbum photos={photos.vpv2016HydPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex12(index)} />
                  <Lightbox
                      slides={photos.vpv2016HydPhotos}
                      open={index12 >= 0}
                      index={index12}
                      close={() => setIndex12(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>                
                <br/> 
                <div> 
                  <p>
                    Vaikhanasa Vivaha Paricheya Vedika 3 - at Rajahmundry
                  </p>             
                  <PhotoAlbum photos={photos.vpv2016RjmPhotos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex13(index)} />
                  <Lightbox
                      slides={photos.vpv2016RjmPhotos}
                      open={index13 >= 0}
                      index={index13}
                      close={() => setIndex13(-1)}
                      // enable optional lightbox plugins
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>  
              </Col>
            </Row>            
          </Container>
        </div>
        {/* <div className="team-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 2</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile1.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Sofia Scarlett</CardTitle>
                    <h6 className="category">Account Manager</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Lucas Jacob</CardTitle>
                    <h6 className="category">Aerospace Engineer</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile3.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Amelia Charlotte</CardTitle>
                    <h6 className="category">Photographer</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="linkedin"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="team-3 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 3</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/olivia.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Ariana Hazel</CardTitle>
                        <h6 className="category text-info">Fashion Designer</h6>
                        <p className="card-description">
                          Happiness resides not in possessions, and not in gold,
                          happiness dwells in the soul...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/james.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Ryan Samuel</CardTitle>
                        <h6 className="category text-info">
                          Financial Examiner
                        </h6>
                        <p className="card-description">
                          Today you are you! That is truer than true! There is
                          no one alive who is you-er than you!..
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/michael.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Joshua Jackson</CardTitle>
                        <h6 className="category text-info">
                          Landscape Architect
                        </h6>
                        <p className="card-description">
                          Success is not final, failure is not fatal: it is the
                          courage to continue that counts...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/emily.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Nora Hazel</CardTitle>
                        <h6 className="category text-info">Legal Secretary</h6>
                        <p className="card-description">
                          Do not dwell in the past, do not dream of the future,
                          concentrate the mind...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="team-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 4</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/olivia.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h4">Ella Evelyn</CardTitle>
                        <h6 className="category">Air Crew Member</h6>
                        <p className="card-description">
                          Think in the morning. Act in the noon. Eat in the
                          evening. Sleep in the night......
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-icon btn-neutral"
                            color="twitter"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-twitter"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="facebook"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-facebook-square"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="google"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-google"></i>
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/emily.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h4">Mila Skylar</CardTitle>
                        <h6 className="category">Architect</h6>
                        <p className="card-description">
                          Love cures people - both the ones who give it and the
                          ones who receive it...
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-icon btn-neutral"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="facebook"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-facebook-square"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="google"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-google"></i>
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/james.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h4">Daniel Carter</CardTitle>
                        <h6 className="category">Aviation Inspector</h6>
                        <p className="card-description">
                          Keep your face always toward the sunshine - and
                          shadows will fall behind you...
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-icon btn-neutral"
                            color="youtube"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-youtube"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="twitter"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-twitter"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="instagram"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-instagram"></i>
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/michael.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h4">Dylan Wyatt</CardTitle>
                        <h6 className="category">Conservation Scientist</h6>
                        <p className="card-description">
                          There is only one corner of the universe you can be
                          certain of improving, and that's your own self...
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-icon btn-neutral"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="facebook"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-facebook-square"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-neutral"
                            color="google"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fab fa-google"></i>
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> 
        <div
          className="team-5 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg9.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 5</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Natalie Paisley</CardTitle>
                    <h6 className="category text-info">Credit Analyst</h6>
                    <p className="card-description">
                      Very little is needed to make a happy life; it is all
                      within yourself, in your way of thinking...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/james.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Anthony Jackson</CardTitle>
                    <h6 className="category text-info">Desktop Publisher</h6>
                    <p className="card-description">
                      Let us be grateful to people who make us happy, they are
                      the charming gardeners who make our souls blossom...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/emily.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Bella Audrey</CardTitle>
                    <h6 className="category text-info">Economist</h6>
                    <p className="card-description">
                      For it was not into my ear you whispered, but into my
                      heart. It was not my lips you kissed, but my soul...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-pinterest"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>*/}
      </div>
    </>
  );
}

export default PhotoGallery;
