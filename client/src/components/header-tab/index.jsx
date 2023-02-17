import React from "react";
import Cake1 from "../../images/cake_slide_1.webp";
import Cake2 from "../../images/cake_slide_2.webp";
import Cake3 from "../../images/cake_slide_3.webp";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import Button from "../../components/button";
import "./index.scss";
const HeaderTab = () => {
  return (
    <div>
      <Tabs defaultIndex={1} className="headerTab">
        <TabPanels className="tabImg">
          <TabPanel>
            <Image boxSize="100%" fit="cover" src={Cake1} />
            <div className="tabText">
              <h1 className="tabHeaderTxt">Longer day, <br/> More treat.</h1>
              <p className="tabHeaderParag">
                Snag some cool treats now! And we'll deliver them straight to you in temperature controlled packaging.
              </p>
              <Button btnName={"SHOP NOW"} />
            </div>
          </TabPanel>
          <TabPanel>
            <Image boxSize="100%" fit="cover" src={Cake2} />
            <div className="tabText">
              <h1 className="tabHeaderTxt">Little bliss in <br/> Every bite</h1>
              <p className="tabHeaderParag">
                Special fluffiness for your loved one! A thoughtful expression
                through good food and warm experiences.
              </p>
              <Button btnName={"SHOP NOW"} />
            </div>
          </TabPanel>
          <TabPanel>
            <Image boxSize="100%" fit="cover" src={Cake3} />
            <div className="tabText">
              <h1 className="tabHeaderTxt">Can't Eat <br/> Just One!</h1>
              <p className="tabHeaderParag">
              Snag some cool treats now! It's sweet. It's light. Flaky and buttery from first glance to the last bite.
              </p>
              <Button btnName={"SHOP NOW"} />
            </div>
          </TabPanel>
        </TabPanels>
        <TabList className="tabBtn">
          <Tab className="period"></Tab>
          <Tab className="period"></Tab>
          <Tab className="period"></Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default HeaderTab;
