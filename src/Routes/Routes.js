import React from 'react';

import { Routes } from './RoutePath';
const Project= React.lazy(()=>import("../Pages/Project"));
const Messeges= React.lazy(()=>import('../Pages/Messeges'));
const Analytics= React.lazy(()=>import('../Pages/Analytics'));
const Searching =React.lazy(()=>import('../Pages/Searching'));
const LineChart =React.lazy(()=>import('../Pages/LineChart'));
const AreaChart =React.lazy(()=>import('../Pages/Areachart'));
const ProductDetails =React.lazy(()=>import('../Pages/ProductDetails'));
const Checkout = React.lazy(()=>import('../Pages/Checkout'))
export const routes = [
    {path : Routes.project ,exact :'true', name:'project', component:Project},
    {path : Routes.LineChart ,exact :'true' , name:'project',component:LineChart},
    {path : Routes.Messeges ,exact :'true', name:'project',component:Messeges},
    {path : Routes.Analytics ,exact :'true',name:'project', component:Analytics},
    {path : Routes.Searching ,exact :'true',name:'project',component:Searching},
    {path : Routes.AreaChart ,exact :'true',name:'project',component:AreaChart},
    {path : Routes.productDetail ,exact :'true',name:'project',component:ProductDetails},
    {path : Routes.Checkout ,exact :'true',name:'project',component:Checkout},
]
