import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import styles from './highlighter.module.scss'

interface Props {
    text: string
    type?: 'link' | 'text'
    className?: string
}

const Highlighter = ({ text, type, className }: Props) => {

    const [intersecting, setIntersecting] = useState<boolean>(false)
    const ref: LegacyRef<HTMLHeadingElement> = useRef(null)

    useEffect(() => {
        if (!ref) return
        const o = new IntersectionObserver(intersect, { threshold: 1.0 })
        o.observe(ref.current as Element);
        return () => {
            o.disconnect()
        }
    }, [])

    const intersect = ([entry]: any, observer: IntersectionObserver) => {
        if (!entry.isIntersecting) return
        setIntersecting(true)
        observer.disconnect()
    }

    return (
        <div ref={ref} className={`${intersecting ? styles.mark : ''} ${className || ''}`}>
            {text}
        </div>
    )
}

export default Highlighter