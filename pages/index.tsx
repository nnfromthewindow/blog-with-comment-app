import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="overflow-y-auto h-[70vh]">
        <div className="space-y-6 bg-gray-100 bg-opacity-50 rounded-md py-10 ">
          <h1 className="text-2xl font-bold">
¡Hola aventureros! Soy Nicolás Nuccelli, un apasionado desarrollador fullstack que ha encontrado su hogar en Sierra de la Ventana. Este blog está dedicado a todas las emocionantes aventuras que se pueden experimentar en esta impresionante comarca serrana.
          </h1>
          <p>
          Si tienes alguna aventura en mente que crees que debería estar en este blog para que más personas puedan descubrir los maravillosos lugares que tenemos para ofrecer, ¡no dudes en escribirme a <a href="mailto:nuccelli87@gmail.com">nuccelli87@gmail.com</a>
          </p>

          <p>¡Ven y sumérgete en la naturaleza y la tranquilidad de las sierras!
          </p>
                                        
        </div>
        </div>
      
     
      </Container>

      
    </>
  );
}

export default HomePage;
