import React, { useContext, useState } from 'react';
import Carousel from '../components/carousel';
import Coment from '../components/coment';
import Cards from '../components/cards';
import Tiempo from '../components/tiempo';

const Home = props => {
    const [state, setState] = useState({
        galery: [
            {
                id: 1,
                image: 'https://chile.travel/wp-content/uploads/2016/03/Santiago-shutterstock-TR27.jpg',
                title: "Santiago",
                description: "La gran capital de Chile."
            },
            {
                id: 2,
                image: 'https://image.shutterstock.com/image-photo/torres-del-paine-chile-260nw-1109019650.jpg',
                title: "Torres del Paine, Punta Arenas",
                description: "El imperdible del fin del mundo"
            },
            {
                id: 3,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Desierto de Atacama, Norte de Chile",
                description: "Uno de los lugares más aridos del planeta."
            }
        ],
        blog:[
            {
                id: 1,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Solicitud de primera cedula",
                requsitos: "Primera solicitud de cédula de Identidad: Presentar el pasaporte vigente o título de residencia y entregar una fotocopia simple de la hoja de personalización del documento, en la cual se visualiza la fotografia, datos personales y firma. ",
                oficina:"1-Diríjase a una de nuestras oficinas que emite cédulas de identidad para extranjeros.2-Acérquese a uno de los módulos de atención y solicite su cédula de identidad con la documentación requerida.3-Pague el valor del documento.4-Revise la exactitud de los datos registrados en la solicitud y en el comprobante.5-En este sitio web puede revisar el estado de su documento, y si se encuentra disponible para retiro.6-Diríjase a la oficina que solicitó para retiro del documento, junto con el comprobante correspondiente.",
                description: "Si tiene visa temporaria sujeta a contrato o estudiante:Presentar la Visa original y fotocopia simple entregada por el Departamento de Extranjería.Original y fotocopia del Certificado de Registro de Visa otorgado por la Policía de Investigaciones, la fecha de emisión de dicho certificdo no puede exceder el año de vigencia.Si tiene Visa consular, debe presentar los mismos documentos indicados anteriormente y fotocopia del timbre de entrada al país.Si tiene permanencia definitiva:Original y fotocopia del Certificado de Permanencia Definitiva otorgado por el Ministerio del Interior.Original y fotocopia del Certificado de Registro o Vigencia de la Permanencia Definitiva proporcionado por la Policía de Investigaciones, la fecha de emisión de dicho certificado no puede exceder el año de vigencia.Si tiene visa dependiente:El grupo familiar que ingresa con el titular de la visa tiene el mismo tipo de visa que éste, pero dependiente. Debe adjuntarse a la solicitud una fotocopia simple de la hoja de datos del pasaporte, visa, timbre de entrada (si corresponde) y de tarjeta de registro de la Policía de Investigaciones y ademas deberá presentar fotocopia de los documentos del titular de la visa (pasaporte, visa y registro PDI). ", 
                precio:"$4.270"
            },
            {
                id: 2,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Renovacion de cedula",
                requsitos: "Renovacion de cédula de Identidad: Presentar el pasaporte vigente o título de residencia y entregar una fotocopia simple de la hoja de personalización del documento, en la cual se visualiza la fotografia, datos personales y firma. ",
                oficina:"1-Diríjase a una de nuestras oficinas que emite cédulas de identidad para extranjeros.2-Acérquese a uno de los módulos de atención y solicite su cédula de identidad con la documentación requerida.3-Pague el valor del documento.4-Revise la exactitud de los datos registrados en la solicitud y en el comprobante.5-En este sitio web puede revisar el estado de su documento, y si se encuentra disponible para retiro.6-Diríjase a la oficina que solicitó para retiro del documento, junto con el comprobante correspondiente.",
                description: "Al finalizar el plazo de vigencia del documento, el(la) interesado(a) debe obtener previamente la renovación de su visa, para luego solicitar la renovación de la cédula de identidad, presentando los mismos documentos que para la primera cédula. Si ya había renovado su cédula con permanencia definitiva:Tarjeta de permanencia definitiva otorgada por el Ministerio del Interior y Seguridad Pública en original y fotocopia.Certificado de Vigencia de la permanencia otorgado por Policía Internacional de Investigaciones de Chile.Todos los extranjeros mayores de 18 años, residentes en el país, titulares de cualquier tipo de visa o de permanencia definitiva, están obligados a obtener su cédula de identidad para extranjero dentro de los 30 días siguientes a la fecha de entrega del certificado de permanencia definitiva o desde que se estampa en el respectivo pasaporte la correspondiente visa.Esta obligación rige también para los titulares de la “Tarjeta de Trabajador Temporario”, o “de Temporada”, otorgadas de acuerdo con el Convenio Laboral Chileno-Argentino suscrito entre ambos países.También pueden obtener cédula de identidad para extranjero los menores de 18 años, titulares de algún tipo de visación o de la permanencia definitiva, sin que este trámite les sea obligatorio. Con todo, estarán obligados a hacerlo dentro de los 30 días siguientes a la fecha en que cumplan tal edad.No se otorgará cédula de identidad para extranjero al titular de una visa de residente oficial. Sin embargo, podrá obtenerla acompañando la autorización otorgada por la Dirección del Ceremonial y Protocolo del Ministerio de Relaciones Exteriores. Tampoco se otorgará a los titulares de una tarjeta de turismo o de tripulantes.", 
                precio:"$4.270" 
            },
            {
                id: 3,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Permiso de Trabajo con Visa en Trámite",
                requsitos: "1-Pasaporte.2-Tarjeta Turismo Vigente y Legible.3-Contrato de Trabajo (firmado por ambas partes o carta de la empresa en la que se desempeñará; ambas firmadas ante notario) indicando la individualización de las partes y labor a desarrollar",
                oficina:"1) Paso uno Solicitar Permiso: En la primera parte usted deberá completar sus datos personales y adjuntar documentación que corresponde al trámite Permiso de Trabajo en condición de Turista. Posterior a este paso se analizará su solicitud. Si usted cumple con todos los requisitos de manera correcta, se le enviará un mail con la orden de pago.2) Paso dos Envío de Orden de Pago: En la segunda parte usted deberá adjuntar la orden de pago ya pagada y completar la información restante. En cuanto sea analizado, se le enviaran por mail las indicaciones para finalizar el trámite.",
                description: "La autorización para trabajar con permiso de turismo, se podrá otorgar a quienes tengan la condición de turista vigente y requieran desarrollar actividades remuneradas en nuestro país, sean éstas remuneradas en el país de origen o en Chile. El Ministerio del Interior podrá autorizarlos para que, en casos calificados, trabajen en el país por un plazo máximo de 30 días, prorrogables mientras se mantenga vigente el permiso de turismo", 
                precio:"El arancel del permiso de trabajo como turista corresponde al 150% del valor de la visa sujeta a contrato dependiendo de su nacionalidad y el valor del día del dolar." 
            },
            {
                id: 4,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Registro de visa en pdi",
                requsitos: "Pasaporte vigente,Visa,Contar con CLP$800 en efectivo para pagar el registro; Y,Dentro de la Región Metropolitana y en otras Regiones en que se solicite: Presentar el comprobante de cita.",
                oficina:"1. Inicia sesión. 2. Selecciona la Región en la cual tienes domicilio. 3. Selecciona el trámite a realizar",
                description: "Es el documento que acredita que un extranjero poseedor de Visa/Permanencia Definitiva se ha inscrito en el Registro General de Extranjeros y que lo habilita para obtener cédula de identidad dentro de los treinta días posteriores a su estampado. Las visas que son otorgadas por el Servicio Exterior de Chile en el Extranjero deben ser inscritas en el Registro General de Extranjeros, no superando los treinta días desde que ingresas a Chile. ", 
                precio:"$800" 
            },
            {
                id: 5,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Registro de Permanencia Definitiva en PDI",
                requsitos: "Certificado de Permanencia Definitiva emitido por el Departamento de Extranjería y Migración,Documento de identidad válido y vigente (debe ser el mismo documento declarado al solicitar la Permanencia Definitiva),Presentar el comprobante de cita; Y,Contar con CLP$800 en efectivo para pagar el registro.",
                oficina:"1. Inicia sesión. 2. Selecciona la Región en la cual tienes domicilio. 3. Selecciona el trámite a realizar",
                description: "Documento que establece fehacientemente que el permiso de Permanencia Definitiva no ha caducado. La solicitud de éste certificado en las oficinas de PDI es personal, pudiendo ser solicitado por una tercera persona autorizada por Poder Notarial. ", 
                precio:"$800" 
            }
        ]
    })

    return (
        <>
            <Carousel slide={state.galery} />
            <h1 className= "title text-center">Home</h1>
            <Cards conte={state.blog} />
            <Coment conte={state.blog} />
            <Tiempo conte={state.blog}/>
           
        </>
    )
}

export default Home;