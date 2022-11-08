import style from "./style.module.css"

function Footer(param){
    return (
        <div className={style.div}>
    <img className={style.imgfoot} src={param.img} alt="foto"/>
    <h3>{param.titulo}</h3>
    <p>{param.texto}</p>
    </div>
    );
}

export default Footer;