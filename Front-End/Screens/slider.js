import React, { useState } from 'react';
import { ScrollView, Image, Dimensions } from 'react-native';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleScroll = (event) => {
        const { x } = event.nativeEvent.contentOffset;
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const selectedIndex = Math.floor(x / viewSize);
        setIndex(selectedIndex);
    };

    const { width } = Dimensions.get('window');

    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16} // Adjust the throttle as needed for performance
        >
            <Image
                source={{ uri: 'https://www.unicef.org/tunisia/sites/unicef.org.tunisia/files/styles/hero_extended/public/socialprotection-3.jpg.webp?itok=vScY-hPj' }}
                style={{ height: 650, width: width }}
                resizeMode="cover"
            />
            <Image
                source={{ uri: 'https://www.unicef.org/tunisia/sites/unicef.org.tunisia/files/styles/media_large_image/public/socialprotection-2.jpg.webp?itok=NL9fML1X' }}
                style={{ height: 650, width: width }}
                resizeMode="cover"
            />
            <Image
                source={{ uri: 'https://www.unicef.org/tunisia/sites/unicef.org.tunisia/files/styles/media_large_image/public/socialprotection-1_0.jpg.webp?itok=3iOgTY2y' }}
                style={{ height: 650, width: width }}
                resizeMode="cover"
            />
            <Image
                source={{ uri: 'https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg' }}
                style={{ height: 680, width: width }}
                resizeMode="cover"
            />
        </ScrollView>
    );
};

export default Slider;
