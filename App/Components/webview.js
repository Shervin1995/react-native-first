import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';



//
export default function Wwebview({html}) {
    const { width } = useWindowDimensions();
    return (
      <RenderHtml
        contentWidth={width}
        source={{html}}
      />
    );
  }