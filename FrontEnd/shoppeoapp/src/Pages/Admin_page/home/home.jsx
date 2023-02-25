import "./home.css";
import {userData} from "../../../Admin/dummyData/admin_dummy_data"
import FeaturedInfo from "../../../Admin/Components/featuredInfo/featuredInfo";
import Chart from "../../../Admin/Components/chart/chart";
import WidgetLg from "../../../Admin/Components/widjetlg/widgetlg";
import WidgetSm from "../../../Admin/Components/WidgetSm/WidgetSm";
import {Admin_Dasboard} from "../dashboard"
import Topbar from "../../../Admin/Components/topbar/Topbar";
import Sidebar from "../../../Admin/Components/sidebar/sidebar";
import{useEffect,useMemo,useState} from "react"
import { userRequest } from "../../../requestMethod";
export default function HomeAdmin() {

  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/user/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
    <Topbar/>
    <div style={{display:"flex"}}>
        <div>
         <Sidebar />
       </div>
        <div style={{width:"90%",marginLeft:"20px"}}>
          <FeaturedInfo />
          <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
          <div className="homeWidgets"> 
            <WidgetSm/>
            <WidgetLg/>
          </div>
        </div>
    </div>
    
     
    </div>
  );
}