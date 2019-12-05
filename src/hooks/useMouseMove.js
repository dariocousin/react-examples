import { useEffect, useState } from 'react'

export const useScroll = (initialValue) => {
    const [scroll, setScroll] = useState(initialValue)

    const handleScroll = (e) => {
        const height = e.pageX
        setScroll(height)
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleScroll, true)
        return () => {
            document.removeEventListener('mousemove', handleScroll)
        }
    }, [])
    return scroll
}
