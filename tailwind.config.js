/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        distributionCard: '#302727',
        subtitle: '#756969',
        cardback: '#302727',
        infoBg: '#272222',
        line: '#473D3D'
      },
      backgroundImage: {
        first: "url('@/assets/img/home__page/first.png')",
        second: "url('@/assets/img/home__page/second.png')",
        third: "url('@/assets/img/home__page/third.png')",
        settingBack: "url('@/assets/img/setting/settingback.svg')",
        infoBack: 'url(@/assets/img/moreInfo/infoBack.png)',
        'btn-gradient': 'linear-gradient(90deg, #FFFFFF 0%, #E1E1E1 100%)'
      },
      fontFamily: {
        inter: ['inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
