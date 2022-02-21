import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Style } from './style';

const TabComponent = ( props ) => {
    const {
        tabsContainerStyle,
        tabListStyle,
        tabStyle,
        TabPanelStyle,
        tabs
    } = props
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Tabs 
                selectedIndex={tabIndex} 
                onSelect={index => setTabIndex(index)} 
                style={Object.assign( {}, Style.tabsContainerStyle, tabsContainerStyle )}>
                <TabList style={ Object.assign({}, Style.tabListStyle, tabListStyle)}>
                    {
                        tabs.map((tab) => {
                            return <Tab key={ tab.id } style={ Object.assign({}, Style.tabStyle, tabStyle)}> { tab.title } </Tab>
                        })
                    }
                </TabList>
                {
                    tabs.map((tab) => {
                        return <TabPanel key={ tab.id } style={ Object.assign({}, Style.TabPanelStyle, TabPanelStyle)}> { tab.value } </TabPanel>
                    })
                }
            </Tabs>
        </div>
    )
}

export default TabComponent


