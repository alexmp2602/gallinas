/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2gI8JrIYLGZ
 */
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-800">
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Gallinas Ponedoras
          </h1>
          <nav className="flex space-x-4">
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              href="#acerca"
            >
              Acerca de Nosotros
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              href="#contacto"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <section className="w-full h-[50vh] md:h-[70vh]" id="inicio">
  <div 
    className="relative w-full h-full"
    style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/img/03.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h2 className="text-6xl font-bold">Bienvenidos</h2>
      <p className="mt-4 text-2xl">
        Criamos las mejores gallinas ponedoras para su hogar o negocio.
      </p>
    </div>
  </div>
</section>

      <section
        className="w-full max-w-2xl mx-auto mt-12 px-4 sm:px-6 lg:px-8"
        id="acerca"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Acerca de Nosotros
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Nuestras gallinas ponedoras de 16 semanas son de la más alta calidad,
          criadas en condiciones óptimas para garantizar su salud y
          productividad. Son capaces de producir hasta 7 huevos por semana,
          proporcionando un suministro constante de huevos frescos para su hogar
          o negocio.
        </p>
      </section>
      <section
        className="w-full max-w-2xl mx-auto mt-12 px-4 sm:px-6 lg:px-8"
        id="producto"
      >
        <h2 className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 pb-4">
          Gallinas Ponedoras de 16 Semanas
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Image
            alt="Gallina Ponedora"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="500"
            src="/img/01.jpg"
            width="500"
          />
          <Image
            alt="Gallina Ponedora"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="500"
            src="/img/02.jpg"
            width="500"
          />
        </div>
        <div className="mt-8 space-y-4">
          <Link
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            href="https://api.whatsapp.com/send?phone=+2324587377&text=%C2%A1Hola!%20%F0%9F%90%94%E2%9C%A8%20Estoy%20interesado/a%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20gallinas%20ponedoras.%20%C2%BFPuedes%20proporcionarme%20detalles%20sobre%20las%20gallinas%20de%20l%C3%ADnea%20Hy-Line%20Brown,%20precios%20y%20c%C3%B3mo%20realizar%20una%20compra?%20%C2%A1Gracias!%20%F0%9F%93%B2%F0%9F%A5%9A"
          >
            Consultas y Compras
          </Link>
        </div>
      </section>
      <footer
        className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 shadow-md mt-12"
        id="contacto"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Contacto
          </h2>
          <Link
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            href="https://api.whatsapp.com/send?phone=+2324587377&text=%C2%A1Hola!%20%F0%9F%90%94%E2%9C%A8%20Estoy%20interesado/a%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20gallinas%20ponedoras.%20%C2%BFPuedes%20proporcionarme%20detalles%20sobre%20las%20gallinas%20de%20l%C3%ADnea%20Hy-Line%20Brown,%20precios%20y%20c%C3%B3mo%20realizar%20una%20compra?%20%C2%A1Gracias!%20%F0%9F%93%B2%F0%9F%A5%9A"
          >
            WhatsApp
          </Link>
        </div>
      </footer>
    </main>
  );
}
