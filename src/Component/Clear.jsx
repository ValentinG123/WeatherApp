import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web'
import './rain.css'

const Clear = () => {
    const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay:true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        animationData: require('../Animations/22190-sunny-day.json')
      })
    }, [])
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
                   preserveAspectRatio: 'xMidYMid slice'},
                   animationData: require('../Animations/8805-rain-animation-cloud-rain.json')
    };
    return (
        <div className='container' ref={container}></div>
    )
}

export default Clear