import React, { useEffect, useState } from "react";
import { Sidenav, Nav } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import {
  AiFillSetting,
  AiFillTags,
  AiFillUnlock,
  AiOutlineDashboard,
} from "react-icons/ai";
import { HiDocument, HiOutlineUserGroup } from "react-icons/hi";
import {
  MdOutlineSpaceBar,
  MdPermMedia,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { BsArrow90DegLeft, BsAwardFill, BsFilePostFill } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import { FaShoppingCart, FaUserCheck } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";
import { BiCut, BiSolidReport } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const SidebarFun = (props) => {
  const { onHide } = props;
  const navigate = useNavigate();

  const dashClick = () => {
    navigate("/");
  };

  return (
    <div className="admin_sidebar col_hide">
      <Sidenav defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <div className="sidebar_deco">
            <Nav activeKey="1">
              <Nav.Item
                className="dashboard"
                eventKey="1"
                onClick={() => dashClick()}
              >
                <AiOutlineDashboard />
                Dashboard
              </Nav.Item>
              <Nav.Menu
                eventKey="2"
                title="Products"
                icon={<MdProductionQuantityLimits />}
              >
                <Nav.Item eventKey="2-1" onClick={onHide}>
                  <Link to={"/allproduct"}>- All Products</Link>
                </Nav.Item>
                <Nav.Item eventKey="2-2">
                  <Link to={"/Allcategories"} onClick={onHide}>
                    - All Categories
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="2-3">
                  <Link to={"/allsubcategory"} onClick={onHide}>
                    - All Subcategory
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="2-4">
                  <Link to={"/allsubtypecategory"} onClick={onHide}>
                    - All Subtypecategory
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="2-5">
                  <Link to={"/Allbrands"} onClick={onHide}>
                    - All Brands
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="2-6">
                  <Link to={"/slider"} onClick={onHide}>
                    - Slider
                  </Link>
                </Nav.Item>
                {/* <Nav.Item eventKey="2-7">
                  <Link to={"/trending"}>- Trending Products</Link>
                </Nav.Item> */}
              </Nav.Menu>
              <Nav.Menu
                eventKey="24"
                title="User Navbar"
                icon={<MdOutlineSpaceBar />}
              >
                <Nav.Item eventKey="24-1" onClick={onHide}>
                  <Link to={"/headeradmin"}>- User Navbar</Link>
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="3"
                title="Pos System"
                icon={<BsFilePostFill />}
              ></Nav.Menu>
              <Nav.Menu eventKey="4" title="Order" icon={<HiDocument />}>
                <Nav.Item eventKey="4-1" onClick={onHide}>
                  <Link to={"/trackorder"}>- Orders</Link>
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="5" title="Stock" icon={<GoDatabase />}>
                <Nav.Item eventKey="5-1" onClick={onHide}>
                  <Link to={"/Addstock"}>- Add Stock </Link>
                </Nav.Item>
                <Nav.Item eventKey="5-2" onClick={onHide}>
                  <Link to={"/Allloation"}>- All Stock</Link>
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="6"
                title="Refunds"
                icon={<BsArrow90DegLeft />}
              >
                <Nav.Item eventKey="6-1" onClick={onHide}>
                  -Refund Configurations
                </Nav.Item>
                <Nav.Item eventKey="6-2" onClick={onHide}>
                  -Refunds Requests
                </Nav.Item>
                <Nav.Item eventKey="6-1" onClick={onHide}>
                  -Approved Refunds
                </Nav.Item>
                <Nav.Item eventKey="6-2" onClick={onHide}>
                  -Rejected Refunds
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="7"
                title="Rewards & Wallet"
                icon={<BsAwardFill />}
              >
                <Nav.Item eventKey="7-1" onClick={onHide}>-Rewards Configurations</Nav.Item>
                <Nav.Item eventKey="7-2" onClick={onHide}>-Set Reward Points</Nav.Item>
                <Nav.Item eventKey="7-3" onClick={onHide}>-Wallet Configurations</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="8"
                title="Customer"
                icon={<HiOutlineUserGroup />}
              >
                <Nav.Item eventKey="8-1">
                  <Link to={"/customerdetail"}>Customer Detail </Link>
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu title="Employee Staff" icon={<FaUserCheck />} />
              <Nav.Menu eventKey="9" title="Tags" icon={<AiFillTags />} />
              <Nav.Menu eventKey="10" title="Pages" icon={<SiPowerpages />} />
              <Nav.Menu eventKey="11" title="Blogs" icon={<BsAwardFill />}>
                <Nav.Item eventKey="11-1" onClick={onHide}>All Blogs</Nav.Item>
                <Nav.Item eventKey="11-2" onClick={onHide}>Categories</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="12"
                title="Media Manager"
                icon={<MdPermMedia />}
              />
              <Nav.Menu
                eventKey="13"
                title="Newsletters"
                //  icon={<BsAwardFill />}
              >
                <Nav.Item eventKey="13-1" onClick={onHide}>
                  <Link to={"/Bulkemails"}>Bulk Email </Link>
                </Nav.Item>
                <Nav.Item eventKey="13-2" onClick={onHide}>
                  <Link to={"/Subscriber"}> Subscribers</Link>
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="14" title="Coupons" icon={<BiCut />} />
              <Nav.Menu eventKey="15" title="Campaigns" />
              <Nav.Menu eventKey="16" title="Logistics" icon={<BiCut />} />
              <Nav.Menu
                eventKey="17"
                title="Shopping Zones"
                icon={<FaShoppingCart />}
              />
              <Nav.Menu eventKey="18" title="Reports" icon={<BiSolidReport />}>
                <Nav.Item eventKey="18-1" onClick={onHide}>
                  <Link to={"/Orderreport"} >-Order Report</Link>
                </Nav.Item>
                <Nav.Item eventKey="18-2" onClick={onHide}>
                  <Link to={"/Productsale"}>-Products Sales</Link>
                </Nav.Item>
                <Nav.Item eventKey="18-3" onClick={onHide}>
                  <Link to={"/Categorywise"}>-Category Wise Sales</Link>
                </Nav.Item>
                <Nav.Item eventKey="18-4" onClick={onHide}>
                  <Link to={"/Salesamountreport"}>-Sales Amount Report</Link>
                </Nav.Item>
                <Nav.Item eventKey="18-4" onClick={onHide}>
                  <Link to={"/Deliverystatusreport"}>
                    -Delivery Status Report
                  </Link>
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="19"
                title="Queries"
                //  icon={<BsAwardFill />}
              />
              <Nav.Menu eventKey="20" title="Appearance">
                <Nav.Item eventKey="20-1"> -Home Page</Nav.Item>
                <Nav.Item eventKey="20-2">-Products Page</Nav.Item>
                <Nav.Item eventKey="20-3">-Products Details</Nav.Item>
                <Nav.Item eventKey="20-4">-About Us</Nav.Item>
                <Nav.Item eventKey="20-5">-Header</Nav.Item>
                <Nav.Item eventKey="20-5">-Footer</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="22"
                title="Roles & Permissions"
                icon={<AiFillUnlock />}
              />
              <Nav.Menu eventKey="23" title="Setting" icon={<AiFillSetting />}>
                <Nav.Item eventKey="23-1">- Auth Setting</Nav.Item>
                <Nav.Item eventKey="23-2">-OTP Setting</Nav.Item>
                <Nav.Item eventKey="23-3">-Order Setting</Nav.Item>
                <Nav.Item eventKey="23-4">-Smtp Setting</Nav.Item>
                <Nav.Item eventKey="23-5">-General Setting</Nav.Item>
                <Nav.Item eventKey="23-6">-Payment Methods</Nav.Item>
                <Nav.Item eventKey="23-7">-Social Media Login</Nav.Item>
                <Nav.Item eventKey="23-8">-Multilingual Setting</Nav.Item>
                <Nav.Item eventKey="23-9">-Multi Currency Setting</Nav.Item>
              </Nav.Menu>
            </Nav>
          </div>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SidebarFun;
