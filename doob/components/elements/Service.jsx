// components/elements/Service.jsx
import { services12 } from '../../data/service';


// Fallback si viene undefined
const services12 = importedServices12 || [];

export default function Service() {
  return (
    <div className="services-wrapper">
      {services12.length > 0 ? (
        services12.map((service, index) => (
          <div key={index} className="service-card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))
      ) : (
        <p>No hay servicios configurados.</p>
      )}
    </div>
  );
}
