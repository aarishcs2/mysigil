// Templatedetail.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TemplatesSection from '../TemplatesSection';
import DetailsSection from '../DetailsSection';
import ImageSection from '../ImageSection';
import MarketingSection from '../marketingSection';
import SocialSection from '../SocialsSection';
import DesignSection from '../DesignSection';
import {
  handleFontChange, 
  handleColorChange, 
  handleNameChange, 
  handleImageChange, 
  handleBannerChange,
  handleImageSizeChange,
  handleIconSizeChange,
  handleLogoChange, 
  handleBackgroundColorChange
 } from '../templateFunctions';
import { fetchAlltemplates, fetchSingletemplates } from '../../../api';

export default function Templatedetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [selectedFont, setSelectedFont] = useState('Arial'); // State for selected font
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // State for background color
  const [templateDetails, setTemplateDetails] = useState(null);
  const [modifiedContent, setModifiedContent] = useState(null);
  const [allTemplates, setAllTemplates] = useState([]); // State to hold all templates
  const [activeSection, setActiveSection] = useState('Templates');
  const [activeIcon, setActiveIcon] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [templateInfo, setTemplateInfo] = useState({
    company: '',
    email: '',
    website: '',
    phone: '',
    mobile: '',
    address: ''
    // Add more template information fields as needed
  });
  

  // for selcting active section on the side panel 
  // const handleSectionClick = (section) => {
  //   setActiveSection(section === activeSection ? null : section);
  // };
  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
    setActiveIcon(section === activeSection ? null : section);
  };

  const contentRef = useRef(null);
  const [fontStyle, setFontStyle] = useState({
    fontWeight: 'normal',
    fontSize: '16px',
    color: '#000000'
    // Add more style properties as needed
  });

  // const handleNameChangeWrapper = (e) => {
  //   handleNameChange(e, templateInfo, modifiedContent, setTemplateInfo, setModifiedContent);
  // };

  const handleImageChangeWrapper = (e) => {
    handleImageChange(e, modifiedContent, templateDetails, setSelectedImage, setModifiedContent);
    // Any additional logic specific to this component after handleImageChange
  };

  const handleLogoChangeWrapper = (e) => {
    handleLogoChange(e, modifiedContent, templateDetails, setSelectedImage, setModifiedContent);
    // Any additional logic specific to this component after handleLogoChange
  };

  const handleBannerChangeWrapper = (e) => {
    handleBannerChange(e, modifiedContent, templateDetails, setSelectedImage, setModifiedContent);
    // Any additional logic specific to this component after handleLogoChange
  };

  const handleFontChangeWrapper = (e) => {
    setSelectedFont(e.target.value);

    const modifiedHTML = handleFontChange(modifiedContent, templateDetails, e.target.value);
    setModifiedContent(modifiedHTML);
  };

  const handleImageSizeChangeWrapper = (e) => {
    const newSize = e.target.value; // Get the new size from the event
  
    const modifiedHTML = handleImageSizeChange(modifiedContent, templateDetails, newSize);
    setModifiedContent(modifiedHTML);
  };

  const handleIconSizeChangeWrapper = (e) => {
    const newSize = e.target.value; // Get the new size from the event
  
    const modifiedHTML = handleIconSizeChange(modifiedContent, templateDetails, newSize);
    setModifiedContent(modifiedHTML);
  }; 

  const handleColorChangeWrapper = (e) => {
    const modifiedHTML = handleColorChange(e, modifiedContent, templateDetails);
    setModifiedContent(modifiedHTML);
  };

  const handleBackgroundColorChangeWrapper = (e) => {
    handleBackgroundColorChange(e, modifiedContent, templateDetails, setBackgroundColor, setModifiedContent);
    // Any additional logic specific to this component after handleBackgroundColorChange
  };

  const handleLineSpacing = (lineHeight) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
    // Apply line-height to all paragraphs
    const paragraphs = htmlDoc.querySelectorAll('p'); // Select all <p> tags, adjust this selector as per your template structure
    if (paragraphs) {
      paragraphs.forEach((p) => {
        p.style.lineHeight = lineHeight; // Set the line-height directly in the HTML content
      });
    }
  
    setModifiedContent(htmlDoc.documentElement.outerHTML);
  };
  

  const fonts = [
    'Arial',
    'Verdana',
    'Tahoma',
    'Helvetica',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Lucida Console',
    'Impact'
    // Add more fonts as needed
  ];

  const handleFontWeightChange = (e) => {
    setFontStyle({
      ...fontStyle,
      fontWeight: e.target.value
    });
  };


  const handleFontSizeChange = (newValue) => {
    setFontStyle({
      ...fontStyle,
      fontSize: newValue
    });
  };

  const handleLineSpacingChange = (e) => {
    handleLineSpacing(e.target.value);
  };
  
  

  const uploadBtnStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '120px', // Adjust the width and height as needed
    height: '120px',
    borderRadius: '50%', // Creates a round shape
    border: '2px dashed #aaa', // Example dashed border
    textAlign: 'center',
    cursor: 'pointer',
  };

  const uploadIconStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px', // Example icon size
    color: '#555', // Example icon color
  };

  const uploadIconStyle2 = {
    position: 'absolute',
    top: '58%',
    left: '25%',
    // transform: 'translate(-50%, -50%)',
    fontSize: '10px', // Example icon size
    color: '#555', // Example icon color
  };

  useEffect(() => {
    const toggleSocialIcons = () => {
      const facebookInput = document.getElementById('facebookInput');
      const facebookIcon = document.querySelector('.facebook');
  
      if (facebookInput && facebookIcon) {
        if (facebookInput.value.trim() !== '') {
          facebookIcon.style.display = 'inline-block';
        } else {
          facebookIcon.style.display = 'none';
        }
      }
  
      // Repeat similar checks and logic for other social media platforms
    };
  
    toggleSocialIcons();
  
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', toggleSocialIcons);
    });
  
    return () => {
      inputs.forEach(input => {
        input.removeEventListener('input', toggleSocialIcons);
      });
    };
  }, []);
  

  // Function to update template content and state for specific fields
  const updateField = (field, newValue) => {
    setTemplateInfo({ ...templateInfo, [field]: newValue });
  
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
    const fieldElement = htmlDoc.querySelector(`.${field}`);
    if (fieldElement) {
      if (field === 'website') {
        const anchorTag = fieldElement.querySelector('a');
        if (anchorTag) {
          // Check if newValue already has a protocol, if not, add one (e.g., 'https://')
          const formattedURL = newValue.startsWith('http') ? newValue : `https://${newValue}`;
          anchorTag.setAttribute('href', formattedURL);
        }
      } else {
        fieldElement.textContent = `${newValue}`;
      }      
    }
  
    setModifiedContent(htmlDoc.documentElement.outerHTML);
  
    // Update the href attribute of social media icons based on their classes
  const socialIcons = ['facebook', 'instagram', 'twitter', 'linkedin', 'skype'];
  socialIcons.forEach((iconClass) => {
    const anchorTag = htmlDoc.querySelector(`.${iconClass}`);
    if (anchorTag) {
      anchorTag.setAttribute('href', templateInfo[iconClass]);
    }
  });


  };
  

  const sections = [
    // side panel for templates
    { 
      title: 'Templates', 
      icon: 'fas fa-file-alt', 
      content: <TemplatesSection allTemplates={allTemplates} /> 
    },
    // side panel for details 
    { 
      title: 'Details', 
      icon: 'fas fa-info-circle', 
      content: (
        <DetailsSection
          handleImageChange={handleImageChangeWrapper}
          // handleNameChange={handleNameChangeWrapper}
          templateInfo={templateInfo}
          updateField={updateField}
          uploadBtnStyle={uploadBtnStyle}
          uploadIconStyle={uploadIconStyle}
          uploadIconStyle2={uploadIconStyle2}
        />
      ),
    },
    // image side panel 
    { 
      title: 'Image', 
      icon: 'fas fa-image', 
      content: <ImageSection handleLogoChange={handleLogoChangeWrapper} /> 
    },

    // socila side panel 
    { 
      title: 'Socials', 
      icon: 'fas fa-share-alt', 
      content: <SocialSection templateInfo={templateInfo} updateField={updateField} /> 
    },

    // marketig side panel 
    { 
      title: 'Marketing', 
      icon: 'fas fa-bullhorn',
      content: <MarketingSection handleBannerChange={handleBannerChangeWrapper} /> 
    },

    // design side panel 
    { 
      title: 'Design', 
      icon: 'fas fa-paint-brush', 
      content: (
        <DesignSection
          selectedFont={selectedFont}
          handleFontChange={handleFontChangeWrapper}
          handleImageSizeChangeWrapper={handleImageSizeChangeWrapper}
          handleIconSizeChangeWrapper={handleIconSizeChangeWrapper}
          fonts={fonts}
          fontStyle={fontStyle}
          handleFontWeightChange={handleFontWeightChange}
          handleBackgroundColorChange={handleBackgroundColorChangeWrapper}
          backgroundColor={backgroundColor}
          handleFontSizeChange={handleFontSizeChange}
          handleLineSpacingChange={handleLineSpacingChange}
          handleColorChange={handleColorChangeWrapper}
        />
      ), 
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const singleTemplate = await fetchSingletemplates(id);
        if(singleTemplate){
          const data = singleTemplate.data
          setTemplateDetails(data);
          setModifiedContent(data.html);
  
          // Prepopulate inputs with template details
          if (data) {
            setTemplateInfo({
              company: data.company || '',
              email: data.email || '',
              website: data.website || '',
              phone: data.phone || '',
            });
          }
        }
     

        const response = await fetchAlltemplates();
        if(response){
          setAllTemplates(response.data);

        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [id]);

  const applyStyles = () => {
    if (templateDetails) {
      const styledContent = contentRef.current.innerHTML;
      setModifiedContent(styledContent);
    }
  };

  const updateTemplate = async () => {
    try {
      // Assume you have an API function for updating the template
      const response = await fetch(`https://api.mysigil.io/updateTemplate/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: modifiedContent }), // Send the updated HTML content
      });

      if (response.ok) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000); 
      } else {
        // Handle error cases
        alert('Failed to update template');
      }
    } catch (error) {
      console.error('Error updating template:', error);
      // Handle error cases
      alert('Failed to update template');
    }
  };

  return (
    <>
      <h5>Edit Template</h5>
      {showAlert && (
        <div class="alert alert-success" role="alert">
          Template Updated Succefully
        </div>
      )}
      <div style={{ display: 'flex' }}>
      {/* left side panel  */}
      <div className="" style={{ 
        display: 'flex', 
        height: '47rem',
        width: '40%'    
        }}>
          
        <div style={{ 
          width: '5rem', 
          backgroundColor: "#065AD8",
          height: '47rem',
          borderRadius: "1rem 0rem 0rem 1rem"
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sections.map((section, index) => (
              <div className='' key={index} style={{ marginBottom: '10px', cursor: 'pointer'}} onClick={() => handleSectionClick(section.title)}>
                <i className={section.icon} 
                style={{ 
                  fontSize: '25px', 
                  marginTop: '1rem',
                  width: '100%',
                  paddingLeft: '38%',
                  paddingTop: activeIcon === section.title ? '0.2rem' : '0rem',
                  color: activeIcon === section.title ? '#065AD8' : 'white', 
                  backgroundColor: activeIcon === section.title ? 'white' : '#065AD8',
                }} 
                ></i>
                <p 
                  className='text-center'
                  style={{
                    marginTop: activeIcon === section.title ? '-0.2rem' : '0rem',
                    color: activeIcon === section.title ? '#065AD8' : 'white', 
                    backgroundColor: activeIcon === section.title ? 'white' : '#065AD8',}}
                >
                  {section.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='px-2' style={{width: "80%"}}>
          {/* Content area on the right side */}
            {activeSection && (
              <div style={{}}>
                {sections.find((section) => section.title === activeSection)?.content}
              </div>
            )}
          </div>
        </div>

        {/* main screen  */}
        <div class='bg-light p-4' style={{ width: '60%', borderRadius: "0rem 1rem 1rem 0rem"}}>
          {templateDetails ? (
            <div>
              <div
                ref={contentRef}
                className="card-body template-body p-3"
                style={{ ...fontStyle, backgroundColor, borderRadius: '1rem' }}
                dangerouslySetInnerHTML={{ __html: modifiedContent || templateDetails.html }}
              />
            </div>
          ) : (
            <p>Loading template details...</p>
          )}

          <button className='btn btn-primary btn-sm mt-3' onClick={updateTemplate}>
            Update Template
          </button>
        </div>
        {/* main screen ends here  */}
      </div>
    </>
  );
}