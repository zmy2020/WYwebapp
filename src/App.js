import React, { Component } from 'react'
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config';  //renderRoutes读取路由配置转化成route标签
import { IconStyle } from './assets/iconfont/iconfont'
import { HashRouter } from 'react-router-dom' 
import routes from './routes';

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <GlobalStyle></GlobalStyle>
                <IconStyle></IconStyle>
                {
                    renderRoutes(routes)
                }
            </HashRouter>
        )
    }
}
