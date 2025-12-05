'use client'
import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import ErrorMsg from '../error-msg';

// Tipos de datos del formulario (Frontend)
type FormData = {
  name: string;
  email: string;
  message: string;
};

// Esquema de validación
const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email("Email inválido").required().label("Email"),
  message: yup.string().required().label("Message"),
});

type IProps = {
  btnCls?: string;
  dict?: any;
}

export default function ContactForm({ btnCls = '', dict }: IProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // 1. Ejecutamos el captcha invisible para obtener el token
      const token = await recaptchaRef.current?.executeAsync();

      if (!token) {
        toast.error("Error de seguridad (Captcha). Intenta nuevamente.");
        setIsSubmitting(false);
        return;
      }

      // 2. Armamos el payload EXACTO como lo pide la imagen
      const payload = {
        email: data.email,
        name: data.name,
        message: data.message,
        "captcha-token": token // <-- Aquí está la clave corregida
      };

      // 3. Enviamos al endpoint
      await axios.post('https://base.besmart.technology/api/form', payload);

      // 4. Éxito
      toast.success(dict?.contact?.form?.success_msg || "Mensaje enviado con éxito!");
      reset(); 
      recaptchaRef.current?.reset();

    } catch (error) {
      console.error("Error al enviar:", error);
      toast.error(dict?.contact?.form?.error_msg || "Hubo un error al enviar el mensaje.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      
      {/* ReCAPTCHA Invisible */}
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LdeGxssAAAAAL9wPRvT6FeJOp_tCR_yrMPRpNSp"
      />

      <div className="cn-contactform-input mb-25">
        <label>{dict?.contact?.form?.name || "Nombre"}</label>
        <input 
            id='name' 
            {...register("name")} 
            type="text" 
            placeholder={dict?.contact?.form?.name_placeholder || "Tu Nombre"} 
        />
        <ErrorMsg msg={errors.name?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label>{dict?.contact?.form?.email || "Email"}</label>
        <input 
            id='email' 
            {...register("email")} 
            type="email" 
            placeholder={dict?.contact?.form?.email_placeholder || "tu@email.com"} 
        />
        <ErrorMsg msg={errors.email?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label>{dict?.contact?.form?.message || "Mensaje"}</label>
        <textarea 
            id='message' 
            {...register("message")} 
            placeholder={dict?.contact?.form?.message_placeholder || "Déjanos un mensaje"}
        ></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>

      <div className="cn-contactform-btn">
        <button 
          className={`tp-btn-black-md ${btnCls} w-100`} 
          type="submit"
          disabled={isSubmitting}
          style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
        >
          {isSubmitting 
            ? (dict?.contact?.form?.sending || "Enviando...") 
            : (dict?.contact?.form?.btn_send || "Enviar Mensaje")
          }
        </button>
      </div>
    </form>
  );
}