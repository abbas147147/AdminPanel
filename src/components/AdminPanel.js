import React, { useState, useEffect } from "react";
//chart
import Abbas from "./Abbas";
import Chart from "./Chart";
//reactbootstrap
import { Dropdown, Col, Row, Container, Button, Table } from "react-bootstrap";
//style
import "./admin.css";
//icon
import {
  FaBars,
  FaProductHunt,
  FaPercent,
  FaTicketAlt,
  FaUserCog,
  FaCommentAlt,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import {
  BsFillHouseDoorFill,
  BsShop,
  BsArrowDownShort,
  BsBox,
  BsEnvelope,
  BsBellFill,
  BsEyeFill,
  BsPersonBoundingBox,
  BsGithub,
  BsCurrencyDollar,
} from "react-icons/bs";
//img
import img1 from "../img/7.jpg";
import img2 from "../img/5.jpg";
import img3 from "../img/4.jpg";
import img4 from "../img/1.jpg";

const AdminPanel = () => {
  const [toggle, setToggle] = useState(true);
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const showToggle = () => setToggle(!toggle);
  const showDrop = () => setDrop(!drop);
  const showDrop2 = () => setDrop2(!drop2);
  const showDrop3 = () => setDrop3(!drop3);
  const showDrop4 = () => setDrop4(!drop4);
  const showDrop5 = () => setDrop5(!drop5);

  const [size] = useState([window.innerWidth]);

  useEffect(() => {
    if (size < 992) {
      setToggle(false);
    }
  }, []);

  return (
    <div>
      {/* asid  */}
      <section className={toggle ? "side" : "side inactive"}>
        <div className="p-3 d-flex align-items-center justify-content-between justify-content-lg-center">
          <h3 className="fs-4  text-muted mt-2">Abbas Dehghan</h3>
          <MdClose
            onClick={showToggle}
            className="fs-4 d-lg-none mt-2 text-danger"
          />
        </div>
        <div className="sidebar-menu mt-4">
          <ul className="list-unstyled">
            <li className="list-items active">
              <a href="#" className="list-items-links">
                <BsFillHouseDoorFill className="me-2 fs-4" />
                <span className="fs-5">داشبورد</span>
              </a>
            </li>
            <li className="list-items" onClick={showDrop}>
              <div className="list-items-links">
                <BsShop className="me-2 fs-4 text-muted" />
                <span className="fs-5 ">فروشگاه</span>
                <BsArrowDownShort className="ms-auto fs-4 drop-icon" />
              </div>

              <ul className={drop ? "submenu" : "submenu-deactive"}>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    لیست فروشگاه
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    ویرایش فروشگاه
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    نمایش فروشگاه
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-items" onClick={showDrop2}>
              <div className="list-items-links">
                <FaProductHunt className="me-2 fs-4 text-muted" />
                <span className="fs-5 ">محصولات</span>
                <BsArrowDownShort className="ms-auto fs-4 drop-icon" />
              </div>

              <ul className={drop2 ? "submenu" : "submenu-deactive"}>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    لیست محصولات
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    ویرایش محصولات
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    نمایش محصولات
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-items" onClick={showDrop3}>
              <div className="list-items-links">
                <BsBox className="me-2 fs-4 text-muted" />
                <span className="fs-5 ">سفارشات</span>
                <BsArrowDownShort className="ms-auto fs-4 drop-icon" />
              </div>

              <ul className={drop3 ? "submenu" : "submenu-deactive"}>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    لیست سفارشات
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    ویرایش سفارشات
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    نمایش سفارشات
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-items ">
              <a href="#" className="list-items-links">
                <FaPercent className="me-2 fs-4 text-muted" />
                <span className="fs-5">تخفیف ها</span>
              </a>
            </li>
            <li className="list-items ">
              <a href="#" className="list-items-links">
                <FaTicketAlt className="me-2 fs-4 text-muted" />
                <span className="fs-5">تیکت</span>
              </a>
            </li>
            <li className="list-items" onClick={showDrop4}>
              <div className="list-items-links">
                <FaUserCog className="me-2 fs-4 text-muted" />
                <span className="fs-5 ">کاربران</span>
                <BsArrowDownShort className="ms-auto fs-4 drop-icon" />
              </div>

              <ul className={drop4 ? "submenu" : "submenu-deactive"}>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    لیست کاربران
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    ویرایش کاربران
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    نمایش کاربران
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-items" onClick={showDrop5}>
              <div className="list-items-links">
                <FaCommentAlt className="me-2 fs-4 text-muted" />
                <span className="fs-5 ">کامنت ها</span>
                <BsArrowDownShort className="ms-auto fs-4 drop-icon" />
              </div>

              <ul className={drop5 ? "submenu" : "submenu-deactive"}>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    لیست کامنت ها
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    ویرایش کامنت ها
                  </a>
                </li>
                <li className="submenu-items">
                  <a href="#" className="submenu-links">
                    نمایش کامنت ها
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      {/* main  */}
      <section className={toggle ? "main" : "main deactive"}>
        <div className="header p-2 p-lg-3">
          <div>
            <FaBars
              className="fs-3 text-primary toggle-icon"
              onClick={showToggle}
            />
          </div>
          <div className="d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="profile"
              >
                <BsEnvelope className="text-gray-600 fs-3 me-1" />
                <span className="position-absolute top-0 end-50 translate-middle badge rounded-pill bg-red">
                  9
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-7">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mx-1 mx-md-0">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="profile"
              >
                <BsBellFill className="text-gray-600 fs-3 me-1" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-7">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="profile after"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={img1}
                    className="img-fluid rounded-circle me-2"
                    alt="img"
                    style={{ width: "35px" }}
                  />
                  <div>
                    <h6 className="fw-bold text-gray-600 mb-0">عباس دهقان</h6>
                    <p className="text-muted fs-8 mb-0">سوپر ادمین</p>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-7">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="content ">
          <Container className="" fluid>
            <Row className="g-3">
              {/* main  */}
              <Col lg={9}>
                {/* stats  */}
                <Row className="gy-3 gy-lg-0">
                  <Col md={6} lg={3}>
                    <div className="stats">
                      <div>
                        <BsEyeFill className="stats-icon bg-purple" />
                      </div>
                      <div>
                        <h6 className="text-muted mb-0 "> کاربران</h6>
                        <p className="text-muted fs-8- mt-1 mb-0">199</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={3}>
                    <div className="stats">
                      <div>
                        <BsPersonBoundingBox className="stats-icon bg-green" />
                      </div>
                      <div>
                        <h6 className="text-muted mb-0 "> یوزرز</h6>
                        <p className="text-muted fs-8- mt-1 mb-0">110</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={3}>
                    <div className="stats">
                      <div>
                        <BsGithub className="stats-icon bg-red" />
                      </div>
                      <div>
                        <h6 className="text-muted mb-0 "> گیت هاب</h6>
                        <p className="text-muted fs-8- mt-1 mb-0">344</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={3}>
                    <div className="stats">
                      <div>
                        <BsCurrencyDollar className="stats-icon bg-blue" />
                      </div>
                      <div>
                        <h6 className="text-muted mb-0 ">در امد</h6>
                        <p className="text-muted fs-8- mt-1 mb-0">999$</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                {/* barchart  */}
                <Row>
                  <Col>
                    <div className="barchart my-3 text-center">
                      <h2 className="text-primary my-3">درامد سالیانه</h2>
                      <Abbas />
                    </div>
                  </Col>
                </Row>
                {/* progressbar & comments */}
                <Row>
                  <Col lg={4}>
                    <div className="progres-box mb-2">
                      <h5 className="text-primary my-4 fw-bold">
                        لورم ایپسوم متن
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "75%", backgroundColor: "#ff7976" }}
                        >
                          75%
                        </div>
                      </div>
                      <p className="text-muted">لورم ایپسوم متن ساختگی</p>
                      <hr className="my-3" />
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{
                            width: "50%",
                            backgroundColor: "rgb(83, 0, 83)",
                          }}
                        >
                          50%
                        </div>
                      </div>
                      <p className="text-muted">لورم ایپسوم متن ساختگی</p>
                      <hr className="my-3" />
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="93"
                          aria-valuemin="0"
                          aria-valuemax="93"
                          style={{
                            width: "93%",
                            backgroundColor: "rgb(23, 151, 23)",
                          }}
                        >
                          93%
                        </div>
                      </div>
                      <p className="text-muted">لورم ایپسوم متن ساختگی</p>
                      <hr className="my-3" />
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="88"
                          aria-valuemin="0"
                          aria-valuemax="88"
                          style={{
                            width: "88%",
                            backgroundColor: "rgb(0, 37, 158)",
                          }}
                        >
                          88%
                        </div>
                      </div>
                      <p className="text-muted">لورم ایپسوم متن ساختگی</p>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="comment-box mb-3">
                      <h5 className="fw-bold text-primary my-4">کامنت ها</h5>
                      <table className="table table-striped align-items-center">
                        <thead>
                          <tr>
                            <th scope="col">تصویر </th>
                            <th scope="col">نام کاربر</th>
                            <th scope="col">کامنت</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <img
                                src={img1}
                                alt="img"
                                className="img-fluid rounded-circle"
                                style={{ width: "50px" }}
                              />
                            </th>
                            <td className="text-muted mb-0">حسین</td>
                            <td className="text-muted">
                              لورم ایپسوم متن ساختگی با تولید سادگی
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <img
                                src={img2}
                                alt="img"
                                className="img-fluid rounded-circle"
                                style={{ width: "50px" }}
                              />
                            </th>
                            <td className="text-muted">علی</td>
                            <td className="text-muted">
                              {" "}
                              با تولید لورم ایپسوم متن ساختگی با تولید سادگی
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <img
                                src={img3}
                                alt="img"
                                className="img-fluid rounded-circle"
                                style={{ width: "50px" }}
                              />
                            </th>
                            <td className="text-muted">عباس</td>
                            <td className="text-muted">
                              لورم ایپسوم متن ساختگی با تولید ساختگی با تولید
                              سادگی
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* aside  */}
              <Col lg={3}>
                <Row>
                  {/* admin  */}
                  <Col md={12}>
                    <div className="stats">
                      <div>
                        <img
                          src={img1}
                          className="rounded-circle img-fluid me-2"
                          style={{ width: "70px" }}
                        />
                      </div>
                      <div>
                        <h6 className="fw-bold  mb-0 "> عباس دهقان</h6>
                        <p className="text-muted fs-8- mt-1 mb-0">
                          abbas_dehghan@
                        </p>
                      </div>
                    </div>
                  </Col>
                  {/* users  */}
                  <Col md={12}>
                    <div className="users mt-3">
                      <h4 className="text-center text-primary fw-bold">
                        کاربران
                      </h4>
                      <div className="d-flex align-items-center mt-3">
                        <img
                          src={img4}
                          alt="img"
                          className="img-fluid rounded-circle me-2"
                          style={{ width: "60px" }}
                        />
                        <div>
                          <h6 className="mb-0">لورم ایپسوم</h6>
                          <p className="text-muted mb-0">lorem _ipsum@</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center my-4">
                        <img
                          src={img2}
                          alt="img"
                          className="img-fluid rounded-circle me-2"
                          style={{ width: "60px" }}
                        />
                        <div>
                          <h6 className="mb-0">لورم ایپسوم</h6>
                          <p className="text-muted mb-0">lorem_ipsum@</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <img
                          src={img3}
                          alt="img"
                          className="img-fluid rounded-circle me-2"
                          style={{ width: "60px" }}
                        />
                        <div>
                          <h6 className="mb-0">لورم ایپسوم</h6>
                          <p className="text-muted mb-0">lorem_ipsum@</p>
                        </div>
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <Button variant="primary" size="lg">
                          نمایش کاربران
                        </Button>
                      </div>
                    </div>
                  </Col>
                  {/* barchart aside  */}
                  <Col md={12}>
                    <div className="mt-3 barchart">
                      <h4 className="text-center fw-bold text-primary">
                        خریدها
                      </h4>
                      <div className="text-center">
                        <p className="fw-bold" style={{ color: "#00C49F" }}>
                          پرداخت هایه موفق
                        </p>
                        <p
                          className="fw-bold mb-0"
                          style={{ color: "#FF8042" }}
                        >
                          پرداخت هایه ناموفق
                        </p>
                      </div>
                      <Chart />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
