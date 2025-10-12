const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `${id}`;

// const kvs2023VideosList = [    
//     { id: ("../../assets/siteimg/Gallery/KVS_2023/01.mp4"), width: 1080, height: 800 },
//     { id: ("../../assets/siteimg/Gallery/KVS_2023/02.mp4"), width: 1080, height: 800 },    
//     { id: ("../../assets/siteimg/Gallery/KVS_2023/03.mp4"), width: 1080, height: 800 },
//     { id: ("../../assets/siteimg/Gallery/KVS_2023/04.mp4"), width: 1080, height: 800 },
//     { id: ("../../assets/siteimg/Gallery/KVS_2023/05.mp4"), width: 980, height: 800 },
//     { id: ('../../assets/siteimg/Gallery/KVS_2023/06.mp4'), width: 1080, height: 800 },    
//     { id: ("../../assets/siteimg/Gallery/KVS_2023/07.mp4"), width: 900, height: 800 }       
// ];

const kvs2023PhotosList = [
    { id: ('../../assets/siteimg/Gallery/KVS_2023/01.webp'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/KVS_2023/02.webp"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/03.webp"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/04.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/05.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/06.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/07.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/08.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/09.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/10.webp"), width: 980, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/11.webp"), width: 480, height: 800 },
    { id: ('../../assets/siteimg/Gallery/KVS_2023/12.webp'), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/13.webp"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/14.webp"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/15.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/16.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/17.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/18.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/19.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/20.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/21.webp"), width: 980, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/22.webp"), width: 480, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/23.webp"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/24.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/25.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/26.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/27.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/28.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/29.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/30.webp"), width: 980, height: 800 },
    { id: ('../../assets/siteimg/Gallery/KVS_2023/31.webp'), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/32.webp"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/33.webp"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/34.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2023/35.webp"), width: 1080, height: 800 }
];

const apyf2021PhotosList = [
    { id: ('../../assets/siteimg/Gallery/VYF_SP_2021/01.jpeg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/02.jpeg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/03.jpeg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/04.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/05.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/06.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/07.jpeg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/08.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/09.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/10.jpeg"), width: 980, height: 800 },
    { id: ("../../assets/siteimg/Gallery/VYF_SP_2021/11.jpeg"), width: 480, height: 800 },
];

const sp2019HydPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2019/Hyderabad/01.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/02.jpg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/03.jpg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/04.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/05.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/06.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/07.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/08.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/09.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/10.jpg"), width: 980, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/11.jpg"), width: 480, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/12.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/13.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/14.jpg"), width: 980, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/15.jpg"), width: 480, height: 800 },
    { id: ('../../assets/siteimg/Gallery/SP_2019/Hyderabad/16.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Hyderabad/17.jpg"), width: 900, height: 800 },
];

const sp2019VjwPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2019/Vijayawada/01.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/02.jpg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/03.jpg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/04.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/05.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/06.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/07.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/08.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vijayawada/09.jpg"), width: 1080, height: 800 },
];

const sp2019TenaliPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2019/Tenali/01.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/02.jpg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/03.jpg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/04.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/05.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/06.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/07.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/08.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/09.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/10.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/11.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Tenali/12.jpg"), width: 1080, height: 800 },
];

const sp2019GunturPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2019/Guntur/01.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/02.jpg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/03.jpg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/04.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/05.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/06.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/07.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/08.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/09.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/10.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Guntur/11.jpg"), width: 1080, height: 800 },
];

const sp2019UttarandhraPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2019/Vizag/01.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vizag/02.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vizag/03.jpg"), width: 1080, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/Vizag/04.jpg"), width: 1080, height: 800 },
];

const sp2019NLRDistrictPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2019/NLRDistrict/01.jpg'), width: 1080, height: 800 },    
];

const sp2019VizagPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2019/VizagSanmanam/01.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2019/VizagSanmanam/02.jpg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/VizagSanmanam/03.jpg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/VizagSanmanam/04.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/VizagSanmanam/05.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2019/VizagSanmanam/06.jpg"), width: 1080, height: 800 },
];

const sp2018HydPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2018/Hyderabad/01.jpeg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2018/Hyderabad/02.jpeg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Hyderabad/03.jpeg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Hyderabad/04.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Hyderabad/05.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Hyderabad/06.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Hyderabad/07.jpeg"), width: 900, height: 800 },
];

