// Templatedetail.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function Templatedetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [selectedFont, setSelectedFont] = useState('Arial'); // State for selected font
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // State for background color
  const [templateDetails, setTemplateDetails] = useState(null);
  const [modifiedContent, setModifiedContent] = useState(null);
  const [allTemplates, setAllTemplates] = useState([]); // State to hold all templates
  const [activeSection, setActiveSection] = useState('Templates');


  const [templateInfo, setTemplateInfo] = useState({
    company: '',
    email: '',
    website: '',
    phone: '',
    mobile: '',
    address: ''
    // Add more template information fields as needed
  });

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setTemplateInfo({ ...templateInfo, userName: newName });

    // Update the displayed name in the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');

    // Retrieve the element with class "name" and update its text content
    const nameElement = htmlDoc.querySelector('.name');
    if (nameElement) {
      nameElement.textContent = `${newName}`;
    }

    // Set modified content to display updated name
    setModifiedContent(htmlDoc.documentElement.outerHTML);
  };

  // for selcting active section on the side panel 
  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const contentRef = useRef(null);
  const [fontStyle, setFontStyle] = useState({
    fontWeight: 'normal',
    fontSize: '16px',
    color: '#000000'
    // Add more style properties as needed
  });

  // handle image update 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setSelectedImage(reader.result);
  
      // Update the image in the template
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
      const userImageElement = htmlDoc.querySelector('.user-image img'); // Assuming the user image is inside a div with class 'user-image'
      if (userImageElement) {
        userImageElement.src = reader.result;
      }
  
      setModifiedContent(htmlDoc.documentElement.outerHTML);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // handle image update 
  const handleBannerupdate = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setSelectedImage(reader.result);
  
      // Update the image in the template
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
      const userImageElement = htmlDoc.querySelector('.banner-image'); // Assuming the user image is inside a div with class 'user-image'
      if (userImageElement) {
        userImageElement.src = reader.result;
      }
  
      setModifiedContent(htmlDoc.documentElement.outerHTML);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  
    // Update the font for all text in the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');
  
    ['name', 'position', 'email', 'website', 'phone', 'company', 'mobile', 'address'].forEach((className) => {
      const elements = htmlDoc.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        if (className === 'website') {
          element.innerHTML = `<a href="${element.textContent}" style="font-family: ${e.target.value}">${element.textContent}</a>`;
        } else {
          element.style.fontFamily = e.target.value;
        }
      });
    });
  
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

  const handleFontSizeChange = (e) => {
    setFontStyle({
      ...fontStyle,
      fontSize: e.target.value
    });
  };

  const handleColorChange = (e) => {
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

    setModifiedContent(htmlDoc.documentElement.outerHTML);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);

    // Update the background color of the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');

    const templateBody = htmlDoc.querySelector('.template-body');
    if (templateBody) {
      templateBody.style.backgroundColor = e.target.value;
    }

    setModifiedContent(htmlDoc.documentElement.outerHTML);
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

  const sections = [
    // side panel for templates
    { title: 'Templates', icon: 'fas fa-file-alt', content: (
      <div>
        <div className='row'>
          {allTemplates.map((template, index) => (
            <div key={index} className='col-md-6'>
              <div className='' style={{}}> {/* Adjust the width as needed */}
                <div>
                  <div
                    style={{ fontSize: '10px', lineHeight: '0px' }} // Adjust font size for smaller content
                    dangerouslySetInnerHTML={{ __html: template.html }}
                  />
                  <style>
                    {`
                      .user-image img {
                        width: 2rem;
                        height: 2rem;
                      }
                    `}
                  </style>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )},
    // side panel for details 
    { title: 'Details', icon: 'fas fa-info-circle', content: (
      <div>
        <h5>Signature Details</h5>
        
          <label htmlFor="file-input" style={uploadBtnStyle} className="upload-btn">
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <div style={uploadIconStyle}>
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p class='text-sm' style={uploadIconStyle2}>Profile picture</p>
          </label>

          <input
            placeholder='Name'
            className='form-control mt-4'
            value={templateInfo.userName}
            onChange={handleNameChange}
          />
          <input
            placeholder='Position'
            className='form-control mt-4'
            value={templateInfo.position}
            onChange={(e) => updateField('position', e.target.value)}
          />
          <input
            placeholder='Company'
            className='form-control mt-4'
            value={templateInfo.company}
            onChange={(e) => updateField('company', e.target.value)}
          />
          <input
            placeholder="Email"
            className='form-control mt-4'
            value={templateInfo.email}
            onChange={(e) => updateField('email', e.target.value)}
          />
          <input
            placeholder="Phone"
            className='form-control mt-4'
            value={templateInfo.phone}
            onChange={(e) => updateField('phone', e.target.value)}
          />
          <input
            placeholder="Mobile"
            className='form-control mt-4'
            value={templateInfo.mobile}
            onChange={(e) => updateField('mobile', e.target.value)}
          />
          <input
            placeholder="Address"
            className='form-control mt-4'
            value={templateInfo.address}
            onChange={(e) => updateField('address', e.target.value)}
          />
          <input
            placeholder="Website"
            className='form-control mt-4'
            value={templateInfo.website}
            onChange={(e) => updateField('website', e.target.value)}
          />
      </div>
    )},
    

    // image side panel 
    { title: 'Image', icon: 'fas fa-image', content: (
      <section>
        <h5>Images</h5>
        <div className="py-4 px-3 bg-light" style={{border: "2px solid #065AD8", borderRadius: '0.5rem'}}>

        <label for="file-input" class="btn btn-sm btn-primary">
          Upload Photo or Logo
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleBannerupdate}
          style={{display: "none"}}
        />
        <p>Image should be atleast 100px to 100px</p>
      </div>
      </section>
    )},
    // socila side panel 
    { title: 'Socials', icon: 'fas fa-share-alt', content: (
      <section>
        <h5>Social Profiles</h5>
        <div className='d-flex mt-3'>
            <img style={{width: "2.5rem", height: "2.5rem"}} src="/images/faebok.png" />
            <input
              placeholder="Facebook url"
              className='form-control'
              value={templateInfo.website}
              onChange={(e) => updateField('website', e.target.value)}
            />
          </div>

          <div className='d-flex mt-3'>
            <img style={{width: "2.5rem", height: "2.5rem"}} src="/images/tWITTERuPDATRE iCON.png" />
            <input
              placeholder="Twitter url"
              className='form-control'
              value={templateInfo.website}
              onChange={(e) => updateField('website', e.target.value)}
            />
          </div>

          <div className='d-flex mt-3'>
            <img style={{width: "2.5rem", height: "2.5rem"}} src="/images/instrgarm.png" />
            <input
              placeholder="Instagram url"
              className='form-control'
              value={templateInfo.website}
              onChange={(e) => updateField('website', e.target.value)}
            />
          </div>

          <div className='d-flex mt-3'>
            <img style={{width: "2.5rem", height: "2.5rem"}} src="/images/lindin.png" />
            <input
              placeholder="Linkedin url"
              className='form-control'
              value={templateInfo.website}
              onChange={(e) => updateField('website', e.target.value)}
            />
          </div>

          <div className='d-flex mt-3'>
            <img style={{width: "2.5rem", height: "2.5rem"}} src="/images/Skype.png" />
            <input
              placeholder="Skype ID"
              className='form-control'
              value={templateInfo.website}
              onChange={(e) => updateField('website', e.target.value)}
            />
          </div>
      </section>
    )},
    // marketig side panel 
    { title: 'Marketing', icon: 'fas fa-bullhorn', content: (
      <section>

      </section>
    )},
    // design side panel 
    { title: 'Design', icon: 'fas fa-paint-brush', content: (
      <div>
          <h5>Design</h5>

          {/* font size  */}
          <div className='d-flex justify-content-between'>
            <p>Font</p>
            <select className='form-control w-50' value={selectedFont} onChange={handleFontChange} style={{ fontSize: '0.8rem' }}>
              {fonts.map((font, index) => (
                <option key={index} value={font}>{font}</option>
              ))}
            </select>
          </div>

          {/* font weight  */}
          <div className='d-flex mt-3 justify-content-between'>
            <p>Font Scale</p>
            <select className='form-control w-50' value={fontStyle.fontWeight} onChange={handleFontWeightChange} style={{ fontSize: '0.8rem' }}>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="bolder">Bolder</option>
              {/* Add more font-weight options as needed */}
            </select>
          </div>
        
        {/* template color  */}
        <div className='d-flex justify-content-between mt-3'>
          <p>Template Color</p>
          <input
            className='form-control w-50'
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
          
        {/* font size  */}
        <div className='d-flex justify-content-between mt-3'>
          <p>Font size</p>
          <select className='form-control w-50' value={fontStyle.fontSize} onChange={handleFontSizeChange} style={{ fontSize: '0.8rem' }}>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            {/* Add more font-size options as needed */}
          </select>
        </div>

        {/* text color  */}
        <div className='d-flex justify-content-between mt-3'>
          <p>Text Color</p>
          <input className='form-control w-50' type="color" value={fontStyle.color} onChange={handleColorChange} />
        </div>

        {/* line spacing  */}
        <div className='d-flex justify-content-between mt-3'>
          <p>Line spacing</p>
          <select className='form-control w-50' value={fontStyle.fontSize} onChange={handleFontSizeChange} style={{ fontSize: '0.8rem' }}>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            {/* Add more font-size options as needed */}
          </select>
        </div>

        <h5 className='mt-3'>Images</h5>
        {/* image shape  */}
        <div className='d-flex justify-content-between mt-3'>
          <p>Shape</p>
          <select className='form-control w-50' value={fontStyle.fontSize} onChange={handleFontSizeChange} style={{ fontSize: '0.8rem' }}>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            {/* Add more font-size options as needed */}
          </select>
        </div>

        {/* image size  */}
        <div className='d-flex justify-content-between mt-3'>
          <p>Size</p>
          <select className='form-control w-50' value={fontStyle.fontSize} onChange={handleFontSizeChange} style={{ fontSize: '0.8rem' }}>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            {/* Add more font-size options as needed */}
          </select>
        </div>

      </div>
    )},
  ];

  useEffect(() => {
    async function fetchTemplateDetails() {
      try {
        const response = await fetch(`http://localhost:5000/fetchsingletemplate/${id}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setTemplateDetails(data); // Set template details received from API
        setModifiedContent(data.html); // Set initial content

        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data.html, 'text/html');

        // Retrieve the element with class "name" and get its text content
        const nameElement = htmlDoc.querySelector('.name');
        const name = nameElement.textContent.trim(); // This will give you the name content

        console.log(data.html)
        console.log(name);


        // Prepopulate inputs with template details
        if (data) {
        setTemplateInfo({
          company: data.company || '',
          email: data.email || '',
          website: data.website || '',
          phone: data.phone || '',
        })};

      } catch (error) {
        console.error('Error fetching template details:', error);
      }
    }

    async function fetchAllTemplates() {
      try {
        const response = await fetch('http://localhost:5000/fetchAlltemplates'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setAllTemplates(data); // Set fetched templates to state
      } catch (error) {
        console.error('Error fetching all templates:', error);
      }
    }

    fetchAllTemplates();
    fetchTemplateDetails();
  }, [id]); // Include id in the dependency array to fetch details when id changes

  const applyStyles = () => {
    if (templateDetails) {
      const styledContent = contentRef.current.innerHTML;
      setModifiedContent(styledContent);
    }
  };

  const saveTemplate = () => {
    // Here you can save modifiedContent to your backend
    // Placeholder alert for demonstration
    alert('Template saved with modifications!');
  };

  // Function to update template content and state for specific fields
  const updateField = (field, newValue) => {
    // Update the specific field in templateInfo state
    setTemplateInfo({ ...templateInfo, [field]: newValue });

    // Update the displayed content in the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');

    // Retrieve the element with class corresponding to the field and update its content
    const fieldElement = htmlDoc.querySelector(`.${field}`);
    if (fieldElement) {
      // Check if it's a link (for the website)
      if (field === 'website') {
        fieldElement.innerHTML = `<a href="${newValue}">${newValue}</a>`;
      } else {
        // fieldElement.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${newValue}`;
        fieldElement.textContent = `${newValue}`;
      }
    }

    // Set modified content to display updated field
    setModifiedContent(htmlDoc.documentElement.outerHTML);
  };

  return (
    <>

      <div style={{ display: 'flex' }}>

      {/* righ side panel  */}
      <div className="" style={{ 
        display: 'flex', 
        height: '100%',
        width: '40%'    
        }}>
          
        <div style={{ 
          width: '6rem', 
          backgroundColor: "#065AD8",
          height: '100%',
          borderRadius: "1rem 0rem 0rem 1rem"
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sections.map((section, index) => (
              <div className='' key={index} style={{ marginBottom: '10px'}}>
                <i className={section.icon} style={{ fontSize: '25px', color: 'white', marginTop: '1rem', marginLeft: '40%' }} onClick={() => handleSectionClick(section.title)}></i>
                <p className='text-light text-center' onClick={() => handleSectionClick(section.title)}>
                  {section.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='px-3' style={{width: "80%"}}>
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
        </div>
        {/* main screen ends here  */}

      </div>
    </>
  );
}