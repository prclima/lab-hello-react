import style from "./style.module.css"


function Cardteste (param) {
    return (

        <div className={style.div} >
        <h1 className={style.h1}> {param.h1}</h1>
        <p className={style.p}> {param.p}</p>
        <button className={style.button}> Awesome!</button>
    </div>
    );
}
export default Cardteste;