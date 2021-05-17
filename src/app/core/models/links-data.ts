import { LinkContactModel } from "./link-contact.model";
import { LinkSocialMediaModel } from "./link-social-media.model";

export let linksSocialMedia : LinkSocialMediaModel[] = [
  {
    link: 'https://www.youtube.com/channel/UCTdv3TpS8paTW5bi2smpcWA',
    icon: '<i class="uil uil-youtube"></i>'
  },
  {
    link: 'https://github.com/javieralbarracin',
    icon: '<i class="uil uil-github-alt"></i>'
  },
  {
    link: 'mailto:javieralbarracin881@yahoo.com.ar',
    icon: '<i class="uil uil-envelope"></i>'
  },
];

export let linksContact : LinkContactModel[] = [
  {
    src: 'https://www.youtube.com/channel/UCTdv3TpS8paTW5bi2smpcWA',
    name: 'Youtube'
  },
  {
    src: 'https://github.com/javieralbarracin',
    name: 'Github'
  },
  {
    src: 'mailto:javieralbarracin881@yahoo.com.ar',
    name: 'Contacto'
  }
];