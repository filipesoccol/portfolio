import React from "react";

interface Props {
    name: keyof typeof paths;
    color?: string;
    size?: number;
}

const paths = {
    github: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
    twitter: <path d="M12 0C5.37258 0 1.60115e-07 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 1.60115e-07 12 0ZM4.59375 5.0625L9.03125 5.0625L12.7812 10.0625L17.4375 5.0625L18.75 5.0625L13.375 10.8438L19.4375 18.9375L15 18.9375L10.9375 13.5L5.875 18.9375L4.5625 18.9375L10.3438 12.7188L4.59375 5.0625ZM6.53125 6L15.5 18L17.5312 18L8.5625 6L6.53125 6Z" fill="currentColor" fillRule="nonzero" opacity="1" stroke="none" />,
    linkedin: <path fill="currentColor" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
}

const Icons = ({ name, color, size }: Props) => (
    <svg className={`icon icon-${name}`} fill={color || 'currentColor'} width={size} height={size}>
        {paths[name] || <path d="M0 0h24v24H0z" fill="none" />}
    </svg>
);

export default Icons;