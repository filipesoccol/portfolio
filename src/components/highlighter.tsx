import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import styles from './highlighter.module.scss'

interface Props {
    text: string
}

const Highlighter = ({ text }: Props) => {

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
        <h3 ref={ref} className={intersecting ? styles.mark : ''}>
            {text}
        </h3>
    )
}

export default Highlighter