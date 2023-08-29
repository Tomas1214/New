import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main class="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eaque est quibusdam voluptatum aut voluptate quas porro culpa nobis inventore! Blanditiis neque voluptatum dolorem ullam modi doloribus aliquam eum molestiae?</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;