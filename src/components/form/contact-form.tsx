'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("Subject"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Nombre</label>
        <input id='name' {...register("name")} type="text" placeholder="Tu Nombre" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Email</label>
        <input id='subject' {...register("subject")} type="text" placeholder="tu@email.com" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Mensaje</label>
        <textarea id='message' {...register("message")} placeholder="Déjanos un mensaje"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
}
