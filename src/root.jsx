import quip from "quip";
import App from "./App.jsx";
import { StickerRecord } from "./model.jsx";
import {
    menuCommands,
    onSelectedStickerChanged,
} from "./menu.js";

quip.apps.registerClass(StickerRecord, "Root");

quip.apps.initialize({
    menuCommands: menuCommands(),
    toolbarCommandIds: [quip.apps.DocumentMenuCommands.MENU_MAIN,"sticker"],
    initializationCallback: function(rootNode) {
        const stickerRecord = quip.apps.getRootRecord();
        ReactDOM.render(<App
            entity={stickerRecord}
            onSelectedCardChanged={onSelectedStickerChanged}
        />, rootNode);
    },
});
