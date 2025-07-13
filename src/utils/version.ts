// Read version from package.json
import { version } from '../../package.json';

export const getVersion = () => `v${version}`;
