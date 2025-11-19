

import {useState, SyntheticEvent} from "react"
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ProcessOrders from "./ProcessOrders";
import PausedOrders from "./PausedOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";


export default function OrdersPage() {
  const [value, setValue] = useState("1");
  const handleChange = ( e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
         <div className={"order-page"}>
             <Container className="order-container">
              <Stack className={"oreder-left"}>
                 <TabContext value={value}>
                    <Box className={"order-nav-frame"}>
                       <Box sx={{borderBottom: 1, borderColor: "divider" }}>
                         <Tabs
                         value={value}
                         onChange={handleChange}
                         aria-label="basic tabs example"
                         className={"table_list"}
                         >
                          <Tab label="PAUSED ORDERS" value={"1"}/>
                          <Tab label="PROCESS ORDERS" value={"2"}/>
                          <Tab label="FINISH ORDERS" value={"3"}/>

                         </Tabs>
                       </Box>
                    </Box>
                    <Stack className={"order-main-content"}>
                       <PausedOrders />
                       <ProcessOrders />
                       <FinishedOrders />
                    </Stack>
                 </TabContext>
              </Stack>




              <Stack className={"order-right"}>
                <Box className={"order-info-box"}>
                  <Box className={"member-box"}>
                     <div className={"order-user-img"}>
                        <img
                         src={"/icons/default-user.svg"}
                         className={"order-user-avatar"}
                         />
                         <div className={"order-user-icon-box"}>
                            <img
                            src={"/icons/user-badge.svg"}
                            className={"order-user-prof-img"} 
                            />
                         </div>
                     </div>
                     <p className={"order-user-name"}>Albert</p>
                     <p className={"order-user"}>USER</p>
                     <div className={"liner"}></div>

                     <div className={"location"}>
                        <img 
                        src={"/icons/location.svg"}
                        className={"user-location"}
                        />
                        <p className={"location-info"}>South Korea Daejeon</p>
                     </div>
                  </Box>
                </Box>






                <Stack className={"input-card-info"}>
                  <Box className={"input-card-number"}>
                     <input 
                     type="text"
                     placeholder="Card number 09890 7678 98745"
                     style={{width: "333px",
                           height: "36px",}}
                     />
                  </Box>
                  <Box className={"input-sana"}>
                     <input
                     type="text"
                     placeholder="07/24"
                     style={{width: "133px",
                           height: "36px",}}
                      />
                         <input
                     type="text"
                     placeholder="CVV:010"
                     style={{width: "133px",
                           height: "36px",}}
                      />

                  </Box>
                  <Box className={"input-name"}> 
                          <input 
                     type="text"
                     placeholder="Albert Robertson"
                     style={{width: "333px",
                           height: "36px",}}
                     />
                  </Box>
                  <Stack className={"input-check-cards"}>
                     <img 
                     src={"/icons/western-card.svg"}
                     className={"plast"}
                     />
                     <img 
                     src={"/icons/master-card.svg"}
                      className={"plast"}
                     />
                     <img 
                     src={"/icons/paypal-card.svg"}
                      className={"plast"}
                     />
                     <img 
                     src={"/icons/visa-card.svg"}
                      className={"plast"}
                     />
                  </Stack>
                </Stack>
              </Stack>


             </Container>
         </div>
  )



}


