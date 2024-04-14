import { useEffect, useState } from 'react';
import { useAssetsManifestContext } from '../contexts/AssetsManifestContext';

export const useRenderImageManifest = () => {
	const assetsManifest = useAssetsManifestContext();
	const getAsset = (name, folder = 'general') => {
		return assetsManifest[folder][name];
	};
	return {
		getAsset,
	};
};
const RenderImageAsset = ({ name, folder, disableBlurAnim, ...restProps }) => {
	const { getAsset } = useRenderImageManifest();
	const [loading, setLoading] = useState(false);
	const [url, setUrl] = useState();
	useEffect(() => {
		const lowAsset = getAsset(`low/${name}`, folder);
		const asset = getAsset(`${name}`, folder);
		if (disableBlurAnim) {
			setUrl(asset);
			return;
		}
		if (lowAsset) {
			setLoading(true);
			setUrl(lowAsset);
			fetch(asset)
				.then(() => setUrl(asset))
				.finally(() => setLoading(false));
		} else setUrl(asset);
	}, []);
	return <img src={url} alt={name} {...restProps} style={{ ...restProps.style, filter: loading ? 'blur(10px)' : 'none' }} />;
};

export default RenderImageAsset;
