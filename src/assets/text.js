export default {
  homePage: {
    title: 'Распределение устройств',
    btn: 'Новая группа',
    DistributionCardInfo: {
      cards: [
        {
          title: 'Гостиница',
          description: 'Работает 3 устрайства',
          status: 'active',
          imgBg: 'bg-first',
          id: 1
        },
        {
          title: 'Спальня',
          description: 'Работает 6 устрайств',
          status: 'problem',
          imgBg: 'bg-second',
          id: undefined
        },
        {
          title: 'Кухня',
          description: 'Устройства отключены',
          status: 'notActive',
          imgBg: 'bg-third',
          iв: undefined
        }
      ],
      statusMessage: {
        active: 'Стабильно',
        problem: 'Проблема',
        notActive: 'Сбой!'
      }
    }
  },
  devicePage: {
    title: 'Ваш умный дом',
    subtitle: 'Добавлено 3 устройства',
    btn: 'Добавить устройство',
    deviceCardInfo: {
      cards: [
        {
          title: 'BORK V830',
          subtitle: 'Робот пылесос',
          status: true,
          image: new URL('@/assets/img/devices/borkV830.png', import.meta.url).href
        },
        {
          title: 'BORK H503',
          subtitle: 'Увлажнитель',
          status: false,
          image: new URL('@/assets/img/devices/borkH503.png', import.meta.url).href
        },
        {
          title: 'BORK O511',
          subtitle: 'Обогреватель',
          status: false,
          image: new URL('@/assets/img/devices/borkO511.png', import.meta.url).href
        },
        {
          title: '',
          subtitle: '',
          status: false,
          image: new URL('', import.meta.url).href
        }
      ]
    }
  },
  catalogPage: {
    title: 'Каталог Сценариев',
    scenarioInfo: {
      cards: [
        {
          title: 'Я дома',
          subtitle: 'Ваши устройства всегда вам рады!',
          image: new URL('@/assets/img/catalog/home.svg', import.meta.url).href
        },
        {
          title: 'Пора убраться',
          subtitle: 'Пусть время работает на вас',
          image: new URL('@/assets/img/catalog/clear.svg', import.meta.url).href
        },
        {
          title: 'Поддержание климата',
          subtitle: 'Свежесть окутает ваш дом',
          image: new URL('@/assets/img/catalog/climat.svg', import.meta.url).href
        }
      ]
    }
  },
  settingPage: {
    title: 'Настройки',
    subtitle: 'Выберите цвет для вашего дома',
    avatarTitle: 'Михаил',
    settingInfo: {
      cards: [
        {
          title: 'Персональные сценарии',
          subtitle: 'Настройте сценарии для семьи',
          image: new URL('@/assets/img/setting/personal.svg', import.meta.url).href
        },
        {
          title: 'Сменить тему',
          subtitle: 'Измените цветовую палитру',
          image: new URL('@/assets/img/setting/theme.svg', import.meta.url).href
        },
        {
          title: 'Покупки и подписки',
          subtitle: 'подписка на устройства и оплата',
          image: new URL('@/assets/img/setting/subscription.svg', import.meta.url).href
        },
        {
          title: 'Настройка ассистента',
          subtitle: 'Контроль и отключение',
          image: new URL('@/assets/img/setting/assistant.svg', import.meta.url).href
        },
        {
          title: 'Помощь',
          subtitle: 'Чат с поддержкой и обратная связь',
          image: new URL('@/assets/img/setting/help.svg', import.meta.url).href
        }
      ]
    }
  },
  moreInfo: {
    title: 'Гостиная',
    scenarioName: 'Вечерний сценарий',
    slider: [
      {
        title: 'Основной свет'
      },
      { title: 'Боковой свет' }
    ],
    cardInfo: {
      cards: [
        {
          title: 'Влажность Воздуха',
          percent: 46,
          image: new URL('@/assets/img/Base__elements/icons/cards/Droplet.svg', import.meta.url)
            .href
        },
        {
          title: 'Уровень Частиц',
          percent: 14,
          image: new URL('@/assets/img/Base__elements/icons/cards/Cloud.svg', import.meta.url).href
        }
      ],
      card: {
        title: 'Roborock S8 Pro Ultra',
        image: new URL('@/assets/img/Base__elements/icons/Codepen.svg', import.meta.url).href
      }
    }
  }
}
