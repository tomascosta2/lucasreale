'use client'
import { useState } from "react";

export default function Faqs() {

	const [open, setOpen] = useState<string | null>(null);
	
	const Preguntas = [
		{
		  pregunta: "¿Y si no tengo tiempo para seguir un programa como este?",
		  respuesta: "Este plan está diseñado específicamente para mujeres ocupadas. No necesitas pasar horas en el gimnasio ni cocinar comidas complicadas. Te daré estrategias sencillas y efectivas que se adaptan a tu ritmo de vida."
		},
		{
		  pregunta: "¿Qué pasa si no puedo seguir el plan al pie de la letra?",
		  respuesta: "¡No te preocupes! El programa es flexible y se ajusta a tus necesidades. No se trata de ser perfecta, sino de avanzar a tu propio ritmo. Cada paso cuenta, y estaré ahí para apoyarte en todo momento."
		},
		{
		  pregunta: "¿Funciona incluso si ya he probado otros programas y no me han dado resultados?",
		  respuesta: "Sí, porque este no es un programa genérico. Está adaptado a tu cuerpo, tus metas y tu ciclo hormonal. Muchas mujeres que han probado de todo finalmente han encontrado resultados con este enfoque personalizado."
		},
		{
		  pregunta: "¿Qué pasa si tengo compromisos sociales o viajes durante las 12 semanas?",
		  respuesta: "Este plan es lo suficientemente flexible para adaptarse a cualquier situación. No tendrás que renunciar a salir con amigos o disfrutar tus viajes. Te enseñaré cómo mantener el equilibrio en cualquier circunstancia."
		},
		{
		  pregunta: "¿Es muy caro?",
		  respuesta: "Piensa en esto como una inversión en ti misma y en tu bienestar a largo plazo. Los resultados que obtendrás no solo transformarán tu cuerpo, sino también tu calidad de vida. Además, los cambios que logres serán sostenibles, lo que significa que no necesitarás gastar en programas adicionales que no funcionan."
		},
		{
		  pregunta: "¿Y si no estoy segura de poder comprometerme durante 12 semanas?",
		  respuesta: "El compromiso no se trata de hacer todo perfecto, sino de dar el primer paso. Si sigues esperando el momento ideal, podrías quedarte en el mismo lugar. Yo estaré aquí para ayudarte a superar cualquier obstáculo que surja."
		},
		{
		  pregunta: "¿Qué sucede si no me siento cómoda con el entrenamiento o la dieta?",
		  respuesta: "Todo está adaptado a ti. Si algo no te gusta o no se ajusta a tus necesidades, lo cambiamos. La idea es que disfrutes el proceso y te sientas cómoda con cada parte del programa."
		},
		{
		  pregunta: "¿Cómo sé que realmente funcionará para mí?",
		  respuesta: "Mi método está basado en ciencia y experiencia. Además, cientos de mujeres con diferentes estilos de vida y metas han visto resultados reales. La única forma de saber si funciona para ti es probarlo."
		},
		{
		  pregunta: "¿Y si no tengo experiencia entrenando o comiendo saludable?",
		  respuesta: "No necesitas tener experiencia. Te guiaré paso a paso desde lo más básico hasta que te sientas segura y confiada en cada parte del proceso."
		},
		{
		  pregunta: "¿Qué pasa si no estoy satisfecha con los resultados?",
		  respuesta: "Estoy tan seguro de mi método que ofrezco una garantía de satisfacción. Si sigues el programa y no ves resultados, trabajaremos juntos para ajustar lo que sea necesario y asegurarnos de que alcances tus metas."
		}
	  ];
	  

	const toggle = (pregunta: string) => {
		if (open === pregunta) {
			setOpen(null)
		} else {
			setOpen(pregunta)
		}
	}

	return (
		<section id="faqs" className="relative py-[60px] lg:py-[100px] px-4">
			<div className="tc-container">
				<h2 className="text-[34px] font-bold mb-8 text-center">Preguntas Frecuentes</h2>
				<div className="max-w-[800px] mx-auto">
					{
						Preguntas.map((item) => (
							<div 
								key={item.pregunta}
								onClick={() => {toggle(item.pregunta)}}
								className="w-full cursor-pointer bg-primary p-[20px] rounded-[6px] border border-white/50 mb-[10px]"
							>
								<h3 className="--sora text-[16px] md:text-[18px] text-white lg:text-[20px] flex justify-between items-center">{item.pregunta}<svg className={`${open === item.pregunta ? 'rotate-45' : ''} min-w-[20px] size-[20px] transition-all duration-300`} fill="#FFF" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></h3>
								<div className={`normal-case overflow-hidden duration-500 transition-all ${open === item.pregunta  ? 'max-h-[2000px]' : 'max-h-0'}`}>
									<p className="text-white/80 text-[16px] pt-[10px]">{item.respuesta}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}