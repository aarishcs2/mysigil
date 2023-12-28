import React from 'react';

const DesignSection = ({
  selectedFont,
  handleFontChange,
  fonts,
  fontStyle,
  handleFontWeightChange,
  handleBackgroundColorChange,
  backgroundColor,
  handleFontSizeChange,
  handleColorChange,
  handleBoldChange,
  handleItalicChange,
  handleUnderlineChange,
  handleToggleCase
}) => (
  <div>
    <h6 className='fw-bold'>Design</h6>
    <div className='d-flex justify-content-between'>
      <p>Font</p>
      <select
        className='form-control w-50'
        value={selectedFont}
        onChange={handleFontChange}
        style={{ fontSize: '0.8rem', height: '1.8rem' }}
      >
        {fonts.map((font, index) => (
          <option key={index} value={font}>{font}</option>
        ))}
      </select>
    </div>

    {/* font weight  */}
    <div className='d-flex justify-content-between'>
        <p>Font Scale</p>
        <select className='form-control w-50' 
        value={fontStyle.fontWeight} 
        onChange={handleFontWeightChange} 
        style={{ fontSize: '0.8rem', height: '1.8rem' }}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
            {/* Add more font-weight options as needed */}
        </select>
        </div>

    {/* template color  */}
    <div className='d-flex justify-content-between'>
        <p>Template Color</p>
        <input
        className='form-control w-50'
        type="color"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
        />
    </div>
        
    {/* font size  */}
    <div className='d-flex justify-content-between align-items-center'>
      <p>Font size</p>
      <div style={{ width: '50%', marginLeft: '10px' }}>
        <input
          type="range"
          min="12"
          max="24"
          value={fontStyle.fontSize.replace('px', '')} // Assuming fontSize is in 'px'
          onChange={handleFontSizeChange}
          className='form-range'
          style={{ width: '100%' }}
        />
      </div>
      {/* <span style={{ marginLeft: '10px' }}>{fontStyle.fontSize}</span> */}
    </div>

    {/* <div className='d-flex justify-content-between'>
        <p>Font size</p>
        <select className='form-control w-50' 
        value={fontStyle.fontSize}
        onChange={handleFontSizeChange} 
        style={{ fontSize: '0.8rem', height: '1.8rem' }}>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        </select>
    </div> */}

    {/* text color  */}
    <div className='d-flex justify-content-between'>
        <p>Text Color</p>
        <input className='form-control w-50' type="color" value={fontStyle.color} onChange={handleColorChange} />
    </div>

    {/* line spacing  */}
    <div className='d-flex justify-content-between'>
        <p>Line spacing</p>
        <select className='form-control w-50' 
        value={fontStyle.fontSize} onChange={handleFontSizeChange} 
        style={{ fontSize: '0.8rem', height: '1.8rem' }}>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        {/* Add more font-size options as needed */}
        </select>
    </div>

    <div>
    <h6 className='fw-bold mt-3'>Field styles</h6>
      <div className='bg-light p-2'>
          {/* for name  */}
          <div className='d-flex justify-content-between'>
              <p>Name</p>
              <select
                className='form-control w-50'
                value={selectedFont}
                onChange={handleFontChange}
                style={{ fontSize: '0.8rem', height: '1.8rem' }}
              >
                {fonts.map((font, index) => (
                  <option key={index} value={font}>{font}</option>
                ))}
              </select>
          </div>

          {/* for title  */}
          <div className='d-flex justify-content-between'>
            <p>Title</p>
            <div className=''>
            <span className='mx-2 fw-bold bg-white p-1'
              onClick={handleBoldChange} 
              style={{ fontWeight: fontStyle.bold ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              B
            </span>
            <span className='mx-2 fw-bold bg-white p-1'
              onClick={handleItalicChange} 
              style={{ fontStyle: fontStyle.italic ? 'italic' : 'normal', cursor: 'pointer' }}
            >
              /
            </span>
            <span className='mx-2 fw-bold bg-white p-1'
              onClick={handleUnderlineChange} 
              style={{ textDecoration: fontStyle.underline ? 'underline' : 'none', cursor: 'pointer' }}
            >
              U̲
            </span>

            <span className='fw-bold bg-white p-1' onClick={handleToggleCase} style={{ cursor: 'pointer' }}>Aa</span>

            </div>
          </div>

          {/* for company  */}
          <div className='d-flex justify-content-between'>
              <p>Company</p>
              <select className='form-control w-50' 
              value={fontStyle.fontSize}
              onChange={handleFontSizeChange} 
              style={{ fontSize: '0.8rem', height: '1.8rem' }}>
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              {/* Add more font-size options as needed */}
              </select>
          </div>
          {/* for details  */}
          <div className='d-flex justify-content-between'>
              <p>Details</p>
              <input className='form-control w-50' type="color" value={fontStyle.color} onChange={handleColorChange} />
          </div>

      </div>
    </div>

    {/* images */}
    <h6 className='fw-bold mt-3'>Images</h6>
    {/* shape  */}
    <div className='d-flex justify-content-between'>
      <p>Shape</p>
      <div className="d-flex align-items-center bg-light px-2" style={{borderRadius: '0.5rem',}}>
        <span className='mx-2'
          // onClick={() => handleShapeChange('square')} 
          style={{
            width: '20px',
            height: '20px',
            // backgroundColor: selectedShape === 'square' ? 'blue' : 'transparent',
            border: '1px solid black',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        ></span>
        <span className='mx-3'
          // onClick={() => handleShapeChange('circle')} 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            // backgroundColor: selectedShape === 'circle' ? 'red' : 'transparent',
            border: '1px solid black',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        ></span>
        <span className='mx-2'
          // onClick={() => handleShapeChange('triangle')} 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '20%',
            // backgroundColor: selectedShape === 'circle' ? 'red' : 'transparent',
            border: '1px solid black',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        ></span>
      </div>
    </div>


      {/* size  */}
      <div className='d-flex justify-content-between align-items-center'>
        <p>Size</p>
        <div style={{ width: '50%', marginLeft: '10px' }}>
          <input
            type="range"
            min="12"
            max="24"
            value={fontStyle.fontSize.replace('px', '')} // Assuming fontSize is in 'px'
            onChange={handleFontSizeChange}
            className='form-range'
            style={{ width: '100%' }}
          />
        </div>
        {/* <span style={{ marginLeft: '10px' }}>{fontStyle.fontSize}</span> */}
      </div>

      {/* position  */}
      <div className='d-flex justify-content-between'>
          <p>Position</p>
          <input
            className='form-control w-50'
            style={{ fontSize: '0.8rem', height: '1.8rem' }}
            >
          </input>
      </div>

      {/* social icons  */}
    <h6 className='fw-bold mt-3'>Social icons</h6>
          {/* fill  */}
          <div className='d-flex justify-content-between'>
      <p>Fill</p>
      <div className="d-flex align-items-center px-2" style={{borderRadius: '0.5rem',}}>
        <i style={{color: '#065AD8'}} className="fa-2x fa-brands fa-facebook"></i>
        <i style={{color: '#065AD8'}} className="fa-2x fa-brands fa-facebook-f mx-3"></i>
        <i style={{color: '#065AD8'}} className="fa-2x fa-brands fa-square-facebook"></i>
      </div>
    </div>

      {/* shape  */}
      <div className='d-flex justify-content-between'>
      <p>Shape</p>
        <div className="d-flex align-items-center bg-light px-2" style={{borderRadius: '0.5rem',}}>
          <span className='mx-2'
            // onClick={() => handleShapeChange('square')} 
            style={{
              width: '20px',
              height: '20px',
              // backgroundColor: selectedShape === 'square' ? 'blue' : 'transparent',
              border: '1px solid black',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          ></span>
          <span className='mx-3'
            // onClick={() => handleShapeChange('circle')} 
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              // backgroundColor: selectedShape === 'circle' ? 'red' : 'transparent',
              border: '1px solid black',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          ></span>
          <span className='mx-2'
            // onClick={() => handleShapeChange('triangle')} 
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '20%',
              // backgroundColor: selectedShape === 'circle' ? 'red' : 'transparent',
              border: '1px solid black',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          ></span>
        </div>
      </div>

      {/* size  */}
      <div className='d-flex justify-content-between align-items-center'>
        <p>Size</p>
        <div style={{ width: '50%', marginLeft: '10px' }}>
          <input
            type="range"
            min="12"
            max="24"
            value={fontStyle.fontSize.replace('px', '')} // Assuming fontSize is in 'px'
            onChange={handleFontSizeChange}
            className='form-range'
            style={{ width: '100%' }}
          />
        </div>
      </div>

  </div>
);

export default DesignSection;
