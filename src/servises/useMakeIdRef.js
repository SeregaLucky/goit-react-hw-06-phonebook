/* import - node_modules */
import { useRef } from 'react';
import shortid from 'shortid';

/*
 * HOOK
 */
const useMakeIdRef = () => useRef(shortid.generate()).current;

export default useMakeIdRef;
