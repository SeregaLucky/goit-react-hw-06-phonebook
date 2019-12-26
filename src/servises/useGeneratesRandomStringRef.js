/* import - node_modules */
import { useRef } from 'react';
import shortid from 'shortid';

/*
 * HOOK
 */
const useGeneratesRandomStringRef = () => useRef(shortid.generate()).current;

export default useGeneratesRandomStringRef;
