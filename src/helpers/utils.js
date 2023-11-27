export const countOfBilletsOnDevices = (desktopCount, tabletCount, mobileCount) => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1024) {
        return desktopCount
    } 
    if (innerWidth > 767) {
        return tabletCount;
    }
    return mobileCount;
}