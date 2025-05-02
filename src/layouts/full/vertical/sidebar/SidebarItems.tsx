// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import Menuitems from './MenuItems';
import MenuItemsPartner from './MenuItemsPartner';
import MenuItemsAgent from './MenuItemsAgent';

import { useLocation } from 'react-router';
import { Box, List, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import { toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';
import { AppState } from 'src/store/Store';
import { any } from 'prop-types';

const SidebarItems = () => {
  const [levelUser, setLevelUser] = React.useState('');

  useEffect(() => {
    const data_success_login = localStorage.getItem('data_success_login');
    if (data_success_login) {
      const parsedData = JSON.parse(data_success_login);
      console.log('user_name:', parsedData.user_name);
      console.log('session_name:', parsedData.session_name);
      console.log('session_level:', parsedData.session_level);
      console.log('last_login_time:', parsedData.last_login_time);
      console.log('blocked:', parsedData.blocked);

      setLevelUser(parsedData.session_level);
    }
  }, []);

  const { pathname } = useLocation();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu: any = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();

  return (
    <Box sx={{ px: 3 }}>
    {levelUser.toLowerCase() === 'partner' ? (
      <List sx={{ pt: 0 }} className="sidebarNav">   
      {MenuItemsPartner.map((item) => {
        // {/********SubHeader**********/}
        if (item.subheader) {
          return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

          // {/********If Sub Menu**********/}
          /* eslint no-else-return: "off" */
        } else if (item.children) {
          return (
            <NavCollapse
              menu={item}
              pathDirect={pathDirect}
              hideMenu={hideMenu}
              pathWithoutLastPart={pathWithoutLastPart}
              level={1}
              key={item.id}
              onClick={() => dispatch(toggleMobileSidebar())}
            />
          );
          // {/********If Sub No Menu**********/}
        } else {
          return (
            <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu}
            onClick={() => dispatch(toggleMobileSidebar())} />
          );
        }
      })}
    </List>
    ):(
      levelUser.toLowerCase() === 'agent-manager' ? (
        <List sx={{ pt: 0 }} className="sidebarNav">   
      {MenuItemsAgent.map((item) => {
        // {/********SubHeader**********/}
        if (item.subheader) {
          return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

          // {/********If Sub Menu**********/}
          /* eslint no-else-return: "off" */
        } else if (item.children) {
          return (
            <NavCollapse
              menu={item}
              pathDirect={pathDirect}
              hideMenu={hideMenu}
              pathWithoutLastPart={pathWithoutLastPart}
              level={1}
              key={item.id}
              onClick={() => dispatch(toggleMobileSidebar())}
            />
          );
          // {/********If Sub No Menu**********/}
        } else {
          return (
            <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu}
            onClick={() => dispatch(toggleMobileSidebar())} />
          );
        }
      })}
    </List>
      ):(
        <List sx={{ pt: 0 }} className="sidebarNav">   
          {Menuitems.map((item) => {
            // {/********SubHeader**********/}
            if (item.subheader) {
              return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;
              // {/********If Sub Menu**********/}
              /* eslint no-else-return: "off" */
            } else if (item.children) {
              return (
                <NavCollapse
                  menu={item}
                  pathDirect={pathDirect}
                  hideMenu={hideMenu}
                  pathWithoutLastPart={pathWithoutLastPart}
                  level={1}
                  key={item.id}
                  onClick={() => dispatch(toggleMobileSidebar())}
                />
              );
              // {/********If Sub No Menu**********/}
            } else {
              return (
                <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu}
                onClick={() => dispatch(toggleMobileSidebar())} />
              );
            }
          })}
        </List>
      )
    )
  }
  </Box>
  );
};
export default SidebarItems;
