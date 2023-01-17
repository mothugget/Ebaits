import countryCodes from 'country-codes-list'

const countriesUnordered = countryCodes.customList('countryNameEn', '{countryCode}')



// got help from https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key


const countries = Object.keys(countriesUnordered).sort().reduce(
    (obj, key) => {
        obj[key] = countriesUnordered[key];
        return obj;
    },
    {}
);

countries["The Streets"] = 'FR'

export default  countries