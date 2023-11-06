import React from "react";
import { Icon } from "@iconify/react";
import { Col, Row } from "antd";

function CSV() {

  return (
    <div>
      <h5>Manage CSV exports</h5>
      <Row>
        <Col xs={18} lg={10} className="mt-3">
          <div class="create-department-button font-weight-bold">
            <Icon icon="icons8:plus" className="me-1 " />
            Create your first CSV export
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CSV;
