import React, {
  useState,
  useEffect,
} from "react";
import { GoArrowDownRight } from "react-icons/go";
import { Line } from "@ant-design/charts"; // Import Line from '@ant-design/charts'
import DateMoney from "../components/DateMoney";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  getAllOrder,
  getAllUser,
} from "../feature/auth/authSlice";
import moment from "moment";

const HomePage = () => {
  const dispatch = useDispatch();
  const [monthlyData, setMonthlyData] =
    useState([]);
  const [
    selectedMonth,
    setSelectedMonth,
  ] = useState(
    moment().format("YYYY-MM")
  );
  const [yearlyData, setYearlyData] =
    useState([]);
  const [
    selectedYear,
    setSelectedYear,
  ] = useState(moment().format("YYYY"));
  const [dailyData, setDailyData] =
    useState([]);
  const [
    selectedDate,
    setSelectedDate,
  ] = useState(
    moment().format("YYYY-MM-DD")
  );

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getProducts());
    dispatch(getBlogs());
    dispatch(getAllOrder());
  }, [dispatch]);

  const userState = useSelector(
    (state) => state.auth?.getAllUser
  );

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const configYearly = {
    data: yearlyData,
    xField: "type",
    yField: "sales",
    color: "#FFA500",
    label: {
      position: "top", // Corrected the position
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${(v / 1000000).toFixed(
            1
          )}M`,
      },
    },
    meta: {
      type: { alias: "Month" },
      sales: { alias: "Revenue (VND)" },
    },
  };

  const configDaily = {
    data: dailyData,
    xField: "type",
    yField: "sales",
    color: "#FFA500",
    label: {
      position: "top", // Corrected the position
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${(v / 1000000).toFixed(
            1
          )}M`,
      },
    },
    meta: {
      type: { alias: "Day" },
      sales: { alias: "Revenue (VND)" },
    },
  };

  return (
    <div>
      <h3 className="mb-4 title">
        TRANG CHỦ
      </h3>
      <div className="d-flex align-items-center gap-3 justify-content-between row mb-3">
        <div className="col-4 flex-grow-1 bg-white p-3 rounded-3">
          <DateMoney />
        </div>
      </div>
      <div className="d-flex algin-items-center gap-3 justify-content-between row">
        <div className="d-flex justify-content-between align-items-center col-4 flex-grow-1 bg-white p-3 rounded-3">
          <div className="">
            <p className="desc">
              Tổng sản phẩm
            </p>
            {/* <h4 className='mb-0 sub-title'>{productState?.length}</h4> */}
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <GoArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">
              Compared to April 2024
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center col-4 flex-grow-1 bg-white p-3 rounded-3">
          <div className="">
            <p className="desc">
              Tổng Blogs
            </p>
            {/* <h4 className='mb-0 sub-title'>{blogState?.length}</h4> */}
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <GoArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">
              Compared to April 2024
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center col-4 flex-grow-1 bg-white p-3 rounded-3">
          <div className="">
            <p className="desc">
              Tổng người dùng
            </p>
            <h4 className="mb-0 sub-title">
              {userState?.length}
            </h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <GoArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">
              Compared to April 2024
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center col-4 flex-grow-1 bg-white p-3 rounded-3">
          <div className="">
            <p className="desc">
              Tổng đơn hàng chưa duyệt
            </p>
            {/* <h4 className='mb-0 sub-title'>{unconfirmedOrders}</h4> */}
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <GoArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">
              Compared to April 2024
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="d-flex bg-white">
          <div className="d-flex flex-grow-1 bg-white p-3 rounded-3">
            <input
              type="number"
              value={selectedYear}
              onChange={
                handleYearChange
              }
            />
          </div>
          <div className="p-3">
            <p className="mb-0">
              Biểu đồ doanh thu từng năm
            </p>
            <span className="show-nen"></span>{" "}
            <span>Doanh thu</span>
          </div>
        </div>
        <h3 className="mb-4 title">
          Doanh thu theo năm
        </h3>
        <Line {...configYearly} />{" "}
        {/* Changed to Line chart */}
      </div>
      <div className="mt-4">
        <div className="d-flex bg-white">
          <div className="d-flex flex-grow-1 bg-white p-3 rounded-3">
            <input
              type="date"
              value={selectedDate}
              onChange={
                handleDateChange
              }
            />
          </div>
          <div className="p-3">
            <p className="mb-0">
              Biểu đồ doanh thu từng
              ngày trong tháng
            </p>
            <span className="show-nen"></span>{" "}
            <span>Doanh thu</span>
          </div>
        </div>
        <h3 className="mb-4 title">
          Doanh thu theo tháng
        </h3>
        <Line {...configDaily} />{" "}
        {/* Changed to Line chart */}
      </div>
    </div>
  );
};

export default HomePage;
