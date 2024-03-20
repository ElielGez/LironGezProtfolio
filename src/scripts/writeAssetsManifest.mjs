import fs from 'fs';
import { getStorageMetaData } from './gcpStorage.mjs';
const writeAssetsManifest = async () => {
	const assetsJson = await getStorageMetaData();
	fs.writeFileSync('./src/data/assets-manifest.json', JSON.stringify(assetsJson, null, 2));
};

writeAssetsManifest().catch(err => {
	console.error(`[writeAssetsManifest]: ${err}`);
	throw err;
});
