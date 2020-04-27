import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css'

const Register = props => {
    return (
        <>
            <div className="fcontainer">
                <br />  <p className="text-center">Ingrese los siguientes datos para su registro:</p>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header bg-dark text-white">
                                <Link to="" className="float-right btn btn-outline-light mt-1">Ingresar</Link>
                                <h4 className="card-title mt-2">Registro</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Nombre </label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                        <div className="col form-group">
                                            <label>Apellido</label>
                                            <input type="text" className="form-control" placeholder=" " />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="" />
                                        <small className="form-text text-muted">Debe ingresar un email válido.</small>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" value="option1" />
                                            <span className="form-check-label"> Hombre </span>
                                        </label>
                                        <label className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" value="option2" />
                                            <span className="form-check-label"> Mujer</span>
                                        </label>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Ciudad</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>País</label>
                                            <select id="inputState" className="form-control">
                                                <option selected disabled value="">Elija...</option>
                                                <option value="argentina">Argentina</option>
                                                <option value="20">Afganistán</option>
                                                <option value="30">Albania</option>
                                                <option value="40">Alemania</option>
                                                <option value="50">Andorra</option>
                                                <option value="60">Angola</option>
                                                <option value="70">Anguilla</option>
                                                <option value="80">Antártida Argentina</option>
                                                <option value="90">Antigua y Barbuda</option>
                                                <option value="100">Antillas Holandesas</option>
                                                <option value="110">Arabia Saudita</option>
                                                <option value="120">Argelia</option>
                                                <option value="130">Armenia</option>
                                                <option value="140">Aruba</option>
                                                <option value="150">Australia</option>
                                                <option value="160">Austria</option>
                                                <option value="170">Azerbaiján</option>
                                                <option value="180">Bahamas</option>
                                                <option value="190">Bahrain</option>
                                                <option value="200">Bangladesh</option>
                                                <option value="210">Barbados</option>
                                                <option value="220">Bélgica</option>
                                                <option value="230">Belice</option>
                                                <option value="240">Benin</option>
                                                <option value="250">Bhutan</option>
                                                <option value="260">Bielorusia</option>
                                                <option value="bolivia">Bolivia</option>
                                                <option value="280">Bosnia Herzegovina</option>
                                                <option value="290">Botswana</option>
                                                <option value="brasil">Brasil</option>
                                                <option value="310">Brunei</option>
                                                <option value="320">Bulgaria</option>
                                                <option value="330">Burkina Faso</option>
                                                <option value="340">Burundi</option>
                                                <option value="350">Cabo Verde</option>
                                                <option value="360">Camboya</option>
                                                <option value="370">Camerún</option>
                                                <option value="380">Canadá</option>
                                                <option value="390">Chad</option>
                                                <option value="chile">Chile</option>
                                                <option value="410">China</option>
                                                <option value="420">Chipre</option>
                                                <option value="430">Colombia</option>
                                                <option value="440">Comoros</option>
                                                <option value="450">Congo</option>
                                                <option value="460">Corea del Norte</option>
                                                <option value="470">Corea del Sur</option>
                                                <option value="480">Costa de Marfil</option>
                                                <option value="490">Costa Rica</option>
                                                <option value="500">Croacia</option>
                                                <option value="510">Cuba</option>
                                                <option value="520">Darussalam</option>
                                                <option value="530">Dinamarca</option>
                                                <option value="540">Djibouti</option>
                                                <option value="550">Dominica</option>
                                                <option value="560">Ecuador</option>
                                                <option value="570">Egipto</option>
                                                <option value="580">El Salvador</option>
                                                <option value="590">Em. Arabes Un.</option>
                                                <option value="600">Eritrea</option>
                                                <option value="610">Eslovaquia</option>
                                                <option value="620">Eslovenia</option>
                                                <option value="espana">España</option>
                                                <option value="640">Estados Unidos</option>
                                                <option value="650">Estonia</option>
                                                <option value="660">Etiopía</option>
                                                <option value="670">Fiji</option>
                                                <option value="680">Filipinas</option>
                                                <option value="690">Finlandia</option>
                                                <option value="700">Francia</option>
                                                <option value="710">Gabón</option>
                                                <option value="720">Gambia</option>
                                                <option value="730">Georgia</option>
                                                <option value="740">Ghana</option>
                                                <option value="750">Gibraltar</option>
                                                <option value="760">Grecia</option>
                                                <option value="770">Grenada</option>
                                                <option value="780">Groenlandia</option>
                                                <option value="790">Guadalupe</option>
                                                <option value="800">Guam</option>
                                                <option value="810">Guatemala</option>
                                                <option value="820">Guayana Francesa</option>
                                                <option value="830">Guinea</option>
                                                <option value="840">Guinea Ecuatorial</option>
                                                <option value="850">Guinea-Bissau</option>
                                                <option value="860">Guyana</option>
                                                <option value="870">Haití</option>
                                                <option value="880">Holanda</option>
                                                <option value="890">Honduras</option>
                                                <option value="900">Hong Kong</option>
                                                <option value="910">Hungría</option>
                                                <option value="920">India</option>
                                                <option value="930">Indonesia</option>
                                                <option value="940">Irak</option>
                                                <option value="950">Irán</option>
                                                <option value="960">Irlanda</option>
                                                <option value="970">Islandia</option>
                                                <option value="980">Islas Cayman</option>
                                                <option value="990">Islas Cook</option>
                                                <option value="1000">Islas Faroe</option>
                                                <option value="1010">Islas Marianas del Norte</option>
                                                <option value="1020">Islas Marshall</option>
                                                <option value="1030">Islas Solomon</option>
                                                <option value="1040">Islas Turcas y Caicos</option>
                                                <option value="1050">Islas Vírgenes</option>
                                                <option value="1060">Islas Wallis y Futuna</option>
                                                <option value="1070">Israel</option>
                                                <option value="1080">Italia</option>
                                                <option value="1090">Jamaica</option>
                                                <option value="1100">Japón</option>
                                                <option value="1110">Jordania</option>
                                                <option value="1120">Kazajstán</option>
                                                <option value="1130">Kenya</option>
                                                <option value="1140">Kirguistán</option>
                                                <option value="1150">Kiribati</option>
                                                <option value="1160">Kuwait</option>
                                                <option value="1170">Laos</option>
                                                <option value="1180">Lesotho</option>
                                                <option value="1190">Letonia</option>
                                                <option value="1200">Líbano</option>
                                                <option value="1210">Liberia</option>
                                                <option value="1220">Libia</option>
                                                <option value="1230">Liechtenstein</option>
                                                <option value="1240">Lituania</option>
                                                <option value="1250">Luxemburgo</option>
                                                <option value="1260">Macao</option>
                                                <option value="1270">Macedonia</option>
                                                <option value="1280">Madagascar</option>
                                                <option value="1290">Malasia</option>
                                                <option value="1300">Malawi</option>
                                                <option value="1310">Mali</option>
                                                <option value="1320">Malta</option>
                                                <option value="1330">Marruecos</option>
                                                <option value="1340">Martinica</option>
                                                <option value="1350">Mauricio</option>
                                                <option value="1360">Mauritania</option>
                                                <option value="1370">Mayotte</option>
                                                <option value="1380">México</option>
                                                <option value="1390">Micronesia</option>
                                                <option value="1400">Moldova</option>
                                                <option value="1410">Mónaco</option>
                                                <option value="1420">Mongolia</option>
                                                <option value="1430">Montserrat</option>
                                                <option value="1440">Mozambique</option>
                                                <option value="1450">Myanmar</option>
                                                <option value="1460">Namibia</option>
                                                <option value="1470">Nauru</option>
                                                <option value="1480">Nepal</option>
                                                <option value="1490">Nicaragua</option>
                                                <option value="1500">Níger</option>
                                                <option value="1510">Nigeria</option>
                                                <option value="1520">Noruega</option>
                                                <option value="1530">Nueva Caledonia</option>
                                                <option value="1540">Nueva Zelandia</option>
                                                <option value="1550">Omán</option>
                                                <option value="1570">Pakistán</option>
                                                <option value="1580">Panamá</option>
                                                <option value="1590">Papua Nueva Guinea</option>
                                                <option value="paraguay">Paraguay</option>
                                                <option value="1610">Perú</option>
                                                <option value="1620">Pitcairn</option>
                                                <option value="1630">Polinesia Francesa</option>
                                                <option value="1640">Polonia</option>
                                                <option value="1650">Portugal</option>
                                                <option value="1660">Puerto Rico</option>
                                                <option value="1670">Qatar</option>
                                                <option value="1680">RD Congo</option>
                                                <option value="1690">Reino Unido</option>
                                                <option value="1700">República Centroafricana</option>
                                                <option value="1710">República Checa</option>
                                                <option value="1720">República Dominicana</option>
                                                <option value="1730">Reunión</option>
                                                <option value="1740">Rumania</option>
                                                <option value="1750">Rusia</option>
                                                <option value="1760">Rwanda</option>
                                                <option value="1770">Sahara Occidental</option>
                                                <option value="1780">Saint Pierre y Miquelon</option>
                                                <option value="1790">Samoa</option>
                                                <option value="1800">Samoa Americana</option>
                                                <option value="1810">San Cristóbal y Nevis</option>
                                                <option value="1820">San Marino</option>
                                                <option value="1830">Santa Elena</option>
                                                <option value="1840">Santa Lucía</option>
                                                <option value="1850">Sao Tomé y Príncipe</option>
                                                <option value="1860">Senegal</option>
                                                <option value="1870">Serbia y Montenegro</option>
                                                <option value="1880">Seychelles</option>
                                                <option value="1890">Sierra Leona</option>
                                                <option value="1900">Singapur</option>
                                                <option value="1910">Siria</option>
                                                <option value="1920">Somalia</option>
                                                <option value="1930">Sri Lanka</option>
                                                <option value="1940">Sudáfrica</option>
                                                <option value="1950">Sudán</option>
                                                <option value="1960">Suecia</option>
                                                <option value="1970">Suiza</option>
                                                <option value="1980">Suriname</option>
                                                <option value="1990">Swazilandia</option>
                                                <option value="2000">Taiwán</option>
                                                <option value="uruguay">Uruguay</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Crear contraseña</label>
                                        <input className="form-control" type="password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Registrarse  </button>
                                    </div>
                                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Ya posse una cuenta? <Link to="">Ingresar</Link></div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Register;