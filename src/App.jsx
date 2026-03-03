import React from "react";

function App() {
  const descargarPDF = () => {
    document.title = "Hoja de Vida - Jin";
    window.print();
  };

  return (
    <div className="container">
      <header className="header">
        <div className="profile">
          <img
            src="../img/fotoperfil.jpeg"
            alt="Foto de perfil"
            className="profile-img"
          />
          <div>
            <h1>Yeison Stiven Acevedo Loaiza</h1>
            <h2>Desarrollador Web</h2>
            <p>Email: yeison.acevedo2708@gmail.com</p>
            <p>Tel: +57 321-811-5266</p>
            <p>
              Dirección: Calle 12b #10-68 Calle larga Chipre, Manizales,
              Colombia
            </p>
          </div>
        </div>
      </header>

      <section>
        <h3>Perfil Profesional</h3>
        <p>
          TECNÓLOGO EN ANÁLISIS Y PROGRAMACIÓN DE SOFTWARE, CON FORMACIÓN EN EL
          DESARROLLO DE APLICACIONES INFORMÁTICAS. TENGO CONOCIMIENTOS EN
          ANÁLISIS DE REQUERIMIENTOS, DESARROLLO WEB, BASES DE DATOS. ME
          CARACTERIZO POR MI DISPOSICIÓN PARA APRENDER, TRABAJAR EN EQUIPO Y
          APORTAR SOLUCIONES EFICIENTES, APOYÁNDOME EN LOS CONOCIMIENTOS Y
          CAPACITACIONES ADQUIRIDAS DURANTE MI FORMACIÓN.
        </p>
      </section>

      <section>
        <h3>Habilidades</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <p>HTML</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <p>CSS</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
            <p>PHP</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <p>React</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <p>MySQL</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <p>Figma</p>
          </div>
        </div>
      </section>

      <section>
        <h3>Experiencia</h3>
        <p>
          <strong>Proyecto Personal y Educativo:</strong> MERCASENA LOS CEREZOS
          fue una aplicación web tipo e-commerce desarrollada para el punto de
          venta, presentada en el Centro para la Formación Cafetera (CFC).
          Permitía gestionar productos por categorías, controlar cantidades,
          agregar al carrito, calcular totales automáticamente y su apartado de
          administraor. Fue construida con HTML, CSS, JavaScript, PHP para el
          BACKEND y React, aplicando buenas prácticas de desarrollo y diseño
          responsivo.
        </p>

        <h3>Experiencia Laboral</h3>

        <p>
          <strong>S.G.S. COLOMBIA HOLDING S.A.S</strong> – Programador de Software
          <br />
          <em>Duración: 6 meses (Contrato de prácticas)</em>
        </p>

        <p>
          Las prácticas fueron desarrolladas mediante el proyecto
          <strong> "MERCASENA LOS CEREZOS"</strong>, una aplicación web tipo
          e-commerce implementada para el punto de venta del Centro para la
          Formación Cafetera (CFC), debido a la delegación de contratos
          realizada mediante acuerdos institucionales con el SENA CFC.
        </p>

        <ul>
          <li>
            Diseñar aplicaciones informáticas de acuerdo con procedimientos y
            requisitos técnicos.
          </li>
          <li>
            Desarrollar aplicaciones informáticas conforme al diseño y
            metodologías establecidas.
          </li>
          <li>
            Evaluar requisitos de software según metodologías de análisis y
            estándares técnicos.
          </li>
          <li>
            Integrar componentes digitales utilizando herramientas de
            desarrollo.
          </li>
          <li>
            Implementar aplicaciones informáticas conforme a requisitos
            operativos.
          </li>
          <li>
            Construir soluciones tecnológicas aplicando buenas prácticas de
            desarrollo.
          </li>
        </ul>
      </section>

      <section>
        <h3>Educación</h3>

        <div class="edu-item">
          <p>
            <strong>Tecnólogo en Análisis y Desarrollo de Software</strong>
          </p>
        </div>

        <div class="edu-item">
          <p>
            <strong>Curso:</strong> Mantenimiento Preventivo de Computadores de
            Escritorio y Portátiles
          </p>
        </div>

        <div class="edu-item">
          <p>
            <strong>Curso:</strong> Diseño de Redes Inalámbricas
          </p>
        </div>
      </section>

      <button className="download-btn" onClick={descargarPDF}>
        Descargar Hoja de Vida
      </button>
    </div>
  );
}

export default App;
