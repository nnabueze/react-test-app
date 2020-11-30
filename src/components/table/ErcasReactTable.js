/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Row,
  ButtonDropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CustomInput,
  Collapse,
} from "reactstrap";
import { Colxx } from "./CustomBootstrap";
import { useTable, usePagination } from "react-table";
import {
  getAllUsers,
  getInActiveUsers,
  getActiveUsers,
} from "../../services/AdminService";
import classnames from "classnames";
import DatatablePagination from "./DataTablePagination";
import LoadingOverlay from "react-loading-overlay";
import moment from "moment";
import AdminUserRegister from ".././user/adminUserRegister";

function ErcasTable({
  columns,
  data,
  divided = false,
  defaultPageSize = 10,
  hover = true,
  responsive = true,
  searchButtonOutline = true,
  showPageSizeOptions = true,
  showPageJump = false,
  onDelete,
  onView,
  onEdit,
  onViewMore,
  onSearch,
  showSearch = false,
  showEdit = false,
  showDelete = false,
  showView = true,
  pagination = true,
  pageCount: controlledPageCount,
  fetchData,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,

    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
      manualPagination: true,
      pageCount: controlledPageCount,
      autoResetPage: false,
    },
    //useSortBy,
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e) => {
    onSearch(keyword);
  };

  const handleChangeSearch = async (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      {showSearch && (
        <div className="row">
          <div className="col-12">
            <InputGroup className="mb-3">
              <Input
                placeholder="...Search..."
                style={{ fontSize: "20px" }}
                onChange={handleChangeSearch}
              />
              <InputGroupAddon addonType="append">
                <Button
                  outline={searchButtonOutline}
                  color="secondary"
                  onClick={handleSearch}
                >
                  <i className="simple-icon-magnifier"></i>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      )}
      {data.length > 0 ? (
        <Table
          {...getTableProps()}
          className={`r-table table ${classnames({
            "table-divided": divided,
          })}`}
          responsive={responsive}
          hover={hover}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, columnIndex) => (
                  <th
                    key={`th_${columnIndex}`}
                    //{...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "sorted-desc"
                          : "sorted-asc"
                        : ""
                    }
                  >
                    {column.render("Header")}
                    <span />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={`td_${cellIndex}`}
                      id={"action" + cellIndex}
                      {...cell.getCellProps({
                        className: cell.column.cellClass,
                      })}
                    >
                      {cellIndex === 6 ? (
                        <div style={{ paddingRight: "50px" }}>
                          {showView && (
                            <a
                              href="#"
                              className="icon-menu-item"
                              style={{ paddingRight: "20px" }}
                              onClick={(e) => {
                                if (onView != null)
                                  onView(cell.render("Cell").props.cell.value);
                                e.preventDefault();
                              }}
                            >
                              <i
                                className={"simple-icon-eye"}
                                style={{ fontSize: "18px" }}
                              ></i>
                            </a>
                          )}

                          {showEdit && (
                            <a
                              href="#"
                              className="icon-menu-item"
                              style={{ paddingRight: "20px" }}
                              onClick={(e) => {
                                if (onEdit != null)
                                  onEdit(cell.render("Cell").props.cell.value);
                                e.preventDefault();
                              }}
                            >
                              <i
                                className={"simple-icon-pencil"}
                                style={{ fontSize: "18px" }}
                              ></i>
                            </a>
                          )}

                          {showDelete && (
                            <a
                              href="#"
                              className="icon-menu-item"
                              style={{ paddingRight: "20px" }}
                              onClick={(e) => {
                                if (onEdit != null)
                                  onDelete(
                                    cell.render("Cell").props.cell.value
                                  );
                                e.preventDefault();
                              }}
                            >
                              <i
                                className={"simple-icon-settings"}
                                style={{ fontSize: "18px" }}
                              ></i>
                            </a>
                          )}
                        </div>
                      ) : cellIndex === 5 ? (
                        moment(cell.render("Cell").props.cell.value).calendar()
                      ) : cellIndex === 4 ? (
                        cell.render("Cell").props.cell.value ? (
                          <span className="badge badge-pill badge-success mb-1">
                            Active
                          </span>
                        ) : (
                          <span className="badge badge-pill badge-danger mb-1">
                            Disabled
                          </span>
                        )
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Row>
          <Colxx xxs="12">
            <p className={"align-items-center"}>No Available data</p>
          </Colxx>
        </Row>
      )}

      {pagination && (
        <DatatablePagination
          page={pageIndex}
          pages={pageCount}
          canPrevious={canPreviousPage}
          canNext={canNextPage}
          pageSizeOptions={[5, 10, 20, 30, 40, 50]}
          showPageSizeOptions={showPageSizeOptions}
          showPageJump={showPageJump}
          defaultPageSize={pageSize}
          onPageChange={(p) => gotoPage(p)}
          onPageSizeChange={(s) => setPageSize(s)}
          paginationMaxSize={pageCount}
        />
      )}
      {!pagination && (
        <Row>
          <Colxx xxs="12">
            <Button
              color="primary"
              size="s"
              className="mb-2"
              onClick={() => {
                if (onViewMore != null) onViewMore();
              }}
            >
              View More Transactions
            </Button>
          </Colxx>
        </Row>
      )}
    </>
  );
}

