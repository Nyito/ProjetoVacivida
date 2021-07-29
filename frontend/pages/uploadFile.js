import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useForm} from "react-hook-form"
import Router from 'next/router'


import axios from 'axios'


const urlApi = 'http://localhost:5000' //process.env.URL_API_BACKEND

export default function uploadFile() {
     
    const {register, handleSubmit} = useForm();


  async function onSubmit(data){
    console.log(urlApi)
    var backendPath = urlApi +'/uploadFile' 
    


    var formData = new FormData();
    formData.append("file", data.file[0]);
    axios.post(backendPath, formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    })

    Router.push('/enviado') //redireciona para a tela de envio

  };

  return (
    <Layout home>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="file"  encType="multipart/form-data" name="file" {...register("file")}  />
                <button>Enviar</button>
            </div>
        </form>
    </Layout>
    );
  }