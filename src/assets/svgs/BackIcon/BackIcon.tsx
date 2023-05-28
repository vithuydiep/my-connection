import * as React from 'react'

function BackIcon({ color = '#000' }: { color?: string }) {
	return (
		<svg width={8} height={14} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M.19 6.25 6.516.48a.682.682 0 0 1 .913 0l.382.353a.567.567 0 0 1 0 .846L2.317 6.672l5.488 4.993a.567.567 0 0 1 0 .846l-.381.353a.682.682 0 0 1-.913 0L.185 7.094A.57.57 0 0 1 .19 6.25Z'
				fill={color}
			/>
		</svg>
	)
}

export default BackIcon
