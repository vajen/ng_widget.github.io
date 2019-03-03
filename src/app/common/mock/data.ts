import { Observable, of } from "rxjs";

export interface IHotels {
  img: string;
  country: string;
  address: string;
  phone: number;
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number;
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
  type: string;
}

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocial {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export const data = [
  {
    img:
      "https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2015/02/SaoJorgeGreen.jpg",
    country: "Azores islands",
    address: "Sed perspiciatis\nEt harum quidem",
    phone: 1285111685,
    weather: {
      title: "Good weather!",
      icon: "",
      water: 20,
      temperature: 25
    },
    social_info: {
      title: "Ponta Del Gada",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0DGOmQyMxZF5eZY0ltiZCsN7ObwjySpI2Ej06QnPNxTQMML0",
      followers: 2850,
      following: 675
    },
    type: "Apartment"
  },
  {
    img:
      "https://cdn.traveltalktours.com/wp-content/uploads/2017/01/Highlights-of-Spain-Portugal-thumb-360x225.jpg",
    country: "Spain",
    address: "Madrid, Principe Pio",
    phone: 1285000685,
    weather: {
      title: "Et harum quidem",
      icon:
        "http://www.myiconfinder.com/uploads/iconsets/256-256-5f39e3ad56ab078d4ab55e4ad54db113-cloud.png",
      water: 21,
      temperature: 30
    },
    social_info: {
      title: "Madrid",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5Y9_pSbyQmT8YKANo2xlVdQdc4dVG6QSvnycsrOcwzJqP7jz",
      followers: 2110,
      following: 105
    },
    type: "hotel"
  },
  {
    img:
      "https://www.thekharkivtimes.com/wp-content/uploads/2016/09/93345.jpg",
    country: "Russia",
    address: "Санкт-Петербург\nНевский пр.",
    phone: 1285968685,
    weather: {
      title: "Облачно!",
      icon: "/assets/images/cloudy.png",
      water: 10,
      temperature: 18
    },
    social_info: {
      title: "Санкт-Петербург",
      img: "http://saint-petersburg.ru/i/msg/0348/0852/ph32.jpg",
      followers: 5850,
      following: 5750
    },
    type: "hotel"
  },
  {
    img:
      "https://www.fly4free.com/wp-content/uploads/2016/12/FuerteventuraCanary-Islands.png",
    country: "Canary islands",
    address: "Sed perspiciatis\nEt harum quidem",
    phone: 1285968685,
    weather: {
      title: "Normal",
      icon: "/assets/images/cloudy.png",
      water: 22,
      temperature: 27
    },
    social_info: {
      title: "Tenerife",
      img:
        "https://tripway.com/blog/wp-content/uploads/2018/07/es-calo-des-moro-beach.jpg",
      followers: 500,
      following: 250
    },
    type: "villa"
  },
  {
    img:
      "https://cdn.traveltalktours.com/wp-content/uploads/2017/01/best-thailand-cambodia-thumb-360x225.jpg",
    country: "Cambodia",
    address: "Phnom Penh\nParadise Villas",
    phone: 1285968685,
    weather: {
      title: "Normal",
      icon: "/assets/images/cloudy.png",
      water: 21,
      temperature: 31
    },
    social_info: {
      title: "phnom penh",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7vC4CyUJU_6fV6qJOhIbKfpiJOpGFhV3ixkNBFHGOqLczmxb",
      followers: 500,
      following: 250
    },
    type: "villa"
  }
];

export const data$: Observable<IHotels[]> = of(data);
