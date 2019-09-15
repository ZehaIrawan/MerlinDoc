import React, { useState } from 'react';

const HideableText = ({ text }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {!isHidden && text}
    </div>
  );
};

export default HideableText;
