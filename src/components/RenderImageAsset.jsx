import { useAssetsManifestContext } from '../contexts/AssetsManifestContext';
const RenderImageAsset = ({ name, folder = 'general', ...restProps }) => {
	const assetsManifest = useAssetsManifestContext();
	return <img src={assetsManifest[folder][name]} alt={name} {...restProps} />;
};

export default RenderImageAsset;