const ErcasUserTable = ({
  title = "Recent Transactions",
  divided = false,
  defaultPageSize = 10,
  hover = true,
  responsive = true,
  searchButtonOutline = true,
  showPageSizeOptions = true,
  showPageJump = false,
  showSearch = false,
  showEdit = false,
  showDelete = false,
  showView = true,
  showFilterBy = true,
  showOrderBy = false,
  showRefresh = true,
  showAdd = false,
  pagination = true,
  token,
  tokenParam,
  match,
  ...props
}) => {
  const cols = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",

        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Last Name",
        accessor: "lastName",

        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Email",
        accessor: "email",

        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Phone",
        accessor: "phone",

        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Status",
        accessor: "isActive",

        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Registered Date",
        accessor: "createdDate",

        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Actions",
        accessor: "id",

        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = useRef(0);
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const [orderOptions, setOrderOptions] = useState([
    { label: "Registered Date -ASC" },
    { label: "Registered Date -DSC" },
  ]);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    label: "Registered Date -ASC",
  });
  const [filterOptions, setFilterOptions] = useState([
    { label: "All Users", users: 0 },
    { label: "Active Users", users: 1 },
    { label: "Inactive Users", users: 2 },
  ]);
  const [selectedFilterOption, setSelectedFilterOption] = useState({
    label: "All Users",
  });

  //fetch data call back
  const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;
    setIsLoading(true);
    if (fetchId === fetchIdRef.current) {
      const response = await getAllUsers({
        pageSize: pageSize,
        pageIndex: pageIndex + 1,
        access: tokenParam,
      });
      setData(response?.data ?? []);
      setPageCount(response?.pageCount ?? 0);
      setIsLoading(false);
    }
  }, []);

  //handle view single
  const handleView = async (id) => {
    window.location = `/user-details?id=${id}`;
  };

  //handle view single
  const handleEdit = async (id) => {
    window.location = `/admin-user-edit?id=${id}`;
  };

  const handleRole = async (id) => {
    window.location = `/change-role?id=${id}`;
  };

  //handle view more
  const handleViewMore = async () => {
    props.history.push(`/app/history`);
  };

  //handle search
  const handleSearch = async (keyword) => {
    setIsLoading(true);
    const response = await getAllUsers({
      pageSize: defaultPageSize,
      pageIndex: 1,
      access: tokenParam,
    });
    setData(response?.data ?? []);
    setPageCount(response?.pageCount ?? 0);
    setIsLoading(false);
  };

  //handle order by
  const handleOrderBy = async (e) => {
    setSelectedOrderOption(e);
    setIsLoading(true);
    const response = await getAllUsers({
      pageSize: defaultPageSize,
      pageIndex: 1,
      access: tokenParam,
    });
    setData(response?.data ?? []);
    setPageCount(response?.pageCount ?? 0);
    setIsLoading(false);
  };

  //handle filterby
  const handleFilterBy = async (e) => {
    setSelectedFilterOption(e);
    setIsLoading(true);
    if (e.users === 0) {
      const response = await getAllUsers({
        pageSize: defaultPageSize,
        pageIndex: 1,
        access: tokenParam,
      });
      setData(response?.data ?? []);
      setPageCount(response?.pageCount ?? 0);
    } else if (e.users === 1) {
      const response = await getActiveUsers({
        pageSize: defaultPageSize,
        pageIndex: 1,
        access: tokenParam,
      });
      setData(response?.data ?? []);
      setPageCount(response?.pageCount ?? 0);
    } else {
      const response = await getInActiveUsers({
        pageSize: defaultPageSize,
        pageIndex: 1,
        access: tokenParam,
      });
      setData(response?.data ?? []);
      setPageCount(response?.pageCount ?? 0);
    }
    setIsLoading(false);
  };

  //handle refresh action
  const handleRefresh = async () => {
    setIsLoading(true);
    const response = await getAllUsers({
      pageSize: defaultPageSize,
      pageIndex: 1,
      access: tokenParam,
    });
    setData(response?.data ?? []);
    setPageCount(response?.pageCount ?? 0);
    setIsLoading(false);
  };

  //handle add new
  const handleAddNew = async () => {};

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text={"..Loading data Please wait..."}
      styles={{
        overlay: (base) => ({
          ...base,
          background: "rgba(255, 255, 255, 0.7)",
        }),
        content: (base) => ({
          ...base,
          color: "rgba(0, 0, 0, 1)",
        }),
        spinner: (base) => ({
          ...base,
          width: "100px",
          "& svg circle": {
            stroke: "#1d477a",
          },
        }),
      }}
    >
      <Card className="mb-4">
        <CardBody>
          <CardTitle>
            <Row>
              <Colxx xxs="12">
                <div className="d-block d-md-inline-block pt-1">
                  <h1>{title}</h1>
                </div>
                {showAdd && (
                  <div className="float-md-right pt-1">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg top-right-button  mr-1"
                      data-toggle="modal"
                      data-backdrop="static"
                      data-target="#exampleModal"
                    >
                      ADD NEW
                    </button>
                    <AdminUserRegister />
                  </div>
                )}
              </Colxx>
            </Row>
            {(showOrderBy || showFilterBy || showRefresh) && (
              <Row>
                <Colxx xxs="12">
                  <div>
                    <Button
                      color="empty"
                      className="pt-0 pl-0 d-inline-block d-md-none"
                      onClick={() =>
                        setDisplayOptionsIsOpen(!displayOptionsIsOpen)
                      }
                    >
                      Table Menu
                      <i className="simple-icon-arrow-down align-middle" />
                    </Button>
                    <Collapse
                      isOpen={displayOptionsIsOpen}
                      className="d-md-block"
                      id="displayOptions"
                    >
                      {showOrderBy && (
                        <div className="d-block d-md-inline-block pt-1">
                          <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                            <DropdownToggle
                              caret
                              color="outline-dark"
                              size="xs"
                            >
                              orderby:&nbsp;
                              {selectedOrderOption.label}
                            </DropdownToggle>
                            <DropdownMenu>
                              {orderOptions.map((order, index) => {
                                return (
                                  <DropdownItem
                                    key={index}
                                    onClick={() => handleOrderBy(order)}
                                  >
                                    {order.label}
                                  </DropdownItem>
                                );
                              })}
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      )}
                      {showFilterBy && (
                        <div className="d-block d-md-inline-block pt-1">
                          <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                            <DropdownToggle
                              caret
                              color="outline-dark"
                              size="xs"
                            >
                              filterby:&nbsp;
                              {selectedFilterOption.label}
                            </DropdownToggle>
                            <DropdownMenu>
                              {filterOptions.map((filter, index) => {
                                return (
                                  <DropdownItem
                                    key={index}
                                    onClick={() => handleFilterBy(filter)}
                                  >
                                    {filter.label}
                                  </DropdownItem>
                                );
                              })}
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      )}
                      {showRefresh && (
                        <div className="float-md-right pt-1">
                          <Button
                            outline
                            color="primary"
                            size="xs"
                            className="mb-2"
                            onClick={handleRefresh}
                          >
                            Refresh
                          </Button>
                        </div>
                      )}
                    </Collapse>
                  </div>
                </Colxx>
              </Row>
            )}
          </CardTitle>

          <ErcasTable
            columns={cols}
            data={data}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleRole}
            onSearch={handleSearch}
            fetchData={fetchData}
            onViewMore={handleViewMore}
            pageCount={pageCount}
            divided={divided}
            defaultPageSize={defaultPageSize}
            hover={hover}
            responsive={responsive}
            searchButtonOutline={searchButtonOutline}
            showPageSizeOptions={showPageSizeOptions}
            showPageJump={showPageJump}
            showSearch={showSearch}
            showEdit={showEdit}
            showDelete={showDelete}
            showView={showView}
            pagination={pagination}
          />
        </CardBody>
      </Card>
    </LoadingOverlay>
  );
};

export default ErcasUserTable;
