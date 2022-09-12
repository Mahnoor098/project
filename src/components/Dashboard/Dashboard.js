import React, { Component } from "react";
import { Breadcrumb, Button, ButtonGroup } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../Footer";
import Navbar from "../../navbar";
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="mb-4 mb-lg-0">
          
              <h4>ClassDojo</h4>
              <p className="mb-0">Your web analytics dashboard template.</p>
            </div>
            <br />
            <br />
            
            <div className="btn-toolbar mb-2 mb-md-0 justify-content-center">
              <Button variant="primary" size="sm">
                <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New User
              </Button>
              <ButtonGroup className="ms-3">
                <Button variant="outline-primary" size="sm">
                  Share
                </Button>
                <Button variant="outline-primary" size="sm">
                  Export
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
     
        <Footer />
      </>
    );
  }
}
