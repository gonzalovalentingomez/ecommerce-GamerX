const products = [
    {
        id: 1,
        title: 'PC Oficina Ryzen 3',
        price: '499.999',
        category: 'pc´s',
        description: '16 GB SSD 256GB RX560 4GB 650W',
        image: '/imgs/PC-Oficina/450_450-DELTA-G-BK-V11.jpg',
    },
    {
        id: 2,
        title: 'PC Oficina i5',
        price: '619.840',
        category: 'pc´s',
        description: 'RX560 16GB 512GB H510 650W',
        image: '/imgs/PC-Oficina/450_450-5000D_BLACK.jpg',
        
    },
    {
        id: 3,
        title: 'PC Oficina AMD Ryzen 7',
        price: '719.999',
        category: 'pc-´s',
        description: '5700G 16GB SSD NVMe 512GB B550 700W',
        image: '/imgs/PC-Oficina/450_450-DIVIDER 1702.jpg',
    },
    {
        id: 4,
        title: 'PC Oficina AMD Ryzen 3',
        price: '741.957',
        category: 'pc´s',
        description: '4100 B450 16GB SSD 512GB RX6500 XT',
        image: '/imgs/PC-Gamers/450_450-1200_1200-F104.jpg',
    },
    {
        id: 5,
        title: 'PC Diseño I3',
        price: '839.048',
        category: 'pc´s',
        description: '10400F H510M H 16GB SSD 240GB',
        image: '/imgs/PC-Diseño/450_450-4000D AIRFLOW BLACK1.jpg',
    },
    {
        id: 6,
        title: 'PC Oficina I5',
        price: '921.885',
        category: 'pc´s',
        description: '12100F H610M H 16GB SSD 480GB GTX1650',
        image: '/imgs/PC-Diseño/450_450-4000D AIRFLOW WHITE2.jpg',
    },
    {
        id: 7,
        title: 'PC Diseño I5',
        price: '1.030.456',
        category: 'pc´s',
        description: '10400F H510M-K RX6600 8GB',
        image: '/imgs/PC-Gamers/450_450-F10.jpg',
    },
    {
        id: 8,
        title: 'PC Dieño I5',
        price: '1.393.484',
        category: 'pc´s',
        description: '12400F RTX4060 8GB DDR4',
        image: '/imgs/PC-Diseño/450_450-BIONIC.jpg',
    },
    {
        id: 9,
        title: 'PC Gamer I5',
        price: '1.849.999',
        category: 'pc´s',
        description: '13400F RTX4060 32GB SSD NVMe 1TB',
        image: '/imgs/PC-Oficina/450_450-5000D_BLACK.jpg',
    },
    {
        id: 10,
        title: 'PC Gamer Ryzen 5',
        price: '1.915.047',
        category: 'pc´s',
        description: '7600 A520 32GB SSD M2 512GB RTX4070 8GB 750w',
        image: '/imgs/PC-Oficina/450_450-Divider_170_TG_-White.png',
    },
    {
        id: 11,
        title: 'PC Gamer Ryzen 7',
        price: '2.050.070',
        category: 'pc´s',
        description: '7700x c/water 240 B650M-A 32GB SSD M2 RTX4070ti',
        image: '/imgs/PC-Oficina/450_450-DELTA-G-BK-V11.jpg',
    },
    {
        id: 12,
        title: 'PC Gamer I7',
        price: '3.206.220',
        category: 'pc´s',
        description: '13700F c/water 120 Z690 32GB SSD M2 1TB RTX4070ti',
        image: '/imgs/PC-Gamers/450_450-F10.jpg',
    },
    {
        id: 13,
        title: 'Monitor Gamer ASUS',
        price: '542.189',
        category: 'monitores',
        description: 'LED 24" VP249QGR 144HZ 1MS',
        image: '/imgs/Monitores/500_500-VP249QGR_1.png',
    },
    {
        id: 14,
        title: 'Monitor Samsung',
        price: '161.993',
        category: 'monitores',
        description: 'LED22" T350H IPS',
        image: '/imgs/Monitores/500_500-1200_1200-Proyecto_nuevo.jpg',
    },
    {
        id: 15,
        title: 'Monitor LG',
        price: '396.781',
        category: 'monitores',
        description: 'WIDE 26WQ500-B',
        image: '/imgs/Monitores/500_500-Nuevo_proyecto_(49).jpg',
    },
    {
        id: 16,
        title: 'Monitor ASUS',
        price: '529.747',
        category: 'monitores',
        description: 'VA27EHE IPS FHD 75HZ',
        image: '/imgs/Monitores/500_500-zecfkkgx7mdro69e_setting_xxx_0_90_end_1000.png',
    },
    {
        id: 17,
        title: 'Notebook DELL',
        price: '849.999',
        category: 'notebooks',
        description: '15.6" Inspiron 15 3520 I5 1135G7 8GB 256GB',
        image: '/imgs/Notebooks/500_500-81XgQFhjhlL._AC_SL1500_.jpg',
    },
    {
        id: 18,
        title: 'Notebook Lenovo IdeaPad 3',
        price: '953.195',
        category: 'notebooks',
        description: '15.6" CoreI7 1165G7 8GB SSD 256GB',
        image: '/imgs/Notebooks/500_500-6140pRBGH7L._AC_SL1500_.jpg',
        
    },
    {
        id: 19,
        title: 'Notebook ASUS',
        price: '1.499.999',
        category: 'notebooks',
        description: '15.6" X515EA I7-1165G7 8GB SSD 512GB',
        image: '/imgs/Notebooks/500_500-descarga_(1).png',
    },
    {
        id: 20,
        title: 'Notebook Gigabyte AORUS 5',
        price: '1.879.999',
        category: 'notebooks',
        description: 'I7 12700 3070 16GB 512GB 360HZ W11',
        image: '/imgs/Notebooks/500_500-A8YEj_l.jpg',
    },
    {
        id: 21,
        title: 'Teclado Mecanico HyperX',
        price: '108.999',
        category: 'perifericos',
        description: 'Alloy Origins RGB Red',
        image: '/imgs/Perifericos/500_500-Proyecto nuevo (9)1.jpg',
    },
    {
        id: 22,
        title: 'Teclado Mecanico HyperX',
        price: '187.555',
        category: 'perifericos',
        description: 'Origins RBG',
        image: '/imgs/Perifericos/500_500-image (4)4.jpg',
    },
    {
        id: 23,
        title: 'Mouse Gamer Logitech',
        price: '144.999',
        category: 'perifericos',
        description: 'G502 Ligthspeed Wireless Negro',
        image: '/imgs/Perifericos/500_500-G502_Wireless_1.jpg',
    },
    {
        id: 24,
        title: 'Mouse HyperX',
        price: '174.006',
        category: 'perifericos',
        description: 'Pulsefire Dart Black',
        image: '/imgs/Perifericos/500_500-Proyecto nuevo (12)1.jpg',
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProduct = (id) => {
    return products.find((prod) => prod.id === parseInt(id));
};

export const getCategory = (category) =>{
    return products.filter((prod) => prod.category === category)
};
