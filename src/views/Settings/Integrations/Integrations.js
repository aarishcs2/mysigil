import React from "react";
import { Card } from "antd";
import { FcOk } from "react-icons/fc";

const Integrations = () => {
  return (
    <div className="container my-2 mt-4">
      {/* Main data source */}
      <div className="mt-4 mb-2">
        <h4> Main data source</h4>
        <p>
          Connect your main data source with Scribe to import your co-workers
          data. <br />
          For now, only one main data source can be linked per Scribe workspace.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-2">
        <div className="col">
          <Card bordered={false} className="shadow-sm h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-shrink-0">
                <div className="letter-btn-card">G</div>
              </div>
              <div className="flex-grow-1 ms-3">Google Workspace Directory</div>
              <div className="flex-shrink-0">
                <FcOk size={24} />
              </div>
            </div>
          </Card>
        </div>
        <div className="col">
          <Card bordered={false} className="shadow-sm h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-shrink-0">
                <div className="letter-btn-card">H</div>
              </div>
              <div className="flex-grow-1 ms-3">
                Microsoft Azure Active Directory
              </div>
              <div className="flex-shrink-0">
               
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* Signature installation destinations */}
      <div>
        <h4 className="mt-4">Signature installation destinations</h4>
        <p>
          Connect your signature installation destinations with Scribe tobr <br />
          install your co-workers signatures.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-2">
        <div className="col">
          <Card bordered={false} className="shadow-sm h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-shrink-0">
                <div className="letter-btn-card">G</div>
              </div>
              <div className="flex-grow-1 ms-3">Google Workspace (Gmail)</div>
              <div className="flex-shrink-0">
                <FcOk size={24} />
              </div>
            </div>
          </Card>
        </div>
        <div className="col">
          <Card bordered={false} className="shadow-sm h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-shrink-0">
                <div className="letter-btn-card">O</div>
              </div>
              <div className="flex-grow-1 ms-3">
              Office 365 (Windows, Mac, Web)
              </div>
              <div className="flex-shrink-0">
                <FcOk size={24} />
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      
    </div>
  );
};

export default Integrations;
