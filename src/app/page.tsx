import Image from "next/image";
import Faqs from "./components/faqs";

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <div className="blured-element size-[690px] bg-[#2278FE]/50 md:bg-[#2278FE]/70 _blur-[230px] rounded-full absolute -left-[200px] -top-[320px]"></div>
      <div className="blured-element size-[690px] bg-[#2278FE]/50 md:bg-[#2278FE]/70 rounded-full _blur-[230px] absolute -right-[200px] top-[1000px] md:top-[800px]"></div>
      <section className="relative py-[60px] md:py-[80px] px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6 flex gap-4 items-center justify-center">
            <div className="flex">
              <img className="bg-gray-400 min-w-[45px] rounded-full size-[45px] border-2" src="/images/perfil-1.jpg" alt="Cliente de Lucas Reale Fitness" />
              <img className="bg-gray-400 min-w-[45px] rounded-full size-[45px] border-2 -ms-2" src="/images/perfil-2.jpg" alt="Cliente de Lucas Reale Fitness" />
              <img className="bg-gray-400 min-w-[45px] rounded-full size-[45px] border-2 -ms-2" src="/images/perfil-3.jpg" alt="Cliente de Lucas Reale Fitness" />
            </div>
            <p className="text-[16px] w-fit font-semibold rounded-full">+50 mujeres ya consiguieron su cambio</p>
          </div>
          <h1 className="text-[28px] leading-[34px] md:text-[40px] font-bold text-center md:leading-[50px] drop-shadow-[0_0px_12px_rgba(0,0,0,0.25)] max-w-[1050px] mx-auto">Ayudo a mujeres ocupadas a Transformar su Cuerpo y Calidad de Vida <span className="underline underline-offset-[6px] decoration-2">en 12 semanas</span> <span className="hidden md:inline">con un plan integral, flexible y adaptado a su ciclo hormonal.</span></h1>
          <p className="text-[18px] text-center text-white/80 mt-4">¿Estás buscando un cambio? ¡Mira el video y descubre mi método!</p>
          <iframe className="rounded-lg w-[990px] max-w-full aspect-video mx-auto my-8 shadow-2xl shadow-white/10" src="https://fast.wistia.net/embed/iframe/uhpm1crmcy?web_component=true&seo=true" title="VSL . LANDING Video" allow="autoplay; fullscreen" frameBorder="0" scrolling="no"></iframe>
          <div>
            <a className="lr-btn mt-4 hover:-translate-y-2 transition-all" href="https://calendly.com/lucasrcoachperson/presentacion-del-programa-vsl">Reserva Tu Consulta Gratuita Ahora »</a>
            <p className="text-center text-[14px] text-white/80 mt-2">¡Últimas plazas disponibles! Reserva antes de que se acaben.</p>
          </div>
          <div className="flex gap-2 flex-col md:flex-row items-center justify-center mt-8">
            <div className="flex gap-[4px]">
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
            </div>
            <p className="text-white/80 text-[14px] leading-[100%]">5.0 Estrellas de +50 reseñas</p>
          </div>
        </div>
      </section>
      <section className="py-[60px] md:py-[80px] relative px-4">
        <div className="max-w-[750px] mx-auto">
          <h2 className="font-bold leading-[125%] text-[28px] md:text-[40px] text-center">Ellas ya probaron mi metodo...</h2>
          <p className="text-[18px] text-white/80 mt-2 text-center md:w-[400px] mx-auto">Y transformaron su cuerpo, su vida y su confianza PARA SIEMPRE.</p>
          <div className="flex flex-wrap justify-center my-8 gap-x-4 gap-y-8">
            <div className="w-[46%] md:w-[31.5%] grow-1">
              <h5 className="mb-2 text-center font-semibold h-[72px] flex items-end justify-center md:h-fit">"Lucas me dijo vas a cambiar, y si que cambie"</h5>
              <div className="w-full aspect-[9/16] rounded-sm">
                <iframe src="https://fast.wistia.net/embed/iframe/40s1gwoq0g?web_component=true&seo=true" title="copy_8F0BA151-762F-4A8C-B898-34088B52D4D6 Video" allow="autoplay; fullscreen" scrolling="no" name="wistia_embed" width="100%" height="100%"></iframe>
              </div>
            </div>
            <div className="w-[46%] md:w-[31.5%] grow-1">
              <h5 className="mb-2 text-center font-semibold h-[72px] flex items-end justify-center md:h-fit">"Me siento más saludable y mejor"</h5>
              <div className="w-full aspect-[9/16] rounded-sm">
                <iframe src="https://fast.wistia.net/embed/iframe/3qanwml9jv?web_component=true&seo=true" title="copy_DCA3B3E3-4DDC-45E0-8AC0-DE6316AFF48F Video" allow="autoplay; fullscreen" scrolling="no" name="wistia_embed" width="100%" height="100%"></iframe>
              </div>
            </div>
            <div className="w-[46%] md:w-[31.5%] grow-1">
              <h5 className="mb-2 text-center font-semibold h-[72px] flex items-end justify-center md:h-fit">"Necesitaba algo muy personalizado"</h5>
              <div className="w-full aspect-[9/16] rounded-sm">
                <iframe src="https://fast.wistia.net/embed/iframe/9dbxiilc57?web_component=true&seo=true" title="copy_DCA3B3E3-4DDC-45E0-8AC0-DE6316AFF48F Video" allow="autoplay; fullscreen" scrolling="no" name="wistia_embed" width="100%" height="100%"></iframe>
              </div>
            </div>
            <div className="w-[46%] md:w-[31.5%] grow-1">
              <h5 className="mb-2 text-center font-semibold h-[72px] flex items-end justify-center md:h-fit">"Antes del gimnasio tenia depresión"</h5>
              <div className="w-full aspect-[9/16] rounded-sm">
                <iframe src="https://fast.wistia.net/embed/iframe/ionap2jzlj?web_component=true&seo=true" title="copy_DCA3B3E3-4DDC-45E0-8AC0-DE6316AFF48F Video" allow="autoplay; fullscreen" scrolling="no" name="wistia_embed" width="100%" height="100%"></iframe>
              </div>
            </div>
            <div className="w-[46%] md:w-[31.5%] grow-1">
              <h5 className="mb-2 text-center font-semibold h-[72px] flex items-end justify-center md:h-fit">"Es una locura lo que te cambia el cuerpo y el animo"</h5>
              <div className="w-full aspect-[9/16] rounded-sm">              
                <iframe src="https://fast.wistia.net/embed/iframe/pbctigzdbj?web_component=true&seo=true" title="copy_DCA3B3E3-4DDC-45E0-8AC0-DE6316AFF48F Video" allow="autoplay; fullscreen" scrolling="no" name="wistia_embed" width="100%" height="100%"></iframe>
              </div>
            </div>
            {/* <div className="bg-orange-500 p-12">
              <h3 className="text-white font-semibold">¿Queres ser la proxima? Hace clic y agenda tu consulta gratuita ahora</h3>
            </div> */}
          </div>
        </div>
        <div>
          <a className="lr-btn mt-4 hover:-translate-y-2 transition-all" href="https://calendly.com/lucasrcoachperson/presentacion-del-programa-vsl">Reserva Tu Consulta Gratuita Ahora »</a>
          <p className="text-center text-[14px] text-white/80 mt-2">¡Últimas plazas disponibles! Reserva antes de que se acaben.</p>
        </div>
      </section>
      <section className="py-[60px] md:py-[80px] px-4 relative bg-[#FDFDFD]">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[28px] text-[#111] font-bold mb-4">Transforma tu cuerpo y tu vida en 12 semanas, sin dietas imposibles ni entrenamientos que odias</h2>
          <p className="text-[18px] text-[#111] whitespace-pre-wrap">
            <strong>Y no... No es magia.</strong>
            <br />
            <br />
            <strong>¿Estás cansada de probar de todo y no ver resultados duraderos?</strong>
            <br />
            Lo entiendo. Como mujer ocupada, lo último que necesitas es un plan más que te haga sentir frustrada y culpable por no cumplirlo.
            <br />
            <br />
            Por eso, he creado un método diseñado para ti. Un plan integral, flexible y adaptado a lo que tu cuerpo realmente necesita, teniendo en cuenta algo que pocos entrenadores consideran: tu ciclo hormonal.
            <br />
            <br />
            <strong>Este no es otro programa genérico. Es TU programa.</strong>
            <br />
            <br />
            Imagina esto:
            <br />
            - Comer lo que te gusta sin sentir que estás “pecando”.
            <br />
            - Ver resultados reales y consistentes mientras te sientes más enérgica que nunca.
            <br />
            - Saber que cada ejercicio y cada comida tiene un propósito, porque están hechos a medida para ti.
            <br />
            <br />
            ¿La mejor parte? No tendrás que sacrificar tu vida social, tus momentos en familia ni tu tiempo para ti. Porque este plan se adapta a tu ritmo, no al revés.
            <br />
            <br />
            <strong>¿Por qué este método funciona?</strong>
            <br />
            Porque no se trata solo de transformar tu cuerpo.Se trata de enseñarte a trabajar con tu cuerpo, no contra él. De construir hábitos sostenibles, sin presiones ni extremos. De acompañarte en un proceso que va mucho más allá de un número en la báscula.
            <br />
            <br />
            <strong>Ya lo han vivido otras mujeres como vos:</strong>
            <br />
            "Nunca pensé que podría disfrutar entrenar. Ahora me siento más fuerte, más segura y, lo más importante, más feliz." – Carla M.
            <br />
            "Lucas entendió mis necesidades desde el día 1. No es solo un entrenador, es un guía que realmente se preocupa por ti." – Mariana G.
            <br />
            <br />
            <strong>¿Estás lista para tomar el control de tu cuerpo y tu vida?</strong>
            <br />
            <br />
            <strong>El PRIMER PASO es sencillo:</strong>
            <br />
            Haz clic en el botón de abajo, agenda tu llamada y descubre cómo puedes empezar este viaje hoy mismo.
            <br />
            <br />
            No dejes pasar otro día sintiéndote frustrada o agotada. Tu mejor versión te está esperando. Y Lucas está aquí para ayudarte a alcanzarla.
          </p>
          <div className="mt-8">
            <a className="lr-btn mt-4 hover:-translate-y-2 transition-all" href="https://calendly.com/lucasrcoachperson/presentacion-del-programa-vsl">Reserva Tu Consulta Gratuita Ahora »</a>
            <p className="text-center text-[14px] text-[#111]/80 mt-2">¡Últimas plazas disponibles! Reserva antes de que se acaben.</p>
          </div>
        </div>
      </section>
      <section className="py-[60px] md:py-[80px] px-4 relative">
        <div className="max-w-[900px] mx-auto bg-[#111] border border-white/50 rounded-[8px] px-4 py-12 md:p-12">
          <div className="flex gap-2 flex-col items-center justify-center mb-4">
            <div className="flex gap-[4px]">
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              <svg className="size-[20px]" fill="#FFB700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
            </div>
            <p className="text-white/80 text-[14px] leading-[100%]">5.0 Estrellas de +50 reseñas</p>
          </div>
          <h3 className="text-center text-[28px] md:text-[32px] font-bold mb-4 capitalize leading-[130%]">No lo pienses más, ¡Tu mejor versión te está esperando!</h3>
          <p className="text-[18px] text-center text-white/80 mb-8">¿Sabías que el 80% de las mujeres sienten frustración porque no logran los resultados que desean con su cuerpo? No sigas postergando tu bienestar. Tu momento es ahora.</p>
          <div>
            <a className="lr-btn mt-4 hover:-translate-y-2 transition-all" href="https://calendly.com/lucasrcoachperson/presentacion-del-programa-vsl">Reserva Tu Consulta Gratuita Ahora »</a>
            <p className="text-center text-[14px] text-white/80 mt-2">¡Últimas plazas disponibles! Reserva antes de que se acaben.</p>
          </div>
        </div>
      </section>
      <Faqs />
      <p className="text-center py-8 px-4 text-white/80">© Lucas Reale 2025. Todos los derechos reservados.</p>
    </div>
  );
}
