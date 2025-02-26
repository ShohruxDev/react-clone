import { useNavigate } from "react-router-dom";
import Header from "../Components/Header" 
import Footer from "./Footer";
import "./Zakaza"
const Zakaza = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/zakaza"); 
    };
    return (
      <div className=" flex  w-[100vw] items-center justify-center bg-amber-50">
        <div className="flex items-start justify-start w-[87%]  ">
         <b className="text-[24px] ml-[-1100px] mt-5">Оформление заказа</b>
        <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop:'50px',
            borderRadius:'15px',
            height: '20vh',
        }} className="texr">
         <div style={{
            width: '70%',
            borderRadius:'15px',
            backgroundColor:'white',
         }} className="zak">
          <div style={{
            display:'flex',
            alignItems:'center',
            padding:'10px 30px',
            justifyContent:'space-between'

          }}>
           <div style={{
            display:'flex',
            flexDirection:'column'
           }}>
            <p style={{
                marginBottom:'10px'
            }}>Телефон *</p>
           <input style={{
            width:'30vw'
           }} type="text" placeholder="+998(__) ___-__-__"/>
           </div>
           <div style={{
            display:'flex',
            flexDirection:'column'
           }}>
            <p style={{
                marginBottom:'10px'
            }}>Ф.И.О *</p>
           <input style={{
            width:'30vw'
           }} type="text" placeholder="+998(__) ___-__-__"/>
           </div>
          </div>

          <div style={{
            display:'flex',
            alignItems:'center',
            padding:'10px 30px',
            justifyContent:'space-between'

          }}>
           <div style={{
            display:'flex',
            flexDirection:'column'
           }}>
            <p style={{
                marginBottom:'10px'
            }}>Область *</p>
           <input style={{
            width:'30vw'
           }} type="text" placeholder="Выберите"/>
           </div>
           <div style={{
            display:'flex',
            flexDirection:'column'
           }}>
            <p style={{
                marginBottom:'10px'
            }}>Город / Район *</p>
           <input style={{
            width:'30vw'
           }} type="text" placeholder="Выберите"/>
           </div>
          </div>
         
         </div>
          <div style={{
            width:'25%',
            borderRadius:'15px',
            backgroundColor:'white',
            height:'20vh'
          }} className="tak">

          </div>
          
        </div>
        
        </div>
        <div style={{
            width:'100vw',
            display:'flex',
            alignItems:'center',    
            marginTop:'50px'
        }}>
          <div style={{
           margin:'0px 100px',
           backgroundColor:'white',
           display:'flex',
           flexDirection:'column',
           borderRadius:'15px'
          }}>
            <b>Способ получения</b>
            <div style={{
                padding:'50px 100px',
                border:'1px solid blue',
                marginTop:'10px',
                borderRadius:'15px'
            }}>
              <b>Доставка до двери</b>
              <p>Стоимость доставки: 30 000 сум</p>
            </div>
          <div style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <p style={{
                marginTop:'15px'
            }}>Населённый пункт</p>
          <input style={{
                padding:'10px 470px',
                marginTop:'10px'
            }} type="text" />
          </div>
          <div style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <p style={{
                marginTop:'15px'
            }}>Ориентир</p>
          <input style={{
                padding:'10px 470px',
                marginTop:'10px'
            }} type="text" />
          </div>

          <div style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <p style={{
                marginTop:'15px'
            }}>Ваш рабочий адрес</p>
          <input style={{
                padding:'30px 470px',
                marginTop:'10px'
            }} type="text" />
          </div>
          <div style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <p style={{
                marginTop:'15px'
            }}>Комментарий к заказу</p>
          <input style={{
                padding:'30px 470px',
                marginTop:'10px'
            }} type="text" />
          </div>
          <div style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <p style={{
                marginTop:'15px'
            }}>Есть промокод?</p>
          <input style={{
                padding:'10px 470px',
                marginTop:'10px'
            }} type="text" />
          </div>
          <b style={{
            marginTop:'15px',
            marginBottom:'15px'
          }}>Способ оплаты</b>
          </div>
        </div>
      </div>
      
    );
  };
  export default Zakaza;
  const About = () => <h1>About Page</h1>;