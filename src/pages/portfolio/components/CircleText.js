import React from 'react';
import { CircleContainer } from './Circle.css'

function CircleText({ children, arc, radius, id }) {
    const characters = children.toString().split('');
    const degree = arc / characters.length;

    return (
        <CircleContainer id={id}>
            <h3>
                {characters.map((char, i) => (
                    <span
                        key={`heading-span-${i}`}
                        style={{
                            height: `${radius}px`,
                            transform: `rotate(${degree * i - arc / 2}deg)`,
                            transformOrigin: `0 ${radius}px 0`,
                        }}>
                        {char}
                    </span>
                ))}
            </h3>
        </CircleContainer>
    );
}
export default CircleText