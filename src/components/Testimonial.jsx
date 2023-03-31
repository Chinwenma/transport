import "./Banner.css";
export default function Testimonial(){
    return(
        <section>
            <p style={{backgroundColor:' rgba(9, 18, 66, 0.25)', width:"90px", marginLeft:"15%", marginTop:"10px", textAlign:"center" , fontSize:'12px', paddingTop:"3px"}}>Testimonial</p>
            <h1 className="coustomer">What Our Coustomer Says</h1>
                   <section style={{display:"flex", justifyContent:"center"}}>
        <section style={{background:'rgba(244, 244, 244, 1)', width:"30%"}}> 
        <div className="contain" >
            <div className="testimagdiv">
                <div className="test">
                    <p><img src="./images/photo11.png" alt="" style={{width:"40px", height:"40px", borderRadius:"2rem"}} /></p>
                    <p style={{paddingLeft:"10px", fontWeight:"bold"}}>
                        <p>Kathleen Smith</p>
                        <p>Fuel Company</p>
                    </p>
                </div>
                    <p><img src="./images/comma.png" alt="" style={{width:"30px", height:"30px", borderRadius:"2rem"}}  /></p>
                </div>
                
                <div style={{color:"gray", paddingBottom:"3%", marginBottom:"5%"}}>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
        <p><img src="./images/star.png" alt="" style={{width:"80px" }} /></p>
            </div>
        </section>
        <section style={{background:'rgb(9, 18, 66)', width:"30%"}}> 
        <div className="contain" >
            <div className="testimagdiv">
                <div className="test">
                    <p><img src="./images/photo12.png" alt="" style={{width:"40px", height:"40px", borderRadius:"2rem"}} /></p>
                    <p style={{paddingLeft:"10px", fontWeight:"bold"}}>
                        <p>Kathleen Smith</p>
                        <p>Fuel Company</p>
                    </p>
                </div>
                    <p><img src="./images/comma.png" alt="" style={{width:"30px", height:"30px", borderRadius:"2rem"}}  /></p>
                </div>
                
                <div style={{color:"white", paddingBottom:"3%", marginBottom:"5%"}}>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
        <p><img src="./images/star.png" alt="" style={{width:"80px" }} /></p>
            </div>
        </section>
        </section>
        </section>
 
    )
}