import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Piscinazo: "Piscinazo",
      Servicios: "Services",
      Proyectos: "Projects",
      Testimonios: "Testimonials",
      "Cotiza con nosotros!": "Get a Quote with Us!",
      "Excellent Service": "Excellent Service",
      "Distinguished for our exceptional pool construction service, we offer a unique experience that exceeds your expectations.":
        "Distinguished for our exceptional pool construction service, we offer a unique experience that exceeds your expectations.",
      "Qualified Engineers": "Qualified Engineers",
      "We have a team of highly qualified engineers dedicated to creating safe, durable, and precisely designed pools.":
        "We have a team of highly qualified engineers dedicated to creating safe, durable, and precisely designed pools.",
      "Modern Designs": "Modern Designs",
      "We pride ourselves on offering modern designs that blend contemporary aesthetics with functionality, creating unique and attractive pools.":
        "We pride ourselves on offering modern designs that blend contemporary aesthetics with functionality, creating unique and attractive pools.",
      "Our Services": "Our Services",
      "Custom Design": "Custom Design",
      "Imagine your home with a pool designed to fit your style, reflecting your lifestyle perfectly. In our pool construction company, we specialize in turning your ideas into a refreshing and unique reality.":
        "Imagine your home with a pool designed to fit your style, reflecting your lifestyle perfectly. In our pool construction company, we specialize in turning your ideas into a refreshing and unique reality.",
      "Pool Construction": "Pool Construction",
      "Turn your space into an oasis with our expert pool construction. Our team of qualified engineers ensures durability and safety in every project, so you can enjoy unforgettable moments.":
        "Turn your space into an oasis with our expert pool construction. Our team of qualified engineers ensures durability and safety in every project, so you can enjoy unforgettable moments.",
      "Pool Remodeling": "Pool Remodeling",
      "Transform your existing pool into a modern and functional gem. From aesthetic updates to technological enhancements, we make your pool spectacularly adapt to your current needs.":
        "Transform your existing pool into a modern and functional gem. From aesthetic updates to technological enhancements, we make your pool spectacularly adapt to your current needs.",
      "Ants building": "Ants building",
      "A Growing Company": "A Growing Company",
      "Our pool construction company is constantly growing and committed to providing the best services to our clients.":
        "Our pool construction company is constantly growing and committed to providing the best services to our clients.",
      "Carefully Designed Components": "Carefully Designed Components",
      "Incredible Page Examples": "Incredible Page Examples",
      "Dynamic Components": "Dynamic Components",
      "Our Completed Projects": "Our Completed Projects",
      "What Our Clients Say": "What Our Clients Say",
      "Build Something Extraordinary": "Build Something Extraordinary",
      "Excellent Services": "Excellent Services",
      "Expand Your Market": "Expand Your Market",
      "Launch Time": "Launch Time",
      "Some quick examples to build the card title and make up the bulk of the card's content.":
        "Some quick examples to build the card title and make up the bulk of the card's content.",
    },
  },
  es: {
    translation: {
      Piscinazo: "Piscinazo",
      Servicios: "Servicios",
      Proyectos: "Proyectos",
      Testimonios: "Testimonios",
      "Cotiza con nosotros!": "¡Cotiza con nosotros!",
      "Excellent Service": "Excelente Servicio",
      "Distinguished for our exceptional pool construction service, we offer a unique experience that exceeds your expectations.":
        "Destacados por nuestro excepcional servicio de construcción de piscinas, ofrecemos una experiencia única que supera tus expectativas.",
      "Qualified Engineers": "Ingenieros Calificados",
      "We have a team of highly qualified engineers dedicated to creating safe, durable, and precisely designed pools.":
        "Contamos con un equipo de ingenieros altamente calificados que se dedican a crear piscinas seguras, duraderas y diseñadas con precisión.",
      "Modern Designs": "Diseños Modernos",
      "We pride ourselves on offering modern designs that blend contemporary aesthetics with functionality, creating unique and attractive pools.":
        "Nos enorgullece ofrecer diseños modernos que combinan la estética contemporánea con la funcionalidad, creando piscinas únicas y atractivas.",
      "Our Services": "Nuestros Servicios",
      "Custom Design": "Diseño Personalizado",
      "Imagine your home with a pool designed to fit your style, reflecting your lifestyle perfectly. In our pool construction company, we specialize in turning your ideas into a refreshing and unique reality.":
        "Imagina tu hogar con una piscina diseñada a medida, reflejando tu estilo y adaptándose perfectamente a tu vida. En nuestra empresa constructora de piscinas, nos especializamos en convertir tus ideas en una realidad refrescante y única.",
      "Pool Construction": "Construcción de Piscinas",
      "Turn your space into an oasis with our expert pool construction. Our team of qualified engineers ensures durability and safety in every project, so you can enjoy unforgettable moments.":
        "Convierte tu espacio en un oasis con nuestra experta construcción de piscinas. Nuestro equipo de ingenieros calificados garantiza durabilidad y seguridad en cada proyecto, para que disfrutes de momentos inolvidables.",
      "Pool Remodeling": "Remodelación de Piscinas",
      "Transform your existing pool into a modern and functional gem. From aesthetic updates to technological enhancements, we make your pool spectacularly adapt to your current needs.":
        "Transformamos tu piscina existente en una joya moderna y funcional. Desde actualizaciones estéticas hasta mejoras tecnológicas, hacemos que tu piscina se adapte a tus necesidades actuales de manera espectacular.",
      "Ants building": "Hormigas construyendo",
      "A Growing Company": "Una empresa en crecimiento",
      "Our pool construction company is constantly growing and committed to providing the best services to our clients.":
        "Nuestra empresa de construcción de piscinas está en constante crecimiento y comprometida con brindar los mejores servicios a nuestros clientes.",
      "Carefully Designed Components": "Componentes cuidadosamente diseñados",
      "Incredible Page Examples": "Increíbles ejemplos de páginas",
      "Dynamic Components": "Componentes dinámicos",
      "Our Completed Projects": "Nuestros proyectos Realizados",
      "What Our Clients Say": "Lo que dicen nuestros clientes",
      "Build Something Extraordinary": "Construye algo extraordinario",
      "Excellent Services": "Servicios Excelentes",
      "Expand Your Market": "Expande tu mercado",
      "Launch Time": "Tiempo de lanzamiento",
      "Some quick examples to build the card title and make up the bulk of the card's content.":
        "Algunos ejemplos rápidos para construir el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta.",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma predeterminado
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18next;
