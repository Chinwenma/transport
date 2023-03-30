
export default function Counter(){
    return(
        <section style={{display:"flex", justifyContent:"space-evenly", marginTop:"5%" }}>
            <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold", fontSize:"35px"}}>1294</p>
                <p><img style={{width:"20px", paddingTop:"20px" , paddingLeft:"5px"}} src="./images/Pattern.png" alt="" /></p>
                <p style={{ paddingTop:"15px", fontSize:"12px", paddingLeft:"5px"}}>Delievered Packages</p>
            </div>
            <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold", fontSize:"35px"}}>3954</p>
                <p><img style={{width:"20px", paddingTop:"20px" , paddingLeft:"5px"}} src="./images/Pattern.png" alt="" /></p>
                <p style={{ paddingTop:"15px", fontSize:"12px", paddingLeft:"5px"}}>Delievered Packages</p>
            </div>
        </section>
    )
}