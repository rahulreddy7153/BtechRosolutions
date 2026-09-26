import { IconWhatsapp } from './icons'

const PHONE = '917976574641'
const MESSAGE = "Hi BTech RO Solutions, I'd like to enquire about RO service."

export default function WhatsappButton() {
  return (
    <a
      className="whatsapp-fab"
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-fab-ping" aria-hidden="true" />
      <IconWhatsapp />
    </a>
  )
}
