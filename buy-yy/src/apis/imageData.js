// imageData.js
const importImages = import.meta.glob('@/assets/images/*', { eager: true });

// 获取所有匹配的文件路径数组
const allImageKeys = Object.keys(importImages);
// 只取前五个文件路径
const limitedImageKeys = allImageKeys.slice(0, 5);

const imageArray = limitedImageKeys.map((key) => {
    const value = importImages[key];
    return {
        imgPath: value.default,
        imgName: key.split('/').pop()
    };
});

export const sharedImageData = {
    imageArray
};