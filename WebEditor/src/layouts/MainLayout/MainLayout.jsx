import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import A2lMenu from '../../components/A2lMenu';
import NotFound from '../../components/NotFound';
import styles from './MainLayout.less';
import { Menu, Breadcrumb, Icon  } from 'antd';

const SubMenu = Menu.SubMenu;



const MainLayout = ({ children }) => {
  return (
    <div>
      <div className={styles.ant_layout_topaside}>
        <div className={styles.ant_layout_header}>
          <div className={styles.ant_layout_wrapper}>
            <div className={styles.ant_layout_logo}>MAP编辑管理系统</div>
            <Menu theme="dark" mode="horizontal"
                  defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
              <Menu.Item key="1">
                <Link to="/a2leditor">A2L编辑</Link>
              </Menu.Item>
              <Menu.Item key="2">导航二</Menu.Item>
              <Menu.Item key="3">导航三</Menu.Item>
            </Menu>
          </div>
        </div>

        <div className={styles.ant_layout_wrapper}>
          <div className={styles.ant_layout_breadcrumb}>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.ant_layout_container}>

            <div className={styles.ant_layout_content}>
              <div>
                <div style={{clear: 'both'}}>{children}</div>
              </div>
            </div>
          </div>
          <div className={styles.ant_layout_footer}>
            wit 版权所有 © 2015
          </div>
        </div>
      </div>
    </div>

  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
