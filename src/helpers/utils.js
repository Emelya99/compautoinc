const innerWidth = window.innerWidth;

export const countOfBilletsOnDevices = (desktopCount, tabletCount, mobileCount) => {
    if (innerWidth > 1024) {
        return desktopCount
    } 
    if (innerWidth > 767) {
        return tabletCount;
    }
    return mobileCount;
}

export const isDesktop = innerWidth > 1024;