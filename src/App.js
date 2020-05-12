import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config';  //renderRoutes读取路由配置转化成route标签
import { IconStyle } from './assets/iconfont/iconfont'
import { HashRouter } from 'react-router-dom' 
import routes from './routes';
import store from './store'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <GlobalStyle></GlobalStyle>
                    <IconStyle></IconStyle>
                    {
                        renderRoutes(routes)
                    }
                </HashRouter>
            </Provider>
        )
    }
}
