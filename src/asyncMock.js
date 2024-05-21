const products = [
    {
        id: 1,
        title: 'PC Oficina Ryzen 3',
        price: '499.999',
        category: 'pc´s',
        description: '16 GB SSD 256GB RX560 4GB 650W',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sc3e888a2e50a49e884df290f3c203fd0&parId=F9B9A6E451E1879D%21s3b886ea4e5bc4152962cc52213b3a96a&o=OneUp',
    },
    {
        id: 2,
        title: 'PC Oficina i5',
        price: '619.840',
        category: 'pc´s',
        description: 'RX560 16GB 512GB H510 650W',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s4d9108aad890424e8b1de13548fd187b&parId=F9B9A6E451E1879D%21s3b886ea4e5bc4152962cc52213b3a96a&o=OneUp',
    },
    {
        id: 3,
        title: 'PC Oficina AMD Ryzen 7',
        price: '719.999',
        category: 'pc-´s',
        description: '5700G 16GB SSD NVMe 512GB B550 700W',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sca732fffaf354a1eaf28e4790bcf9696&parId=F9B9A6E451E1879D%21s3b886ea4e5bc4152962cc52213b3a96a&o=OneUp',
    },
    {
        id: 4,
        title: 'PC Oficina AMD Ryzen 3',
        price: '741.957',
        category: 'pc´s',
        description: '4100 B450 16GB SSD 512GB RX6500 XT',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sc28b82f5ddbd42bf99142173bed5040d&parId=F9B9A6E451E1879D%21s388d144e772a43ddb9afa4f7de56a737&o=OneUp',
    },
    {
        id: 5,
        title: 'PC Diseño I3',
        price: '839.048',
        category: 'pc´s',
        description: '10400F H510M H 16GB SSD 240GB',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s48cd852e5aa74a30a277a9135e3ad635&parId=F9B9A6E451E1879D%21s3b886ea4e5bc4152962cc52213b3a96a&o=OneUp',
    },
    {
        id: 6,
        title: 'PC Oficina I5',
        price: '921.885',
        category: 'pc´s',
        description: '12100F H610M H 16GB SSD 480GB GTX1650',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s48cd852e5aa74a30a277a9135e3ad635&parId=F9B9A6E451E1879D%21s3b886ea4e5bc4152962cc52213b3a96a&o=OneUp',
    },
    {
        id: 7,
        title: 'PC Diseño I5',
        price: '1.030.456',
        category: 'pc´s',
        description: '10400F H510M-K RX6600 8GB',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s286b6173fae94af9b2f4bf87b578d7fa&parId=F9B9A6E451E1879D%21sbe927893f7fc412aa76eab8e5d9afb18&o=OneUp',
    },
    {
        id: 8,
        title: 'PC Dieño I5',
        price: '1.393.484',
        category: 'pc´s',
        description: '12400F RTX4060 8GB DDR4',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s286b6173fae94af9b2f4bf87b578d7fa&parId=F9B9A6E451E1879D%21sbe927893f7fc412aa76eab8e5d9afb18&o=OneUp',
    },
    {
        id: 9,
        title: 'PC Gamer I5',
        price: '1849.999',
        category: 'pc´s',
        description: '13400F RTX4060 32GB SSD NVMe 1TB',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sabfe55e21713449eb246b6bc79681619&parId=F9B9A6E451E1879D%21s388d144e772a43ddb9afa4f7de56a737&o=OneUp',
    },
    {
        id: 10,
        title: 'PC Gamer Ryzen 5',
        price: '1.915.047',
        category: 'pc´s',
        description: '7600 A520 32GB SSD M2 512GB RTX4070 8GB 750w',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sfc73a372b1b34f26ad8680bf432afad8&parId=F9B9A6E451E1879D%21s388d144e772a43ddb9afa4f7de56a737&o=OneUp',
    },
    {
        id: 11,
        title: 'PC Gamer Ryzen 7',
        price: '2.050.070',
        category: 'pc´s',
        description: '7700x c/water 240 B650M-A 32GB SSD M2 RTX4070ti',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s8dcaaf3c7ead46eb8f5cd8d768d157dc&parId=F9B9A6E451E1879D%21sbe927893f7fc412aa76eab8e5d9afb18&o=OneUp',
    },
    {
        id: 12,
        title: 'PC Gamer I7',
        price: '3.206.220',
        category: 'pc´s',
        description: '13700F c/water 120 Z690 32GB SSD M2 1TB RTX4070ti',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sabfe55e21713449eb246b6bc79681619&parId=F9B9A6E451E1879D%21s388d144e772a43ddb9afa4f7de56a737&o=OneUp',
    },
    {
        id: 13,
        title: 'Monitor Gamer ASUS',
        price: '542.189',
        category: 'monitores',
        description: 'LED 24" VP249QGR 144HZ 1MS',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s767afcc445ee49d88e08057b3a74f5f6&parId=F9B9A6E451E1879D%21sa9a9bdbc5e5648169dbc16bd32a05948&o=OneUp',
    },
    {
        id: 14,
        title: 'Monitor Samsung',
        price: '161.993',
        category: 'monitores',
        description: 'LED22" T350H IPS',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s81c70f60af7647708ea9397a5f6c15f7&parId=F9B9A6E451E1879D%21sa9a9bdbc5e5648169dbc16bd32a05948&o=OneUp',
    },
    {
        id: 15,
        title: 'Monitor LG',
        price: '396.781',
        category: 'monitores',
        description: 'WIDE 26WQ500-B',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sce8e228b2974497d85ca01e912b5710d&parId=F9B9A6E451E1879D%21sa9a9bdbc5e5648169dbc16bd32a05948&o=OneUp',
    },
    {
        id: 16,
        title: 'Monitor ASUS',
        price: '529.747',
        category: 'monitores',
        description: 'VA27EHE IPS FHD 75HZ',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s75518b88072d49baa285dfa82ba16a1b&parId=F9B9A6E451E1879D%21sa9a9bdbc5e5648169dbc16bd32a05948&o=OneUp',
    },
    {
        id: 17,
        title: 'Notebook DELL',
        price: '849.999',
        category: 'notebooks',
        description: '15.6" Inspiron 15 3520 I5 1135G7 8GB 256GB',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sa6c84f7bd9034f0785d9c666999507b9&parId=F9B9A6E451E1879D%21sbbcfe0e448174b5ab5e54758c369130a&o=OneUp',
    },
    {
        id: 18,
        title: 'Notebook Lenovo IdeaPad 3',
        price: '953.195',
        category: 'notebooks',
        description: '15.6" CoreI7 1165G7 8GB SSD 256GB',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s770c8197effc435fbe62e638cdce37da&parId=F9B9A6E451E1879D%21sbbcfe0e448174b5ab5e54758c369130a&o=OneUp',
        
    },
    {
        id: 19,
        title: 'Notebook ASUS',
        price: '1.499.999',
        category: 'notebooks',
        description: '15.6" X515EA I7-1165G7 8GB SSD 512GB',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21se9284045bdf74c44b0d498213adb1c02&parId=F9B9A6E451E1879D%21sbbcfe0e448174b5ab5e54758c369130a&o=OneUp',
    },
    {
        id: 20,
        title: 'Notebook Gigabyte AORUS 5',
        price: '1.879.999',
        category: 'notebooks',
        description: 'I7 12700 3070 16GB 512GB 360HZ W11',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sb781f8bb6814454aa567d39f7c233e69&parId=F9B9A6E451E1879D%21sbbcfe0e448174b5ab5e54758c369130a&o=OneUp',
    },
    {
        id: 21,
        title: 'Teclado Mecanico HyperX',
        price: '108.999',
        category: 'perifericos',
        description: 'Alloy Origins RGB Red',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sdb3e1d162a5c40518a586742e99c8e88&parId=F9B9A6E451E1879D%21sd072bf3f5afa4237863989dc0e7e520e&o=OneUp',
    },
    {
        id: 22,
        title: 'Teclado Mecanico HyperX',
        price: '187.555',
        category: 'perifericos',
        description: 'Origins RBG',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sf3555563bc7346d49c7e9d8e63a9aa4a&parId=F9B9A6E451E1879D%21sd072bf3f5afa4237863989dc0e7e520e&o=OneUp',
    },
    {
        id: 23,
        title: 'Mouse Gamer Logitech',
        price: '144.999',
        category: 'perifericos',
        description: 'G502 Ligthspeed Wireless Negro',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21sfc0b1fa466b74cfab13f5b6108364a36&parId=F9B9A6E451E1879D%21sd072bf3f5afa4237863989dc0e7e520e&o=OneUp',
    },
    {
        id: 24,
        title: 'Mouse HyperX',
        price: '174.006',
        category: 'perifericos',
        description: 'Pulsefire Dart Black',
        image: 'https://onedrive.live.com/?cid=F9B9A6E451E1879D&id=F9B9A6E451E1879D%21s49d3be1a9a8e4fc88249f329953cda22&parId=F9B9A6E451E1879D%21sd072bf3f5afa4237863989dc0e7e520e&o=OneUp',
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
