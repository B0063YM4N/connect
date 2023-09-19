const dictionaries = {
    en:() =>import("./dictionaries/en.json").then(r => r.default),
    geo:() =>import("./dictionaries/geo.json").then(r=> r.default),
    rus:() =>import("./dictionaries/rus.json").then(r => r.default),
}

export const getDictionary = (lang) => {
    return dictionaries[lang]();
}