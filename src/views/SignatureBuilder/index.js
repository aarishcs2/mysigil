import "./index.css";
import { Icon } from "@iconify/react";
import SignatureCard from "../../components/SignatureCard/SignatureCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePopup from "../../components/Popup/Createpopup/CreatePopup";

function SignatureBuilder() {
  const [templates, setTemplates] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [deletingTemplateId, setDeletingTemplateId] = useState(null);
  const [clickedTemplateId, setClickedTemplateId] = useState(null);
  const [updatedTemplateName, setUpdatedTemplateName] = useState('');

  // Function to handle template click and set the clicked template ID
  const handleLaunchModal = (templateId) => {
    setClickedTemplateId(templateId);
  };

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch("http://localhost:5000/fetchAlltemplates");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched templates:", data);
          setTemplates(data || []); // Assuming templates are returned in the 'templates' field of the response
        } else {
          // Handle error if fetch is unsuccessful
          console.error("Failed to fetch templates");
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    }

    fetchTemplates();
  }, []);

  const handleDeleteConfirmation = (templateId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this template?');

    if (confirmDelete) {
      setDeletingTemplateId(templateId); // Set the ID of the template to delete if confirmed
    }
  };

  // Function to handle the form submission and update the template name
  const handleUpdateTemplateName = async () => {
    try {
      const response = await fetch(`http://localhost:5000/updateTemplatename/${clickedTemplateId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: updatedTemplateName }),
      });

      if (response.ok) {
        console.log('Template name updated successfully');
        // You can reload the templates or perform any other action after a successful update
        window.location.reload();
      } else {
        console.error('Failed to update template name');
        // Handle update failure
      }
    } catch (error) {
      console.error('Error updating template name:', error);
    }
  };

  const handleDuplicateTemplate = async () => {
    try {
      // Find the template that matches the clickedTemplateId
      const selectedTemplate = templates.find((template) => template._id === clickedTemplateId);
  
      if (!selectedTemplate) {
        console.error('Template not found');
        return;
      }
  
      const { html, workspaceId } = selectedTemplate;
  
      const response = await fetch(`http://localhost:5000/duplicateTemplate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // templateId: clickedTemplateId,
          name: updatedTemplateName,
          html: html,
          workspaceId: workspaceId,
        }),
      });
  
      if (response.ok) {
        console.log('Template Duplicated successfully');
        // You can reload the templates or perform any other action after a successful update
        window.location.reload();
      } else {
        console.error('Failed to duplicate template');
        // Handle duplication failure
      }
    } catch (error) {
      console.error('Error duplicating template', error);
    }
  };
  

  // handle delete template 
  const handleDelete = async () => {
    try {
      // Send DELETE request to backend with the template ID
      const response = await fetch(`http://localhost:5000/deletetemplate/${deletingTemplateId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // On successful deletion, update UI or refetch templates
        console.log('Template deleted successfully');
        // Refresh templates after deletion
        window.location.reload();

      } else {
        console.error('Failed to delete template');
        // Handle deletion failure
      }
    } catch (error) {
      console.error('Error deleting template:', error);
    }
  }

  return (
    <>
      {popupOpen ? (
        <CreatePopup
          popupheading="Create New Template"
          popuspera="Choose your signature template name"
          popusinputplaceholdername="Signature Template name"
          // onClick={() => setPopupOpen(false)}
          onSubmit={() => {
            
          }}
          onClose={() => {
            setPopupOpen(false)
          }}
          // onChange={(event) => setWorkSpaceName(event.target.value)}

          // onClose={() => setPopupOpen(false)}

        />
      ) : null}
      
      <div className="SignatureBuilder__Main">
        <div className="Flex__Setting">
          <div className="Signature__heading">Signature </div>
          <div>
            <button
              onClick={() => {
                setPopupOpen(true);
              }}
              className="CreateNewTeamButton"
            >
              Create New
            </button>
          </div>
        </div>
        <div>
          <div className="SignatureDetal">
            <div>
              <img src="/images/DoteLogo.png" />
            </div>
            <div className="signatureContent">
              Create signature templates with your customize message.
            </div>
          </div>
          <div className="SignatureDetal">
            <div>
              <img src="/images/DoteLogo.png" />
            </div>
            <div className="signatureContent">
              Choose to which departments you want to assign your signature
              templates.
            </div>
          </div>

          <div className="SignatureDetal">
            <div>
              <img src="/images/DoteLogo.png" />
            </div>
            <div className="signatureContent">
              Assign teammates to departments Teammates will inherit the
              templates to their related department.
            </div>
          </div>      

          <div className="row px-3 mt-4 pt-2 pb-4" style={{backgroundColor: "white", borderRadius: '0.5rem'}}>
        
            {/* creatinf template  */}
            {/* <div className="col-md-4">
              <div
                onClick={() => {
                  setPopupOpen(true);
                }}
                className="CreateSignature mt-4"
              >
                <div className="circlegole">
                  <img src="/images/Vector.png" />
                </div>
                <div
                  onClick={() => {
                    setPopupOpen(true);
                  }}
                  className="contentCreate"
                >
                  Create New
                </div>
              </div>
            </div> */}

            
            {/* edit template name  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Template Name</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form id='submitform'>
                      <input className="d-none" value={clickedTemplateId}></input>
                      <div class="mb-3">
                        <label for="name" class="form-label">Template Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value={updatedTemplateName}
                          onChange={(e) => setUpdatedTemplateName(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                    <button type="button" 
                    class="btn btn-success btn-sm" 
                    onClick={handleUpdateTemplateName}
                    style={{backgroundColor: '#0d6efd'}}
                    >                    
                    Update</button>
                  </div>
                </div>
              </div>
            </div>

            {/* duplicate template modal  */}
            <div class="modal fade" id="duplicateModal" tabindex="-1" aria-labelledby="duplicateModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="duplicateModalLabel">Duplicate Template</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form id='submitform'>
                      {/* <input className="d-none" value={clickedTemplateId}></input> */}
                      <div class="mb-3">
                        <label for="name" class="form-label">Template Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value={updatedTemplateName}
                          onChange={(e) => setUpdatedTemplateName(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                    <button type="button" 
                    class="btn btn-success btn-sm" 
                    onClick={handleDuplicateTemplate}
                    style={{backgroundColor: '#0d6efd'}}
                    >                    
                    Duplicate</button>
                  </div>
                </div>
              </div>
            </div>

              {/* displaying the templates  */}
              {templates.map((template, index) => (
                <div className="col-md-4 mt-3">
                    <Link to={`/dashboard/Edit-template/${template._id}`}>
                      {/* <div className="" key={index} style={{boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", borderRadius: '0.3rem'}}>
                        <div className="bg-light px-1 py-4" style={{boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", borderRadius: '0.3rem'}} dangerouslySetInnerHTML={{ __html: template.html }}>
                           */}
                      <div className="" key={index} style={{borderRadius: '0.3rem', boxShadow: '0px rgba(0,0,0,0.2)'}}>
                      <div
                          className="bg-light px-1 py-1"
                          style={{
                            borderRadius: '0.3rem',
                            // border: '1px solid rgba(0,0,0,0.1)',
                            boxShadow: '0px rgba(0,0,0,0.2)',
                            maxHeight: '10rem',
                            color: 'black',
                            // overflow: 'auto',
                            overflow: 'hidden', // Cut off any content exceeding the specified height
                          }}
                          dangerouslySetInnerHTML={{ __html: template.html }}
                        >
                        </div>
                      </div>
                    </Link>

                    <div className="px-1" style={{ display: 'flex', 
                    justifyContent: 'space-between' , 
                    borderRadius: '0rem 0rem 0.3rem 0.3rem',
                    boxShadow: '1px 2px 3px rgba(0,0,0,0.2)',
                    marginTop: '-0.1rem'}}>
                      <p className=" pt-2 fw-bold">{template.name}</p>
                      <div className="dropdown pt-2">
                        
                        <i class="fa-solid fa-ellipsis dropdown-toggle py-1" 
                        type="button" id="dropdownMenuButton1" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        style={{border: '1.5px solid grey', borderRadius: '50%', color: 'grey'}}
                        ></i>

                        <ul class="dropdown-menu px-3" aria-labelledby="dropdownMenuButton1">
                          
                          {/* <button type="button" 
                          class="btn btn-primary" 
                          data-bs-toggle="modal" 
                          data-bs-target="#exampleModal"
                          onClick={() => {
                            handleLaunchModal(template._id);
                            setUpdatedTemplateName(template.name);
                          }}
                          >
                            Launch demo modal
                          </button> */}

                          <li ><Link style={{color: 'black'}} to={`/dashboard/Edit-template/${template._id}`}><i style={{color: 'black'}} class="fa-solid fa-pen-to-square"></i> Edit Signature</Link></li>
                          <li 
                          data-bs-toggle="modal" 
                          data-bs-target="#exampleModal"
                          onClick={() => {
                            handleLaunchModal(template._id);
                            // Set the current template name in the input field
                            setUpdatedTemplateName(template.name);
                          }}                          
                          > <i style={{color: 'black', cursor: 'pointer'}} class="fa-solid fa-pen"></i> Rename </li>

                          <li 
                          data-bs-toggle="modal" 
                          data-bs-target="#duplicateModal"
                          onClick={() => {
                            handleLaunchModal(template._id);
                            // Set the current template name in the input field
                            setUpdatedTemplateName(template.name);
                          }}                          
                          > <i style={{color: 'black', cursor: 'pointer'}} class="fa-solid fa-copy"></i> Duplicate </li>
                          
                          {/* <li ><Link style={{color: 'black'}} to={`/dashboard/Edit-template/${template._id}`}><i style={{color: 'black'}} class="fa-solid fa-copy"></i> Duplicate</Link></li> */}
                          
                          <li onClick={() => handleDeleteConfirmation(template._id)} style={{cursor: 'pointer'}}> <i class="fa-solid fa-delete-left"></i> Delete</li>
                        </ul>
                      </div>
                      
                    </div>
                    
                </div>
              ))}
              {/* The triggering logic for handleDelete */}
              {deletingTemplateId && handleDelete()}
              
          </div>
        </div>
      </div>
    </>
  );
}

export default SignatureBuilder;