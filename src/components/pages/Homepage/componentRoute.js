import MainMenu from './MainMenu.vue';
import DashBoard from './DashBoard.vue';
import UploadPage from './UploadPage.vue';
import DiscountReport from './DiscountReport.vue';
import OcReport from './OcReport.vue';
import VoidReport from './VoidReport.vue';

const HomeRoutes=[
    {
        path:'/MainMenu',
        component:MainMenu,
        redirect:'/MainMenu/DashBoard',
        
        children:[
            {
                path:'DashBoard',
                component:DashBoard
            },
            {
                path:'UploadPage',
                component:UploadPage,
                name:'UploadPage'
            },
            {
                path:'DiscountReport',
                component:DiscountReport
            },
            {
                path:'OcReport',
                component:OcReport
            },
            {
                path:'VoidReport',
                component:VoidReport
            }
          
        ]
    }
];
export default HomeRoutes













