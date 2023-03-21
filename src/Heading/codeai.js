
// import { FaInfoCircle } from 'react-icons/fa';
import AddIcon from '@mui/icons-material/Add'; 
import { useState } from 'react';

function IconClickParagraph() {
    const [isClicked, setIsClicked] = useState(false);
  
    return (
      <div>
        {/* Icon */}
        <AddIcon onClick={() => setIsClicked(!isClicked)} />
  
        {/* Paragraph */}
        {isClicked && (
          <p>
            This is the paragraph that will be displayed when the icon is clicked.
          </p>
        )}
      </div>
    );
  }

  export default IconClickParagraph;
 
  
  
  
  