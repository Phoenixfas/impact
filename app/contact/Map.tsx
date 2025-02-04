import React from "react";

export default function Map() {
  return (
    <div className="w-full h-[500px] relative mt-40">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7638001259825!2d55.248441475206114!3d25.042088677811147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6e3ef9b8f83f%3A0x82937f017e54729f!2sSmart%20City!5e0!3m2!1sen!2set!4v1738675175606!5m2!1sen!2set"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
