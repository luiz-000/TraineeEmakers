import { React , useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { GoArrowRight } from "react-icons/go";

import './Formulários.css'


const Formulários = ({
    titulo,
    campos,
    onSubmit,
    links,
    submitButtonIcon = <GoArrowRight />
}) => {
    const navigate = useNavigate();

    const [dadosFormulario, setDadosFormulario] = useState (
        campos.reduce((acc, campo) => ({...acc, [campo.name]: '' }), {})
    );

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailValue = dadosFormulario.email;
        localStorage.setItem('userEmail', emailValue);

        if(onSubmit) {
            onSubmit(dadosFormulario);
        }

        navigate('/conta');
    };

  return (
    <div className='container'>
        <form className='containerFormulario' onSubmit={handleSubmit}>

            <h1> {titulo} </h1>

            <div className='FormularioInputs'>
                
                {campos.map(campo => (
                    <input
                        key={campo.name}
                        type={campo.type}
                        name={campo.name}
                        placeholder={campo.placeholder}
                        required={campo.required}
                        value={dadosFormulario[campo.name]}
                        onChange={handleInputChange}
                    />
                ))}
                
            </div>

            <button type='submit' className='FormularioButton'>
                {submitButtonIcon}
            </button>

            {links && (
            <div className='FormularioLinks'>
                {links.map((link, index) => (
                    <link.component
                        key={index}
                        to={link.to}
                    >
                        {link.text}
                    </link.component>
                ))}
            </div>
        )}

        </form>

    </div>
  );
}

export default Formulários
