import { FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Linkedin, Instagram, Youtube, Facebook, Send, Mail } from "lucide-react";

export function getPlatformIcon(platform: string, size = 16) {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return <Linkedin size={size} />;
    case "instagram":
      return <Instagram size={size} />;
    case "twitter":
      return <FaXTwitter size={size} />;
    case "youtube":
      return <Youtube size={size} />;
    case "telegram":
      return <Send size={size} />;
    case "facebook":
      return <Facebook size={size} />;
    case "whatsapp":
      return <FaWhatsapp size={size} />;
    case "tiktok":
      return <FaTiktok size={size} />;
    case "email":
      return <Mail size={size} />;
    default:
      return null;
  }
}
