import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, LoginContainer, Column, Spacing, Title, InputContainer, ErrorMessage } from "./styles";

export interface IFormLogin {
  email: string;
  password: string;
}

const defaultValues: IFormLogin = {
  email: '',
  password: ''
}

const schema = yup.object({
  email: yup.string().email('Email invalido').required('Campo Obrigatório'),
  password: yup.string().min(6, 'Não esta faltando alguma coisa?').required('Campo Obrigatório'),
})

export function Login() {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormLogin>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange'
  });

  const onSubmit: SubmitHandler<IFormLogin> = data => console.log(data);

  return(
    <Container>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <InputContainer>
            <input
              type='text'
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </InputContainer>
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
          <Spacing />
          
          <InputContainer>
            <input
              type="password"
              placeholder="Senha"
              {...register("password", { required: true })}
              />
          </InputContainer>
          {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
          <Spacing />
          <Button title="Entrar" disabled={!isValid}/>
        </Column>
      </LoginContainer>
    </Container>
  )
}