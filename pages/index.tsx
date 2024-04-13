import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hola! Mi nombre es Nicolás Nuccelli, soy desarrollador fullstack, vivo en Sierra de la Ventana y este es un blog dedicado a las aventuras que se pueden realizar en la comarca serrana.
          </h1>
          <p>
            Si te gustaria agregar alguna aventura a este blog para que mas gente conozca los distintos lugares para visitar escribime a: <a href="mailto:nuccelli87@gmail.com">nuccelli87@gmail.com</a> 
          </p>

          <p>Veni a disfrutar de la naturaleza y la paz de las sierras.</p>
        </div>
      </Container>

      
    </>
  );
}

export default HomePage;
