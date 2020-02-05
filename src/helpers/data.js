import dataFr from 'src/data/data-fr.json';
import dataEn from 'src/data/data-en.json';

const allData = {
	fr: dataFr,
	en: dataEn
};

export const getData = lang => {
	return allData[lang]
};
