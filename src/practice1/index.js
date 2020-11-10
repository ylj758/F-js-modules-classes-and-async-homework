import {ADDRESS, PORT, PATH, REGION} from './constant';
import getURL from "./utils"

const region = REGION;
const url = getURL(ADDRESS, PORT, PATH);

export {region, url}

