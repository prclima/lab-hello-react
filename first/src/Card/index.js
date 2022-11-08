import style from "./style.module.css"

function Card(param) {
    return (
    
    <div className={style.div} >
       <img src={param.img} alt="foto"/>
       <img src={param.img2} alt="foto"/>
    </div>
    
    );
}

export default Card; 