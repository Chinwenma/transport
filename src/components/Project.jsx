import "./Banner.css"

export default function Project(){
	return(
// 		<section>
// 			
// 		<div style={{width:"100%", display:"flex", position:"absolute",marginLeft:"5%",marginRight:"5%",  }}>
// <p><img  src="./images/imageA.png" alt="" style={{padding:"10px"}} /></p>
// <p><img  src="./images/imageB.png" alt="" style={{padding:"10px"}} /></p>
// <p><img  src="./images/imageC.png" alt="" style={{padding:"10px"}} /></p>
// <p><img src="./images/imageD.png" alt=""  style={{padding:"10px"}}/></p>
// <p><img   src="./images/imageE.png" alt="" style={{ padding:"10px"}} /></p>

// 		</div>
// 		<div style={{backgroundImage:`url(./images/yellow.png)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:"60vh", marginTop:"15%"}}>
// <p><button  style={{backgroundColor:"darkblue", marginTop:"15%", marginLeft:"50%", paddingLeft:"5px", paddingRight:"5px", paddingTop:"10px", paddingBottom:"10px" }}>Read More</button></p>

// 		</div>
// 		</section>
<section>
<p style={{textAlign:"center", fontWeight:"bold", fontSize:"25px", margin:"10px"}}>Transporting Across the World</p>
<div style={{width:"100%", display:"flex", position:"absolute"  }}>
<img  src="./images/imageA.png" alt="" style={{padding:"7px",width:"18%", height:"50vh"}} />
<img  src="./images/imageB.png" alt="" style={{padding:"7px",width:"18%", height:"50vh"}} />
<img  src="./images/imageC.png" alt="" style={{padding:"7px",width:"18%", height:"50vh"}} />
<img src="./images/imageD.png" alt="" style={{padding:"7px",width:"18%", height:"50vh"}}/>
 <img   src="./images/imageE.png" alt="" style={{padding:"10px",width:"18%", height:"50vh"}} />
	
</div>
<div style={{backgroundImage:`url(./images/yellow.png)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:"60vh", marginTop:"15%"}}>
 <p><button  style={{backgroundColor:"darkblue", marginTop:"15%", marginLeft:"50%", paddingLeft:"5px", paddingRight:"5px", paddingTop:"10px", paddingBottom:"10px" }}>Read More</button></p>
 </div>
</section>
	)
}