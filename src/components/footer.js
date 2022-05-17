import React from 'react';


class Footer extends React.Component {


  render() {
    return (
        <footer className="bg-light text-center text-lg-start">
        
            <div className="text-center p-3" style={{ color: "rgba(0, 0, 0, 0.2)" }}>
          © 2020 Copyright:
          <p className="text-dark" >FISHFINDR</p>
        </div>
        
      </footer>
    );
  }
}
export default Footer;