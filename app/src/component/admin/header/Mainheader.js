import React, { useState } from "react";
import { Container, Dropdown, Navbar, Offcanvas } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router";
import { Button } from "rsuite";
import SidebarFun from "../../admin/dashboardPage/sidebar/Navbarside";
import { AiOutlineSetting } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";

function Mainheader() {
  const navigate = useNavigate();

  const SignClick = () => {
    navigate("/signin");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutClick = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  return (
    <>
      {["lg"].map((expand) => (
        <div className="sticky-top bg-white ">
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <div className="adminnavbar ">
                <div className="adminmainnav_bar">
                  <div>
                    <Navbar.Brand className="" href="#">
                      INSTEPCART{" "}
                    </Navbar.Brand>
                  </div>

                  <div className="Navbaricons hide_for_mobile">
                    <div className="navicon_heading">
                      <BsGlobe2 className="navicons" /> visit store
                    </div>

                    <MdOutlineNotificationsActive className="navicons" />
                    <Dropdown data-bs-theme="">
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                        className="adminnav_profiletoggle"
                      >
                        <img
                          className="profile_img"
                          src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
                          alt=""
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="adminprofiledrop">
                        <Dropdown.Item>
                          <IoMdPerson /> My Account
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <AiOutlineSetting /> Settings
                        </Dropdown.Item>
                        <Dropdown.Item onClick={logoutClick}>
                          <GoSignOut />
                          Sign Out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="MobileScreenBtn">
                    {" "}
                    <Button
                      variant="primary"
                      className="offcanvas_toggole_btn for_mobile"
                      onClick={handleShow}
                    >
                      <span className="navbar-toggler-icon"></span>
                    </Button>
                  </div>
                  <Button
                    variant="primary"
                    className="offcanvas_toggole_btn for_tablet "
                    onClick={handleShow}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </Button>
                </div>
                <div className="navbar_toogle_item">
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>INSTEPCART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="offcanvas_inner_body">
                      <div className="Navbaricons for_only_mobile">
                        {/* <div>
                          <Button onClick={() => SignClick()}>sigin</Button>
                        </div> */}
                        <div className="navicon_heading">
                          <BsGlobe2 className="navicons" /> visit store
                        </div>
                        <img
                          className="profile_img"
                          src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
                          alt=""
                        />
                        <Button
                          variant="primary"
                          className="offcanvas_toggole_btn for_tablet "
                          onClick={handleShow}
                        >
                          <span className="navbar-toggler-icon"></span>
                        </Button>
                      </div>
                      <SidebarFun onHide={handleClose} show={show} />
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </div>
            </Container>
          </Navbar>
        </div>
      ))}
    </>
  );
}

export default Mainheader;
