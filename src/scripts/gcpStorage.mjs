import convert from 'xml-js';

export const STORAGE_GENERAL_URL = 'https://storage.googleapis.com/liron-protfolio-assets';
export const getStorageMetaData = async () => {
	try {
		const [generalMetaData] = await Promise.all([fetch(STORAGE_GENERAL_URL)]);

		const generalXml = await generalMetaData.text();
		const generalContents = convert.xml2js(generalXml, { compact: true }).ListBucketResult.Contents;

		const assetsManifest = {
			general: {},
		};
		generalContents.forEach(content => {
			// eslint-disable-next-line no-unused-vars
			const [_, fileName] = content.Key._text?.split('/') || [];
			if (!fileName) return;
			assetsManifest['general'][fileName] = `${STORAGE_GENERAL_URL}/${content.Key._text}`;
		});
		return assetsManifest;
	} catch (err) {
		console.log('gcpStorage : err', err);
		throw err;
	}
};
