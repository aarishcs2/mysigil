// templateFunctions.js

export const handleFontChange = (modifiedContent, templateDetails, selectedFont) => {
    // Update the font for all text in the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
    ['name', 'position', 'email', 'website', 'phone', 'company', 'mobile', 'address'].forEach((className) => {
      const elements = htmlDoc.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        if (className === 'website') {
          element.innerHTML = `<a href="${element.textContent}" style="font-family: ${selectedFont}">${element.textContent}</a>`;
        } else {
          element.style.fontFamily = selectedFont;
        }
      });
    });
  
    return htmlDoc.documentElement.outerHTML;
  };
  
  export const handleColorChange = (e, modifiedContent, templateDetails) => {
    const newColor = e.target.value;
  
    // Update the color for all text in the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
    // Update color for specific classes or elements
    ['name', 'position', 'email', 'address', 'website', 'phone', 'mobile', 'company'].forEach((className) => {
      const elements = htmlDoc.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        if (className === 'website') {
          element.innerHTML = `<a href="${element.textContent}" style="color: ${newColor}">${element.textContent}</a>`;
        } else {
          element.textContent = element.textContent;
          element.style.color = newColor;
        }
      });
    });
  
    return htmlDoc.documentElement.outerHTML;
  };
  

// export function handleNameChange(e, templateInfo, modifiedContent, templateDetails, setTemplateInfo, setModifiedContent) {
//     const newName = e.target.value;
//     setTemplateInfo({ ...templateInfo, userName: newName });
  
//     const parser = new DOMParser();
//     const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
//     const nameElement = htmlDoc.querySelector('.name');
//     if (nameElement) {
//       nameElement.textContent = `${newName}`;
//     }
  
//     setModifiedContent(htmlDoc.documentElement.outerHTML);
  // }
  
  // function for updating image 
  export function handleImageChange(e, modifiedContent, templateDetails, setSelectedImage, setModifiedContent) {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setSelectedImage(reader.result);
  
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
      const userImageElement = htmlDoc.querySelector('.user-image img');
      if (userImageElement) {
        userImageElement.src = reader.result;
      }
  
      setModifiedContent(htmlDoc.documentElement.outerHTML);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  // code for updating logo 
  export function handleLogoChange(e, modifiedContent, templateDetails, setSelectedImage, setModifiedContent) {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setSelectedImage(reader.result);
  
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
      const userImageElement = htmlDoc.querySelector('.company-logo img');
      if (userImageElement) {
        userImageElement.src = reader.result;
      }
  
      setModifiedContent(htmlDoc.documentElement.outerHTML);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // code for updating banner 
  export function handleBannerChange(e, modifiedContent, templateDetails, setSelectedImage, setModifiedContent) {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setSelectedImage(reader.result);
  
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
      const userImageElement = htmlDoc.querySelector('.banner-image');
      if (userImageElement) {
        userImageElement.src = reader.result;
      }
  
      setModifiedContent(htmlDoc.documentElement.outerHTML);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // for background color change of the template 
export function handleBackgroundColorChange(e, modifiedContent, templateDetails, setBackgroundColor, setModifiedContent) {
    setBackgroundColor(e.target.value);
  
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
    const templateBody = htmlDoc.querySelector('.template-body');
    if (templateBody) {
      templateBody.style.backgroundColor = e.target.value;
    }
  
    setModifiedContent(htmlDoc.documentElement.outerHTML);
  }
  