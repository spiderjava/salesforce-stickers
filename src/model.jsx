import {
    randomSticker,
} from "./menu.js";

export class StickerRecord extends quip.apps.RootRecord {
    static getProperties() {
        return {
            sticker: "string",
            url: "string",
        };
    }

    static getDefaultProperties() {
        let rdSticker=randomSticker();

        return { sticker: rdSticker.sticker, url: rdSticker.url };
    }

    static DATA_VERSION = 2;

    initialize() {
        //if it is type sticker: quip.apps.RecordList.Type(ColumnRecord)
        //this.get("sticker").listen(() => this.notifyListeners());
    }

    changeSticker(sticker, url){
        this.set("sticker", sticker);
        this.set("url", url);
    }

}

export function entityListener(WrappedComponent) {
    return class RecordListenerComponent extends React.Component {
        static propTypes = {
            entity: React.PropTypes.instanceOf(quip.apps.Record),
        };

        componentDidMount() {
            this.props.entity.listen(this.onRecordChange_);
        }

        componentWillUnmount() {
            this.props.entity.unlisten(this.onRecordChange_);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }

        onRecordChange_ = () => {
            this.forceUpdate();
        };
    };
}