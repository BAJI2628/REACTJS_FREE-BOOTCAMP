import React from "react";

function Footer() {
  var cuyr = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {cuyr}</p>
    </footer>
  );
}

export default Footer;
