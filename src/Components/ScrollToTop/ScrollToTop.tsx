import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopProps {
	children: ReactNode
}

function ScrollToTop({ children }: ScrollToTopProps) {
	const location = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return <>{children} </>
}

export default ScrollToTop
