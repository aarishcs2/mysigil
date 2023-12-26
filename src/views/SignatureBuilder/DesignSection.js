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
}) => (
  <div>
    <h5>Design</h5>
    <div className='d-flex justify-content-between'>
      <p>Font</p>
      <select
        className='form-control w-50'
        value={selectedFont}
        onChange={handleFontChange}
        style={{ fontSize: '0.8rem' }}
      >
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
);

export default DesignSection;
