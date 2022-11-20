import createCache from '@emotion/cache';

/*
参考文献
・https://dev.to/hajhosein/nextjs-mui-v5-tutorial-2k35
MUI 公式
・https://github.com/mui/material-ui/blob/master/examples/nextjs/src/createEmotionCache.js
*/

const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default createEmotionCache;