import React from 'react';
import FormInput from '../../components/FormInput';
import './FormCreate.css';

const FormCreate = () => {
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Nome de Usuário',
      errorMessage:
        'Nome de Usuário deve conter de 3 a 16 digitos sem espaços nem caracteres especiais',
      label: 'Nome de Usuário',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Digite seu Email',
      errorMessage: 'Por favor digite um email valido',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Data de Nascimento',
      label: 'Data de Nascimento',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Digite uma senha',
      errorMessage:
        'A senha deve conter no minimo 8 caracteres e pelo menos 1 letra, 1 numero e 1 caracter especial',
      label: 'Digite uma senha',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirme sua senha',
      errorMessage: 'Senha diferente',
      label: 'Confirme sua senha',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup">
      <div>
        <h2>Cadastre-se</h2>
        <p>
          Olá, preencha os campos abaixo <br /> para criar uma conta
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>cadastrar</button>
      </form>
    </div>
  );
};

export default FormCreate;
