import "./Banner.css";

export default function Blogs(){
    return(
        <section>
            <div>
                <div style={{display:"flex", justifyContent:"center" }}>
                
                        <img src="./images/blogA.png" alt=""className="imagee" />
          
                    <p>
                        <img src="./images/Date.png" alt="" style={{ height:"20vh"}} />
                    </p>
                    <div className="blog">
                        <h3 style={{marginLeft:"5%"}}>Inland freight a worthy <br /> solution for your business</h3>
                        <p style={{marginLeft:"5%"}}>We are dedicated in creating added value  <br /> for our customers by implementing modern <br /> technology in our work. </p>
                    <ul>
                            <li>  Urgent transport solutions</li>
                            <li>Reliable & experienced staffs</li>
                            <li>Urgent transport solutions</li>
                            <li>Reliable & experienced staffs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}