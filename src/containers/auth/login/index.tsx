import { useMyTheme } from '@/store/context/theme';
import { LoginContainerProps } from '@/types/auth';
import { FC, useRef } from 'react';
import style from './login.module.scss';
import { Button, Input, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';

export const LoginContainer: FC<LoginContainerProps> = () => {
  const { currentTheme } = useMyTheme();
  console.log(currentTheme);
  const { register, handleSubmit } = useForm(); // initialize the form hook

  const btnRef = useRef<any>(null);

  //   console.log(theme);
  const onSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <div className={style['login-container']}>
      <div className={style['login-card']}>
        <div className={style['header']}>Welcome back</div>

        <form className={style['form']} onSubmit={handleSubmit(onSubmit)}>
          <div className={style['input-container']}>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              color="primary"
              style={{
                width: '100%',
              }}
              {...register('email')}
            />
          </div>

          <div className={style['input-container']}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              //   name="password"
              color="primary"
              style={{
                width: '100%',
              }}
              {...register('password')}
            />
          </div>
          <button
            style={{
              visibility: 'hidden',
            }}
            ref={btnRef}
            type="submit"
          >
            Login
          </button>
          <Button
            onClick={() => {
              if (btnRef.current) btnRef.current.click();
            }}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
