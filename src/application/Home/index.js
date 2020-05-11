import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Tab, TabItem} from './style';
import { NavLink } from 'react-router-dom'

function Home (props) {
    const { route } = props
    return(
            <div>
                <Top>
                    <span className='iconfont menu'>&#xe65c;</span>
                    <span className='title'>WebApp</span>
                    <span className='iconfont search'>&#xe62b;</span>
                </Top>
                <Tab>
                    <NavLink to='/recommend' active></NavLink>
                </Tab>
                {
                    renderRoutes(route.routes)
                }
            </div>
        )
}
export default React.memo ( Home );