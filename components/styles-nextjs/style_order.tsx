// 用來測試 優先順序
// 1. 用來測試 style 的優先順序
import style from "./css/StyleOrder.module.scss";
const StyleOrder = () => {
    return (
        <div>
            <div className="hightlight">下面，我設定inline css顏色是red，CSS in JS顏色是green，CSS module顏色是blue</div>
            <h5 style={{ color: "red" }} className={style.h5}>inline CSS 和 CSS module (inline css優先)</h5>
            <h5 className={`${style.h5} `}>CSS in JS 和 CSS module(CSS in JS優先)</h5>
            <h5 style={{ color: "red" }} className={`${style.h5} h5`}>三個都有 (inline css優先)</h5>
            <style jsx>{`
                h5 {   
                    color: green;
                }
            `}</style>
        </div>
    );
};

export default StyleOrder;