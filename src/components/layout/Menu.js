import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import menuList from '@/config/menu';
import './menu.less';

const SubMenu = Menu.SubMenu;

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    let permissionList = menuList;
    permissionList.sort((a, b) => {
      return a.sort - b.sort;
    });
    const menuTreeNode = this.renderMenu(permissionList);
    this.state = { currentKey: '', menuTreeNode };
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.path}>
          <NavLink to={item.path || ''}>
            {item.icon || item.icon === '' ? (
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            ) : (
              item.title
            )}
          </NavLink>
          {/* {item.icon || item.icon === "" ? <span><Icon type={item.icon} /><span>{item.title}</span></span> : item.title} */}
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="menu-box">
        <Menu mode="inline" theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default MenuContent;
