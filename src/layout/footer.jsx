import React, { useState } from "react";

const Footer = () => {
  return (
    <>
      <div
        class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Địa chỉ</h5>
              <p class="mb-2" style={{ fontWeight: "400 !important" }}>
                <i class="fa fa-map-marker-alt me-3"></i>Lô E2a-7, Đường D1, Khu
                Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div class="d-flex pt-2">
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Gói dịch vụ</h5>
              <a class="btn btn-link" href=""></a>
              <a class="btn btn-link" href="">
                Lau nhà
              </a>
              <a class="btn btn-link" href="">
                Nấu ăn
              </a>
              <a class="btn btn-link" href="">
                Giặt giũ
              </a>
              <a class="btn btn-link" href="">
                Vệ sinh nhà tắm
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Truy cập nhanh</h5>
              <a class="btn btn-link" href="">
                Về chúng tôi
              </a>
              <a class="btn btn-link" href="">
                Liên hệ
              </a>
              <a class="btn btn-link" href="">
                Gói dịch vụ
              </a>
              <a class="btn btn-link" href="">
                Quyền lợi & Điều khoản
              </a>
              <a class="btn btn-link" href="">
                Hỗ trợ
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Góp ý</h5>
              <p>
                Đừng ngần ngại đóng góp ý kiến nhé! Ý kiến của bạn đóng vai trò
                cho sự phát triển của chúng tôi
              </p>
              <div
                class="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  class="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a class="border-bottom" href="#"></a>EduLuxe, All Right
                Reserved.
              </div>
              <div class="col-md-6 text-center text-md-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
