import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
   <h1>Header</h1>
  );
}

export default Header;