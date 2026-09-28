const SupportTools = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="support_tools_section pt_pb_3">
      <div className="container">
        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-md-6" key={item.id ?? index}>
              <div className="support_tool_card">
                {item.icon && (
                  <div className="support_tool_icon mb-2">
                    <img src={item.icon} alt={item.iconAlt || item.title} />
                  </div>
                )}

                <h3 className="mb-4">{item.title}</h3>
                <p className="mb-3">{item.description}</p>

                {item.buttonText && item.buttonLink && (
                  <a
                    href={item.buttonLink}
                    className="button theme_btn mt-auto"
                    target={item.newTab === false ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {item.buttonText}
                    <img src="/images/btn-arrow.svg" alt="button arrow" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTools;