import { Layout, List } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ergast.com/api/f1/2020/drivers.json")
      .then((response) => {
        setDrivers(response.data.MRData.DriverTable.Drivers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <Content>
        <List
          bordered
          dataSource={drivers}
          renderItem={(driver) => (
            <List.Item>{driver.givenName + " " + driver.familyName}</List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}
  
export default App