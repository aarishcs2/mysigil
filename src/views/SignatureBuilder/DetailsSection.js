import React, { useState } from 'react';

const DetailsSection = ({
  handleImageChange,
  templateInfo,
  updateField,
  uploadBtnStyle,
  uploadIconStyle,
  uploadIconStyle2,
}) => {
  const [customFields, setCustomFields] = useState([]);

  const handleAddCustomField = () => {
    // Retrieve values from the form
    const type = document.getElementById('type').value;
    const label = document.getElementById('label').value;
    const fieldValue = document.getElementById('fieldValue').value;

    // Create a new custom field object
    const newCustomField = {
      type,
      label,
      value: fieldValue,
    };

    // Add the new custom field to the existing customFields array
    setCustomFields([...customFields, newCustomField]);

    // Close the modal or reset the form fields as needed
    // For example:
    // document.getElementById('submitf').reset(); // Reset the form fields
    // $('#exampleModal').modal('hide'); // Close the modal using jQuery (if applicable)
  };

  return (
    <div>
      <h6 className='fw-bold'>Signature Details</h6>
     <label htmlFor="file-input" style={uploadBtnStyle} className="">
       <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none'}}
      />
      <div style={uploadIconStyle}>
        <i style={{color: '#065AD8'}} className="fas fa-cloud-upload-alt"></i>
      </div>
      <p className='text-sm' style={uploadIconStyle2}>Profile picture</p>
        </label>

        <input
        placeholder='Name'
        className='form-control mt-2'
        value={templateInfo.name}
        onChange={(e) => updateField('name', e.target.value)}
        // onChange={handleNameChange}
        />
        <input
        placeholder='Position'
        className='form-control mt-3'
        value={templateInfo.position}
        onChange={(e) => updateField('position', e.target.value)}
        />
        <input
        placeholder='Company'
        className='form-control mt-3'
        value={templateInfo.company}
        onChange={(e) => updateField('company', e.target.value)}
        />
        <input
        placeholder="Email"
        className='form-control mt-3'
        value={templateInfo.email}
        onChange={(e) => updateField('email', e.target.value)}
        />
        <input
        placeholder="Phone"
        className='form-control mt-3'
        value={templateInfo.phone}
        onChange={(e) => updateField('phone', e.target.value)}
        />
        <input
        placeholder="Mobile"
        className='form-control mt-3'
        value={templateInfo.mobile}
        onChange={(e) => updateField('mobile', e.target.value)}
        />
        <input
        placeholder="Address"
        className='form-control mt-3'
        value={templateInfo.address}
        onChange={(e) => updateField('address', e.target.value)}
        />
        <input
        placeholder="Website"
        className='form-control mt-3'
        value={templateInfo.website}
        onChange={(e) => updateField('website', e.target.value)}
        />

        {/* Display added custom fields */}
        {customFields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={field.label}
              className="form-control mt-3"
              value={field.value}
              readOnly // Make the field read-only so it can't be edited
            />
          </div>
        ))}

      {/* Button to open modal for adding custom fields */}
      <p
        className='fw-bold mt-3'
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ color: '#065AD8', cursor: 'pointer'}}
      >
        <span style={{ border: '1px solid #065AD8', borderRadius: "50%" }}>
          <i className="fas fa-plus p-1"></i>
        </span> Add Custom Field
      </p>

      {/* Modal for adding custom fields */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Custom Field</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Form for adding custom fields */}
              <form id="submitf">
                <div className="mb-3">
                  <input type="text" placeholder='Type' className="form-control" id="type" aria-describedby="type" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Label' className="form-control" id="label" aria-describedby="label" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Field Value' className="form-control" id="fieldValue" aria-describedby="fieldValue" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleAddCustomField} style={{ width: "100px" }}>Done</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default DetailsSection;
