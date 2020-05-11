import React from 'react';
import {Redirect} from "react-router-dom";
import Home from '@application/Home';
import Rank from '@application/Rank';
import Recommend from '@application/Recommend';
import Singers from '@application/Singers';

export default [
    {
        path:'/',
        component: Home,
        routes:[
            {
                path:'/',
                exact:true,  //为true时仅匹配对应的路径，为false时匹配所有组件
                render:()=>(
                    //路由重定向
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path:'/recommend',
                component:Recommend
            },
            {
                path:'/singers',
                component:Singers
            },
            {
                path:'/rank',
                component:Rank
            }
        ]
    }
]