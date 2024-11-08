import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Registr = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Функция для проверки валидности email
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Обработчик для изменения значения input
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Проверяем, является ли введенное значение корректным email
    if (value === "") {
      setError("Адрес электронной почты не может быть пустым");
    } else if (!validateEmail(value)) {
      setError("Недопустимый адрес электронной почты");
    } else {
      setError("");
    }
  };


  let navigate = useNavigate()


  return (
    <>
    <div style={{ margin: "20px" }}>
    <Div>
      <label htmlFor="email" style={{ fontSize: "30px", fontWeight: "bold", position: "absolute",marginTop: "10px", marginLeft: "-20px",color: "blue" }}>
          Регистрация
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="Введите email"
        style={{
          display: "block",
          width: "300px",
          margin: "auto",
          padding: "10px",
          marginTop: "65px",
          borderColor: error ? "red" : "black",
          borderWidth: "1px",
          borderRadius: "4px",
        }}
      />
      <Input type="name" placeholder=' Имя' />
      <Twoinput type="number" placeholder=' Номер телефона' />
      {error && (
        <p style={{ color: "red", marginTop: "5px" }}>
          {error}
        </p>
      )}
      <Button onClick={() => navigate("/2")} type="button"
        disabled={!!error || !email} // Блокируем кнопку, если есть ошибка или email пустой
      >
        Продолжить
      </Button>
      </Div> 
    </div>
     
    {/* <h1>Регистрация</h1>
    <Div>
      <input type="name" placeholder=' Имя' />
      <input type="number" placeholder=' Номер телефона' />
    </Div> */}
    </>
  )
}

export default Registr

const Div = styled.div`
  width: 400px;
  height: 360px;
  margin: auto;
  margin-top: 163px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: linear-gradient(181.31deg, #CAC1C1 -9.48%, rgba(143, 140, 140, 0) 115.9%);

`
const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 4px;
  border-width: 1px;
  position: absolute;
  margin-top: 140px;
`
const Twoinput = styled.input`
  width: 300px;
  padding: 10px;
  border-width: 1px;
  border-radius: 4px;
  position: absolute;
  margin-top:210px;
`
const Button = styled.button`
        padding: 10px;
          background-color: #1111f9;
          color:white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          position: absolute;
          margin-top: 275px;
`