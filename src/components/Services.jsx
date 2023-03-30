import "./Banner.css"
export default function Service(){
    return(
        <section>
            <div style={{display:"flex", fontSize:"10px",marginLeft:"5%", marginTop:"5%"}}>
            <div style={{marginLeft:"5%"}}>
                <p style={{fontSize:"10px", backgroundColor:' rgba(9, 18, 66, 0.25) ', padding:"3px", marginTop:"10px", borderLeft:"5px yellow solid " , width:"50%" }}>What We Do </p>
                <p style={{fontSize:"25px", fontWeight:"bolder", marginTop:"5%" }}>  Safe & Reliable <br /> Cargo Solution</p>
               
            </div>
            <div className="spaces" >
            <div>
            <p><img src="./images/Icon.png" alt="" /></p>
            <p><img src="./images/Icon3.png" alt="" /></p>
                        </div>
                        <div>           
                 <div>
                <p className="pBold">Warehousing Services</p>
                <p>Following the quality of our service <br /> thus having gained trust of our many clients.</p>
            </div>
            <div className="downP">
                <p className="pBold">Sea  Services</p>
                <p>Following the quality of our service <br /> thus having gained trust of our many clients.</p>
            </div>
            </div>
            </div>
            <div className="spaces" >
            <div>
            <p><img src="./images/Icon2.png" alt="" /></p>
            <p><img src="./images/Icon1.png" alt="" /></p>
                        </div>
                        <div>           
                 <div>
                <p className="pBold">Warehousing Services</p>
                <p>Following the quality of our service <br /> thus having gained trust of our many clients.</p>
            </div>
            <div className="downP">
                <p className="pBold">Sea  Services</p>
                <p>Following the quality of our service <br /> thus having gained trust of our many clients.</p>
            </div>
            </div>
            </div>
</div>
<div style={{backgroundImage:`url("./images/About.png")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:"80vh"}}></div>
        </section>
    )
}