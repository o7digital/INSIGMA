export default function manifest() {
  return {
    name: 'TRANSTEK - Sistema Integral de Seguridad Corporativa',
    short_name: 'TRANSTEK',
    description: 'Consultoría especializada en inteligencia estratégica multidimensional',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1A4D7C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
