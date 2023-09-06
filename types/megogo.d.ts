export interface Megogo {
    objects: {
        object: MegogoObject[];
    }
}

export interface MegogoCategory {
    category: MegogoDetailsObject[]
}

export type MegogoDetailsObject =  {
    id: string;
    $t: string;
}

export interface MegogoActors {
    actor: MegogoDetailsObject[];
}

export type MegogoQuality = {
    value: string;
    hdr?: "true" | "false";
}

export interface MegogoQualities {
    quality: MegogoQuality[];
}

export interface MegogoInfo {
    year: string;
    country: string;
    budget: string;
    premiere: string;
    dvd: string;
    duration: string;
}

export interface MegogoIframe {
    width: string;
    height: string;
    src: string;
    frameborder: string;
    scrolling: string;
    allowfullscreen: "true" | "false";
    allow: string;
};

export interface MegogoPrice {
    price: string;
    service_name: string;
    tariff_id: string;
    service_id: string;
    currency: string;
    watch_period: string;
};

export type MegogoVod = "svod" | "advod" | "announce" | "fvod" | "tvod" | "dto";

export interface MegogoDistribution {
    vod_type: MegogoVod;
    price: MegogoPrice[];
};

export interface MegogoSeria {
    id: string;
    index: string;
    title: string;
    poster: string;
    duration_sec: string;
    iframe: MegogoIframe;
    qualities: {
        quality: MegogoQuality | MegogoQuality[];
    }
  }

export interface MegogoSeason {
    id: "10284185",
    title: "Сезон 1",
    seria: MegogoSeria[];
  }

export interface MegogoObject {
    id: string;
    title: string;
    title_en: string;
    categories: string[] | MegogoCategory[];
    genres: string;
    serial: "true" | "false";
    page: string;
    type: "FILM" | "FILMSERIAL" | "SEASON" | "SERIAL" | "MULTFILM" | "SERIA" | "SHOWFILM" | "SHOW" | "MULTSERIAL" | "EVENT" | "ANNOUNCE" | "NEWS" | "AD" | "FILM3D" | "MUSIC" | "ADT" | "SPORT" | "TV";
    kinopoisk_id: string;
    vod: MegogoVod;
    qualities: MegogoQualities;
    info: MegogoInfo;
    like: string;
    dislike: string;
    comments_num: string;
    actors: MegogoActors;
    directors: {
        director: string;
    };
    finger_language: string;
    audio_description: string;
    ratings: {
        kinopoisk: string;
        kinopoisk_id: string;
        imdb: string;
        imdb_id: string;
        megogo: string;
    };
    dues: {
      [key: string]: string;
    };
    story: string;
    poster: {
        url: string;
        thumbnail: string;
        big: string;
    };
    trailer: {
      id: string;
      title: string;
      duration_sec: string;
      age_limit: string;
      priority: string;
      iframe: MegogoIframe
    };
    embed_allowed: string;
    iframe: MegogoIframe;
    ios_allowed: "1" | "0";
    smart_tv_allowed: "1" | "0";
    web_allowed: "1" | "0";
    closing_date: string;
    contract_id: string;
    age_limit: string;
    protection: "0" | "1";
    duration_sec: string;
    distributions: {
        distribution: MegogoDistribution[];
    },
    "gallery-image": {
        url: string;
    }[];
    audio_list: {
        audio_lang: {
            index: string;
            $t: string;
        },
    },
    subtitles: {
        subtitle_lang: string[]
    }
    season?: MegogoSeason | MegogoSeason[];
  };

