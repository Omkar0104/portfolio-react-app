import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
      <div class="col-md-6 contact-info">
				</div>
        {props.children}
        {/* <h3 class="follow"><b>  Address: </b> Lonari Nagar, Yeola 423401 */}
					{/* </h3> */}
    
					{/* <h3 class="follow"><b>Phone: </b><i class="fa fa-phone"></i>+91 7776094540</h3> */}
    
					{/* <h3 class="follow"><b>Email:</b><i class="fa fa-envelope-o"></i>omkarsonawane159@gmail.com</h3> */}
          
          <footer> <small>&copy; Copyright 2021 omkarsonawane.com, All rights reserved</small> </footer> 
      </Container>
    </footer>
    
  );
};

export default Footer;
