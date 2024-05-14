import { useContext } from 'react';
import { MediaContext } from '../context/media-context.jsx';

export const useMediaContext = () => {
    return useContext(MediaContext);
}