import React, { useState } from "react";
import "./order.css";
import Order from "../component/manage/oder";
import Service from "../component/manage/service";

const AllService = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Dịch vụ
            </p>
            <h1>Các dịch vụ cuả EduLuxe</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/736x/8c/bd/a7/8cbda70ca4ee212d4c8dda623610f11f.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "80%", maxHeight: "80%" }}
                  />
                </div>
                <h4 className="mb-3">Dọn dẹp nhà cơ bản</h4>
                <p>Giá chỉ từ 40k/giờ </p>
                <a className="btn" href="booking1.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/f6/94/fd/f694fdb8cb385be2501dfa7460e56fbf.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Giặt giũ</h4>
                <p>Giá: 10k/kg</p>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/f4/0a/37/f40a375d46b81f304fc4cbaa48250d22.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Vệ sinh máy giặt</h4>
                <p>Giá: 80k/lần</p>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/f9/99/18/f99918c72317bfb77ee9cb53fb44dab7.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Vệ sinh máy lạnh</h4>
                <p>Giá: 100k/lần</p>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/6a/8a/89/6a8a8989d5a65ebd62c3420889e19a11.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Vệ sinh tủ lạnh</h4>
                <p>Chỉ từ 50k/ lần vệ sinh</p>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/c5/93/60/c59360a4b1eda21fb805966493116637.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Vệ sinh sofa/nệm/rèm</h4>
                <p>Với giá 150k/lần áp dụng cho mọi kích thước sofa</p>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/f4/0a/37/f40a375d46b81f304fc4cbaa48250d22.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Vệ sinh máy giặt</h4>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/f4/0a/37/f40a375d46b81f304fc4cbaa48250d22.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Vệ sinh máy giặt</h4>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "250px", height: "200px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/f4/0a/37/f40a375d46b81f304fc4cbaa48250d22.jpg"
                    alt="quet nha"
                    style={{ maxWidth: "60%", maxHeight: "60%" }}
                  />
                </div>
                <h4 className="mb-3">Vệ sinh máy giặt</h4>
                <a className="btn" href="booking2.html">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllService;
