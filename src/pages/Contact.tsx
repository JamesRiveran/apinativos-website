import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BusinessLayout from "../layouts/BusinessLayout";
import Hero from "../components/common/Hero";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { PhoneInput } from "../components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input"; 
import { associationData } from "../data/associationData";
import { getBusinessById, businessesData } from "../data/businessesData";
import Map from "../components/common/Map";
import placeholder from "../assets/images/placeholder.jpg";

const Contact: React.FC = () => {
  const { businessId } = useParams<{ businessId?: string }>();
  const business = businessId ? getBusinessById(businessId) : null;

  const contactInfo = business?.contactInfo || associationData.contactInfo;
  const socialMedia = business?.socialMedia || associationData.socialMedia;
  const entityName = business?.name || associationData.name;

  const getRandomBusinessImage = () => {
    if (business && business.images && business.images.length > 0) {
      const randomIndex = Math.floor(Math.random() * business.images.length);
      return business.images[randomIndex].url;
    }
    return placeholder;
  };

  const backgroundImage = business ? getRandomBusinessImage() : placeholder;
  const Layout = business ? BusinessLayout : MainLayout;

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const FORM_ENDPOINT = process.env.REACT_APP_CONTACT_FORM_ENDPOINT;

  const validate = () => {
    if (!name.trim()) {
      setErrorMsg("Por favor ingresa tu nombre.");
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg("Por favor ingresa un correo electrónico válido.");
      return false;
    }
    if (!phone || !isValidPhoneNumber(phone)) {
      setErrorMsg("Por favor ingresa un teléfono válido (incluye el código de país).");
      return false;
    }
    if (!message.trim()) {
      setErrorMsg("Por favor ingresa un mensaje.");
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus("error");
      setErrorMsg("El endpoint del formulario no está configurado.");
      return;
    }

    setSubmitting(true);
    setStatus("idle");

    try {
      const payload = new URLSearchParams();
      payload.append("name", name);
      payload.append("email", email);
  payload.append("phone", phone);
      payload.append("message", message);
      if (business) {
        payload.append("businessId", business.id);
        payload.append("businessName", business.name);
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Error enviando el formulario");
      }

      setStatus("success");
      setName("");
      setEmail("");
  setPhone("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Hubo un error al enviar el mensaje.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Hero
        title={`Contáctenos - ${entityName}`}
        subtitle="Estamos para servirle"
        backgroundImage={backgroundImage}
        height="medium"
      />

      <section className="bg-white">
        <div className="container max-w-2xl mx-auto flex flex-col justify-center min-h-[70vh] py-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Información de Contacto</h2>

          <div className="mb-12 space-y-2 text-muted-foreground text-center">
            <p><strong>Dirección:</strong> {contactInfo.address}</p>
            <p><strong>Teléfono:</strong> {contactInfo.phone}</p>
            <p><strong>Email:</strong> {contactInfo.email}</p>
          </div>

          <div className="mb-8">
            {business ? (
              <Map
                markers={[
                  business.location
                    ? { lat: business.location.lat, lng: business.location.lng, title: business.name, description: business.contactInfo.address }
                    : { lat: 9.6333, lng: -83.5167, title: business.name, description: business.contactInfo.address }
                ]}
                single
                height="320px"
              />
            ) : (
              <Map
                markers={businessesData.map(b => ({
                  lat: b.location?.lat || 9.6333,
                  lng: b.location?.lng || -83.5167,
                  title: b.name,
                  description: b.contactInfo.address
                }))}
                height="420px"
                zoom={10}
                fitBounds={false}
              />
            )}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre completo" aria-required />
            </div>

            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ejemplo@correo.com" aria-required />
            </div>

            {/* ⬇️ Teléfono con selector de país */}
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <PhoneInput
                id="phone"
                value={phone}
                onChange={(v) => setPhone((v as string) || "")}
                placeholder="Incluye tu número con código de país"
                defaultCountry="CR"        
                international              
                aria-required
              />
              <p className="mt-1 text-xs text-muted-foreground">Ej: +506 8888 8888 • Puedes elegir cualquier país.</p>
            </div>

            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                aria-required
              />
            </div>

            <div>
              <Button type="submit" className="w-full text-white" disabled={submitting} aria-disabled={submitting}>
                {submitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </div>

            {status === "success" && (
              <div role="status" className="text-green-600 text-center mt-4">Mensaje enviado correctamente. Te contactaremos pronto.</div>
            )}

            {status === "error" && (
              <div role="alert" className="text-red-600 text-center mt-4">{errorMsg || "Error al enviar el mensaje."}</div>
            )}
          </form>

          {socialMedia.whatsapp && (
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <a
                  href={`https://wa.me/${socialMedia.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
