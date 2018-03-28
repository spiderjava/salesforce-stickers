// Copyright 2017 Quip

var stickersMap = new Map();


stickersMap.set("Astro","stickers/astro.png");
stickersMap.set("Astro Blazer","stickers/astro_blazer.png");
stickersMap.set("Astro Trailhead","stickers/astro_trailhead.png");
stickersMap.set("Codey","stickers/codey.png");
stickersMap.set("Codey Singer","stickers/codey_singer.png");
stickersMap.set("Codey Blazer","stickers/codey_blazer.png");
stickersMap.set("Einstein Blazer","stickers/einstein_blazer.png");
stickersMap.set("Einstein Seated","stickers/einstein_sit.png");
stickersMap.set("Einstein Rocket","stickers/einstein_rocket.png");
stickersMap.set("Appy", "stickers/appy.png");
stickersMap.set("Appy Seated","stickers/appy_sit.png");
stickersMap.set("Saasy","stickers/saasy.png");
stickersMap.set("Earnie","stickers/earnie.png");
stickersMap.set("Hootie","stickers/hootie.png");
stickersMap.set("Cloudy","stickers/cloudy.png");
stickersMap.set("Fox","stickers/fox.png");
stickersMap.set("Butterfly","stickers/butterfly.png");
stickersMap.set("Wolf","stickers/wolf.png");
stickersMap.set("Friends Group","stickers/group_1.png");
stickersMap.set("Happy Group","stickers/group_2.png");


const stickers = [
    "Astro",
    "Astro Blazer",
    "Astro Trailhead",
    "Codey",
    "Codey Singer",
    "Codey Blazer",
    "Einstein Blazer",
    "Einstein Seated",
    "Einstein Rocket",
    "Appy",
    "Appy Seated",
    "Saasy",
    "Earnie",
    "Hootie",
    "Cloudy",
    "Fox",
    "Butterfly",
    "Wolf",
    "Friends Group",
    "Happy Group"
];



let selectedSticker;
export function onSelectedStickerChanged(newSticker) {
    selectedSticker = newSelectedSticker;
    quip.apps.setSelectedRecord(selectedSticker);
}


export function randomSticker(){
    let num=Math.floor((Math.random() * 20));
    return {
        sticker: stickers[num],
        url: stickersMap.get(stickers[num])
    };

}

export function menuCommands() {

    const mainMenuSubCommands = [
        quip.apps.DocumentMenuCommands.SEPARATOR,
        "made-italy",
        quip.apps.DocumentMenuCommands.SEPARATOR,
    ];

    return [
        {
            id: quip.apps.DocumentMenuCommands.MENU_MAIN,
            subCommands: mainMenuSubCommands,
        },
        {
            id: "made-italy",
            label: "SE Team (Made-in-Italy)",
            isHeader: true,
        },
        {
            id: "sticker",
            label: "Select Sticker",
            subCommands: stickers,
        },
        ...stickers.map(sticker => ({
            id: sticker,
            label: sticker.charAt(0).toUpperCase() + sticker.slice(1).toLowerCase(),
            handler: () => {
                quip.apps.getRootRecord().changeSticker(sticker, stickersMap.get(sticker));
            },
            isHeader: false,
        })),
    ];
}



