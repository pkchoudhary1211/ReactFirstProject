import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBDataTable } from "mdbreact";
import DataTable from "react-data-table-component";
import { Doughnut, Bar, Line, Pie,LineChart} from "react-chartjs-2";
import "../static/style.css"
// import { Doughnut } from 'react-chartjs-2';
import PieChart from "react-minimal-pie-chart";
import ReactSvgPieChart from "react-svg-piechart";
const axios = require("axios");
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 26, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};
const data1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 26, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};


const columnsMDB = [
  {
    label: "userId",
    field: "userId",
    sort: "asc",
    width: 150
  },
  {
    label: "#",
    field: "id",
    sort: "asc",
    width: 100
  },
  {
    label: "Title",
    field: "title",
    sort: "asc",
    width: 300
  },
  {
    label: "Body",
    field: "body",
    sort: "asc",
    width: 600
  }
];

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiMDBvalue: null
    };
  }
  componentDidMount() {
    this.apiData();
  }
  apiData = () => {
    console.log("inside api data");
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
      responseType: "stream"
    }).then(response => {
      this.setState(
        {
          apiValue: response.data,
          apiMDBvalue: { rows: response.data }
        },
        () => {
          console.log(this.state.apiValue);
        }
      );
    });
  };
  render() {
    console.log("Inside test");
    return (
      <React.Fragment>
          <h1 className="center_value">data Table</h1>
            <MDBDataTable
            striped
            bordered
            hover
            paging={true}
            columns={columnsMDB}
            data={this.state.apiMDBvalue ? this.state.apiMDBvalue : []}
            />
        <h1 className="center_value"></h1>
        <Bar
        data={data}
        />
        <h1 className="center_value">Data in Pie</h1>  
        <Pie
          data={data}
        />
        <h1 className="center_value">Data in  Doughnut</h1>
        <Doughnut
          data={data}
          // options={ {maintainAspectRatio: false} }
        />
        <h1 className="center_value">Data in  Line</h1>
        <Line
            data ={data}
        />
        <h1 className="center_value">Data In chart</h1>
        {/* <Chart
            data={data}
        /> */}
        <h1 className="center_value">My First LineChart</h1>
        {/* <LineChart
            width={600}
            height={400}
            data={data}
        /> */}
        {/* <PieChart
                animate={true}
                // rounded={true}
                width={60}
                x={10}
                startAngle={10}
                data={data}
            />; */}
        {/* <ReactSvgPieChart
                data={data}
                strokeWidth={.04}
                viewBoxSize={1}
                expandSize={1}
                // If you need expand on hover (or touch) effect
                expandOnHover
                // If you need custom behavior when sector is hovered (or touched)
                // onSectorHover={(d, i, e) => {
                // //   if (d) {
                // //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                // //   } else {
                // //     console.log("Mouse leave - Index:", i, "Event:", e)
                // //   }
                // }}
            /> */}
      </React.Fragment>
    );
  }
}

export default Test;
