import SettingPage from "./SettingPage.vue";
import OutLets from "./OutLets.vue";
import PosPrinter from "./PosPrinter.vue";
import PrintSetting from "./PrintSetting.vue";


const SettingRoute=[
    {
        path:'/SettingPage',
        component:SettingPage,
        redirect:'/SettingPage/PrintSetting',
        children:[
            {
                path:'PrintSetting',
                component:PrintSetting
            },
            {
                path:'OutLets',
                component:OutLets
            },
            {
                path:'PosPrinter',
                component:PosPrinter
            },
           
        ]
    }
];
export default SettingRoute;