const sp2018GntPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2018/Guntur/01.jpeg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/02.jpeg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/03.jpeg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/04.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/05.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/06.jpeg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/07.jpeg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/08.jpeg"), width: 600, height: 1200 },
    { id: ('../../assets/siteimg/Gallery/SP_2018/Guntur/09.jpeg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2018/Guntur/10.jpeg"), width: 900, height: 800 },
    { id: ('../../assets/siteimg/Gallery/SP_2018/Guntur/11.jpeg'), width: 1080, height: 800 },    
];

const kvs2015HydPhotosList = [
    { id: ('../../assets/siteimg/Gallery/KVS_2015/Hyderabad/01.webp'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/02.webp"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/03.webp"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/04.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/05.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/06.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/07.webp"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/08.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/09.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/10.webp"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/11.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/12.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/13.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/14.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/KVS_2015/Hyderabad/15.webp"), width: 1080, height: 800 },
];

const sp2015HydPhotosList = [
    { id: ('../../assets/siteimg/Gallery/SP_2015/Hyderabad/01.webp'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Gallery/SP_2015/Hyderabad/02.webp"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2015/Hyderabad/03.webp"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Gallery/SP_2015/Hyderabad/04.webp"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Gallery/SP_2015/Hyderabad/05.webp"), width: 1080, height: 800 },    
];

const vpv2016HydPhotosList = [    
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/02.jpg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/03.jpg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/04.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/05.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/06.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/07.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/08.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/09.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/10.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Matrimony/Hyderabad/12.jpg"), width: 1080, height: 800 },
];

const vpv2016RjmPhotosList = [
    { id: ('../../assets/siteimg/Matrimony/3_Rajamundry/01.jpg'), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/02.jpg"), width: 900, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/03.jpg"), width: 600, height: 1200 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/04.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/05.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/06.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/07.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/08.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/09.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/10.jpg"), width: 1080, height: 800 },    
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/11.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/12.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/13.jpg"), width: 1080, height: 800 },
    { id: ("../../assets/siteimg/Matrimony/3_Rajamundry/14.jpg"), width: 1080, height: 800 },            
];

const buildPhotos = (arr) => arr.map((photo) => {
        const width = breakpoints[0];
        const height = (photo.height / photo.width) * width;
    
        return {
            src: unsplashLink(photo.id, width, height),
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => {
                const height = Math.round((photo.height / photo.width) * breakpoint);
                return {
                    src: unsplashLink(photo.id, breakpoint, height),
                    width: breakpoint,
                    height,
                };
            }),
        };
    });

const kvs2023Photos = buildPhotos(kvs2023PhotosList);
//const kvs2023Videos = buildPhotos(kvs2023VideosList);
const apyf2021Photos = buildPhotos(apyf2021PhotosList);
const sp2019HydPhotos = buildPhotos(sp2019HydPhotosList);
const sp2019VjwPhotos = buildPhotos(sp2019VjwPhotosList);
const sp2019TnlPhotos = buildPhotos(sp2019TenaliPhotosList);
const sp2019GntPhotos = buildPhotos(sp2019GunturPhotosList);
const sp2019UtrAndPhotos = buildPhotos(sp2019UttarandhraPhotosList);
const sp2019NLRPhotos = buildPhotos(sp2019NLRDistrictPhotosList);
const sp2019VzgPhotos = buildPhotos(sp2019VizagPhotosList);
const sp2018HydPhotos = buildPhotos(sp2018HydPhotosList);
const sp2018GntPhotos = buildPhotos(sp2018GntPhotosList);
const kvs2015HydPhotos = buildPhotos(kvs2015HydPhotosList);
const sp2015HydPhotos = buildPhotos(sp2015HydPhotosList);
const vpv2016HydPhotos = buildPhotos(vpv2016HydPhotosList);
const vpv2016RjmPhotos = buildPhotos(vpv2016RjmPhotosList);
const photos = {
    kvs2023Photos,
    //kvs2023Videos,
    apyf2021Photos,
    sp2019HydPhotos,
    sp2019VjwPhotos,
    sp2019TnlPhotos,
    sp2019GntPhotos,
    sp2019UtrAndPhotos,
    sp2019NLRPhotos,
    sp2019VzgPhotos,
    sp2018HydPhotos,
    sp2018GntPhotos,
    kvs2015HydPhotos,
    sp2015HydPhotos,
    vpv2016HydPhotos,
    vpv2016RjmPhotos,
};

export default photos;