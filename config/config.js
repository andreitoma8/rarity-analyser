const config = {
    app_name: 'Cool Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x5537d90a4a2dc9d9b37bab49b490cf67d4c54e91',
    collection_name: 'Gutter Chicks',
    collection_description: 'Gang Gang!',
    collection_id_from: 0,
    ignore_traits: ['date'],
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://onedaypunk-rarity-tool.herokuapp.com/images/og.png',
    item_path_name: 'punk',
    page_item_num: 100,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;