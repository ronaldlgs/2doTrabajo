import React, { useEffect, useState } from 'react'

    interface Contacto {
        nombres: string,
        correo: string,
        mensaje: string
    }
   
    export default function Contact() {
    const [Enviar, setEnviar] = useState(0);
    const [contacto, setcontacto] = useState<Contacto>({
        nombres: '',
        correo: '',
        mensaje: ''
    });
    useEffect(() => {
        if (Enviar === 1) {
            setcontacto({
                nombres: '',
                correo: '',
                mensaje: ''
            })
            alert(`Estimado ${contacto.nombres} Su Mensaje: ${contacto.mensaje} ha sido Enviado Enviado con copia a su correo: ${contacto.correo}`);
            setEnviar(0);
        }
     });
 

    
    const hanlderInput = (event: any): void => {
        setcontacto({
            ...contacto,
            [event.target.name] : event.target.value
        })
       
    };
    return (


        
<section className="section" id="Contacto">
    <div className="container">
    
    <div className="section-heading">
        <h3 className="title is-2">Contacto</h3>
        <h4 className="subtitle is-5">Completa el formulario</h4>
      </div>
      <br />
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <div className="field">
              <label className="label">Nombre</label>
              <div className="control">
                <input className="input" type="text" placeholder="Nombre completo" name="nombres" value ={contacto.nombres} onChange={hanlderInput} required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Correo Electrónico" name="correo" value ={contacto.correo} onChange={hanlderInput} required/>
                </div>
            </div>

            <div className="field">
              <label className="label">Mensaje</label>
              <div className="control">
                <input className="input" placeholder="Mensaje"name="mensaje" value ={contacto.mensaje} onChange={hanlderInput} required />
              </div>
            </div>

            <div className="field is-grouped has-text-centered">
              <div className="control">
                <button className="button is-link is-large"  type="submit" onClick={() => setEnviar(1)}>
                  <span>Enviar</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    )}
    