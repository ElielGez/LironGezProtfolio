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
const RenderImageAsset = ({ name, folder, ...restProps }) => {
	const { getAsset } = useRenderImageManifest();
	return <img src={getAsset(name, folder)} alt={name} {...restProps} />;
};

export default RenderImageAsset;
