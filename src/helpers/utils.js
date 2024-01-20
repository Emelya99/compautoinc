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

// For Pagination Component
export const range = (start, end) => {
    const result = [];
  
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  
    return result;
};