import clsx from 'clsx'
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import useSpaceStyle from './SpaceStyle'

const defaultProps = {
	className: '',
}
type SpaceProp = { size: string; children: ReactNode } & typeof defaultProps

function Space({ size, className = '', children }: SpaceProp) {
	const { gapBetween } = useSpaceStyle({ size })
	return <div className={clsx('dFlex', gapBetween, className)}>{children}</div>
}

Space.defaultProps = defaultProps
Space.propTypes = {
	className: PropTypes.string,
}
export default Space
