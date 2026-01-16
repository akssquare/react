import React from 'react'
import { Title } from './Title';
import { services } from '../Data';

const Services = () => {
    return (
         <section class="section services" id="services">
        {/* <div class="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div> */}
        <Title title="our" subtitle="services" />

        <div class="section-center services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} class="service">
                <span class="service-icon">
                  <i class={icon}></i>
                </span>
                <div class="service-info">
                  <h4 class="service-title">{title}</h4>
                  <p class="service-text">{text}</p>
                </div>
              </article>
            );
          })}
          {/* <article class="service">
            <span class="service-icon">
              <i class="fas fa-wallet fa-fw"></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">saving money</h4>
              <p class="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article class="service">
            <span class="service-icon">
              <i class="fas fa-tree fa-fw"></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">endless hiking</h4>
              <p class="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article class="service">
            <span class="service-icon">
              <i class="fas fa-socks fa-fw"></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">amazing comfort</h4>
              <p class="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article> */}
        </div>
      </section>
    )
}
export default Services;