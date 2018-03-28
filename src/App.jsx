import Styles from "./App.less";
import { StickerRecord, entityListener } from "./model.jsx";



class App extends React.Component {
    static propTypes = {
        entity: React.PropTypes.instanceOf(StickerRecord).isRequired,
        onSelectedStickerChanged: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            sticker_done: "done",
            selectedSticker: undefined,
        };
    }

    componentDidMount() {
        //window.addEventListener("mousemove", this.onMouseMove_);
        //window.addEventListener("mouseup", this.onMouseUp_);
        window.addEventListener("click", this.onClick_);
        //window.addEventListener("keyup", this.onKeyUp_);
    }

    componentWillUnmount() {
        //window.removeEventListener("mousemove", this.onMouseMove_);
        //window.removeEventListener("mouseup", this.onMouseUp_);
        window.removeEventListener("click", this.onClick_);
        //window.removeEventListener("keyup", this.onKeyUp_);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedSticker !== this.state.selectedSticker) {
            this.props.onSelectedStickerChanged(this.state.selectedSticker);
        }
    }

    render() {
            return <div>
                <img src={this.props.entity.get("url")} />
            </div>;
    }


    onClick_ = e => {
        console.log("Click");
        console.log(e.target);
    };

    onKeyUp_ = e => {
        console.log("onKeyUp_");
        console.log(e.target);
    };
    onMouseMove_ = e => {
        console.log("onMouseMove_");
        console.log(e.target);
    };
    onMouseUp_ = e => {
        console.log("onMouseUp_");
        console.log(e.target);
    };

}
export default entityListener(App);