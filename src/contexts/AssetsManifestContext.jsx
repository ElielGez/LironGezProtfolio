import { createContext, useContext, useEffect, useState } from 'react';
import assetsManifestData from '../data/assets-manifest.json';
import { getStorageMetaData } from '../scripts/gcpStorage.mjs';

export const AssetsManifestContext = createContext({});
export const useAssetsManifestContext = () => useContext(AssetsManifestContext);

const AssetsManifestProvider = ({ children }) => {
	const [assetsManifest, setAssetsManifest] = useState(assetsManifestData);
	useEffect(() => {
		getStorageMetaData()
			.then(value => setAssetsManifest(value))
			.catch(err => console.error(err));
	}, []);
	return <AssetsManifestContext.Provider value={assetsManifest}>{children}</AssetsManifestContext.Provider>;
};

export default AssetsManifestProvider;
