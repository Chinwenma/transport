import "./Banner.css"
export default function ChooseUs(){
    return(
        <section >
            <div style={{display:"flex"}}>
                <div style={{width:"50%"} } >
               <p  ><img src="./images/aeroplane.png" alt="" style={{width:"100%"} }  /></p>
            </div>
            <div style={{ width:"50%", margin:"3%",  } } >
                <div>
                    <p style={{backgroundColor:' rgba(9, 18, 66, 0.25)',width:"90px", fontSize:'12px',}}>Why Choose Us</p>
                    <p style={{fontWeight:"bold", fontSize:"25px" } }>We create opportunity to <br /> reach potential</p>
                    <div>Leverage agile frameworks to provide a robust synopsis for <br /> strategy foster collaborative thinking to further the overall value <br /> proposition. </div>
                </div>
                <div style={{marginTop:"10%"}}>
                    <div style={{width:"50%", display:"flex", justifyContent:"space-between"  } }>
                        <div   >
                            <div style={{display:"flex"}}  >  <p><img src="./images/Icon5.png" alt="" style={{width:"30px"}} /></p>
                            <p style={{paddingLeft:"10px",paddingTop:"3px", fontSize:"14px"}}>Safe Package</p></div>
                          
                            <div style={{display:"flex"}}  >  <p><img src="./images/Icon5.png" alt="" style={{width:"30px"}} /></p>
                            <p style={{paddingLeft:"10px",paddingTop:"3px", fontSize:"14px"}}>Safe Package</p></div>
                            <div style={{display:"flex"}}  >  <p><img src="./images/Icon5.png" alt="" style={{width:"30px"}} /></p>
                            <p style={{paddingLeft:"10px",paddingTop:"3px", fontSize:"14px"}}>Safe Package</p></div>
                        </div>
                        <div>
                        <div style={{display:"flex"}}  >  <p><img src="./images/Icon5.png" alt="" style={{width:"30px"}} /></p>
                            <p style={{paddingLeft:"10px",paddingTop:"3px", fontSize:"14px"}}>Safe Package</p></div>
                            <div style={{display:"flex"}}  >  <p><img src="./images/Icon5.png" alt="" style={{width:"30px"}} /></p>
                            <p style={{paddingLeft:"10px",paddingTop:"3px", fontSize:"14px"}}>Safe Package</p></div>
                            <div style={{display:"flex"}}  >  <p><img src="./images/Icon5.png" alt="" style={{width:"30px"}} /></p>
                            <p style={{paddingLeft:"10px",paddingTop:"3px", fontSize:"14px"}}>Safe Package</p></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
 
        </section>
    )
}