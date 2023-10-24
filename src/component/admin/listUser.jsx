import React, { useState } from "react";

const ListUser = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">User List</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div className="row justify-content-between">
                      <div className="col-sm-6 col-md-6">
                        <div
                          id="user_list_datatable_info"
                          className="dataTables_filter"
                        >
                          <form className="mr-3 position-relative">
                            <div className="form-group mb-0">
                              <input
                                type="search"
                                className="form-control"
                                id="exampleInputSearch"
                                placeholder="Search"
                                aria-controls="user-list-table"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <table
                      id="user-list-table"
                      className="table table-striped dataTable mt-4"
                      role="grid"
                      aria-describedby="user-list-page-info"
                    >
                      <thead>
                        <tr className="ligth">
                          <th>Ảnh đại diện</th>
                          <th>Tên tài khoản</th>
                          <th>Mật khẩu</th>
                          <th>Giới tính</th>
                          <th>Số điện thoại</th>
                          <th>Vai trò</th>
                          <th>Sinh nhật</th>
                          <th>Địa chỉ</th>
                          <th style={{ minWidth: "100px" }}>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span className="badge bg-primary">Manager</span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="use-add.html"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span
                              className="badge"
                              style={{ backgroundColor: "#cbaacb" }}
                            >
                              Customer
                            </span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span
                              className="badge"
                              style={{ backgroundColor: "#cbaacb" }}
                            >
                              Customer
                            </span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span className="badge bg-secondary">Staff</span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span
                              className="badge"
                              style={{ backgroundColor: "#cbaacb" }}
                            >
                              Customer
                            </span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span className="badge bg-primary">Manager</span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span className="badge bg-secondary">Staff</span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span className="badge bg-secondary">Staff</span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <img
                              className="rounded img-fluid avatar-40"
                              src="img/01.jpg"
                              alt="profile"
                            />
                          </td>
                          <td>An1222</td>
                          <td>123456789</td>
                          <td>Nam</td>
                          <td>0909000999</td>
                          <td>
                            <span className="badge bg-secondary">Staff</span>
                          </td>
                          <td>23/03/1999</td>
                          <td>TP HCM</td>
                          <td>
                            <div className="flex align-items-center list-user-action">
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                href="#"
                              >
                                <i className=" fa fa-light fa-user-plus mr-0 "></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                href="#"
                              >
                                <i className="fa fa-light fa-pen-square mr-0"></i>
                              </a>
                              <a
                                className="btn btn-sm bg-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                href="#"
                              >
                                <i className="fa fa-thin fa-trash mr-0"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row justify-content-between mt-3">
                    <div id="user-list-page-info" className="col-md-6">
                      <span>Showing 1 to 5 of 5 entries</span>
                    </div>
                    <div className="col-md-6">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end mb-0">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUser;
