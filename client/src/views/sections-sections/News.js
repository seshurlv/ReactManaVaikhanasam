import React from "react";


// reactstrap components
import {  
  Card,  
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

function News() {
  return (
    <>
      <div className="cd-section" id="news">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest News</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/siteimg/acharya.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="7">
                      <h6 className="category text-info mt-3">Sravana poornima - 2024</h6>
                      <CardTitle tag="h3">
                        <h6>
                          Sravana Poornima Sri Vikhanasa Swamy Jayanthi Mahotsavam - 2024
                        </h6>
                      </CardTitle>
                      <p className="card-description">
                        స్వస్తిశ్రీ కోరధి నామ సంవత్సర శావణ పూర్ణిమ సోమవారం తేదీ. 19.8.2024 (సోమవారము) శ్రీ విఖనసాచార్యస్వామి వారి జయంతి కార్యక్రమములు మన 'మండలి' ఆశ్రమ 
                        భవనమందు జరుగను గాన తామెల్లరూ విచ్చేసి శ్రీస్వామి వారి కృపకు పాత్రులు కావలసి నదిగా కోరుమన్నాము.<br/><br/>

                        అలగే ప్రతి సంవత్సరము నిర్వహిస్తున్న <b>శ్రావణఉపాకర్మ</b> నూతన వటువుల సౌకర్యార్ధము 19.8.2024 తేదీన ఆగమోక్తముగా శ్రీ ఆర్. బి. శరవణన్ గారు ఈ కార్యక్రమము 
                        నిర్వహింతురు కాన ఈ కార్యక్రమములో ఉపాకర్మ నిర్వహించుకోదలచినవారు వివరాలు తెలుసుకొనుటకు క్రింద తెలిపిన వారిని సంప్రదించగలరు.... <br/>
                          1. తమిరిశ విఖనసాచార్యులు 9885304787<br/>
                          2. రొంపిచెర్ల మురళీకృష్ణ - 9100949844 <br/><br/>


                        Sri Vikhanasa Ashramam, Plotno.205, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad.      
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243648.93036588933!2d78.41651325341068!3d17.41109000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f42c983789f%3A0x661617d8821f945c!2sSri%20Vikhanasa%20Ashramam!5e0!3m2!1sen!2sin!4v1722494384045!5m2!1sen!2sin" 
                          style={{width: 500, height: 450, border:0}} 
                          allowfullscreen="" 
                          loading="lazy" 
                          referrerpolicy="no-referrer-when-downgrade">
                        </iframe>                  
                      </p>
                      <p className="author">
                        19/Aug/2024
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                    <div>
                        <object data={require("assets/siteimg/news/Sravana_Poornima_19_08_2024.pdf")} type="application/pdf" width="100%" height="900px">
                          <p>Inivitation for Sravana Poornima - 2024</p>
                        </object>                                          
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <hr class="hr" />
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">                      
                      <h3 className="category text-danger">
                        <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                          శ్రీ వైఖానస సేవా సంఘము, ఉయ్యూరు
                      </h3>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-success">
                        ఉచిత సామూహిక ఉపనయన సంస్కారం - 26/April/2024
                        </a>
                        <br/><br/>
                      </CardTitle>
                      <p className="card-description">
                          <b>శ్రీశ్రీశ్రీ పరమపూజ్యశ్రీ దత్త పీఠాధిపతులు గణపతి సచ్చిదానంద స్వామీజి మరియు దత్తపీఠ ఉత్తరాధికారి శ్రీశ్రీశ్రీ దత్త విజయానంద తీర్ధ స్వామీజీ వార్ల దివ్య ఆశీస్సులతో....</b>
                          <br/>
                          శ్రీ గణపతి సచ్చిదానంద జ్ఞానబోధ సభ, గండిగుంట వారి సహకారంతో.. 
                          <br/>
                          శ్రీ అనఘా లక్ష్మీ సదనము (దత్త ప్రాంగణము) గండిగుంట గ్రామము నందు <br/>
                          స్వస్తిశ్రీ చాంద్రమాన క్రోధి నామ సంవత్సర చైత్ర బహుళ తదియ
                          శుక్రవారం అనగా ది. 26-4-2024 ఉదయం గం|| 10-35 ని॥లకు
                          అనురాధ నక్షత్రయుక్త మిధున లగ్న పుష్కరాంశము నందు
                          శ్రీ వైఖానస సేవా సంఘము ఉయ్యూరు వారిచే
                          ఉచిత సామూహిక ఉపనయనములు
                          జరుపుటకు దైవజ్ఞులు నిర్ణయించినారు. కావున పాల్గొణదలచినవారు
                          15వ తేది లోపు పేరు నమోదు చేయించుకొని రశీదు పొందగలరు.
                          యాజ్జీక సంభారములు, రాగి పోగులు, భజంత్రీలు సంఘమువారు
                          ఏర్పాటు చేయుదురు. వటువుతో సహా ఆరుగురికి భోజన వసతి ఏర్పాటు కలదు.
                          అదనంగా వచ్చు బంధువులు ఒక్కొకరికి రూ.150/-లు చొప్పున
                          సంఘమునకు కట్టి రశీదు పొందగలరు.
                          <br/><br/>
                          
                          గమనిక :<br/>
                          1. ఏ బ్రాహ్మణ శాఖ వారైనా పాల్గొనవచ్చును. శాఖా భేదం లేదు.<br/>
                          2. వైదిక క్రియ వైఖానస ఆగమం ప్రకారం మాత్రమే జరుగును.<br/>
                          3. వటువు తల్లి తండ్రులు మాత్రం ముందు రోజు అనగా ది. 25-4-2024 రాత్రికి రావలెను.<br/>
                          4. ప్రతి వటువు ఖచ్చితంగా శిఖలు పెట్టించుకొని, చెవులు కుట్టించుకొనవలెను.<br/>
                          5. నమోదు చేసుకొనువారు ముందుగా రిజిస్ట్రేషన్ ఫీలు రూ.504/-లు చెల్లించి రశీదు పొందగలరు.<br/>
                          6. వదాన్యులైన దాతలు ఎప్పటిలాగానే ధన రూపేణా, వస్తు రూపేణా సహకరించ ప్రార్ధన.<br/>
                          <br/><br/>
                          వివరములకు :<br/>
                          దీవి లక్ష్మీ నారాయణాచార్యులు, అధ్యక్షులు - 9491585195<br/>
                          ముత్తేవి యోగలక్ష్మీశ్రీనివాస్, ప్రధాన కార్యదర్శి - 9441382555<br/>
                          పరాశరం యోగానంద సత్యమూర్తి, కోశాధికారి - 9912128599<br/>
                          <br/><br/>
                          నిర్వహణ:<br/>
                          <b>శ్రీ వైఖానస సేవా సంఘము, ఉయ్యూరు</b>
                      </p>
                      <p className="author">
                        26/April/2023
                      </p>                      
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/siteimg/greetings/upanayanam.jpg")}
                        ></img>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                    <div>
                        <object data={require("assets/siteimg/news/Free_Upanayana_Samskaram.pdf")} type="application/pdf" width="100%" height="900px">
                          <p>Free Upanayana Samskaram - Vuyyuru</p>
                        </object>                                          
                      </div>
                    </Col>
                  </Row>
                </Card>                
                <Card className="card-plain card-blog">
                  <hr class="hr" />
                </Card>
                <br/>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <h6 className="category text-danger">
                        <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                        Kartheeka Vana Samaradhana Event
                      </h6>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Kartheeka Vana Samaradhana Mahotstavam
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Dear Vikhanasa Bandu's, This year Kartheeka Vana Samaradhana Mahotstavam will be conducted at Sri Vikhanasa Ashramam, 
                        Plotno.205, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad by our Sri Vaikhanasa Maha Mandali on 10/12/2023 (Sunday).
                        We welcome all our beloved vaikhanasa bandhu's to do join this event and make it a grand success.
                      </p>
                      <p className="author">
                        10/Dec/2023
                      </p>                      
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/siteimg/greetings/KartheekaVanaSamaradhana.jpg")}
                        ></img>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                    <div>
                        <object data={require("assets/siteimg/news/Kartika_Vana_Samaradhana_10_12_2023.pdf")} type="application/pdf" width="100%" height="900px">
                          <p>Inivitation for Kartheeka Vana Samaradhana - 2023</p>
                        </object>                                          
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <hr class="hr" />
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/siteimg/acharya.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="7">
                      <h6 className="category text-info mt-3">Sravana poornima Event</h6>
                      <CardTitle tag="h3">
                        <h6>
                          Sravana Poornima Sri Vikhanasa Swamy Jayanthi Mahotsavam
                        </h6>
                      </CardTitle>
                      <p className="card-description">
                        Dear Vikhanasa Bandu's, This year Sravana Poornima Sri Vikhanasa Acharya Swamy vari Jayanthi Mahotsavam will be conducted at 
                        Sri Vikhanasa Ashramam, Plotno.205, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad by our Sri Vaikhanasa Maha Mandali on 31/08/2023 (Thursday.
                        <br/>
                        We welcome all our beloved vaikhanasa bandhu's to do join this event and make it a grand success.                        
                      </p>
                      <p className="author">
                        31/Aug/2023
                      </p>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <hr class="hr" />
                </Card>                
              </Col>
            </Row>
          </Container>
        </div>        
      </div>
    </>
  );
}

export default News;
