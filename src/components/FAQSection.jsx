const questions = [
  {
    question: "¿Cómo consulto el precio?",
    answer:
      "Agregá los colores que te interesan a tu pedido y escribinos por WhatsApp. Te confirmamos el precio y la disponibilidad.",
  },
  {
    question: "¿En qué colores están disponibles?",
    answer:
      "Por ahora podés elegir entre negro y blanco. Consultanos por WhatsApp para conocer la disponibilidad actual.",
  },
  {
    question: "¿Cómo coordino la entrega?",
    answer:
      "La modalidad de entrega se coordina por WhatsApp al confirmar tu consulta.",
  },
];

export default function FAQSection() {
  return (
    <section className="faq-section section-pad" id="preguntas">
      <div className="page-shell faq-inner">
        <div className="faq-heading">
          <p className="eyebrow">ANTES DE EMPEZAR</p>
          <h2>¿Tenés dudas?</h2>
          <p>Acá van algunas respuestas. Si necesitás una mano, escribinos.</p>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>
                <span>{question}</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
