export const fadeIn = (direction, delay = 0) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'tween',
                duration: 1,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.25],
            },
        },
    };
};